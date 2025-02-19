import React from 'react';
import img from './img/download.png';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: orange;
  padding: 10px;
  border-radius: 8px;
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
  top: 19px;
  right:55px
`;

const Header1 = () => {
  const result = useSelector((state) => state.cartData);
  console.log('data in header', result);

  return (
    <CartContainer>
      <CartCount>{result.length}</CartCount>
      <CartIcon src={img} alt='Cart' />
    </CartContainer>
  );
};

export default Header1;
