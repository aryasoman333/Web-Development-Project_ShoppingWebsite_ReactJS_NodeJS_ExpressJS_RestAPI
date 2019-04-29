import React from 'react';
import UserCartPageProductListRow from './UserCartPageProductListRow';

const UserCartPageProductList = ({ productsInCart }) => {
  const productList = productsInCart.map((productInCart, index) =>
         <li className="li" key={index}> 
             <UserCartPageProductListRow productInCart={ productInCart }/>
         </li>);
  return (
    <div className="product-cart">
      <ul className="product-details">
        { productList }               
      </ul>
    </div>
      );
};

export default UserCartPageProductList;

