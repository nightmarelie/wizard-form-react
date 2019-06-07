/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// domain
import { ApplicationState } from 'domain/store';
import * as AbandonUser from 'domain/abandonUser';

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
  putData: (data: AbandonUser.Model) => boolean;
  clearData: () => boolean;
  initData: (data: AbandonUser.Model) => void;
  puller: (state: ApplicationState) => AbandonUser.Model;
} & RouteComponentProps<MatchParams>;

class CreateUser extends React.Component<Props, {}> {
  public static defaultProps = {
    loading: true,
    puller: (state: ApplicationState) => state.abandonUser.initDate,
  };

  public constructor(props: Props) {
    super(props);
  }

  public componentWillMount(): void {
    this.props.fetchData();
  }

  public render(): React.ReactElement {
    const { data } = this.props;

    return (
      <Container>
        <Title title={constants.labels.createUserTitle} />
        <WizardForm {...this.props} showBar={!!data} />
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
  putData: (data: AbandonUser.Model) =>
    dispatch(AbandonUser.push.request(data)),
  clearData: () => dispatch(AbandonUser.remove.request()),
  initData: (data: AbandonUser.Model) => dispatch(AbandonUser.initData(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateUser);
