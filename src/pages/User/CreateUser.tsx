/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';

import { Container } from 'components/Wrapper';
import { Title } from 'components/Title/Title';
import Tabs from 'components/Tabs';

const CreateUser: React.FC = (): ReactElement => {
  return (
    <Container>
      <Title title="Adding new user" />
      <Tabs.Wrapper>
        <Tabs.Tab className="tab active" payload="1. Account" />
        <Tabs.Tab className="tab" payload="2. Profile" />
        <Tabs.Tab className="tab" payload="3. Contancts" />
        <Tabs.Tab className="tab" payload="4. Capabilities" />
      </Tabs.Wrapper>
    </Container>
  );
};

export default CreateUser;
