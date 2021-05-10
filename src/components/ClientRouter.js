import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import Confirmed from '../views/Confirmed';
import WrongAnswer from '../views/WrongAnswer';

export default function ClientRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/0000b33" exact>
          <Confirmed />
        </Route>
        <Route path="/wrong" exact>
          <WrongAnswer />
        </Route>
      </Switch>
    </Router>
  );
}
