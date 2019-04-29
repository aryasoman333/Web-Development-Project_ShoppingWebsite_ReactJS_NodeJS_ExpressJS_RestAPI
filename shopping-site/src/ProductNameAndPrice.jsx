import React from 'react';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';

const ProductNameAndPrice = ({ productDetails }) => {   
  return (
    <div className="product-namePrice">
      <ProductName productDetails={ productDetails }/> 
      <ProductPrice productDetails={ productDetails }/>
    </div>     
          );
};

export default ProductNameAndPrice;