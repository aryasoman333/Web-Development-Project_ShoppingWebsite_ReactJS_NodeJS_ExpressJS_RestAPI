import React from 'react';

const UserName = ({ userName, recordUserName }) => {   
  return (        
        <input className="user-name" name = "username" value={ userName } placeholder="Enter username" onChange={(e) => recordUserName(e)}/>
  );
};

export default UserName;