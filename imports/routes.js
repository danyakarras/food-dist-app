import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Home from './ui/Pages/Home.jsx';
import ProviderProfile from './ui/Pages/ProviderProfile.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/providerProfile" component={ProviderProfile}/>
    </Switch>
  </Router>
);