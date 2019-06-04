/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import Icon from 'components/Icon/Icon';

import styles from './styles';
import routes, { Forms } from 'common/routes';
import * as helper from 'common/helpers';

const Navigation: React.FC = (): ReactElement => {
  return (
    <nav>
      <NavLink
        activeClassName="active"
        to={helper.stringReplacer(routes.createUser, { form: Forms.account })}
        css={styles}
      >
        <Icon className="icon-add-user" />
        Add new user
      </NavLink>
      <NavLink activeClassName="active" to={routes.listOfUsers} css={styles}>
        <Icon className="icon-list-user" />
        List of user
      </NavLink>
    </nav>
  );
};

export default Navigation;
