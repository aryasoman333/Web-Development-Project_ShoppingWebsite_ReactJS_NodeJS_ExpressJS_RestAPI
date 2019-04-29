import React from 'react';

const ProductImage = ({ row, showProductDetails, productRow }) => {
    return (        
        <button onClick={(e) => showProductDetails(e)} className="product" >
            <img  id={ productRow.image } name={ row } alt="product" src={require("" + productRow.image )} width="200" height="200"/>
        </button>
    );
};

export default ProductImage;