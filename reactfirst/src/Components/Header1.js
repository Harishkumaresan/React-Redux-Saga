import React from 'react'
import img from './img/download.png'
import {useSelector} from 'react-redux'

const Header1 = () => {
  const result = useSelector((state)=>state.cartData);
  console.log("data in header",result);
  return (
    <div>
        <div className='cart-div'>
            <span>{result.length}</span>
            <img src={img} alt='no' />
        </div>
    </div>
  )
}

export default Header1