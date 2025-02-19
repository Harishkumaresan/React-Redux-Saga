import React from 'react';
import img from './img/download.png';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { searchProduct } from '../Redux/productAction';

const CartContainer = styled.div`
  // display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: orange;
  padding: 10px;
  width: 100%;
  height: 80px;
  position: relative;
`;

const CartIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 1250px;
`;

const CartCount = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 45px;
  right:55px
`;

const Header1 = () => {
  const result = useSelector((state) => state.cartData);
  console.log('data in header', result);
  const dispatch = useDispatch()

  return (
    <CartContainer>
      <NavLink to={'/'}><h1 style={{float:'left' , margin:'0px'}}>E-COM</h1></NavLink>
      <div>
        <input type='text' onClick={(event)=>dispatch(searchProduct(event.target.value))} placeholder='search products'/>
      </div>
      <NavLink to={'/cart'}>
      <CartCount>{result.length}</CartCount>
      <CartIcon src={img} alt='Cart' />
      </NavLink>
    </CartContainer>
  );
};

export default Header1;
