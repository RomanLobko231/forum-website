import { useLocation } from "react-router-dom";
import AuthService from "../../../API/AuthService";
import { useAuth } from "../../../hooks/useAuth";
import { useFetching } from "../../../hooks/useFetching";
import { useEffect, useState } from "react";
import cl from './VerifyPage.module.css'
import { TailSpin } from "react-loader-spinner";
import ErrorComponent from "../../UI/errorComponent/ErrorComponent";

const VerifyPage = () => {

    const location = useLocation();
    const [verifyUser, isLoading, error] = useFetching(async (token) => {
        await AuthService.verifyUser(token);
    })

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');
        verifyUser(token);

    }, [location]);

    if(error){
        return (
            <ErrorComponent error={error}/>
        );
    }


    return (
        <div className={cl.container}>
            {isLoading
                ? <TailSpin
                    visible={true}
                    height="50"
                    width="50"
                    color="#4285f4"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{ marginTop: '5%' }}
                    wrapperClass=""
                />
                : <p>Verification Complete!</p>
            }
        </div>
    );
};

export default VerifyPage;
