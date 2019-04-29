import React from 'react';
import ProductColumn from './ProductColumn';

const ProductsRow1 = ({ addProductToCart, showProductDetails, productsRow1 }) => {
    const productList = productsRow1.map((productRow1, index) =>
           <li key={index}> 
               <ProductColumn addProductToCart={ addProductToCart } row = "row1" showProductDetails={ showProductDetails } productRow={ productRow1 }/>
           </li>);
    return (
        <ul className="product-rows">
            { productList }               
        </ul>
        );
};

export default ProductsRow1;