import React from 'react';
import ProductDescriptionTitle from './ProductDescriptionTitle';
import ProductDescriptionContent from './ProductDescriptionContent';

const ProductDescription = ({ productDetails }) => {   
  return (
    <div>
      <ProductDescriptionTitle />
      <ProductDescriptionContent productDetails={ productDetails } />
    </div>          
  );
};

export default ProductDescription;