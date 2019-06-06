import React from 'react';
import {
  reduxForm,
  InjectedFormProps,
  DecoratedComponentClass,
  FormErrors,
} from 'redux-form';
import { RouteComponentProps } from 'react-router-dom';

// common
import * as helper from 'common/helpers';
import * as dictionaries from 'common/dictionaries';
import routes, { Forms, Params as RouteParams } from 'common/routes';

// components
import Tabs from 'components/Tabs';

//forms
import {
  AccountForm,
  validate as accountFormValidate,
  Data as AccountFormData,
  OwnProps as AccountFormProps,
} from '../AccountForm';

import {
  ProfileForm,
  validate as profileFormValidate,
  Data as ProfileFormData,
  OwnProps as ProfileFormProps,
} from '../ProfileForm';

import {
  ContactsForm,
  validate as contactsFormValidate,
  Data as ContactsFormData,
  OwnProps as ContactsFormProps,
} from '../ContactsForm';

import {
  CapabilitiesForm,
  validate as capabilitiesFormValidate,
  Data as CapabilitiesFormData,
  OwnProps as CapabilitiesFormProps,
} from '../CapabilitiesForm';

type Props = {} & RouteComponentProps;

interface State {
  activeForm: Forms;
  locks: {
    [Forms.account]: boolean;
    [Forms.profile]: boolean;
    [Forms.contacts]: boolean;
    [Forms.capabilities]: boolean;
  };
}

class WizardForm extends React.Component<Props, State> {
  protected static WIZARD_FORM_NAME: string = 'addEditUser';

  public constructor(props: Props) {
    super(props);
    this.state = {
      activeForm: Forms.account,
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
    this.handleUnlock = this.handleUnlock.bind(this);
  }

  public componentDidMount(): void {
    const { form } = this.props.match.params as RouteParams;
    const { activeForm } = this.state;

    if (activeForm !== form) {
      this.handleChangeForm(form);
    }
  }

  private isCurrentForm(form: Forms): boolean {
    const { activeForm } = this.state;

    return activeForm === form;
  }

  private formFactory<D = {}, P = {}>(
    validate: (
      values: D,
      props: P & InjectedFormProps<D, P, string>,
    ) => FormErrors<D, string>,
    form: React.ComponentType<P & InjectedFormProps<D, P, string>>,
  ): DecoratedComponentClass<D, P, string> {
    return reduxForm<D, P>({
      form: WizardForm.WIZARD_FORM_NAME,
      destroyOnUnmount: false,
      forceUnregisterOnUnmount: true,
      validate,
    })(form);
  }

  private handleUnlock(form: Forms, value: boolean): void {
    const state = this.state;
    this.setState({
      ...state,
      locks: {
        ...state.locks,
        [form]: value,
      },
    });
  }

  private handleChangeForm(form: Forms, lock: boolean = true): void {
    const { history } = this.props;
    const state = this.state;

    if (state.locks[form] && lock) {
      return;
    }

    this.setState({
      ...state,
      activeForm: Forms[form as keyof typeof Forms] ? form : Forms.account,
      locks: {
        ...state.locks,
        [form]: false,
      },
    });

    history.push(helper.stringReplacer(routes.createUser, { form }));
  }

  private renderForm(): React.ReactElement {
    const { activeForm: form } = this.state;
    switch (form) {
      case Forms.account: {
        const WizardAccountForm = this.formFactory<
          AccountFormData,
          AccountFormProps
        >(accountFormValidate, AccountForm);
        return (
          <WizardAccountForm
            nextForm={this.handleChangeForm.bind(this, Forms.profile)}
          />
        );
      }
      case Forms.profile: {
        const WizardProfileForm = this.formFactory<
          ProfileFormData,
          ProfileFormProps
        >(profileFormValidate, ProfileForm);
        return (
          <WizardProfileForm
            nextForm={this.handleChangeForm.bind(this, Forms.contacts)}
            previousForm={() => this.handleChangeForm(Forms.account)}
          />
        );
      }
      case Forms.contacts: {
        const { languages } = dictionaries;
        const WizardContactsForm = this.formFactory<
          ContactsFormData,
          ContactsFormProps
        >(contactsFormValidate, ContactsForm);
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
          CapabilitiesFormData,
          CapabilitiesFormProps
        >(capabilitiesFormValidate, CapabilitiesForm);
        return (
          <WizardCapabilitiesForm
            nextForm={this.handleChangeForm.bind(this, Forms.capabilities)}
            previousForm={() => this.handleChangeForm(Forms.contacts)}
            hobbies={hobbies}
            skils={skils}
          />
        );
      }
      // case Forms.capabilities:
      //   // return this.renderFourthStep();
    }

    return <div />;
  }

  public render(): React.ReactElement {
    return (
      <div>
        <Tabs.Wrapper>
          <Tabs.Tab
            isActive={this.isCurrentForm(Forms.account)}
            payload="1. Account"
            handler={() => this.handleChangeForm(Forms.account)}
          />
          <Tabs.Tab
            isActive={this.isCurrentForm(Forms.profile)}
            payload="2. Profile"
            handler={() => this.handleChangeForm(Forms.profile)}
          />
          <Tabs.Tab
            isActive={this.isCurrentForm(Forms.contacts)}
            payload="3. Contancts"
            handler={() => this.handleChangeForm(Forms.contacts)}
          />
          <Tabs.Tab
            isActive={this.isCurrentForm(Forms.capabilities)}
            payload="4. Capabilities"
            handler={() => this.handleChangeForm(Forms.capabilities)}
          />
        </Tabs.Wrapper>
        {this.renderForm()}
      </div>
    );
  }
}

export default WizardForm;
