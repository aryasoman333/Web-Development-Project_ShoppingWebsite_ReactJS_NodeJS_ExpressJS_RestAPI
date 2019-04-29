import React from 'react';

const ShoppingCartButton = ({ userName, goToOrdersPage }) => {
    return (
        <button className="page-navigation"><img src={require('./images/cart-icon.png')} alt="product" width="40" height="40" id={userName} onClick={(e) => goToOrdersPage(e)}/></button>
    );
};

export default ShoppingCartButton;