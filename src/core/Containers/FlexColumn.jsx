import React from 'react';

export const FlexColumn = ({ className, id, children, ...props }) => (
  <div className={`flex flex-col ${className}`} id={id} {...props} >
    {children}
  </div>
);
