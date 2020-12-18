// import { products } from '../../database';
import { TYPES } from '../actions/shoppingCart';

const defaultState = {
  items: [],
  total: 0,
  open: false,
  time: null,
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.ADD_ITEM: {
      // increment if exists
      const { items } = state;

      const index = items.findIndex((item) => item.product.id === action.payload.product.id);
      if (index !== -1) {
        items[index] = { ...items[index], quantity: items[index].quantity + 1 };
        return {
          ...state,
          total: state.total + action.payload.product.price,
          items,
        };
      }
      return {
        ...state,
        total: state.total + action.payload.product.price,
        items: [...items, { product: action.payload.product, quantity: 1 }],
      };
    }
    case TYPES.DECREASE_ITEM: {
      const items = state.items.map((item) => {
        if (item.product.id === action.payload.product.id) {
          return ({
            ...item,
            total: state.total - action.payload.product.price,
            quantity: item.quantity - 1,
          });
        }
        return item;
      });
      return {
        ...state,
        total: state.total - action.payload.product.price,
        items,
      };
    }
    case TYPES.REMOVE_ITEM:

      return {
        ...state,
        items: state.items.filter((item) => !(item.product.id === action.payload.product.id)),
        total: state.total - action.payload.product.price,
      };
    case TYPES.CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    case TYPES.SET_TIME:
      return {
        ...state,
        time: action.payload.time,
      };
    default:
      return state;
  }
};

export default cartReducer;
