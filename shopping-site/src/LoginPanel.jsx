import React from 'react';
import LoginUser from './LoginUser';
import WelcomeMessage from './WelcomeMessage';

const LoginPanel = ({ loginUser, recordUserName, userName }) => {   
  return (
    <div className="login-panel"> 
      <LoginUser loginUser={ loginUser } recordUserName={ recordUserName } userName={ userName }/>  
      <WelcomeMessage />
    </div>
  );
};

export default LoginPanel;