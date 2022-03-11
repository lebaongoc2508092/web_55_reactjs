import { useEffect } from 'react';
import axiosInstance from './axios';
const Users = () => {
    useEffect(() => {
        axiosInstance
        .get('/api', {
            params : {
                results: 10,
            },
        })
        .then((res) => {
            console.log(res.data) 
        });    
    }, []);
    return (
        <div></div>
    );
};

export default Users;