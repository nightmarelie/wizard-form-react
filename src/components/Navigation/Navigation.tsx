/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'components/Icon/Icon';

import styles from './styles';
import routes from 'common/routes';
import * as helper from 'common/helpers';

const Navigation: React.FC = (): ReactElement => {
  return (
    <nav>
      <NavLink
        activeClassName="active"
        to={helper.stringReplacer(routes.createUser, { step: 'first' })}
        css={styles}
      >
        <Icon addClassName="icon-add-user" />
        Add new user
      </NavLink>
      <NavLink activeClassName="active" to={routes.listOfUsers} css={styles}>
        <Icon addClassName="icon-list-user" />
        List of user
      </NavLink>
    </nav>
  );
};

export default Navigation;
