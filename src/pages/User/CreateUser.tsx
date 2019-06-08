/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

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
import { Forms } from 'common/routes';
import constants from 'common/constants/index.json';

interface MatchParams {
  form: Forms;
}

type Props = {
  data: AbandonUser.Model;
  loading: boolean;
  errors?: boolean;
  fetchData: () => AbandonUser.Model;
  mediatePutData: (data: AbandonUser.Model) => boolean;
  clearData: () => boolean;
  initData: (data: AbandonUser.Model) => void;
  puller: (state: ApplicationState) => AbandonUser.Model;
  createData: (data: Partial<User.Model>) => boolean;
  resetForm: () => void;
} & RouteComponentProps<MatchParams>;

class CreateUser extends React.Component<Props, {}> {
  public static defaultProps = {
    loading: false,
    puller: (state: ApplicationState) => state.abandonUser.initDate,
  };

  public constructor(props: Props) {
    super(props);

    this.handleFinalCreateData = this.handleFinalCreateData.bind(this);
  }

  public componentDidMount(): void {
    this.props.fetchData();
  }

  private handleFinalCreateData(data: Partial<User.Model>): boolean {
    const { createData, clearData, resetForm } = this.props;

    createData(data);
    clearData();
    resetForm();

    return true;
  }

  public render(): React.ReactElement {
    const { data } = this.props;

    return (
      <Container>
        <Title title={constants.labels.createUserTitle} />
        <WizardForm
          {...this.props}
          showBar={!!data}
          finalCreateData={this.handleFinalCreateData}
        />
      </Container>
    );
  }
}

const mapStateToProps: (s: ApplicationState) => void = ({ abandonUser }) => ({
  data: abandonUser.data,
  loading: abandonUser.meta.loading,
  errors: abandonUser.errors,
});

const mapDispatchToProps: (d: Dispatch) => void = dispatch => ({
  fetchData: () => dispatch(AbandonUser.fetch.request()),
  mediatePutData: (data: AbandonUser.Model) =>
    dispatch(AbandonUser.push.request(data)),
  clearData: () => dispatch(AbandonUser.remove.request()),
  initData: (data: AbandonUser.Model) => dispatch(AbandonUser.initData(data)),
  createData: (data: User.Model) => dispatch(User.create.request(data)),
  resetForm: () => dispatch(reset(Form.Model.FORM_NAME)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUser);
