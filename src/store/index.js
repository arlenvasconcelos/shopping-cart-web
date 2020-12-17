import { createStore, combineReducers } from 'redux';

import shoppingCart from './reducers/shoppingCart';

const rootReducer = combineReducers({
  shoppingCart,
});

const store = createStore(rootReducer);

export default store;
