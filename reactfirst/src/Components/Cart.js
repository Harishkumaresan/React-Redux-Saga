import React from 'react'
import { useSelector } from 'react-redux'
import { cartData } from '../Redux/reducer'
import Header1 from './Header1';

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    console.log("cartdata", cartData);
    const amount = cartData.length && cartData.map((item) => item.prize).reduce((prev, next) => prev + next)
    return (
        <Header1>
            <h1>Cart Page</h1>
            <div>
                <table style={{ border: '1px solid black', marginLeft:'20px' }}>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>prize</th>
                        <th>category</th>
                        <th>brand</th>
                        <th>color</th>
                    </tr>
                    {
                        cartData.map((item) => (
                            <tr key={item.key}>
                                <td><img src={item.photo} alt="no" style={{width:'30px'}} /></td>
                                <td>{item.name}</td>
                                <td>{item.prize}</td>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                                <td>{item.color}</td>
                            </tr>
                        ))
                    }

                </table>
            </div>
            <h3 style={{ float: 'left' }}>TOTAL:{amount} </h3>
        </Header1>
    )
}

export default Cart