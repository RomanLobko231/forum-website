import { useState } from 'react';
import cl from './LoginRegisterModal.module.css'

const RegisterContent = ({registerUser}) => {
    const [userInfo, setUserInfo] = useState({ username: '', password: '', checkPassword: '', email: '' })

    const checkAndRegisterUser = (e) => {
        e.preventDefault();
        if(userInfo.username.length < 3 || userInfo.username.length > 20) {
            alert("Username should be between 3 and 20 characters")
        } else if (userInfo.password.length < 8 || userInfo.password.length > 40){
            alert("Password should be between 6 and 40 characters")
        } else if (userInfo.password !== userInfo.checkPassword){
            alert("Passwords do not match!")
        } else {
            registerUser(userInfo);
            setUserInfo({ username: '', password: '', checkPassword: '', email: '' })
        }
    }

  return (
    <div className={cl.container}>
        <form className={cl.container} onSubmit={checkAndRegisterUser}>
        <input className={cl.input}
                    type="text"
                    value={userInfo.username}
                    onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
                    placeholder="Username"
                />
                <input className={cl.input}
                    type="text"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    placeholder="Email"
                />
                <input className={cl.password1}
                    type="password"
                    value={userInfo.password}
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                    placeholder="Password"
                    autoComplete="off"

                />
                <input className={cl.password2}
                    type="password"
                    value={userInfo.checkPassword}
                    onChange={(e) => setUserInfo({ ...userInfo, checkPassword: e.target.value })}
                    placeholder="Repeat password"
                    autoComplete="off"
                />
                <button className='button' type='submit'>Sign Up</button>
        </form>
                
            </div>
  );
};

export default RegisterContent;
