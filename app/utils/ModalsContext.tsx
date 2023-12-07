'use client';
import React, { createContext, useState } from 'react';

type TModalContext = {
  children: React.ReactNode;
};

type TModalProps = {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modals = createContext<TModalProps>({
  login: false,
  setLogin: () => {},
  menu: false,
  setMenu: () => {},
});

const ModalsContext: React.FC<TModalContext> = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <Modals.Provider value={{ login, setLogin, menu, setMenu }}>
      {children}
    </Modals.Provider>
  );
};

export default ModalsContext;
