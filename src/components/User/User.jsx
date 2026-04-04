import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({user}) => {
    const navigate = useNavigate()
    return (
        <div className='border-2 border-success m-4 p-5 rounded-md'>
            <h2>{user.name}</h2>
            <h2>{user.website}</h2>
            <Link to={`/main/${user.id}`} className='btn mt-5'>Click me </Link>
            <button className='btn' onClick={()=> navigate(`/main/${user.id}`)}>Click me 2</button>
            <button className='btn' onClick={()=>navigate(-1)}>back</button>
        </div>
    );
};

export default User;