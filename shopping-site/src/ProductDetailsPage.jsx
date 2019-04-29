import React from 'react';
import ProductDetailsPanel from './ProductDetailsPanel';

const ProductDetailsPage = ({ productDetails }) => {   
  return (
    <ProductDetailsPanel productDetails={ productDetails } />
  );
};

export default ProductDetailsPage;