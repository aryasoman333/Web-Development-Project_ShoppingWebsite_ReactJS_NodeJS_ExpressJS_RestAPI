import React from 'react';
import ProductReturnsTitle from './ProductReturnsTitle';
import ProductReturnsContent from './ProductReturnsContent';

const ProductReturns = ({ productDetails }) => {   
  return (
      <div>
        <ProductReturnsTitle />  
        <ProductReturnsContent productDetails={ productDetails } /> 
      </div>         
  );
};

export default ProductReturns;