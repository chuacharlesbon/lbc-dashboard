import React from 'react';

export const Text = ({ className, children, ...props }) => (
  <p className={`${className}`} {...props}>
    {children}
  </p>
);
