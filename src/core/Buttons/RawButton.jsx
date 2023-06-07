import React from 'react';

export const RawButton = ({
  className,
  children,
  props,
  onClick,
  type,
  disabled,
}) => (
  <button
    className={`${className}`}
    disabled={disabled || false}
    type={type || 'button'}
    {...props}
    onClick={onClick}
  >
    {children}
  </button>
);
