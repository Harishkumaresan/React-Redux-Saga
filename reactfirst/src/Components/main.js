
import {addToCart} from '../Redux/action'
import { removeToCart } from '../Redux/action';
import { emptyCart } from '../Redux/action';
import {useDispatch} from 'react-redux'
function Main() {
  const dispatch = useDispatch();
  const product ={
    name:'i phone',
    category:'mobile'
  }
  return (
    <div>
     <button onClick={()=>dispatch(addToCart(product))} >Add-To-Cart</button>
     <div>
     <button onClick={()=>dispatch(removeToCart(product.name))} >Remove-From-Cart</button>
     </div>
     <div>
     <button onClick={()=>dispatch(emptyCart())} >Add-To-Cart</button>
     </div>
    </div>
  );
}

export default Main;
