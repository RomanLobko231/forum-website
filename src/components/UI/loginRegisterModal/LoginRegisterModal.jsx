import { useState } from "react";
import Modal from "../modal/Modal";
import cl from './LoginRegisterModal.module.css'
import LoginContent from "./LoginContent";
import RegisterContent from "./RegisterContent";
import { useModal } from "../../../context/ModalProvider";
import AuthService from "../../../API/AuthService";

const LoginRegisterModal = () => {

    const { isModalOpen, toggleModal} = useModal();
    const [modalContentType, setModalContentType] = useState("login")

    const registerUser = async (userInfo) => {
        const response = await AuthService.registerUser(userInfo)
        toggleModal();
        setModalContentType("login")
    }

    const loginUser = async (userInfo) => {
        const response = await AuthService.loginUser(userInfo)
        toggleModal();
    }

    return (
        <Modal visible={isModalOpen} setVisible={toggleModal}>
            <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={cl.container}>
                    <div className={cl.buttons}>
                <button className={modalContentType === "login" ? cl.left__button__active : cl.left__button} onClick={() => setModalContentType("login")}>Sign In</button>
                <button className={modalContentType === "register" ? cl.right__button__active  : cl.right__button} onClick={() => setModalContentType("register")}>Sign Up</button>
            </div>
            {modalContentType === "login" 
            ? <LoginContent loginUser={loginUser}/>
            : <RegisterContent registerUser={registerUser}/>
            }
            </div>
            
                </div>
            
            
        </Modal>


    );

};

export default LoginRegisterModal;
