import React from 'react';
import WelcomeUser from './WelcomeUser';
import AlertMessage from './AlertMessage';

const WelcomeHeader = ({ userName, alertMessage }) => {
    return (
        <div className="welcome-header">
            <WelcomeUser userName={ userName } />
            <AlertMessage alertMessage={ alertMessage } />
        </div>
  );
};

export default WelcomeHeader;