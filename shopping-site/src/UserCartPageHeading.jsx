import React from 'react';

const UserCartPageHeading = ({ userName, productsInCart }) => {   
  
  return (
   
        <div className="heading"> 
           <h1>Welcome to {userName}'s cart</h1>
           <h1> { productsInCart.productName }</h1>
        </div>  
        
  );
};

export default UserCartPageHeading;