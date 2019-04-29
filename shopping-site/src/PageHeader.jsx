import React from 'react';
import ApplicationHeader from './ApplicationHeader';
import WelcomeHeader from './WelcomeHeader';

const PageHeader = ({ userName, logoutUser, goToHomePage, goToOrdersPage,alertMessage }) => {
    return (
    <div className="header">
        <ApplicationHeader userName={ userName } logoutUser={ logoutUser } goToHomePage={ goToHomePage } goToOrdersPage={ goToOrdersPage }/>
        <WelcomeHeader userName={ userName } alertMessage={ alertMessage }/>                
    </div>
  );
};

export default PageHeader;