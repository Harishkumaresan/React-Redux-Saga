import {takeEvery , put, takeLatest} from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCTS, SET_PRODUCT_LIST } from './constant';

function* getProducts(){
    let data = yield fetch("http://localhost:3000/products")
    data = yield data.json();
     console.log("action productlist is called",data)
     yield put({type: SET_PRODUCT_LIST,data})
}
function* searchProducts(data){
    let result = yield fetch(`http://localhost:3000/products?q=${data.query}`)
    result = yield result.json();
     console.log("action productlist is called",result) 
     yield put({type: SET_PRODUCT_LIST,data:result})
}

function* productSaga()
{
   yield takeLatest(PRODUCT_LIST,getProducts) // takelatest means it call last item only takeEvery means its call all
   yield takeEvery(SEARCH_PRODUCTS,searchProducts)
}

export default productSaga;