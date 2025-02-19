
import { addToCart } from '../Redux/action'
import { removeToCart } from '../Redux/action';
import { emptyCart } from '../Redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../Redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData)
  console.log("data in main ", data);
  // const product = {
  //   name: 'i phone',
  //   category: 'mobile'
  // }
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())} >Empty-Cart</button>
      </div>
      
      <div className='product-container' style={{display:'flex' , flexWrap:"wrap" , gap:'50px', marginLeft:'10px' , marginTop:'10px'}}>
        {
          data.map((item) => <div className='product-item' style={{border:'1px solid black'}}>
            <img src={item.photo} alt='no' style={{width:'200px' , height:'200px'}}/>
            <div>Name: {item.name}</div>
            <div>Color: {item.color}</div>
            <div>Prize: {item.prize}</div>
            <div>Category: {item.category}</div>
            <div>Brand: {item.brand}</div>
            <div className='buttondiv' style={{gap:'20px'}}>
              <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
