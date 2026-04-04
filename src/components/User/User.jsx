import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    return (
        <div className='border-2 border-success m-4 p-5 rounded-md'>
            <h2>{user.name}</h2>
            <h2>{user.website}</h2>
            <Link to={`/main/users/${user.id}`} className='btn mt-5'>Click me </Link>
        </div>
    );
};

export default User;