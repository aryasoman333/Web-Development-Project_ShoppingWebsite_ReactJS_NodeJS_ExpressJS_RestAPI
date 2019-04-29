import React from 'react';
import ProductsRow1 from './ProductsRow1';
import ProductsRow2 from './ProductsRow2';
import ProductsRow3 from './ProductsRow3';

const ProductPanel = ({ addProductToCart, showProductDetails, productsRow1, productsRow2, productsRow3 }) => {
     return (
        <div className="product-panel">
           <ProductsRow1 addProductToCart = { addProductToCart } showProductDetails = { showProductDetails } productsRow1={ productsRow1 }/>
           <ProductsRow2 addProductToCart = { addProductToCart } showProductDetails = { showProductDetails } productsRow2={ productsRow2 }/>
           <ProductsRow3 addProductToCart = { addProductToCart } showProductDetails = { showProductDetails } productsRow3={ productsRow3 }/>
        </div> 
    );
};
export default ProductPanel;