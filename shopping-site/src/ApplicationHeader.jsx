import React from 'react';
import CompanyInformation from './CompanyInformation';
import NavigationHeader from './NavigationHeader';


const ApplicationHeader = ({ userName, logoutUser, goToHomePage, goToOrdersPage }) => {
    return (
        <div className="Application-header">
            <CompanyInformation />
            <NavigationHeader userName={ userName } logoutUser={ logoutUser } goToHomePage={ goToHomePage } goToOrdersPage={ goToOrdersPage } />    
        </div>
  );
};
export default ApplicationHeader;