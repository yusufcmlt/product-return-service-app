import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';

import { HOMEPAGE } from './RouteContstants';

export default function RouterConfig() {
  return (
    <Switch>
      <Route exact path={HOMEPAGE} component={Home} />
    </Switch>
  );
}
