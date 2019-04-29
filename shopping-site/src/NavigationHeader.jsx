import React from 'react';
import LogoutButton from './LogoutButton';
import ShoppingCartButton from './ShoppingCartButton';
import HomeButton from './HomeButton';

const NavigationHeader = ({ userName, logoutUser, goToHomePage, goToOrdersPage }) => {
    return (
            <div className="navigation-header">
                <HomeButton goToHomePage={ goToHomePage } />
                <ShoppingCartButton userName={ userName } goToOrdersPage={ goToOrdersPage } />
                <LogoutButton logoutUser={ logoutUser } />
            </div>  
  );
};

export default NavigationHeader;