import React from 'react';
import User from './User';
const Header = ({name,age}) => {
    return (
        <div className='header'>
            <h1>Header</h1>
            <User name={name} age={age}  />
        </div>
    );
};

export default Header;