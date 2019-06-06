/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

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

type Props = {} & RouteComponentProps<MatchParams>;

class CreateUser extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);
  }

  public render(): React.ReactElement {
    return (
      <Container>
        <Title title={constants.labels.createUserTitle} />
        <WizardForm {...this.props} />
      </Container>
    );
  }
}

export default CreateUser;
