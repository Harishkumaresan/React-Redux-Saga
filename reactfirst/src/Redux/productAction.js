import { PRODUCT_LIST, SEARCH_PRODUCTS } from "./constant";


export const productList = () => {
       return {
        type: PRODUCT_LIST,
       }
}

export const searchProduct = (query) => {
    return {
     type: SEARCH_PRODUCTS,
     query
    }
}