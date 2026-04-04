import React from 'react';
import { useLoaderData, useLocation } from 'react-router';
import User from '../User/User';

const Users = () => {
    const data = useLoaderData()
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>this is users pages</h1>
            <div className="grid grid-cols-3 gap-3">
                {
                    data.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;