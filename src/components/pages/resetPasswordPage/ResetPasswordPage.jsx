import { useLocation } from "react-router-dom";
import cl from './ResetPasswordPage.module.css'
import AuthService from "../../../API/AuthService";
import InputError from "../../UI/inputError/InputError";
import { useForm } from "react-hook-form";
import { useFetching } from "../../../hooks/useFetching";
import ErrorComponent from "../../UI/errorComponent/ErrorComponent";
import SubmitButton from "../../UI/submitButton/SubmitButton";
import { useState } from "react";

const ResetPasswordPage = () => {

    const location = useLocation();
    const [success, setSuccess] = useState(false);
    const [resetPassword, isLoading, error] = useFetching(async (token, newPassword) => {
        const resetPasswordInfo = {token: token, newPassword: newPassword}
        await AuthService.sendNewPassword(resetPasswordInfo);
        setSuccess(true);
    })


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const password = watch("password");

    const onSubmit = (passwords) =>{
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        resetPassword(token, passwords.password);
    }

    if(error){
        return (
            <ErrorComponent error={error}/>
        );
    }


  return (
    <div className={cl.container}>
      <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={cl.passwords__container}>
                <input className={cl.password1}
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    {...register("password", {
                        required: "Password field is required",
                        minLength: {
                            value: 8,
                            message: "Password must have more than 8 characters"
                        },
                        maxLength: {
                            value: 40,
                            message: "Password must not exceed 40 characters"
                        }
                    })}

                />
                <input className={cl.password2}
                    type="password"
                    placeholder="Repeat password"
                    autoComplete="off"
                    {...register("checkPassword", {
                        required: "Repeat password field is required",
                        validate: value =>
                            value === password || "The passwords do not match"
                    })}

                />
                {errors.password && <InputError errorMessage={errors?.password?.message}/>}
                {errors.checkPassword && <InputError errorMessage={errors.checkPassword.message}/>}
                </div>
                {success 
                ? <p>Password successfuly reseted!</p>
                : <SubmitButton isLoading={isLoading} buttonText="Reset"/>
                }
      </form>
    </div>
  );
};

export default ResetPasswordPage;
