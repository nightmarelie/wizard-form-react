import React from 'react';
import { reduxForm, InjectedFormProps, ConfigProps } from 'redux-form';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

// common
import { Forms, CreateUserParams as RouteParams } from 'common/routes';
import constants from 'common/constants/index.json';
import * as helper from 'common/helpers';

// components
import Tabs from 'components/Tabs';
import Bar from 'components/Bar/Bar';
import ActionIcon from 'components/ActionIcon/ActionIcon';
import { Container } from 'components/Wrapper';
import { ButtonConfig } from 'components/Form/Button';
import Spinner from 'components/Spinner/Spinner';

// domain
import * as User from 'domain/user';
import { ApplicationState } from 'domain/store';
import * as Form from 'domain/form';

// conlfig
import * as conf from './wizardConfig';

interface Config {
  forms: FormConfig[];
  tabs: TabConfig[];
  locks: LockConfig;
}

type FormConfig = {
  i: number;
  navigation: conf.Navigation;
  buttons: ButtonConfig[];
  element: React.ReactElement;
} & conf.Form;

interface TabConfig {
  i: number;
  key: Forms;
  title: string;
  handler: Function;
}

type LockConfig = { [key in Forms]: boolean };

type Props = {
  isCreateMode: boolean;
  data: Partial<User.Model>;
  routeHandler: (form: Forms) => string;
  isLoading: boolean;
  errors?: boolean;
  isBarVisible: boolean;
  mediateHandleData: (data: Partial<User.Model>) => void;
  finalHandleData: (data: Partial<User.Model>) => void;
  clearData?: () => boolean;
  initData: (data: Partial<User.Model>) => void;
  puller: (state: ApplicationState) => Partial<User.Model>;
  resetForm?: () => void;
} & RouteComponentProps<RouteParams>;

interface State {
  activeForm: Forms;
  isBarVisible: boolean;
  locks: LockConfig;
}
class WizardForm extends React.Component<Props, State> {
  private config: Config;

  public static defaultProps = {
    isBarVisible: false,
    isCreateMode: true,
  };

  public constructor(props: Props) {
    super(props);

    this.config = this.getConfig(props.isCreateMode);
    this.state = {
      activeForm: this.config.forms[0].key,
      isBarVisible: props.isBarVisible,
      locks: this.config.locks,
    };
  }

  public componentDidMount(): void {
    const {
      match: {
        params: { form },
      },
      data,
      isLoading,
    } = this.props;
    if (data && data.locks && !isLoading) {
      this.setState({
        locks: data.locks!,
        activeForm: form,
      });
    }
  }

  public componentDidUpdate(prevProps: Props): void {
    const { isBarVisible } = this.props;
    if (isBarVisible !== prevProps.isBarVisible) {
      this.setState({ isBarVisible });
    }
  }

  private getConfig(isCreateMode: boolean): Config {
    const { order, forms } = conf;
    const result = forms
      .sort(
        (a: conf.Form, b: conf.Form) =>
          order.indexOf(a.key) - order.indexOf(b.key),
      )
      .map((f, i, forms) => {
        const prevIndex = i - 1 >= 0 ? i - 1 : 0;
        const lastIndex = forms.length - 1;
        const nexIndex = i + 1 <= lastIndex ? i + 1 : lastIndex;
        const isFirstStep = prevIndex >= 0 && i > 0 && isCreateMode;
        const isLastStep = lastIndex === i;
        const nextForm = isLastStep
          ? this.handleSubmitForm.bind(this, forms[lastIndex].key)
          : this.handleNextForm.bind(this, forms[nexIndex].key);
        const prevForm = isFirstStep
          ? () => this.handleFormNav(forms[prevIndex].key)
          : undefined;

        const form = {
          ...f,
          i,
          navigation: {
            nextForm,
            prevForm,
          },
          buttons: this.createButtons(
            isCreateMode,
            isFirstStep,
            isLastStep,
            prevForm,
          ),
        };
        const tab = {
          i,
          key: f.key,
          title: `${i + 1}. ${helper.capitalize(f.key)}`,
          handler: this.handleFormNav.bind(this, f.key),
        };
        const lock: Partial<LockConfig> = {
          [f.key]: i !== 0,
        };
        return {
          form,
          tab,
          lock,
        };
      })
      // prerender
      .map(n => {
        const form = n.form;
        const Wizard = this.formFactory(form.component, form.config);
        const element = <Wizard key={form.i} {...form.navigation} {...form} />;
        return {
          ...n,
          form: {
            ...n.form,
            element,
          },
        };
      })
      .reduce(
        (
          p: Config,
          n: { form: FormConfig; tab: TabConfig; lock: Partial<LockConfig> },
        ) => ({
          forms: [...p.forms, n.form],
          tabs: [...p.tabs, n.tab],
          locks: { ...p.locks, ...n.lock },
        }),
        {
          forms: [],
          tabs: [],
          locks: ({} as any) as LockConfig,
        },
      );

    return result;
  }

  private createButtons(
    isCreateMode: boolean,
    isFirstStep: boolean,
    isLastStep: boolean,
    prevForm?: () => void,
  ): ButtonConfig[] {
    const backButton = {
      title: constants.buttons.back,
      handler: prevForm,
      className: `left`,
      type: 'button',
      handleDisabled: (isDisabled: boolean) => isDisabled,
    };
    const forwardButton = {
      title: isCreateMode
        ? isLastStep
          ? constants.buttons.finish
          : constants.buttons.forward
        : constants.buttons.save,
      className: `right ${isCreateMode && isLastStep ? 'finish' : ''}`,
      type: 'submit',
      handleDisabled: (isDisabled: boolean) => isDisabled,
    };

    return [isFirstStep ? backButton : undefined, forwardButton].filter(
      b => !!b,
    ) as ButtonConfig[];
  }

  private formFactory<D, P>(
    form: React.ComponentType<P & InjectedFormProps<D, P, string>>,
    config: Partial<ConfigProps<D, P, string>>,
  ): React.ComponentType<P> {
    return this.connectWithInitializer<D, P>(
      reduxForm<D, P>({
        ...config,
        form: Form.Model.FORM_NAME,
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
        enableReinitialize: true,
        keepDirtyOnReinitialize: true,
      })(form),
    );
  }

  private connectWithInitializer<D, P>(
    form: React.ComponentType<any>,
  ): React.ComponentType<P> {
    const { puller, initData } = this.props;

    return connect(
      (state: ApplicationState) => ({
        initialValues: puller(state),
      }),
      { load: initData },
    )(form);
  }

  private handleClose = (): void => {
    this.props.clearData!();

    this.setState({
      isBarVisible: false,
    });
  };

  private handleSubmitForm = (
    form: Forms,
    data: Partial<User.Model>,
    lock: boolean = true,
  ): void => {
    const { finalHandleData } = this.props;
    const locks = {
      ...this.state.locks,
      [form]: lock,
    };

    finalHandleData({
      ...data,
      locks,
    });
  };

  private handleFormNav = (form: Forms): void => {
    const { history, routeHandler } = this.props;

    if (this.state.locks[form]) {
      return;
    }

    this.setState({
      activeForm: Forms[form],
    });

    history.push(routeHandler(form));
  };

  private handleNextForm = (form: Forms, data: Partial<User.Model>): void => {
    const { mediateHandleData, isCreateMode } = this.props;
    const locks = {
      ...this.state.locks,
      [form]: false,
    };

    mediateHandleData({
      ...data,
      locks,
    });

    this.setState(
      {
        locks,
      },
      isCreateMode ? () => this.handleFormNav(form) : undefined,
    );
  };

  private handleInitializeForm = (data: Partial<User.Model>): void => {
    this.props.initData(data);

    this.setState(
      {
        locks: data.locks!,
        isBarVisible: false,
      },
      () => this.handleFormNav(this.calculateForm(data.locks!)),
    );
  };

  private calculateForm(locks: User.Locks): Forms {
    return this.config.forms
      .map(f => f.key)
      .filter(k => !locks[k])
      .reverse()
      .find(f => !!f)!;
  }

  public render(): React.ReactElement {
    const { data, isLoading } = this.props;
    const { isBarVisible, activeForm, locks } = this.state;
    const { tabs, forms } = this.config;
    const currentForm = forms
      .filter(f => f.key === activeForm)
      .map(f => f.element)
      .find(f => !!f);

    return (
      <Container>
        <Tabs.Wrapper>
          {tabs.map(t => (
            <Tabs.Tab
              key={t.i}
              isActive={activeForm === t.key}
              isLock={locks[t.key]}
              payload={t.title}
              handler={() => t.handler()}
            />
          ))}
        </Tabs.Wrapper>
        {isBarVisible && typeof data === 'object' && (
          <Bar closeHandler={this.handleClose}>
            {constants.labels.unsavedUserData}
            <ActionIcon
              className="none-icon"
              handler={() => this.handleInitializeForm(data)}
            >
              {constants.labels.continue}
            </ActionIcon>
          </Bar>
        )}
        {currentForm}
        <Spinner isLoading={isLoading} />
      </Container>
    );
  }
}

export default WizardForm;
