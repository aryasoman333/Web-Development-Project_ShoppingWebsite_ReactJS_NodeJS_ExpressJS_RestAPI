import React from 'react';

const UserCartPageThumbnail = ({ productInCart }) => {   
  return (
    <div className="product-thumbnail">
      <img className="image-thumbnail" src={require("" + productInCart.image )} alt="product" width="100" height="100"/>
    </div>
    );
};

export default UserCartPageThumbnail;