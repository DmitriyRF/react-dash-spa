import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Employees from '../pages/Employees';
import FAQ from '../pages/FAQ';
import Help from '../pages/Help';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/employees" component={Employees} />
    <Route path="/projects" component={Projects} />
    <Route path="/faq" component={FAQ} />
    <Route path="/help" component={Help} />
  </Switch>
);
export default Routes;
