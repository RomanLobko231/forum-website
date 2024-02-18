import { useForm } from "react-hook-form";
import cl from './LoginRegisterModal.module.css'
import TextInput from "../inputField/TextInput";
import AuthService from "../../../API/AuthService";
import { useFetching } from "../../../hooks/useFetching";
import InputError from "../inputError/InputError";
import { TailSpin } from "react-loader-spinner";
import SubmitButton from "../submitButton/SubmitButton";

const ForgotPassword = ({ setModalContentType, toggleModal }) => {

    const [sendResetEmail, isLoading, error] = useFetching(async (email) => {
        await AuthService.sendResetEmail(email)
        toggleModal();
        setModalContentType("login")
    })

    const onSubmit = (data) => {
        sendResetEmail(data.email)
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
                {error && <InputError errorMessage={error.message}/>}
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
                <SubmitButton isLoading={isLoading} buttonText="Send Email"/>
            </form>
        </div>
    );
};

export default ForgotPassword;
