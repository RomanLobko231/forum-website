import cl from './TextInput.module.css'
import InputError from '../inputError/InputError';

const TextInput = ({ type, autocomplete, placeholder, registerName, constraints, register, errors, inputStyle }) => {


    return (
        <div className={cl.input__container}>
            <input className={inputStyle == null ? cl.input : inputStyle}
                autoComplete={autocomplete}
                type={type}
                placeholder={placeholder}
                {...register(registerName, constraints)}
            />
            {errors[registerName] && <InputError errorMessage={errors[registerName].message}/>
            }
        </div>
    );
};

export default TextInput;
