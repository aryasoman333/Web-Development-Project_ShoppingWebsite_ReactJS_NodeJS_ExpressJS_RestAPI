import React from 'react';

const ProductDetailsImage = ({ productDetails }) => {
    return (
        <div className="product-image"> 
            <img className="image" src={require("" + productDetails.image )} alt="product" width="400" height="400"/>
        </div>
    );
};

export default ProductDetailsImage;