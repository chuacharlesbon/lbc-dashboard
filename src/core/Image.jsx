import React from 'react';

export const Image = ({ className, alt, src, ...props }) => (
  <img alt={alt} className={`${className}`} src={src} {...props} />
);
