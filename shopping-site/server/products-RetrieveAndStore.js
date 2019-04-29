"use strict";
  const products = require('./products');
  function retrieveProductDetailsRow1(image) {
    return products.productsRow1.find( details => details.image === image );
  }
  function retrieveProductDetailsRow2(image) {
    return products.productsRow2.find( details => details.image === image );
  }
  function retrieveProductDetailsRow3(image) {
    return products.productsRow3.find( details => details.image === image );
  }
  const productRetreiveAndStore = {
    retrieveProductDetailsRow1,
    retrieveProductDetailsRow2,
    retrieveProductDetailsRow3
};
  module.exports = productRetreiveAndStore;