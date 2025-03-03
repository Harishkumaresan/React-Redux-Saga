
import { addToCart } from '../Redux/action'
import { removeToCart } from '../Redux/action';
import { emptyCart } from '../Redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../Redux/productAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import Header1 from './Header1';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData)
  console.log("data in main ", data);
  // const product = {
  //   name: 'i phone',
  //   category: 'mobile'
  // }
  useEffect(() => {
    dispatch(productList())
  }, [])
  return (
    <Header1>
      <div>
        <div className="d-flex justify-content-end">
          <button onClick={() => dispatch(emptyCart())} className="btn btn-danger rounded-pill px-3">
            Empty Cart
          </button>
        </div>

        <div className="container mt-3">
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <NavLink to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card shadow-sm">
                    <img src={item.photo} className="card-img-top p-3" alt="Product" style={{ height: '200px', objectFit: 'contain' }} />
                    <div className="card-body">
                      <div className="product-details d-flex flex-column">
                        <div className="d-flex ">
                          <span><strong>Name</strong></span>
                          <span>: {item.name}</span>
                        </div>
                        <div className="d-flex">
                          <span><strong>Prize</strong></span>
                          <span>: {item.prize}</span>
                        </div>
                        <div className="d-flex ">
                          <span><strong>Category</strong></span>
                          <span>: {item.category}</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        {/* <button onClick={() => dispatch(addToCart(item))} className="btn btn-warning rounded-pill px-3">
                          Add to cart
                        </button> */}
                        {/* <button onClick={() => dispatch(removeToCart(item.id))} className="btn btn-danger rounded-pill px-3">
                          Remove
                        </button> */}
                      </div>
                    </div>
                  </div>
                  </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Header1>
  );
}

export default Main;
