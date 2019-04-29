import React from 'react';

const ProductDescriptionContent = ({ productDetails }) => {   
  return (
      <div>
        { productDetails.description }
      </div>         
  );
};

export default ProductDescriptionContent;