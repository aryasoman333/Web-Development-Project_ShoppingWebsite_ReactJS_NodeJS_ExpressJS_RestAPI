import React from 'react';
import CompanyLogo from './CompanyLogo';
import CompanyName from './CompanyName';
import CompanyDescription from './CompanyDescription';

const CompanyInformation = () => {
    return (
            <div className="company-info">
                <CompanyLogo />
                <CompanyName />
                <CompanyDescription />                        
            </div>
           );
};
export default CompanyInformation;