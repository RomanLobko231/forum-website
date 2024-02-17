import { useEffect, useState } from 'react';
import cl from './LoginRegisterModal.module.css'
import { useForm } from 'react-hook-form';
import TextInput from '../inputField/TextInput';
import { useAuth } from '../../../hooks/useAuth';
import { TailSpin } from 'react-loader-spinner';
import InputError from '../inputError/InputError';
import AuthService from '../../../API/AuthService';
import { useFetching } from '../../../hooks/useFetching';

const LoginContent = ({ setModalContentType, toggleModal }) => {

    const [isSafeToReset, setIsSafeToReset] = useState(false);
    const { login } = useAuth();
    const [loginUser, isLoading, error] = useFetching(async (userInfo) => {
        const user = await AuthService.loginUser(userInfo)
        login(user)
        toggleModal();
        setModalContentType("login")
        setIsSafeToReset(true);

    })

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm();


    useEffect(() => {
        if (!isSafeToReset) return;
        reset();
        setIsSafeToReset(false);
    }, [isSafeToReset])


    const onSubmit = (userInfo) => {
        loginUser(userInfo)
    }


    const username = watch("username");
    const email = watch("email");

    const atLeastOneIsPresent = (username, email) => {
        return username || email;
    };


    return (
        <div className={cl.container}>
            <form className={cl.container} onSubmit={handleSubmit(onSubmit)}>
                {error && <InputError errorMessage={error.message} />}
                <TextInput
                    type='text'
                    autocomplete='off'
                    placeholder='Username'
                    disabled={email}
                    registerName='username'
                    register={register}
                    errors={errors}
                    constraints={{
                        required: atLeastOneIsPresent(username, email) ? false : 'At least one value should be present'
                    }
                    }
                />
                <p style={{marginTop: '0'}}>or</p>
                <TextInput
                    type='text'
                    autocomplete='email'
                    placeholder='Email'
                    disabled={username}
                    registerName='email'
                    register={register}
                    errors={errors}
                    constraints={{
                        required: atLeastOneIsPresent(username, email) ? false : 'At least one value should be present'
                    }
                    }
                />
                <TextInput
                    type='password'
                    autocomplete='current-password'
                    placeholder='Password'
                    registerName='password'
                    register={register}
                    errors={errors}
                    constraints={{
                        required: "This field is required"
                    }
                    }
                />
                <p className={cl.forgot__password} onClick={() => setModalContentType("forgot_password")}>Forgot password?</p>
                {isLoading
                    ? <TailSpin
                        visible={true}
                        height="48"
                        width="48"
                        color="#4285f4"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                    : <button className='button' disabled={isLoading} type='submit'>Sign In</button>
                }
            </form>
        </div>
    );
};

export default LoginContent;
