'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContext, useMemo } from 'react';
import HeaderButton from './HeaderButton';
import HeaderNav from './HeaderNav';
import { Modals } from '../utils/ModalsContext';
import { IoReorderThreeOutline } from 'react-icons/io5';
import MenuModal from './MenuModal';

const Header: React.FC = () => {
  const pathname = usePathname();
  const { login, setLogin } = useContext(Modals);
  const { menu, setMenu } = useContext(Modals);

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
          setMenu(false);
        },
      },
      {
        label: 'Entrar',
        className:
          'bg-emerald-600 rounded-md px-3 py-1 text-neutral-100 hover:bg-emerald-400 transition',
        onClick: () => {
          setLogin(true);
          setMenu(false);
        },
      },
    ],
    [pathname],
  );

  return (
    <div className="flex px-6 lg:px-12 bg-neutral-950 justify-between h-20 fixed w-full min-h-[54px] items-center z-10">
      <div className="flex gap-8 h-[40px]">
        <Image src="/tempLogo.png" height={40} width={40} alt="Logo" priority />
        <div className=" items-center justify-between hidden lg:flex gap-4">
          {routes.map((item) => {
            return <HeaderNav key={item.label} {...item} />;
          })}
        </div>
      </div>
      <div className="items-center justify-between hidden lg:flex gap-4">
        {signRoutes.map((item) => {
          return <HeaderButton key={item.label} {...item} />;
        })}
      </div>
      <div className="block lg:hidden" onClick={() => setMenu(true)}>
        <IoReorderThreeOutline color={'white'} size={30} />
      </div>
      <MenuModal>
        <div className="flex flex-col gap-8 h-[40px] items-center pt-10">
          {routes.map((item) => {
            return <HeaderNav key={item.label} {...item} />;
          })}
          {signRoutes.map((item) => {
            return <HeaderButton key={item.label} {...item} />;
          })}
        </div>
      </MenuModal>
    </div>
  );
};

export default Header;
