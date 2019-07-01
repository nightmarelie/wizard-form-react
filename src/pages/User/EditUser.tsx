/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { reset, initialize } from 'redux-form';

// domain
import { ApplicationState } from 'domain/store';
import * as User from 'domain/user';
import * as Form from 'domain/form';

// components
import { Container } from 'components/Wrapper';
import { BreadcrumbTitle } from 'components/Title';
import WizardForm from './components/WizardForm/WizardForm';

// common
import routes, { Forms, ViewUserParams as RouteParams } from 'common/routes';
import constants from 'common/constants/index.json';
import * as helper from 'common/helpers';

type MatchParams = {
  form: Forms;
} & RouteParams;

type Props = {
  data: User.Model;
  loading: boolean;
  errors?: boolean;
  fetchData: (id: number) => User.Model;
  updateData: (id: number, data: Partial<User.Model>) => void;
  initData: (data: Partial<User.Model>) => void;
  puller: (state: ApplicationState) => User.Model;
  resetForm: () => void;
  initForm: () => void;
} & RouteComponentProps<MatchParams>;

class EditUser extends React.Component<Props, {}> {
  public static defaultProps = {
    loading: false,
    puller: (state: ApplicationState) => state.users.initData,
  };

  public componentDidMount(): void {
    const {
      match: { params },
      fetchData,
      resetForm,
      initForm,
    } = this.props;

    initForm();
    resetForm();
    fetchData(+params.id);
  }

  public componentDidUpdate(): void {
    const { data, initData } = this.props;
    initData(data);
  }

  public componentWillUnmount(): void {
    const { resetForm, initForm } = this.props;
    initForm();
    resetForm();
  }

  private handleFinalData = (id: number, data: Partial<User.Model>): void => {
    this.props.updateData(id, data);
  };

  public render(): React.ReactElement {
    const {
      match: {
        params: { id },
      },
      data,
    } = this.props;

    const dataHandler = this.handleFinalData.bind(this, +id);
    return (
      <Container>
        <BreadcrumbTitle
          title={constants.labels.editTitle}
          breadcrumbLink={helper.stringReplacer(routes.viewUser, {
            id,
          })}
          breadcrumbTitle={constants.view.labels.profile}
        />
        {data && (
          <WizardForm
            {...this.props}
            isCreateMode={false}
            finalHandleData={dataHandler}
            mediateHandleData={dataHandler}
            routeHandler={(form: Forms) =>
              helper.stringReplacer(routes.editUser, {
                id,
                form,
              })
            }
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps: (s: ApplicationState) => void = ({ users }) => ({
  data: users.data,
  loading: users.meta.loading,
  errors: users.errors,
});

const mapDispatchToProps: (d: Dispatch) => void = dispatch => ({
  fetchData: (id: number) => dispatch(User.fetch.request({ criteria: id })),
  updateData: (id: number, data: User.Model) =>
    dispatch(User.update.request({ id, data })),
  initData: (data: User.Model) => dispatch(User.initData(data)),
  resetForm: () => dispatch(reset(Form.Model.FORM_NAME)),
  initForm: () => dispatch(initialize(Form.Model.FORM_NAME, {})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUser);
