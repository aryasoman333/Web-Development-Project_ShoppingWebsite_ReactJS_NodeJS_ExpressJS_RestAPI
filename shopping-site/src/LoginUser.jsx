import React from 'react';
import LoginButton from './LoginButton';
import UserName from './UserName';

const LoginUser = ({ loginUser, recordUserName, userName }) => {   
  return (
      <div className="login-user">         
        <UserName userName={ userName } recordUserName= { recordUserName }/>
        <LoginButton loginUser={ loginUser } userName={ userName }/>  
      </div>  
    );
};

export default LoginUser;