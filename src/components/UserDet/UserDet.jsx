import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation, useParams } from 'react-router';
import User from '../User/User';
import { BiLeftArrow } from 'react-icons/bi';

const UserDet = () => {
    const data = useLoaderData()
    // console.log(data)
    const navigate = useNavigate()
    const [datas, setDatas] =useState({})
    const navigating = useNavigation()
    const params = useParams()
    console.log(navigating.state)
    console.log(navigating.location)
    console.log(params)
    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${data}`).then(res => res.json())
        .then( res2 => setDatas(res2))
    },[])
    return (
        <div>
            <h1>user Det</h1>
            <div className="border m-6 p-3">
                <BiLeftArrow onClick={()=> navigate(-2)}/>
                <h2>{datas.name}</h2>
                <button className='btn' onClick={()=> navigate(-1)}>Go Back</button>
            </div>
            
        </div>
    );
};

export default UserDet;