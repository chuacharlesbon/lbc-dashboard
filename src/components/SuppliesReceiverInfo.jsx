import React from 'react';
import { Div, FlexColumn, FlexRow } from '../core/Containers';
import { Text } from '../core/Text';
import { RawButton } from '../core/Buttons';
import { FaRegEdit } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { PickUpScheduleChange } from './Modals';

export const SuppliesReceiverInfo = ({
    className, data
}) => {

    const [isToastOpenA, setToastOpenA] = React.useState(false);

    return (
        <>
            <PickUpScheduleChange
                data={data}
                isOpen={isToastOpenA}
                onClose={() => setToastOpenA(false)}
            />
            <FlexColumn className={`p-5 items-center justify-center w-full border border-grey-400 rounded-lg ${className}`} >
                <FlexRow className='w-full'>
                    <Text className='text-secondary-100 text-sm font-bold'>
                        Receiver Details:
                    </Text>
                    <RawButton className='ml-auto' onClick={() => setToastOpenA(true)}>
                        <FaRegEdit className='text-red-100 text-xl ml-2' />
                    </RawButton>
                </FlexRow>
                <FlexRow className='w-full items-center justify-between'>
                <MdLocationPin className='text-red-400' />
                <Div className='w-11/12'>
                    <Text className='text-secondary-200 text-sm text-left font-bold'>
                        {data.name}
                    </Text>
                    <Text className='text-secondary-200 text-sm text-left'>
                        {data.contact}
                    </Text>
                    <Text className='text-secondary-200 text-sm text-left'>
                        {data.address}
                    </Text>
                </Div>
                </FlexRow>
            </FlexColumn>
        </>
    );
};