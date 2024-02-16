import { useState } from "react";
import Modal from "../modal/Modal";
import cl from './LoginRegisterModal.module.css'
import LoginContent from "./LoginContent";
import RegisterContent from "./RegisterContent";
import { useModal } from "../../../context/ModalProvider";
import AuthService from "../../../API/AuthService";
import { useAuth } from "../../../hooks/useAuth";
import InputError from "../inputError/InputError";
import { useFetching } from "../../../hooks/useFetching";

const LoginRegisterModal = () => {

    const { isModalOpen, toggleModal } = useModal();
    const [modalContentType, setModalContentType] = useState("login")

    const setModalOpen = () => {
        toggleModal()
        setModalContentType("login")
    }

    const renderContent = () => {
        switch (modalContentType) {
          case 'login':
            return <LoginContent setModalContentType={setModalContentType} toggleModal={toggleModal}/>;
          case 'register':
            return <RegisterContent setModalContentType={setModalContentType}/>;
          case 'confirm_email':
            return <div>
                <p>Nice!<br/>The only thing left is to confirm the email address, and log in after that<br/>Looking forward to see you in a few seconds :)</p>
                <button>Close</button>
            </div>;
          default:
            return <div>An error happened, please reload the page or contact us</div>;
        }
      };

    return (
        <Modal visible={isModalOpen} setVisible={setModalOpen}>
            <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={cl.container}>
                    <div className={cl.buttons}>
                        <button className={modalContentType === "login" ? cl.left__button__active : cl.left__button} onClick={() => setModalContentType("login")}>Sign In</button>
                        <button className={modalContentType === "register" ? cl.right__button__active : cl.right__button} onClick={() => setModalContentType("register")}>Sign Up</button>
                    </div>
                    {renderContent()}
                </div>
            </div>
        </Modal>
    );
};

export default LoginRegisterModal;
