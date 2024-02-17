import { useForm } from "react-hook-form";
import cl from './LoginRegisterModal.module.css'
import TextInput from "../inputField/TextInput";
import AuthService from "../../../API/AuthService";
import { useFetching } from "../../../hooks/useFetching";

const ForgotPassword = ({ setModalContentType, toggleModal}) => {

    const [sendResetEmail, isLoading, error] = useFetching(async (email) => {
        await AuthService.sendResetEmail()
        toggleModal();
        setModalContentType("login")
    })

    const onSubmit = (email) => {
        sendResetEmail(email)
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    return (
        <div className={cl.container}>
            <form className={cl.container} onSubmit={handleSubmit(onSubmit)}>
                <p>A link for password restoring will be send to your address:</p>
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
                <button className='button' type='submit'>Send Email</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
