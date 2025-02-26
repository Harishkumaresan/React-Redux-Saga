import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header1 from './Header1';
import { decrementItem, incrementItem } from '../Redux/cartAction';
import { removeToCart } from '../Redux/action';

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    const quantityReducer = useSelector((state) => state.cartReducer); // Get all quantities
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.cartReducer.quantity);
    console.log("Quantity:", quantity); // Debugging log
    const amount = cartData.length && cartData.map((item) => item.prize).reduce((prev, next) => prev + next)
    return (
        <Header1>
            <div>
            <h1>Cart Page</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height:'auto',
                    background: "#f8f9fa",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        padding: "20px",
                        width: "60%",
                        justifyContent: "center",
                    }}
                >
                    {cartData.map((item) => {
                        const quantity = quantityReducer[item.id] || 0; // Get quantity for each item

                        return (
                            <div
                                key={item.id}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    border: "1px solid #ddd",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                                    background: "#fff",
                                }}
                            >
                                {/* Image */}
                                <img
                                    src={item.photo}
                                    alt="Product"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                    }}
                                />

                                {/* Product Details */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "20px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <strong>{item.name}</strong>
                                    <span>💰 {item.prize}</span>
                                    <span>📦 {item.category}</span>
                                    <span>🏷️ {item.brand}</span>
                                    <span>🎨 {item.color}</span>
                                     <button onClick={() => dispatch(removeToCart(item.id))}>Remove</button>
                                    <div>
                                        <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
                                        <span> Quantity: {quantity} </span>
                                        <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
                                    </div>
                                   
                                </div>
                            </div>
                        );
                    })}
                </div>
                <h3 style={{ float: 'left', marginTop:'400px' , marginLeft:'320px'}}>
                TOTAL: ₹{cartData.reduce((sum, item) => sum + item.prize * (quantityReducer[item.id] || 1), 0)}
            </h3>
            </div>
            </div>
        </Header1>
    );
};

export default Cart;
