import { useNavigate } from 'react-router-dom';
import cl from './MainPage.module.css'

const MainPage = () => {

    const navigate = useNavigate()

  return (
    <div className={cl.main__body}>
      <img className={cl.image} src='./vatra_logo.png' alt='Project logo'/>
      <h1>Vatra Forum</h1>
      <p className={cl.bottom__text}>Pre-beta version 0.0.1v</p>
      <button onClick={() => navigate('/topics')} className={cl.button}>To General Page</button>
    </div>
  );
};

export default MainPage;
