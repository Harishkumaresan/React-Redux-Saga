import { DECREMENT_ITEM, INCREMENT_ITEM } from "./constant";

export const incrementItem = (productId) => {
    return {
      type: INCREMENT_ITEM,
      payload: productId // Pass productId to identify which item to update
    };
  };
  
  export const decrementItem = (productId) => {
    return {
      type: DECREMENT_ITEM,
      payload: productId
    };
  };

 