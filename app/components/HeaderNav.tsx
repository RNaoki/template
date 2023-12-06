import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type THeaderNavProps = {
  label: string;
  href: string;
  className?: string;
};

const HeaderNav: React.FC<THeaderNavProps> = ({ label, href, className }) => {
  return (
    <Link
      href={href}
      key={label}
      className={twMerge('text-neutral-100', className)}
    >
      {label}
    </Link>
  );
};

export default HeaderNav;
