import React from 'react';
import UserCartPageThumbnail from './UserCartPageThumbnail';
import ProductPrice from './ProductPrice';
import ProductName from './ProductName';

const UserCartPageProductListRow = ({ productInCart }) => {   
  return (
        <div className="cart-details">
          <UserCartPageThumbnail productInCart={ productInCart } />           
          <ProductName productDetails={ productInCart }/>
          <ProductPrice productDetails={ productInCart }/>
        </div> 
  );
};

export default UserCartPageProductListRow;
