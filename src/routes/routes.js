import React from "react";
import { Switch } from "react-router-dom";

import Configuration from '../pages/Configuration/';
import Route from './route-config';


function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Configuration} />
    </Switch>
  );
}

export default Routes;
