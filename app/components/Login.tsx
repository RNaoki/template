'use client';
import { useContext, useEffect } from 'react';
import { Modals } from '../utils/ModalsContext';
import LoginModal from './LoginModal';

const Login: React.FC = () => {
  const { login, setLogin } = useContext(Modals);

  useEffect(() => {
    if (login) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [login]);

  return (
    login && (
      <div className="fixed w-full h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full bg-neutral-950 opacity-70"
          onClick={(e) => {
            e.preventDefault();
            setLogin(false);
          }}
        />
        <LoginModal />
      </div>
    )
  );
};

export default Login;
