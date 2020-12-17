const TYPES = {
  CLEAR_CART: 'CLEAR_CART',
  OPEN_CART: 'OPEN_CART',
  CLOSE_CART: 'CLOSE_CART',
  UPDATE_ITEMS: 'UPDATE_ITEMS',
  ADD_ITEM: 'ADD_ITEM',
  DECREASE_ITEM: 'DECREASE_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

const updateItems = ({ items }) => ({
  type: TYPES.UPDATE_ITEMS,
  payload: { items },
});

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

const openCart = () => ({
  type: TYPES.OPEN_CART,
});
const closeCart = () => ({
  type: TYPES.CLOSE_CART,
});

export {
  TYPES,
  updateItems,
  addItem,
  decreaseItem,
  removeItem,
  clearCart,
  openCart,
  closeCart,
};
