import cl from './InputError.module.css'
import { BiError } from "react-icons/bi";


const InputError = ({errorMessage}) => {
  return (
    <div className={cl.error__container}>
                     <BiError height='auto' color='brown'/>
                    <p className={cl.error__message}>{errorMessage}</p>
                </div>
  );
};

export default InputError;
