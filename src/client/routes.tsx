import Home from '@src/pages/home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Conversion from './pages/conversion';
import Vector from './pages/vector';

const Routes = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path={`/`}>
          <Home />
        </Route>
        <Route exact path={`/conversiones/`}>
          <Conversion />
        </Route>
        <Route exact path={`/vectores/`}>
          <Vector />
        </Route>
        <Route exact path={`/alumno/`}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
