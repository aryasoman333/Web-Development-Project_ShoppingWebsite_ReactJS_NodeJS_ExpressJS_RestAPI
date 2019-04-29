import React from 'react';

const HomeButton = ({ goToHomePage }) => {
    return (
        <button className="page-navigation" onClick={ goToHomePage }>HOME</button>
    );
};

export default HomeButton;