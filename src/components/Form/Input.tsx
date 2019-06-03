/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'common/images/logo.svg';

import Navigation from 'components/Navigation/Navigation';
import { Container } from 'components/Wrapper';

import * as global from 'common/styles/global.styles';

const Header: React.FC = (): React.ReactElement => {
  return (
    <header>
      <Container>
        <Link css={global.link} to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
