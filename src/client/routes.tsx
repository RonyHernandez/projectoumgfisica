import Home from '@src/pages/home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Conversion from './pages/conversion';
import Newton from './pages/newton';
import Student from './pages/student';
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
          <Student />
        </Route>
        <Route exact path={`/newton/`}>
          <Newton />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
