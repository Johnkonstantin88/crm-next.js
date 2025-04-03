'use client';

import React, { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ disabled, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100'
      )}
    />
  );
};

export default Button;
