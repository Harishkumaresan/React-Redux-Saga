import {combineReducers} from 'redux'
import {cartData} from './reducer'
import { productData } from './productReducer'
import { cartReducer } from './cartReducer'
export default combineReducers({
    cartData,
    productData,
    cartReducer
})