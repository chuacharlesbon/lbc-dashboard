import React from 'react';
import { classNames } from '../../helpers/ClassNames';

export const Input = ({
  className,
  disabled,
  type,
  placeholder,
  label,
  props,
  errorLabel,
  validation,
  onChange,
  value,
  name,
  lableSize,
  containerClass,
  pattern,
  maxlength,
  inputmode,
  onWheel,
}) => {
  const onChangeInput = (event) => {
    if (type === 'file') {
      onChange(event.target.files);
    } else if (maxlength) {
      if (maxlength >= event.target.value?.length) {
        onChange(event.target.value);
      }
    } else {
      onChange(event.target.value);
    }
  };

  return (
    <div className={`mb-6 ${containerClass}`}>
      <div className="flex flex-row">
        <label
          className={`block mb-2 font-poppins font-regular 
        text-primary-100 ${lableSize || 'text-lg'}`}
          htmlFor={name}
        >
          {label}
        </label>
        {validation ? (
          <p className="font-poppins text-sm text-right mt-1 ml-auto text-red-100">
            {errorLabel || 'Invalid'}
          </p>
        ) : (
          <p />
        )}
      </div>
      <input
        className={classNames(
          `border ${
            validation ? 'border-red-100' : 'border-primary-100'
          } text-primary-100 font-poppins phone:text-sm tablet:text-base
       rounded-lg py-5 px-7 focus:ring-primary-200 focus:border-primary-200 block w-full`,
          className,
        )}
        disabled={disabled || false}
        id={name}
        inputMode={inputmode}
        name={name}
        onChange={(event) => onChangeInput(event)}
        onWheel={onWheel === '' ? '' : (e) => e.target.blur()}
        pattern={pattern || ''}
        placeholder={placeholder}
        required
        type={type || 'auto'}
        value={value}
        {...props}
      />
    </div>
  );
};