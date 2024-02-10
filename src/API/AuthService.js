import api from './api';

export default class AuthService{

    static async registerUser(userInfo){
        const response = await api.post("/auth/register", userInfo)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
        return response;
    }

    static async loginUser(userInfo){
        const response = await api.post("/auth/login", userInfo)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
        return response;
    }
}