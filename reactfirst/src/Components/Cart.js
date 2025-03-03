import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header1 from './Header1';
import { decrementItem, incrementItem } from '../Redux/cartAction';
import { removeToCart } from '../Redux/action';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    const quantityReducer = useSelector((state) => state.cartReducer); // Get all quantities
    const dispatch = useDispatch();

    const amount = cartData.length && cartData.map((item) => item.prize).reduce((prev, next) => prev + next)
    return (
        <Header1>
            <div className="container-fluid py-5" style={{ backgroundColor: "#f0f5f9", minHeight: "100vh" }}>
                <div className="container">
                    <h1 className="text-center fw-bold mb-4 text-dark">🛒 Your Shopping Cart</h1>

                    {cartData.length === 0 ? (
                        <h3 className="text-center text-danger">Your cart is empty!</h3>
                    ) : (
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                {cartData.map((item) => {
                                    const quantity = quantityReducer[item.id] || 1;

                                    return (
                                        <div key={item.id} className="card shadow-sm border-2 mb-4 p-3" style={{ backgroundColor: "#ffffff" }}>
                                            <div className="row g-0 align-items-center">

                                                {/* Product Image (Left) */}
                                                <div className="col-md-3 text-center">
                                                    <img
                                                        src={item.photo}
                                                        className="img-fluid rounded p-3"
                                                        alt="Product"
                                                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                                                    />
                                                </div>

                                                {/* Product Details (Center) */}
                                                <div className="col-md-6">
                                                    <div className="card-body">
                                                        <h5 className="card-title fw-bold">{item.name}</h5>
                                                        <p className="mb-1"><strong>💰 Price:</strong> ₹{item.prize}</p>
                                                        <p className="mb-1"><strong>📦 Category:</strong> {item.category}</p>

                                                    </div>
                                                </div>

                                                {/* Remove & Quantity Buttons (Right) */}
                                                <div className="col-md-3 text-center d-flex flex-column align-items-center">
                                                    <button
                                                        className="btn btn-danger btn-sm mb-2 px-3 fw-bold shadow-sm"
                                                        onClick={() => dispatch(removeToCart(item.id))}
                                                    >
                                                        ❌ Remove
                                                    </button>
                                                    <div className="d-flex align-items-center border rounded-pill px-2 py-1">
                                                        <button
                                                            className="btn btn-light btn-sm fw-bold"
                                                            onClick={() => dispatch(decrementItem(item.id))}
                                                        >
                                                            ➖
                                                        </button>
                                                        <span className="mx-3 fw-bold fs-5">{quantity}</span>
                                                        <button
                                                            className="btn btn-light btn-sm fw-bold"
                                                            onClick={() => dispatch(incrementItem(item.id))}
                                                        >
                                                            ➕
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    );
                                })}
                            </div>
                        </div>

                    )}
                    <p className="text-center mt-3">
                        <NavLink to="/" className="text-primary fw-bold text-decoration-none">
                            ← Move to Shopping Page
                        </NavLink>
                    </p>

                    {/* Checkout Section */}
                    {cartData.length > 0 && (
                        <div className="d-flex justify-content-end mt-5">
                            <NavLink to={'/checkout'}>
                                <button className="btn btn-lg btn-success px-5 py-3 fw-bold shadow">
                                    ✅ Proceed to Checkout
                                </button>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </Header1>
    );
};

export default Cart;
