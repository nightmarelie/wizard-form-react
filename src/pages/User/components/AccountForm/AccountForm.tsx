/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Field, InjectedFormProps } from 'redux-form';

// components
import { Column } from 'components/Wrapper';
import ActionIcon from 'components/ActionIcon/ActionIcon';
import * as Form from 'components/Form';

import constants from 'common/constants/index.json';

import * as model from './model';

export interface OwnProps {
  nextForm: (unlock?: boolean) => void;
}

interface State {
  passwordType: 'password' | 'input';
  repeatPasswordType: 'password' | 'input';
}

type Props = OwnProps & InjectedFormProps<model.Data, OwnProps>;

export class AccountForm extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      passwordType: 'password',
      repeatPasswordType: 'password',
    };

    this.handleShowHidePass = this.handleShowHidePass.bind(this);
    this.getPassClassName = this.getPassClassName.bind(this);
  }

  private getPassClassName(
    field: 'passwordType' | 'repeatPasswordType',
  ): string {
    return this.state[field] === 'input' ? 'action-eye-slash' : 'action-eye';
  }

  private handleShowHidePass(
    field: 'passwordType' | 'repeatPasswordType',
  ): void {
    const state = this.state;
    this.setState({
      ...state,
      [field]: state[field] === 'input' ? 'password' : 'input',
    });
  }

  public render(): React.ReactElement {
    const { nextForm, pristine, invalid, submitting } = this.props;
    const { passwordType, repeatPasswordType } = this.state;
    const disabled = invalid || submitting || pristine;

    return (
      <Form.Wrapper onSubmit={() => nextForm(disabled)}>
        <Column className="half">
          <Form.ImgUpload />
        </Column>
        <Column className="half">
          <Field
            name="username"
            label="User name"
            component={Form.Input}
            type="text"
          />

          <Field
            name="password"
            label="Password"
            component={Form.Input}
            type={passwordType}
          />
          <ActionIcon
            className={`icon ${this.getPassClassName('passwordType')}`}
            handler={() => this.handleShowHidePass('passwordType')}
          />

          <Field
            name="repeatPassword"
            label="Repeat Password"
            component={Form.Input}
            type={repeatPasswordType}
          />
          <ActionIcon
            className={`icon ${this.getPassClassName('repeatPasswordType')}`}
            handler={() => this.handleShowHidePass('repeatPasswordType')}
          />

          <Form.Button
            className="ver-indent right"
            title={constants.forms.buttons.forward}
            disabled={disabled}
            type="submit"
          />
        </Column>
      </Form.Wrapper>
    );
  }
}
