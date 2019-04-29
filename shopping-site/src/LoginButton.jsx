import React from 'react';

const LoginButton = ({loginUser, userName}) => {   
  return (
    <button type="submit" onClick={ loginUser } disabled={!userName}>Login</button>
  );
};

export default LoginButton;