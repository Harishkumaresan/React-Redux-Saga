import { DECREMENT_ITEM, INCREMENT_ITEM, REMOVE_ITEM } from "./constant";

const initialState = {
    cartData: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ITEM:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 1) + 1 // Increase only this product's quantity
    };

    case DECREMENT_ITEM:
      return {
        ...state,
        [action.payload]: Math.max((state[action.payload] || 0) - 1, 0) // Prevent negative quantity
    };
    default:
      return state;
  }
};