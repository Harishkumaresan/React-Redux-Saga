import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../Redux/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header1 from './Header1';
import { useState } from 'react';

function Product() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) =>
        state.productData.find((item) => item.id.toString() === id)
    );
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <h2 className="text-center mt-5">Product Not Found</h2>;
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <Header1>
                <div className="container mt-5">
                    <div className="row align-items-center shadow p-4 rounded bg-light">
                        {/* Left side: Image */}
                        <div className="col-md-6 text-center">
                            <img
                                src={product.photo}
                                className="img-fluid rounded shadow-sm"
                                alt={product.name}
                                style={{ maxHeight: '400px', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Right side: Details */}
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h2 className="fw-bold text-primary">{product.name}</h2>
                            <p className="text-muted"><strong>Category:</strong> {product.category}</p>
                            <h4 className="text-success">💰 Price: ₹{product.prize}</h4>

                           

                            {/* Action Buttons */}
                            <div className="d-flex gap-3 mt-4 justify-content-center">
                                <button
                                    onClick={() => dispatch(addToCart({ ...product, quantity }))}
                                    className="btn btn-success px-4 shadow-sm"
                                >
                                    🛒 Add to Cart
                                </button>
                                {/* <button
                                    onClick={() => dispatch(removeToCart(product.id))}
                                    className="btn btn-danger px-4 shadow-sm"
                                >
                                    ❌ Remove
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Header1>
        </>
    );
}

export default Product;