import { DECREMENT_ITEM, INCREMENT_ITEM } from "./constant";

export const incrementItem = () => {
    return {
      type: INCREMENT_ITEM,
    };
  };
  
  export const decrementItem = () => {
    return {
      type: DECREMENT_ITEM,
    };
  };