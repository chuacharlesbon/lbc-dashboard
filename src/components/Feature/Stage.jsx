import React from 'react';
import { Div, FlexRow, Spacer } from '../../core/Containers';
import { Text } from '../../core/Text';

export const StageUI = ({ className, containerClass, onStage, label, count, currentIndex }) => {

return (
    <FlexRow className={`items-center justify-start mr-5 ${containerClass}`}>
        <Div className={`rounded-full h-10 w-10 flex items-center justify-center text-sm font-bold mr-2 ${className} ${onStage ? 'bg-yellow-100 text-white' : 'bg-grey-400 text-secondary-100'} ${currentIndex > count ? 'phone:bg-green-100' : ''}`}>
            {count}
        </Div>
        <Text className={`font-bold mr-2 ${onStage ? 'text-secondary-100' : 'text-secondary-200'}`}>
            {label}
        </Text>
        <Spacer className='border-t-2 border-secondary-200 w-10' />
    </FlexRow>
);
};