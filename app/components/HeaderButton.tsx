import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type THeaderButtonProps = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const HeaderButton: React.FC<THeaderButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button
      key={label}
      className={twMerge('text-neutral-100', className)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default HeaderButton;
