/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// domain
import { ApplicationState } from 'domain/store';
import * as User from 'domain/user';

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
} & RouteComponentProps<MatchParams>;

class EditUser extends React.Component<Props, {}> {
  public static defaultProps = {
    loading: false,
    puller: (state: ApplicationState) => state.users.initDate,
  };

  public constructor(props: Props) {
    super(props);

    this.handleFinalData = this.handleFinalData.bind(this);
  }

  public componentDidMount(): void {
    const {
      match: { params },
      fetchData,
    } = this.props;

    fetchData(+params.id);
  }

  public componentDidUpdate(prevProps: Props): void {
    const { data, initData } = this.props;
    if (data !== prevProps.data) {
      initData(data);
    }
  }

  private handleFinalData(id: number, data: Partial<User.Model>): void {
    const { updateData } = this.props;

    updateData(id, data);
  }

  public render(): React.ReactElement {
    const {
      match: {
        params: { id },
      },
      data,
      loading,
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
        {!loading && data && (
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUser);
