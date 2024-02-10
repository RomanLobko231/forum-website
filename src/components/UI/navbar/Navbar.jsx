import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GiCampfire } from "react-icons/gi";
import cl from "./Navbar.module.css"
import { useState } from "react";
import { useModal } from "../../../context/ModalProvider";

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const { isModalOpen, toggleModal } = useModal();

    const handleShowNavbar = () => {
        if(window.innerWidth < 768) setVisible(!visible)
    }
    return (
        <div className={visible ? cl.container__active : cl.container}>
            <nav className={visible ? cl.nav__active : cl.nav}>
            <GiCampfire className={visible ? cl.fire__icon__active : cl.fire__icon}/>
                <div className={cl.bars}>
                    <FaBars className={cl.icon} onClick={handleShowNavbar}/>
                </div>
                <div className= {visible ? cl.nav__menu__active : cl.nav__menu}> 
                    <Link to="/topics" onClick={handleShowNavbar}>
                        Topics
                    </Link>
                    <Link to="/main" onClick={handleShowNavbar}>
                        Main
                    </Link>
                    <button className={cl.button} onClick={toggleModal}>Log In</button>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;
