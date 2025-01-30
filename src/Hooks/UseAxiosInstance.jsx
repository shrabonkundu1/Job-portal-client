import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-phi-five.vercel.app',
    withCredentials: true
})
const UseAxiosInstance = () => {

    const {logOutUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        },error => {
            if(error.status === 401 || error.status === 403){
                logOutUser()
                .then(() =>{
                    navigate('/login')
                })
                .catch(err => console.log(err))
            }
            return Promise.reject(error)
        })
    },[])


    return axiosInstance
};

export default UseAxiosInstance;