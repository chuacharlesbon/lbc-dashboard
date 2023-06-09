import React, { FC } from 'react';
import { Div, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RawButton } from '../../core/Buttons';
import { BookNowModal } from '../Modals/BookNowModal';
import { LBCModalTwoFunc } from '../Modals';
import { CheckBox } from '../../core/Forms';

export const ProofOfDeliveryDataRow = ({
    data, list, onSelect
}) => {

    return (
        <>
            <FlexRow className='items-center justify-between w-full py-2 border-b border-grey-400 hover:bg-grey-400'>

                <Div className='pl-5'>
                    <CheckBox
                        className='phone:mx-0'
                        containerClass='mx-auto'
                        id={data.name}
                        name={data.name}
                        label=''
                        onClick={() => onSelect(data.tracking)}
                    />
                </Div>

                <Text className={`hover:text-red-400 text-sm w-15p px-4 ${list.includes(data.tracking) ? 'text-red-400 underline' : 'text-secondary-100'}`}>
                    {data.tracking}
                </Text>
                <Text className='text-secondary-100 text-sm w-15p px-4'>
                    {data.bookDate}
                </Text>
                <Text className='text-secondary-100 text-sm w-15p px-4'>
                    {data.tracking}
                </Text>
                <Text className='text-secondary-100 text-sm w-15p px-4'>
                    {data.sender}
                </Text>
                <Text className='text-secondary-100 text-sm w-15p px-4'>
                    {data.receiver}
                </Text>
                <Text className='text-secondary-100 text-sm w-15p px-4'>
                    {data.bookDate}
                </Text>
            </FlexRow>
        </>
    );
};

export const SupplyMonitoringDataRow = ({
    data
}) => {

    return (
        <>
            <FlexRow className='items-center justify-between w-full py-2 border-b border-grey-400 hover:bg-grey-400'>
                <Text className='text-secondary-100 text-sm text-center w-1/6 px-4'>
                    {data.tracking}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/6 px-4'>
                    {data.sender}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/6 px-4'>
                    {data.bookDate}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/6 px-4'>
                    Account Handler
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/6 px-4'>
                    {data.receiver}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/6 px-4'>
                    {data.status}
                </Text>
            </FlexRow>
        </>
    );
};

export const RemittanceHistoryDataRow = ({
    data
}) => {

    return (
        <>
            <FlexRow className='items-center justify-between w-full py-2 border-b border-grey-400 hover:bg-grey-400'>
                <Text className='text-secondary-100 text-sm text-center w-1/8 px-4'>
                    {data.reference}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/8 px-4'>
                    {data.postingDate}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/8 px-4'>
                    {data.disbursalMode}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/8 px-4'>
                    {data.accountName}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/4 px-4'>
                    {data.status}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/8 px-4'>
                    {data.amount}
                </Text>
            </FlexRow>
        </>
    );
};