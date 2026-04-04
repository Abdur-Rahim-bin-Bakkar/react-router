import React, { use } from 'react';

const Users2 = ({data}) => {
    const fetchData = use(data)
    console.log(fetchData)
    return (
        <div>
            <h1>i am user 2</h1>
        </div>
    );
};

export default Users2;