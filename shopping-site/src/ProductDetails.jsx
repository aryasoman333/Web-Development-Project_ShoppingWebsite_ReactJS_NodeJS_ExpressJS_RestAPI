import React from 'react';
import ProductDetailsContent from './ProductDetailsContent';
import ProductDetailsImage from './ProductDetailsImage';

const ProductDetails = ({ productDetails }) => {   
  return (
      <div className="details-page">
        <ProductDetailsImage productDetails={ productDetails } />
        <ProductDetailsContent productDetails={ productDetails } />   
      </div>
 );
};

export default ProductDetails;