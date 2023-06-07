import React from 'react';

export const Span = ({ className, children, ...props }) => (
  <span className={`${className}`} {...props}>
    {children}
  </span>
);
