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
import * as User from 'domain/user';

export interface OwnProps {
  nextForm: (data: Partial<User.Model>, lock?: boolean) => void;
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
    const { nextForm, submitting, handleSubmit } = this.props;
    const { passwordType, repeatPasswordType } = this.state;

    return (
      <Form.Wrapper onSubmit={handleSubmit(data => nextForm(data, false))}>
        <Column className="half">
          <Field name="image" component={Form.ImgUpload} />
        </Column>
        <Column className="half">
          <Field
            name="username"
            label={constants.account.labels.username}
            component={Form.Input}
            type="text"
          />

          <Field
            name="password"
            label={constants.account.labels.password}
            component={Form.Input}
            type={passwordType}
          />
          <ActionIcon
            className={`icon ${this.getPassClassName('passwordType')}`}
            handler={() => this.handleShowHidePass('passwordType')}
          />

          <Field
            name="repeatPassword"
            label={constants.account.labels.repeatPassword}
            component={Form.Input}
            type={repeatPasswordType}
          />
          <ActionIcon
            className={`icon ${this.getPassClassName('repeatPasswordType')}`}
            handler={() => this.handleShowHidePass('repeatPasswordType')}
          />

          <Form.Button
            className="ver-indent right"
            title={constants.buttons.forward}
            disabled={submitting}
            type="submit"
          />
        </Column>
      </Form.Wrapper>
    );
  }
}
