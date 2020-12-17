import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Products from '../pages/Products';
import ShoppingCart from '../pages/ShoppingCart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/shopping-cart" component={ShoppingCart} />
    </Switch>
  );
}
