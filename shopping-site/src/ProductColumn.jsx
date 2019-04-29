import React from 'react';
import AddToCartButton from './AddToCartButton';
import ProductImage from './ProductImage';

const productColumn = ({ addProductToCart, row, showProductDetails, productRow }) => {
            return (
                <div className="product-columns">
                    <div className="image-thumbnail">
                    <ProductImage row = {row} showProductDetails={ showProductDetails } productRow= { productRow }/>
                    </div> 
                    <div>
                    <AddToCartButton row = {row} addProductToCart={ addProductToCart } productRow= { productRow }/>
                    </div>
                </div>         
            );
        };

export default productColumn;