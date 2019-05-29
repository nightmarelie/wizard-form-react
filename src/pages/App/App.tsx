import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Global } from '@emotion/core';

import './style/index.css';
import './style/App.css';
import styles from 'common/styles/global.style';
import routes from 'common/routes';
import Header from 'components/Header/Header';
import ListOfUser from '../User/ListOfUsers';
import CreateUser from '../User/CreateUser';

export const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Global styles={[styles]} />
      <Header/>
      <Switch>
        <Redirect exact path={routes.home} to={routes.listOfUsers} />
        <Route exact path={routes.listOfUsers} component={ListOfUser} />
        <Route exact path={routes.createUser} component={CreateUser} />
        // create-user
        // show-user
        // list-of-user
        // edit-user
        // /404 -> notFound
        // /500 -> Error
        // * -> notFound
      </Switch>
    </Router>
  );
}

export default App;