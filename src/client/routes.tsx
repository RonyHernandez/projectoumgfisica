import Home from '@src/pages/home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path={`/`}>
          <Home />
        </Route>
        <Route exact path={`conversiones/`}>
          <Home />
        </Route>
        <Route exact path={`segunda-newton/`}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
