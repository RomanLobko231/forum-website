import { useAuth } from '../hooks/useAuth';
import React from 'react';
import api from './api';



export default class AuthService{

    static async registerUser(userInfo){
        return await api.post("/auth/register", userInfo)
        .then((response) => {
            return response.data;
        })
    }

    static async loginUser(userInfo){
        return await api.post("/auth/login", userInfo)
        .then((response) => {
            return(response.data)
        })
    }

    static async verifyUser(token){
        return await api.post("/auth/verify?token=" + token)
        .then((response) => {
            console.log(response.data)
            return(response)
        })
    }
}