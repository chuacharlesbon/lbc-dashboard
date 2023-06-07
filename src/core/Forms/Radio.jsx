import React from 'react';

export const Radio = ({
  className,
  label,
  name,
  optionId,
  containerClass,
  isChecked,
  onClick,
}) => (
  <div className={`flex flex-row items-center ${containerClass}`}>
    <input
      aria-describedby={optionId}
      aria-labelledby={optionId}
      checked={isChecked}
      className={`${className} w-4 h-4 border-red-100 focus:ring-2 
      text-red-100 focus:ring-red-400`}
      id={optionId}
      name={name}
      onClick={onClick}
      readOnly
      type="radio"
      value=""
    />
    <label
      className="block ml-2 text-secondary-100"
      htmlFor={optionId}
    >
      {label}
    </label>
  </div>
);
