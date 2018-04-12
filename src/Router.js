// @flow
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import store from './store/index';

// Add components for routing
import App from './screens/index';
import Login from './screens/Login/Login';
import Popular from './screens/Popular/Popular';
import Profile from './screens/Profile/Profile';

export const AUTH_TOKEN = 'test/authToken';

let isAuth: boolean = false;

const history = syncHistoryWithStore(createHistory(), store);

const renderPage = Page => {
  // if user not authorized, return him to login screen
  if (!localStorage.getItem(AUTH_TOKEN)) {
    history.replace('/');
    return <Login />;
  }
  isAuth = true;
  return <Page />;
};

const redirectRender = () => (isAuth ? <Profile /> : <Redirect to="/popular" />);

export default () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" render={redirectRender} />
        <Route path="/popular" component={Popular} />
        <Route path="/login" component={Login} />
        <Route path="*" render={() => <div>nooo..</div>} />
      </Switch>
    </App>
  </Router>
);
