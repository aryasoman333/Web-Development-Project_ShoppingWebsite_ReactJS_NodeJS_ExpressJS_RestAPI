import React from 'react';
import ProductShippingTitle from './ProductShippingTitle';
import ProductShippingContent from './ProductShippingContent';

const ProductShipping = ({ productDetails }) => {   
  return (
    <div>
      <ProductShippingTitle /> 
      <ProductShippingContent productDetails={ productDetails }/>  
    </div>
          
  );
};

export default ProductShipping;