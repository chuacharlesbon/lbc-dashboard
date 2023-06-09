import React from 'react';
import { Div, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { CheckBox } from '../../core/Forms';
import { BookNowModal } from '../Modals/BookNowModal';
import { RawButton } from '../../core/Buttons';
import { LBCModalTwoFunc } from '../Modals';

export const BookNowDataSummaryRow = ({
    data,
}) => (
    <>
        <FlexRow className='items-start justify-between w-full py-2 hover:bg-grey-400'>

            <Div className='w-1/5'>
                <Text className='text-secondary-100 text-sm'>
                    {data.package}
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    Item
                </Text>
            </Div>

            <Div className='w-1/5'>
                <Text className='text-secondary-100 text-sm'>
                    {data.sender.name}
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    {data.sender.contac}
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    {data.sender.address}
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    {data.sender.type}
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    {data.sender.pickUpDate}
                </Text>
            </Div>

            <Div className='w-1/5'>
                <Text className='text-secondary-100 text-sm'>
                    {data.receiver.name}
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    {data.receiver.contac}
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    {data.receiver.address}
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    {data.receiver.type}
                </Text>
            </Div>

            <Div className='w-1/5'>
                <Text className='text-secondary-100 text-sm'>
                    PHP {data.amount.value}
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    View Breakdown
                </Text>
            </Div>

            <Div className='w-1/5'>
                <Text className='text-secondary-100 text-sm'>
                    {data.disbursal.type}
                </Text>
            </Div>
        </FlexRow>
    </>
);

export const BookNowDataEditRow = ({
    data,
}) => {

    const [isToastOpen, setToastOpen] = React.useState(false);
    const [isToastOpenA, setToastOpenA] = React.useState(false);

    return (
        <>
            <BookNowModal
                isOpen={isToastOpenA}
                onClose={() => setToastOpenA(false)}
            />
            <LBCModalTwoFunc
                description='Are you sure you want to cancel this booking?'
                isOpen={isToastOpen}
                onClose={() => setToastOpen(false)}
                title='Cancel booking?'
                toastKind='info'
                buttonTextFirst='Close'
                buttonTextSecond='Continue'
            />
            <FlexRow className='items-center justify-between w-full py-2 border-b border-grey-400 hover:bg-grey-400'>

                <Div className='w-1/13'>
                    <CheckBox
                        className='phone:mx-0'
                        containerClass='mx-auto'
                        id={data.name}
                        name={data.name}
                        label=''
                    />
                </Div>

                <Div className='w-1/8'>
                    <Text className='text-secondary-100 text-sm'>
                        {data.package}
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        Item
                    </Text>
                </Div>

                <Div className='w-1/6'>
                    <Text className='text-secondary-100 text-sm'>
                        {data.sender.name}
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        {data.sender.contac}
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        {data.sender.address}
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        {data.sender.type}
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        {data.sender.pickUpDate}
                    </Text>
                </Div>

                <Div className='w-1/6'>
                    <Text className='text-secondary-100 text-sm'>
                        {data.receiver.name}
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        {data.receiver.contac}
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        {data.receiver.address}
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        {data.receiver.type}
                    </Text>
                </Div>

                <Div className='w-1/10'>
                    <Text className='text-secondary-100 text-sm'>
                        COD Amount
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        PHP 1,234.56
                    </Text>
                </Div>

                <Div className='w-1/6'>
                    <RawButton onClick={() => setToastOpenA(true)}>
                        <Text className='text-red-400 text-sm underline font-semibold mx-1'>
                            View
                        </Text>
                    </RawButton>
                    <RawButton onClick={() => setToastOpenA(true)}>
                        <Text className='text-red-400 text-sm underline font-semibold mx-1'>
                            Edit
                        </Text>
                    </RawButton>
                    <RawButton onClick={() => setToastOpen(true)}>
                        <Text className='text-red-400 text-sm underline font-semibold mx-1'>
                            Cancel
                        </Text>
                    </RawButton>
                </Div>
            </FlexRow>
        </>
    );
};