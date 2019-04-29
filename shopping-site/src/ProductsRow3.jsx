import React from 'react';
import ProductColumn from './ProductColumn';

const ProductsRow1 = ({ addProductToCart, showProductDetails, productsRow3 }) => {
    const productList = productsRow3.map((productRow3, index) =>
           <li key={index}> 
               <ProductColumn addProductToCart={ addProductToCart } row = "row3" showProductDetails={ showProductDetails } productRow={ productRow3 }/>
           </li>);
    return (
        <ul className="product-rows">
            { productList }               
        </ul>
        );
};

export default ProductsRow1;