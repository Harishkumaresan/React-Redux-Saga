import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header1 from "./Header1";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { removeToCart } from '../Redux/action';

const Checkout = () => {
    const cartData = useSelector((state) => state.cartData);
    const quantityReducer = useSelector((state) => state.cartReducer); // Get all quantities
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
        <>
            <Header1>
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <h2>Checkout Page</h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "20px",
                            width: "80%",
                            margin: "auto",
                        }}
                    >
                        {cartData.map((item) => {
                            const quantity = quantityReducer[item.id] || 1;

                            return (
                                <div
                                    key={item.id}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        border: "1px solid #ddd",
                                        padding: "15px",
                                        borderRadius: "10px",
                                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                                        background: "#fff",
                                    }}
                                >
                                    {/* Image on the left */}
                                    <img
                                        src={item.photo}
                                        alt="Product"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "cover",
                                            borderRadius: "5px",
                                        }}
                                    />

                                    {/* Product Details in the center */}
                                    <div
                                        style={{
                                            flex: "1",
                                            textAlign: "left",
                                            paddingLeft: "20px",
                                        }}
                                    >
                                        <strong>{item.name}</strong>
                                        <p>📦 {item.category}</p>
                                        <p>🏷️ {item.brand}</p>
                                        <p>🎨 {item.color}</p>
                                    </div>

                                    {/* Price & Quantity on the right */}
                                    <div style={{ textAlign: "right" }}>
                                        <p>💰 Price: ₹{item.prize}</p>
                                        <p>🔢 Quantity: {quantity}</p>
                                        <p>
                                            🏷️ Total: <strong>₹{item.prize * quantity}</strong>
                                        </p>
                                         <button onClick={() => dispatch(removeToCart(item.id))}>Remove</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Final Total Amount */}
                    <h3 style={{ marginTop: "20px" }}>Grand Total: ₹{totalAmount}</h3>
                   <div style={{display:'flex', gap:'20px', justifyContent:'center'}}>
                    <button
                        style={{
                            padding: "10px 20px",
                            marginTop: "10px",
                            background: "#28a745",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                        onClick={handleBuyClick}
                    >
                        Confirm Order
                    </button>
                    <NavLink to={'/cart'}>
                        <button
                            style={{
                                padding: "10px 20px",
                                marginTop: "10px",
                                background: "#28a745",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Back to cart
                        </button>
                    </NavLink>
                    </div>
                </div>
            </Header1>
        </>
    );
};

export default Checkout;
