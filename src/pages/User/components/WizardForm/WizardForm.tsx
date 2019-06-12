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

// domain
import * as User from 'domain/user';
import { ApplicationState } from 'domain/store';
import * as Form from 'domain/form';

// conlfig
import * as conf from './wizardConfig';

interface Config {
  forms: ConfigForm[];
  tabs: ConfigTab[];
  locks: ConfigLock;
}

type ConfigForm = {
  i: number;
  navigation: conf.Navigation;
} & conf.Form;

interface ConfigTab {
  i: number;
  key: Forms;
  title: string;
  handler: Function;
}

type ConfigLock = { [key in Forms]: boolean };

type Props = {
  data: Partial<User.Model>;
  routeHandler: (form: Forms) => string;
  loading: boolean;
  errors?: boolean;
  showBar: boolean;
  mediateHandleData: (data: Partial<User.Model>) => void;
  finalHandleData: (data: Partial<User.Model>) => void;
  clearData?: () => boolean;
  initData: (data: Partial<User.Model>) => void;
  puller: (state: ApplicationState) => Partial<User.Model>;
  resetForm?: () => void;
} & RouteComponentProps<RouteParams>;

interface State {
  activeForm: Forms;
  hideBar: boolean;
  locks: ConfigLock;
}
class WizardForm extends React.Component<Props, State> {
  private config: Config;

  public constructor(props: Props) {
    super(props);

    this.config = this.getConfig();
    this.state = {
      activeForm: this.config.forms[0].key,
      hideBar: props.showBar,
      locks: this.config.locks,
    };
  }

  private getConfig(): Config {
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
        const form = {
          ...f,
          i,
          navigation: {
            nextForm:
              lastIndex === i
                ? this.handleSubmitForm.bind(this, forms[lastIndex].key)
                : this.handleNextForm.bind(this, forms[nexIndex].key),
            prevForm:
              prevIndex >= 0 && i > 0
                ? () => this.handleFormNav(forms[prevIndex].key)
                : undefined,
          },
          // TODO: add buttons
        };
        const tab = {
          i,
          key: f.key,
          title: `${i + 1}. ${helper.capitalize(f.key)}`,
          handler: this.handleFormNav.bind(this, f.key),
        };
        const lock: Partial<ConfigLock> = {
          [f.key]: i !== 0,
        };
        return {
          form,
          tab,
          lock,
        };
      })
      .reduce(
        (
          p: Config,
          n: { form: ConfigForm; tab: ConfigTab; lock: Partial<ConfigLock> },
        ) => ({
          forms: [...p.forms, n.form],
          tabs: [...p.tabs, n.tab],
          locks: { ...p.locks, ...n.lock },
        }),
        {
          forms: [],
          tabs: [],
          locks: ({} as any) as ConfigLock,
        },
      );

    return result;
  }

  public componentDidMount(): void {
    const {
      match: {
        params: { form },
      },
      data,
      loading,
    } = this.props;
    if (data && data.locks && !loading) {
      this.setState({
        locks: data.locks!,
        activeForm: form,
      });
    }
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
      hideBar: true,
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
    const locks = {
      ...this.state.locks,
      [form]: false,
    };

    this.props.mediateHandleData({
      ...data,
      locks,
    });

    this.setState(
      {
        locks,
      },
      () => this.handleFormNav(form),
    );
  };

  private handleInitializeForm = (data: Partial<User.Model>): void => {
    this.props.initData(data);

    this.setState({
      locks: data.locks!,
      hideBar: true,
    });
  };

  public render(): React.ReactElement {
    const { data, showBar } = this.props;
    const { hideBar, activeForm, locks } = this.state;
    const { tabs, forms } = this.config;

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
        {showBar && typeof data === 'object' && !hideBar && (
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
        {forms
          .filter(f => f.key === activeForm)
          .map(f => {
            const Wizard = this.formFactory(f.component, f.config);
            return <Wizard key={f.i} {...f.navigation} />;
          })
          .find(f => !!f)}
      </Container>
    );
  }
}

export default WizardForm;
