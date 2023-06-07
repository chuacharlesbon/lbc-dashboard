import React from 'react';

export const Div = ({ className, children, ...props }) => (
  <div className={`${className}`} {...props} >
    {children}
  </div>
);
