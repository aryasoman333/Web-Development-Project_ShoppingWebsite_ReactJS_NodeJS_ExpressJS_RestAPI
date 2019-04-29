import React from 'react';

const ProductShippingContent = ({ productDetails }) => {   
  return (
    <div>{ productDetails.shipping }</div>            
  );
};

export default ProductShippingContent;