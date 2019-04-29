"use strict";
const cart = require('./cart');
   
function addproductToCart({ userName, image, price, name }) {
    cart.productsInCart.push({userName, image, price, name});
  }

function retrieveproductsFromCart(userName) {
    return cart.productsInCart.filter( products => products.userName === userName );
  }
  
const cartRetreiveAndStore = {
    addproductToCart,
    retrieveproductsFromCart
};
  module.exports = cartRetreiveAndStore;