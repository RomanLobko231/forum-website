import { useState } from 'react';
import cl from './LoginRegisterModal.module.css'
import { useForm } from 'react-hook-form';
import TextInput from '../inputField/TextInput';

const LoginContent = ({ loginUser }) => {
    const onSubmit = (userInfo) => {
        // loginUser(userInfo)
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    return (
        <div className={cl.container}>
            <form className={cl.container} onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    type='text'
                    autocomplete='name'
                    placeholder='Username'
                    registerName='username'
                    register={register}
                    errors={errors}
                    constraints={{
                        required: "This field is required"
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
                <button className='button' type='submit'>Sign In</button>
            </form>
        </div>
    );
};

export default LoginContent;
