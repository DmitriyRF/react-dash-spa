import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Employees from '../pages/Employees';
import FAQ from '../pages/FAQ';
import Help from '../pages/Help';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Login from '../pages/Login';

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />

      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/employees" component={Employees} />
      <PrivateRoute path="/projects" component={Projects} />
      <PrivateRoute path="/faq" component={FAQ} />
      <PrivateRoute path="/help" component={Help} />

  </Switch>
);
export default Routes;
