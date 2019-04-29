import React from 'react';

const LogoutButton = ({ logoutUser }) => {
    return (
        <button className="page-navigation" onClick={ logoutUser }>LOGOUT</button>
    );
};

export default LogoutButton;