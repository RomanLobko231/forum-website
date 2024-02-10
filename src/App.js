import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/pages/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { ModalProvider } from './context/ModalProvider';
import LoginRegisterModal from './components/UI/loginRegisterModal/LoginRegisterModal';

function App() {
  return (
    <ModalProvider>
              <LoginRegisterModal/>

      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </ModalProvider>

  );
}

export default App;
