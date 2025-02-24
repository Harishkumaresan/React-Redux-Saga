import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartData } from '../Redux/reducer'
import Header1 from './Header1';
import { INCREMENT_ITEM } from '../Redux/constant';
import { decrementItem, incrementItem } from '../Redux/cartAction';

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    console.log("cartdata", cartData);
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.cartReducer.quantity);
    console.log("Quantity:", quantity); // Debugging log
    const amount = cartData.length && cartData.map((item) => item.prize).reduce((prev, next) => prev + next)
    return (
        <Header1>
            <h1>Cart Page</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", // Centers vertically
                    width: "100%",       // Ensures full width
                    background: "#f8f9fa" // Optional background color
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
                    {cartData.map((item) => (
                        <div
                            key={item.key}
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
                                    borderRadius: "5px"
                                }}
                            />

                            {/* Product Details */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "20px",
                                    flexWrap: "wrap", // Ensures responsiveness
                                }}
                            >
                                <strong>{item.name}</strong>
                                <span>💰 {item.prize}</span>
                                <span>📦 {item.category}</span>
                                <span>🏷️ {item.brand}</span>
                                <span>🎨 {item.color}</span>
                                <div>
                                    <button onClick={()=>dispatch(incrementItem())}>+</button> <span>Quantity : {quantity}</span> <button onClick={()=> dispatch(decrementItem())}>-</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h3 style={{ float: 'left' }}>TOTAL:{amount} </h3>
        </Header1>
    )
}

export default Cart