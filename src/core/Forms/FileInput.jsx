import React from 'react';

export const FileInput = ({ className, children, file, setFile, fileRef }) => {

    return (
        <>
            <button
                className={`${className}`}
                onClick={() => fileRef?.current.click()}
                type="button"
            >
                {children}
            </button>
            <input
                accept="application/pdf"
                className="hidden"
                onChange={(event) => setFile(event.target.files)}
                ref={fileRef}
                type="file"
            />
        </>
    );
};
