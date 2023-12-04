import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type THeaderItemProps = {
  label: string;
  href: string;
  className?: string;
};

const HeaderItem: React.FC<THeaderItemProps> = ({ label, href, className }) => {
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

export default HeaderItem;
