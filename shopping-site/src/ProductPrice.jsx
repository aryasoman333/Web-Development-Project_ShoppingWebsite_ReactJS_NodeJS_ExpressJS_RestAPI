import React from 'react';

const ProductPrice = ({ productDetails }) => {   
  return (
    <div className="product-price">
      ${ productDetails.price }
    </div>          
  );
};

export default ProductPrice;