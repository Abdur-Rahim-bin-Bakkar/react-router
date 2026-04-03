import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex gap-4 p-4'>
            <NavLink to={'/'}>App</NavLink>
            <NavLink to="/main">Home</NavLink>
            <NavLink to={'/main/about'}>About</NavLink>
            <NavLink to={'/main/mobile'}>Mobile</NavLink>
            <NavLink to='/main/laptop'>Laptop</NavLink>
        </div>
    );
};

export default Navbar;