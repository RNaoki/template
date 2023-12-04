'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import HeaderItem from './HeaderItem';

const Header: React.FC = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Search',
        href: '/',
      },
    ],
    [pathname],
  );

  const signRoutes = useMemo(
    () => [
      {
        label: 'Cadastrar-se',
        href: '/',
      },
      {
        label: 'Entrar',
        href: '/',
        className:
          'bg-emerald-600 rounded-md px-3 py-1 text-neutral-100 hover:bg-emerald-400 transition',
      },
    ],
    [pathname],
  );

  return (
    <div className="flex px-12 bg-neutral-900 justify-between h-12 fixed w-full">
      <div className="flex gap-8">
        <Image src="/tempLogo.png" height={40} width={40} alt="Logo" priority />
        <div className="items-center justify-between hidden xl:flex gap-4">
          {routes.map((item) => {
            return <HeaderItem key={item.label} {...item} />;
          })}
        </div>
      </div>
      <div className="items-center justify-between hidden xl:flex gap-4">
        {signRoutes.map((item) => {
          return <HeaderItem key={item.label} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Header;
