export const cartData =(data=[],action)=>{
    switch (action.type){
        case ADD_TO_CART:
            console.log("ADD_TO_CART",action)
            return [action.data, ...data]
        default:
            return []
    }
}