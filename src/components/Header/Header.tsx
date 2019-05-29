/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';

import styles from './style';

interface IProps {}

const Header: React.FC<IProps> = (_: IProps): ReactElement<IProps> => {
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
