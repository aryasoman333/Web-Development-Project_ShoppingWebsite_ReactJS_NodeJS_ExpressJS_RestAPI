import React from 'react';
import LoginPanel from './LoginPanel';

const LoginPage = ({ loginUser, recordUserName, userName }) => {   
  return (
    <LoginPanel loginUser={ loginUser } recordUserName={ recordUserName } userName={ userName } />
  );
};

export default LoginPage;