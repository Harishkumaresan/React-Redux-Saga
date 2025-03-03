import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header1 from "./Header1";
import { useNavigate, NavLink } from "react-router-dom";
import { removeToCart } from '../Redux/action';

const Checkout = () => {
    const cartData = useSelector((state) => state.cartData);
    const quantityReducer = useSelector((state) => state.cartReducer); // Get updated quantities
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Hook for navigation

    const totalAmount = cartData.reduce(
        (sum, item) => sum + item.prize * (quantityReducer[item.id] || 1),
        0
    );

    const handleBuyClick = () => {
        if (cartData.length > 0) {
            alert("Order Confirmed! 🎉");
        } else {
            alert("No products in checkout! Going back to Home.");
            navigate("/"); // Redirect to home page
        }
    };

    useEffect(() => {
        if (cartData.length === 0) {
            alert("No products in checkout! Redirecting to Home.");
            navigate("/"); // Redirect to home page
        }
    }, [cartData, navigate]);

    return (
        <Header1>
            <div className="container-fluid py-5" style={{ backgroundColor: "#f0f5f9", minHeight: "100vh" }}>
                <div className="container">
                    <h2 className="text-center fw-bold text-primary mb-4">🛒 Checkout Page</h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            {cartData.map((item) => {
                                const quantity = quantityReducer[item.id] || 1; // Fetch updated quantity

                                return (
                                    <div key={item.id} className="card mb-3 shadow-sm">
                                        <div className="row g-0">
                                            {/* Image on the Left */}
                                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                                <img
                                                    src={item.photo}
                                                    alt="Product"
                                                    className="img-fluid rounded"
                                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                                />
                                            </div>

                                            {/* Product Details in the Center */}
                                            <div className="col-md-6">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text text-muted">📦 {item.category}</p>
                                                </div>
                                            </div>

                                            {/* Price & Quantity on the Right */}
                                            <div className="col-md-3 d-flex flex-column align-items-end justify-content-center p-3">
                                                <p className="mb-1 fw-bold text-success">💰 Price: ₹{item.prize}</p>
                                                <p className="mb-1">🔢 Quantity: {quantity}</p>
                                                <p className="fw-bold text-danger">🏷️ Total: ₹{item.prize * quantity}</p>
                                                <button
                                                    className="btn btn-outline-danger btn-sm mt-2"
                                                    onClick={() => dispatch(removeToCart(item.id))}
                                                >
                                                    ❌ Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Final Total Amount */}
                    <h3 className="text-center fw-bold mt-4 text-dark">💵 Grand Total: ₹{totalAmount}</h3>

                    {/* Buttons Section */}
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <button className="btn btn-md btn-success px-4 shadow" onClick={handleBuyClick}>
                            ✅ Confirm Order
                        </button>
                        <NavLink to="/cart">
                            <button className="btn btn-md btn-warning px-4 shadow">
                                🔙 Back to Cart
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Header1>
    );
};

export default Checkout;
