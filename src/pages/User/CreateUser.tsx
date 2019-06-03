/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RouteComponentProps } from 'react-router-dom';

import { Container, Column } from 'components/Wrapper';
import { Title } from 'components/Title/Title';
import Tabs from 'components/Tabs';
import * as Form from 'components/Form';
import Button from 'components/Button';
import Action from 'components/Action/Action';

import routes, { Steps } from 'common/routes';
import * as helper from 'common/helpers';

const AddUserForm = reduxForm({
  form: 'addUser',
})(Form.Wrapper);

interface MatchParams {
  step: Steps;
}

type Props = {} & RouteComponentProps<MatchParams>;

interface State {
  activeStep: string;
  step1: {
    passwordType: 'password' | 'input';
    repeatPasswordType: 'password' | 'input';
  };
  step2: {};
  step3: {};
  step4: {};
}

class CreateUser extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      activeStep: 'first',
      step1: {
        passwordType: 'password',
        repeatPasswordType: 'password',
      },
      step2: {},
      step3: {},
      step4: {},
    };
    this.handleShowHidePass = this.handleShowHidePass.bind(this);
    this.getPassClassName = this.getPassClassName.bind(this);
    this.handleChangeStep = this.handleChangeStep.bind(this);

    this.renderFirstStep = this.renderFirstStep.bind(this);
    this.renderSecondStep = this.renderSecondStep.bind(this);
    this.renderThirdStep = this.renderThirdStep.bind(this);
    this.renderFourthStep = this.renderFourthStep.bind(this);
  }

  public componentDidMount(): void {
    const { step } = this.props.match.params;
    const { activeStep } = this.state;

    if (activeStep !== step) {
      this.handleChangeStep(step);
    }
  }

  private handleChangeStep(step: Steps): void {
    const { history } = this.props;
    const state = this.state;

    this.setState({
      ...state,
      activeStep: Steps[step] ? step : Steps.first,
    });

    history.push(helper.stringReplacer(routes.createUser, { step }));
  }

  private getPassClassName(
    field: 'passwordType' | 'repeatPasswordType',
  ): string {
    const { step1 } = this.state;
    return step1[field] === 'input' ? 'action-eye-slash' : 'action-eye';
  }

  private handleShowHidePass(
    field: 'passwordType' | 'repeatPasswordType',
  ): void {
    const { step1 } = this.state;
    this.setState({
      step1: {
        ...step1,
        [field]: step1[field] === 'input' ? 'password' : 'input',
      },
    });
  }

  private renderStep(): React.ReactElement {
    const { step } = this.props.match.params;

    switch (step) {
      case 'first':
        return this.renderFirstStep();
      case 'second':
        return this.renderSecondStep();
      case 'third':
        return this.renderThirdStep();
      case 'fourth':
        return this.renderFourthStep();
      default:
        return this.renderFirstStep();
    }
  }

  private renderFirstStep(): React.ReactElement {
    const { step1 } = this.state;
    return (
      <AddUserForm>
        <Column addClassName="half">
          <Form.Download />
        </Column>
        <Column addClassName="half">
          <label htmlFor="username">User name</label>
          <Field id="username" name="username" component="input" type="text" />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            component="input"
            type={step1.passwordType}
          />
          <Action
            addClassName={`icon ${this.getPassClassName('passwordType')}`}
            handler={() => this.handleShowHidePass('passwordType')}
          />

          <label htmlFor="repeat-password">Repeat Password</label>
          <Field
            id="repeat-password"
            name="repeat-password"
            component="input"
            type={step1.repeatPasswordType}
          />
          <Action
            addClassName={`icon ${this.getPassClassName('repeatPasswordType')}`}
            handler={() => this.handleShowHidePass('repeatPasswordType')}
          />

          <Button
            addClassName="button right"
            link="#"
            title="Forward"
            handler={() => this.handleChangeStep(Steps.second)}
          />
        </Column>
      </AddUserForm>
    );
  }

  private renderSecondStep(): React.ReactElement {
    const { step2 } = this.state;
    return (
      <AddUserForm>
        <Column addClassName="half">
          <div className="row-80 left">
            <label htmlFor="firstname" className="required">
              First name
            </label>
            <Field
              id="firstname"
              name="firstname"
              component="input"
              type="input"
            />
            <label htmlFor="lastname" className="required">
              Last name
            </label>
            <Field
              id="lastname"
              name="lastname"
              component="input"
              type="input"
            />
          </div>
        </Column>
        <Column addClassName="half">
          <div className="row-80 right">
            <label htmlFor="firstname" className="required">
              Email
            </label>
            <Field id="email" name="email" component="input" type="input" />

            <label htmlFor="address" className="required">
              Address
            </label>
            <Field id="address" name="address" component="input" type="input" />

            <label className="break-after">Gender</label>
            <Field
              id="male"
              name="gender"
              component="input"
              value="male"
              type="radio"
            />
            <label htmlFor="male">Male</label>
            <Field
              id="female"
              name="gender"
              component="input"
              value="female"
              type="radio"
            />
            <label htmlFor="male">Female</label>

            <Button
              addClassName="button left active"
              link="#"
              title="Back"
              handler={() => this.handleChangeStep(Steps.first)}
            />
            <Button
              addClassName="button right"
              link="#"
              title="Forward"
              handler={() => this.handleChangeStep(Steps.third)}
            />
          </div>
        </Column>
      </AddUserForm>
    );
  }

  private renderThirdStep(): React.ReactElement {
    return <div>3</div>;
  }

  private renderFourthStep(): React.ReactElement {
    return <div>4</div>;
  }

  public render(): React.ReactElement {
    const { activeStep } = this.state;
    return (
      <Container>
        <Title title="Adding new user" />
        <Tabs.Wrapper>
          <Tabs.Tab
            isActive={activeStep === 'first'}
            payload="1. Account"
            handler={() => this.handleChangeStep(Steps.first)}
          />
          <Tabs.Tab
            isActive={activeStep === 'second'}
            payload="2. Profile"
            handler={() => this.handleChangeStep(Steps.second)}
          />
          <Tabs.Tab
            isActive={activeStep === 'third'}
            payload="3. Contancts"
            handler={() => this.handleChangeStep(Steps.third)}
          />
          <Tabs.Tab
            isActive={activeStep === 'fourth'}
            payload="4. Capabilities"
            handler={() => this.handleChangeStep(Steps.fourth)}
          />
        </Tabs.Wrapper>
        {this.renderStep()}
      </Container>
    );
  }
}

export default CreateUser;
