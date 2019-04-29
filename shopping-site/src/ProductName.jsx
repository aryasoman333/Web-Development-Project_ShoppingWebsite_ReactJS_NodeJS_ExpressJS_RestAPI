import React from 'react';

const ProductName = ({ productDetails }) => {   
  return (
    <div className="product-name">{ productDetails.name }</div> 
          );
};

export default ProductName;