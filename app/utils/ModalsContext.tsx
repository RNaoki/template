'use client';
import React, { createContext, useState } from 'react';

type TModalContext = {
  children: React.ReactNode;
};

type TLoginModal = {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modals = createContext<TLoginModal>({
  login: false,
  setLogin: () => {},
});

const ModalsContext: React.FC<TModalContext> = ({ children }) => {
  const [login, setLogin] = useState(false);

  return (
    <Modals.Provider value={{ login, setLogin }}>{children}</Modals.Provider>
  );
};

export default ModalsContext;
