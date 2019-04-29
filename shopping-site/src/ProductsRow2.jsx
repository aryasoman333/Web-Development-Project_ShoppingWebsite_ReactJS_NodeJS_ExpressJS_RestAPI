import React from 'react';
import ProductColumn from './ProductColumn';

const ProductsRow1 = ({ addProductToCart, showProductDetails, productsRow2 }) => {
    const productList = productsRow2.map((productRow2, index) =>
           <li key={index}> 
               <ProductColumn addProductToCart ={ addProductToCart } row = "row2" showProductDetails={ showProductDetails } productRow={ productRow2 }/>
           </li>);
    return (
        <ul className="product-rows">
            { productList }               
        </ul>
        );
};

export default ProductsRow1;