import React from 'react';
import { reduxForm, InjectedFormProps, FormErrors } from 'redux-form';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

// common
import * as helper from 'common/helpers';
import * as dictionaries from 'common/dictionaries';
import routes, { Forms, Params as RouteParams } from 'common/routes';
import constants from 'common/constants/index.json';

// components
import Tabs from 'components/Tabs';
import Bar from 'components/Bar/Bar';
import ActionIcon from 'components/ActionIcon/ActionIcon';
import { Container } from 'components/Wrapper';

// domain
import * as User from 'domain/user';
import { ApplicationState } from 'domain/store';

//forms
import * as account from '../AccountForm';
import * as profile from '../ProfileForm';
import * as contacts from '../ContactsForm';
import * as capabilities from '../CapabilitiesForm';

type Props = {
  data: Partial<User.Model>;
  loading: boolean;
  errors?: boolean;
  showBar: boolean;
  putData: (data: Partial<User.Model>) => boolean;
  clearData: () => boolean;
  initData: (data: Partial<User.Model>) => void;
  puller: (state: ApplicationState) => Partial<User.Model>;
} & RouteComponentProps;

interface State {
  activeForm: Forms;
  hideBar: boolean;
  locks: {
    [Forms.account]: boolean;
    [Forms.profile]: boolean;
    [Forms.contacts]: boolean;
    [Forms.capabilities]: boolean;
  };
}

class WizardForm extends React.Component<Props, State> {
  public static WIZARD_FORM_NAME: string = 'addEditUser';

  public constructor(props: Props) {
    super(props);

    this.state = {
      activeForm: Forms.account,
      hideBar: props.showBar,
      locks: {
        [Forms.account]: false,
        [Forms.profile]: true,
        [Forms.contacts]: true,
        [Forms.capabilities]: true,
      },
    };

    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.isCurrentForm = this.isCurrentForm.bind(this);
    this.isCurrentFormLock = this.isCurrentFormLock.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInitializeForm = this.handleInitializeForm.bind(this);
  }

  public componentDidMount(): void {
    const { form } = this.props.match.params as RouteParams;
    const { activeForm } = this.state;

    if (activeForm !== form) {
      this.handleChangeForm(form);
    }
  }

  private isCurrentForm(form: Forms): boolean {
    return this.state.activeForm === form;
  }

  private isCurrentFormLock(form: Forms): boolean {
    return this.state.locks[form];
  }

  private formFactory<D, P>(
    validate: (values: D, props: P) => FormErrors<D, string>,
    form: React.ComponentType<P & InjectedFormProps<D, P, string>>,
    initialValues?: Partial<D>,
  ): React.ComponentType<P> {
    return this.connectWithInitializer<D, P>(
      reduxForm<D, P>({
        form: WizardForm.WIZARD_FORM_NAME,
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true,
        enableReinitialize: true,
        keepDirtyOnReinitialize: true,
        validate,
        initialValues,
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

  private async handleClose(): Promise<void> {
    const state = this.state;
    const { clearData } = this.props;

    const result = await clearData();

    this.setState({
      ...state,
      hideBar: result,
    });
  }

  private handleSubmit(
    form: Forms,
    data: Partial<User.Model>,
    unlock: boolean = true,
  ): void {
    console.log(data);
  }

  private handleChangeForm(
    form: Forms,
    data?: Partial<User.Model>,
    lock: boolean = true,
  ): void {
    const { history, putData } = this.props;
    const state = this.state;
    const locks = {
      ...state.locks,
      [form]: false,
    };

    if (state.locks[form] && lock) {
      return;
    }

    if (data) {
      putData({
        ...data,
        locks,
      });
    }

    this.setState({
      ...state,
      activeForm: Forms[form as keyof typeof Forms] ? form : Forms.account,
      locks,
    });

    history.push(helper.stringReplacer(routes.createUser, { form }));
  }

  private async handleInitializeForm(data: Partial<User.Model>): Promise<void> {
    const { initData } = this.props;

    await initData(data);

    this.setState({
      locks: data.locks!,
      hideBar: true,
    });
  }

  private renderForm(): React.ReactElement {
    const { activeForm: form } = this.state;

    switch (form) {
      case Forms.account: {
        const WizardAccountForm = this.formFactory<
          account.Data,
          account.OwnProps
        >(account.validate, account.AccountForm);
        return (
          <WizardAccountForm
            nextForm={this.handleChangeForm.bind(this, Forms.profile)}
          />
        );
      }
      case Forms.profile: {
        const { genders } = dictionaries;
        const WizardProfileForm = this.formFactory<
          profile.Data,
          profile.OwnProps
        >(profile.validate, profile.ProfileForm, { gender: 'male' });
        return (
          <WizardProfileForm
            nextForm={this.handleChangeForm.bind(this, Forms.contacts)}
            previousForm={() => this.handleChangeForm(Forms.account)}
            genders={genders}
          />
        );
      }
      case Forms.contacts: {
        const { languages } = dictionaries;
        const WizardContactsForm = this.formFactory<
          contacts.Data,
          contacts.OwnProps
        >(contacts.validate, contacts.ContactsForm);
        return (
          <WizardContactsForm
            nextForm={this.handleChangeForm.bind(this, Forms.capabilities)}
            previousForm={() => this.handleChangeForm(Forms.profile)}
            languages={languages}
          />
        );
      }
      case Forms.capabilities: {
        const { hobbies, skils } = dictionaries;
        const WizardCapabilitiesForm = this.formFactory<
          capabilities.Data,
          capabilities.OwnProps
        >(capabilities.validate, capabilities.CapabilitiesForm);
        return (
          <WizardCapabilitiesForm
            nextForm={this.handleSubmit.bind(this, Forms.capabilities)}
            previousForm={() => this.handleChangeForm(Forms.contacts)}
            hobbies={hobbies}
            skils={skils}
          />
        );
      }
    }
  }

  public render(): React.ReactElement {
    const { data, showBar } = this.props;
    const { hideBar } = this.state;

    return (
      <Container>
        <Tabs.Wrapper>
          <Tabs.Tab
            isActive={this.isCurrentForm(Forms.account)}
            isLock={this.isCurrentFormLock(Forms.account)}
            payload={constants.labels.accountTab}
            handler={() => this.handleChangeForm(Forms.account)}
          />
          <Tabs.Tab
            isActive={this.isCurrentForm(Forms.profile)}
            isLock={this.isCurrentFormLock(Forms.profile)}
            payload={constants.labels.profileTab}
            handler={() => this.handleChangeForm(Forms.profile)}
          />
          <Tabs.Tab
            isActive={this.isCurrentForm(Forms.contacts)}
            isLock={this.isCurrentFormLock(Forms.contacts)}
            payload={constants.labels.contactsTab}
            handler={() => this.handleChangeForm(Forms.contacts)}
          />
          <Tabs.Tab
            isActive={this.isCurrentForm(Forms.capabilities)}
            isLock={this.isCurrentFormLock(Forms.capabilities)}
            payload={constants.labels.capabilitiesTab}
            handler={() => this.handleChangeForm(Forms.capabilities)}
          />
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

        {this.renderForm()}
      </Container>
    );
  }
}

export default WizardForm;
