import { useState } from 'react';
import cl from './LoginRegisterModal.module.css'
import { useForm } from 'react-hook-form';
import TextInput from '../inputField/TextInput';
import InputError from '../inputError/InputError';
import api from './../../../API/api';
import { TailSpin } from 'react-loader-spinner';
import AuthService from '../../../API/AuthService';
import { useFetching } from '../../../hooks/useFetching';


const RegisterContent = ({ setModalContentType }) => {


    const [registerUser, isLoading, error] = useFetching(async (userInfo) => {
        await AuthService.registerUser(userInfo)
        setModalContentType("confirm_email")
    })


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const password = watch("password");

    const onSubmit = (userInfo) => {
       const user = registerUser(userInfo);
    };
    return (
        <div className={cl.container}>
            <form className={cl.container} onSubmit={handleSubmit(onSubmit)}>
                {error && <InputError errorMessage={error.message}/>}
                <TextInput
                    type='text'
                    autocomplete='name'
                    placeholder='Username'
                    registerName='username'
                    register={register}
                    errors={errors}
                    constraints={{
                        required: "This field is required",
                        minLength: {
                            value: 3,
                            message: "Username must have more than 3 characters"
                        },
                        maxLength: {
                            value: 20,
                            message: "Username must not exceed 20 characters"
                        }
                    }
                    }
                />
                <TextInput
                type='text'
                autocomplete='email'
                placeholder='Email'
                registerName='email'
                register={register}
                errors={errors}
                constraints={{
                    required: "This field is required"
                }
                }
                />
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
                <div className={cl.terms__conditions__container}>
                <input
                type='checkbox'
                {...register("acceptConditions", { required: true })}
                />
                <p>I accept <a href={ window.location.origin + '/terms-conditions'} target="_blank" rel="noopener noreferrer">terms and conditions</a></p>
                </div>
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
                : <button className='button' disabled={isLoading} type='submit'>Sign Up</button>
                }
            </form>

        </div>
    );
};

export default RegisterContent;
