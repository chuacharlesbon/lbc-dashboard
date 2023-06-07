import React from 'react';

export const FormLabel = ({ className, children, isRequired, ...props }) => (
  <p className={`${className}`} {...props}>
    {children}
    <span className={isRequired ? 'text-red-400' : ''}>{isRequired ? '*' : ''}</span>
  </p>
);
