"use strict";
const express = require('express');
const app = express();
const PORT = 4000;
const productsRetrieveAndStore = require('./products-RetrieveAndStore');
const path = require('path');
const products = require('./products');
const cartRetrieveAndStore = require('./cart-RetrieveAndStore');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/productDetails', express.json(), (req, res) => {
  const  productImage = req.body.productImage;
  const  productRow = req.body.productRow;  
  if(productImage === undefined || productRow === undefined)
  res.status(400).json({error: "Invalid request! Unable to fetch the product details!"});
  else if(productRow === "row1"){
    const details = productsRetrieveAndStore.retrieveProductDetailsRow1(productImage);
    res.json(details);
  }   
  else if(productRow === "row2"){
    const details = productsRetrieveAndStore.retrieveProductDetailsRow2(productImage);
    res.json(details);
  }    
  else {
    const details = productsRetrieveAndStore.retrieveProductDetailsRow3(productImage);
    res.json(details);
  }    
});

app.get('/products/:row/',(req, res) => {
  if(req.params.row !== "row1" && req.params.row !== "row2" && req.params.row !== "row3")
    res.status(400).json({error: "Invalid request! Unable to fetch the products!"});
  else if(req.params.row === "row1"){
    const row1 = products.productsRow1;
    res.json(row1);
 }
  else if(req.params.row === "row2"){
    const row2 = products.productsRow2;
    res.json(row2);
  }    
  else{
    const row3 = products.productsRow3;
    res.json(row3);
  } 
});

app.post('/addToCart/', express.json(), (req, res) => {  
  const  userName = req.body.userName;
  const  image = req.body.image;
  const  price = req.body.price;
  const  name = req.body.productName;
  if(userName === undefined || image === undefined || price === undefined || name === undefined)
     res.status(400).json({error: "Invalid request! Product not available!"});
  else{
    cartRetrieveAndStore.addproductToCart({userName, image, price, name})
    res.sendStatus(200);
  }      
});

app.get('/productsFromCart/:userName/',(req, res) => {
  const userName = req.params.userName;
  if(userName === undefined)
    res.status(400).json({error: "Invalid request! Unable to fetch the products!"});    
  else{
    const productsFromCart = cartRetrieveAndStore.retrieveproductsFromCart(userName);
    res.json(productsFromCart);    
  } 
});
app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );