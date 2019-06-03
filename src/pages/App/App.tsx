import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Global } from '@emotion/core';

import './style/index.css';
import './style/App.css';
import styles from 'common/styles/global.styles';
import routes from 'common/routes';
import * as helper from 'common/helpers';

// components
import Header from 'components/Header/Header';

// pages
import ListOfUser from 'pages/User/ListOfUsers';
import CreateUser from 'pages/User/CreateUser';
import ViewUser from 'pages/User/ViewUser';

const App: React.FC = () => {
  return (
    <Router>
      <Global styles={styles} />
      <Header />
      <Switch>
        <Redirect exact path={routes.home} to={routes.listOfUsers} />
        <Route exact path={routes.listOfUsers} component={ListOfUser} />
        <Route path={routes.createUser} component={CreateUser} />
        <Route exact path={routes.viewUser} component={ViewUser} />
      </Switch>
    </Router>
  );
};

export default App;
