import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Home from './ui/Pages/Home.jsx';
import ProviderProfile from './ui/Pages/ProviderProfile.jsx';
import PostingEditPage from './ui/Pages/PostingEditPage.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/providerProfile" component={ProviderProfile}/>
      <Route exact path="/newPosting" component={PostingEditPage}/>
      <Redirect from="*" to="/home" />
    </Switch>
  </Router>
);
