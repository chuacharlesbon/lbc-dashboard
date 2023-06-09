import React from 'react';
import { classNames } from '../../helpers/ClassNames';

export const ColumnHeaderSearch = ({
    className,
    disabled,
    type,
    placeholder,
    props,
    validation,
    onChange,
    value,
    name,
    containerClass,
    maxlength,
    inputmode,
    onWheel,
    onSubmit
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

    const onFormSubmit = (e)  => {
        onSubmit();
    }

    return (
        <>
            <form className="w-full" onSubmit={e => onFormSubmit(e)}>
                <div className={`${containerClass}`}>
                    <input
                        className={classNames(
                            `border ${validation ? 'border-red-100' : 'border-primary-100'
                            } rounded-lg block w-full`,
                            className,
                        )}
                        disabled={disabled || false}
                        id={name}
                        inputMode={inputmode}
                        name={name}
                        onChange={(event) => onChangeInput(event)}
                        onWheel={onWheel === '' ? '' : (e) => e.target.blur()}
                        placeholder={placeholder}
                        type={type || 'auto'}
                        value={value}
                        {...props}
                    />
                </div>
                <button className="hidden" type='submit'>
                    Log In
                </button>
            </form>
        </>
    )
}