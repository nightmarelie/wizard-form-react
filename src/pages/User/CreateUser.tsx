/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { reset, initialize } from 'redux-form';

// domain
import { ApplicationState } from 'domain/store';
import * as AbandonUser from 'domain/abandonUser';
import * as User from 'domain/user';
import * as Form from 'domain/form';

// components
import { Container } from 'components/Wrapper';
import { Title } from 'components/Title/Title';
import WizardForm from './components/WizardForm/WizardForm';

// common
import routes, { Forms } from 'common/routes';
import constants from 'common/constants/index.json';
import * as helper from 'common/helpers';

interface MatchParams {
  form: Forms;
}

type Props = {
  data: AbandonUser.Model;
  isLoading: boolean;
  errors?: boolean;
  fetchData: () => AbandonUser.Model;
  mediateHandleData: (data: AbandonUser.Model) => void;
  clearData: () => boolean;
  initData: (data: AbandonUser.Model) => void;
  puller: (state: ApplicationState) => AbandonUser.Model;
  createData: (data: Partial<User.Model>) => boolean;
  resetForm: () => void;
  initForm: () => void;
} & RouteComponentProps<MatchParams>;

class CreateUser extends React.Component<Props, {}> {
  public static defaultProps = {
    isLoading: true,
    puller: (state: ApplicationState) => state.abandonUser.initData,
  };

  public componentDidMount(): void {
    const { fetchData, initForm } = this.props;
    initForm();
    fetchData();
  }

  public componentWillUnmount(): void {
    const { resetForm, initForm } = this.props;
    initForm();
    resetForm();
  }

  private handleFinalData = (data: Partial<User.Model>): void => {
    const { createData, clearData, resetForm, history, initForm } = this.props;

    createData(data);
    clearData();
    resetForm();
    initForm();

    history.push(routes.listOfUsers);
  };

  public render(): React.ReactElement {
    const { data } = this.props;

    return (
      <Container>
        <Title title={constants.labels.createUserTitle} />
        <WizardForm
          {...this.props}
          isBarVisible={!!data}
          finalHandleData={this.handleFinalData}
          routeHandler={(form: Forms) =>
            helper.stringReplacer(routes.createUser, {
              form,
            })
          }
        />
      </Container>
    );
  }
}

const mapStateToProps: (s: ApplicationState) => void = ({ abandonUser }) => ({
  data: abandonUser.data,
  isLoading: abandonUser.meta.loading,
  errors: abandonUser.errors,
});

const mapDispatchToProps: (d: Dispatch) => void = dispatch => ({
  fetchData: () => dispatch(AbandonUser.fetch.request()),
  mediateHandleData: (data: AbandonUser.Model) =>
    dispatch(AbandonUser.push.request(data)),
  clearData: () => dispatch(AbandonUser.remove.request()),
  initData: (data: AbandonUser.Model) => dispatch(AbandonUser.initData(data)),
  createData: (data: User.Model) => dispatch(User.create.request(data)),
  resetForm: () => dispatch(reset(Form.Model.FORM_NAME)),
  initForm: () => dispatch(initialize(Form.Model.FORM_NAME, {})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUser);
