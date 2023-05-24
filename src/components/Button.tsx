import React, { ButtonHTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  to?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  to,
  className,
  children,
  ...props
}) => {
  const btnClass = classNames(
    'px-4  md:px-6  xl:px-8 py-4 md:py-5 xl:py-6 border rounded-lg text-white text-lg xl:text-2xl transition duration-200 ease-in-out',
    className,
    {
      'bg-black hover:bg-brand-blue': variant === 'primary',
      'bg-gray-500 border-gray-600 hover:bg-gray-600': variant === 'secondary',
    }
  );

  if (to) {
    return (
      <NavLink to={to} className={btnClass}>
        {children}
      </NavLink>
    );
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};
