import { useAuth } from '../hooks/useAuth';
import React from 'react';
import api from './api';



export default class AuthService{

    static async registerUser(userInfo){
        const user = await api.post("/auth/register", userInfo)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
        return user;
    }

    static async loginUser(userInfo){
        const user = await api.post("/auth/login", userInfo)
        .then((response) => {
            return(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
        return user;
    }
}