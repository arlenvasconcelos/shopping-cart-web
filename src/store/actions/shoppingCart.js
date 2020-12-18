const TYPES = {
  CLEAR_CART: 'shoppingCart/CLEAR_CART',
  ADD_ITEM: 'shoppingCart/ADD_ITEM',
  DECREASE_ITEM: 'shoppingCart/DECREASE_ITEM',
  REMOVE_ITEM: 'shoppingCart/REMOVE_ITEM',
  SET_TIME: 'shoppingCart/SET_TIME',
};

const addItem = ({ product }) => ({
  type: TYPES.ADD_ITEM,
  payload: { product },
});

const decreaseItem = ({ product }) => ({
  type: TYPES.DECREASE_ITEM,
  payload: { product },
});

const removeItem = ({ product }) => ({
  type: TYPES.REMOVE_ITEM,
  payload: { product },
});

const clearCart = () => ({
  type: TYPES.CLEAR_CART,
});

const setTime = ({ time }) => ({
  type: TYPES.SET_TIME,
  payload: { time },
});

export {
  TYPES,
  addItem,
  decreaseItem,
  removeItem,
  clearCart,
  setTime,
};
