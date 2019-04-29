import React from 'react';
import ProductNameAndPrice from './ProductNameAndPrice';
import ProductDescription from './ProductDescription';
import ProductReturns from './ProductReturns';
import ProductShipping from './ProductShipping';

const ProductDetails = ({ productDetails }) => {   
  return (
      <div className="product-details">
        <ProductNameAndPrice productDetails={ productDetails } />
        <ProductDescription productDetails={ productDetails } />   
        <ProductReturns productDetails={ productDetails } />
        <ProductShipping productDetails={ productDetails } /> 
      </div>
 );
};

export default ProductDetails;