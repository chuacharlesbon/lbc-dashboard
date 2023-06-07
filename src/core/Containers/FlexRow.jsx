import React from 'react';

export const FlexRow = ({ className, id, children, ...props }) => (
  <div className={`flex flex-row ${className}`} id={id} {...props} >
    {children}
  </div>
);