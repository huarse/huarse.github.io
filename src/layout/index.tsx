// app layout
// @author MOYAN <moyan@come-future.com>
// @create 2020/07/14 10:36

import React from 'react';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import LoginLayout from './login-layout';
import BaseLayout from './base-layout';

export default function AppRoot() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginLayout} />
        <Route path="/*" component={BaseLayout} />
      </Switch>
    </Router>
  );
}
