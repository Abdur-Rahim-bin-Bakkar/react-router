import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const data = useLoaderData()
    console.log(data)
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