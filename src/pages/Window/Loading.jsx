import React from 'react';
import { Div, FlexRow } from '../../core/Containers';
import { ImSpinner2 } from 'react-icons/im';

export const Loading = () => {

    return (
        <Div className='fixed top-0 left-0 right-0 bottom-0 z-20 h-screen w-screen flex justify-center items-center'>
            <FlexRow className='bg-grey-400 rounded-xl justify-center items-center w-24 h-24'>
                <ImSpinner2 className="text-red-400 animate-spin text-4xl" />
            </FlexRow>
        </Div>
    );
};