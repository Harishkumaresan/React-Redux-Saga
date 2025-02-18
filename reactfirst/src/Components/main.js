
import {addToCart} from '../Redux/action'
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
    </div>
  );
}

export default Main;
