/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'common/images/logo.svg';

import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';

import styles from './style';

const Header: React.FC = (): React.ReactElement => {
  return (
    <header css={styles}>
      <Container>
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
