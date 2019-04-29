import React from 'react';

const AddToCartButton = ({ row, addProductToCart, productRow }) => {
      return (
        <div>    
            <button className="add-to-cart" id={ productRow.image } name={ row } type="submit" onClick={(e) => addProductToCart(e)} >Add to cart</button>             
        </div>
        );
    };

export default AddToCartButton;