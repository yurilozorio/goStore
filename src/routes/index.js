import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Product from '../pages/product';
import Cart from '../pages/cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/details" component={Product} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
