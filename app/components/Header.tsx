'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContext, useMemo } from 'react';
import HeaderButton from './HeaderButton';
import HeaderNav from './HeaderNav';
import { Modals } from '../utils/ModalsContext';

const Header: React.FC = () => {
  const pathname = usePathname();
  const { login, setLogin } = useContext(Modals);

  const routes = useMemo(
    () => [
      {
        label: 'Início',
        href: '/',
      },
      {
        label: 'Pesquisar',
        href: '/',
      },
    ],
    [pathname],
  );

  const signRoutes = useMemo(
    () => [
      {
        label: 'Cadastrar-se',
        onClick: () => {
          setLogin(true);
        },
      },
      {
        label: 'Entrar',
        className:
          'bg-emerald-600 rounded-md px-3 py-1 text-neutral-100 hover:bg-emerald-400 transition',
        onClick: () => {
          setLogin(true);
        },
      },
    ],
    [pathname],
  );

  return (
    <div className="flex px-12 bg-neutral-950 justify-between h-20 fixed w-full min-h-[54px] items-center">
      <div className="flex gap-8 h-[40px]">
        <Image src="/tempLogo.png" height={40} width={40} alt="Logo" priority />
        <div className="items-center justify-between hidden xl:flex gap-4">
          {routes.map((item) => {
            return <HeaderNav key={item.label} {...item} />;
          })}
        </div>
      </div>
      <div className="items-center justify-between hidden xl:flex gap-4">
        {signRoutes.map((item) => {
          return <HeaderButton key={item.label} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Header;
