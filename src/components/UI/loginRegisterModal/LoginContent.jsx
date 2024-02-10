import { useState } from 'react';
import cl from './LoginRegisterModal.module.css'

const LoginContent = ({loginUser}) => {
    const [userInfo, setUserInfo] = useState({ username: '', password: ''})

    const login = (e) => {
        e.preventDefault();
        if(userInfo.username.trim() === '' || userInfo.password.trim() === '') {
            alert("Check that all fields are not empty")
        } else {
         loginUser(userInfo)
        setUserInfo({ username: '', password: ''})   
        }
    }

    return (
      <div className={cl.container}>
        <form className={cl.container} onSubmit={login}>
            <input className={cl.input}
                      type="text"
                      value={userInfo.username}
                      onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
                      placeholder="Username"
                  />
                  <input className={cl.input}
                      type="password"
                      value={userInfo.password}
                      onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                      placeholder="Password"
                      autoComplete='off'
                  />
                  <button className='button' type='submit'>Sign In</button>
        </form>
              </div>
    );
};

export default LoginContent;
