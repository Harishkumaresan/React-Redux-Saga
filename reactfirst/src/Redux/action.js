import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"

export const addToCart=(data)=>{
   console.log("action is called",data)
   return {
    type: ADD_TO_CART,
    data
   }
}
export const removeToCart=(data)=>{
   console.log("action Removed",data)
   return {
    type: REMOVE_FROM_CART,
    data
   }
}
export const emptyCart=()=>{
   console.log("action emptycart")
   return {
    type: EMPTY_CART,
   }
}