import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Couriers from '~/pages/Couriers';
import Deliveries from '~/pages/Deliveries';
import Problems from '~/pages/Problems';
import Recipients from '~/pages/Recipients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/couriers" component={Couriers} isPrivate />
      <Route path="/deliveries" component={Deliveries} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
    </Switch>
  );
}
