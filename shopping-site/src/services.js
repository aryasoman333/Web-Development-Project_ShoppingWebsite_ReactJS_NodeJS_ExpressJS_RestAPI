export const getProductDetails = ( productImage, productRow ) => {
  return fetch('/productDetails/',{        
    method: 'POST',
    headers: new Headers({
      'content-type' : 'application/json'
    }),           
    body: JSON.stringify({productImage, productRow})
  })
  .catch( err => 
    {
      if(err.error === undefined)
        err.error = 'Network error! Please try again later!';
    })
  .then( response => {
    if(response.ok) {
      return response.json();
    }
    return response.json().then(err => Promise.reject(err));
  });
}

export const getProductsRow1 = () => {
  return fetch('/products/row1')
  .catch( err => 
    {
      if(err.error === undefined)
        err.error = 'Network error! Please try again later!';
    })
  .then(response => {
    if(response.ok)
        return response.json();
    return response.json().then(err => Promise.reject(err));
  })  
};

export const getProductsRow2 = () => {
  return fetch('/products/row2')
  .catch( err => 
    {
      if(err.error === undefined)
        err.error = 'Network error! Please try again later!';
    })
  .then(response => {
    if(response.ok)
            return response.json();
    return response.json().then(err => Promise.reject(err));
  })  
};

export const getProductsRow3 = () => {
  return fetch('/products/row3')
  .catch( err => 
    {
      if(err.error === undefined)
        err.error = 'Network error! Please try again later!';
    })
  .then(response => {
    if(response.ok)
            return response.json();
    return response.json().then(err => Promise.reject(err));
  })  
};

export const addProductsToCart = ( userName, image, price, productName ) => {
  return fetch('/addToCart/',{        
    method: 'POST',
    headers: new Headers({
      'content-type' : 'application/json'
    }),           
    body: JSON.stringify({userName, image, price, productName})
  })
  .catch( err => 
    {
      if(err.error === undefined)
        err.error = 'Network error! Please try again later!';
    })
  .then( response => {
    if(response.ok) {
      return;
    }
  return response.json().then(err => Promise.reject(err));
  });
};

export const getProductsfromCart = ( userName ) => {
  return fetch(`/productsFromCart/${userName}`)
  .catch( err => 
    {
      if(err.error === undefined)
        err.error = 'Network error! Please try again later!';
    })
  .then(response => {
    if(response.ok)
            return response.json();
    return response.json().then(err => Promise.reject(err));
  })  
};