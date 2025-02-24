import { DECREMENT_ITEM, INCREMENT_ITEM } from "./constant";

const initialState = {
    cartData: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ITEM:
      return { ...state, quantity: state.quantity + 1 };

    case DECREMENT_ITEM:
      return {
        ...state,
        quantity: state.quantity > 1 ? state.quantity - 1 : 1, // Prevents negative values
      };

    default:
      return state;
  }
};