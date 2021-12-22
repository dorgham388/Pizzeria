import { ADD_CART, REMOVE_CART } from "./actionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CART:
      return {
        ...state,
        cart: isItemInCart(state.cart, payload)
          ? alterItemCount(state.cart, payload, 1)
          : [...cart, { ...payload, count: 1 }],
      };

    case REMOVE_CART:
      return {
        ...state,
        cart: isItemInCart(state.cart, payload)
          ? alterItemCount(state.cart, payload, -1)
          : state.cart,
      };

    default:
      return state;
  }
};
export default cartReducer;

export const isItemInCart = (items, { id }) =>
  !!items.find((item) => item.id === id);

export const alterItemCount = (items, { id }, variable) => {
  let array = items;
  let position = array.findIndex((item) => item.id === id);
  let item = array.find((item) => item.id === id);
  let newItem = { ...item, count: item.count + variable };
  array.filter((item) => item.count !== 0);
  return array.splice(position, 1, newItem);
};
