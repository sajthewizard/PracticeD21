import React from 'react';
import PropTypes from 'prop-types';
import profile from '../../assets/images/profile.png'

const Header = props => {
    return (
        <div className='flex justify-between m-4 p-4 border-b-2 l'>
            <h1 className='text-6xl text-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;