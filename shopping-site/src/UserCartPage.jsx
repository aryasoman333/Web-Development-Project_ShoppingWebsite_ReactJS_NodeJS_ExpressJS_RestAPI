import React from 'react';
import UserCartPageProductList from './UserCartPageProductList';

const DetailsPage = ({ productsInCart }) => {   
  return (
    <div className="userCart-page"> 
      <UserCartPageProductList productsInCart={ productsInCart }/>        
    </div>
  );
};

export default DetailsPage;

