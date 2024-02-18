import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/pages/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { ModalProvider } from './context/ModalProvider';
import LoginRegisterModal from './components/UI/authModal/LoginRegisterModal';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <AuthProvider>
     <ModalProvider>
      <LoginRegisterModal />
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </ModalProvider> 
    </AuthProvider>

  );
}

export default App;
