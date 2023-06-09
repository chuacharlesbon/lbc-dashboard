import React from 'react';
import { Div, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { RawButton } from '../../core/Buttons';
import { BookNowModal } from '../Modals/BookNowModal';
import { LBCModalTwoFunc } from '../Modals';
import { CheckBox } from '../../core/Forms';

export const ActivityDataRow = ({
    tracking, createdBy, bookType, bookDate, status, onSelect
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
            <FlexRow className='items-center justify-between w-full py-2 border-l-8 border-l-white hover:border-l-red-400 hover:bg-grey-400'>
                <RawButton className='w-1/6' onClick={() => onSelect(tracking)}>
                    <Text className='text-secondary-100 text-sm px-4 hover:text-red-400 hover:underline'>
                        {tracking}
                    </Text>
                </RawButton>
                <Text className='text-secondary-100 text-sm text-center w-1/6'>
                    {createdBy}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/6'>
                    {bookType}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/6'>
                    {bookDate}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/6'>
                    {status}
                </Text>
                <FlexRow className='items-center justify-center w-1/6'>
                    <RawButton onClick={() => setToastOpen(true)}>
                        <RiDeleteBin6Line className='text-red-100 text-xl mr-2' />
                    </RawButton>
                    <RawButton onClick={() => setToastOpenA(true)}>
                        <FaRegEdit className='text-red-100 text-xl ml-2' />
                    </RawButton>
                </FlexRow>
            </FlexRow>
        </>
    );
};

export const ActivityItemsDataRow = ({
    data, onSelect
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

                <Div className='w-1/13 pl-5'>
                    <CheckBox
                        className='phone:mx-0'
                        containerClass='mx-auto'
                        id={data.name}
                        name={data.name}
                        label=''
                        onClick={() => onSelect(data.id)}
                    />
                </Div>

                <Div className='w-1/10'>
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
                        Pay:
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        PHP 1,234.56
                    </Text>
                </Div>

                <Div className='w-1/10'>
                    <Text className='text-secondary-100 text-sm'>
                        Collect:
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

export const DraftDataRow = ({
    data
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
            <FlexRow className='items-center justify-between w-full py-2 border-l-8 border-l-white hover:border-l-red-400 hover:bg-grey-400'>
                <Text className='text-secondary-100 text-sm text-center w-1/7'>
                    {data.createdBy}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/7'>
                    {`(none)`}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/7'>
                    {`(none)`}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/7'>
                    {`(none)`}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/7'>
                    {`(none)`}
                </Text>
                <Text className='text-secondary-100 text-sm text-center w-1/7'>
                    {`(none)`}
                </Text>
                <FlexRow className='items-center justify-center w-1/7'>
                    <RawButton onClick={() => setToastOpen(true)}>
                        <RiDeleteBin6Line className='text-red-100 text-xl mr-2' />
                    </RawButton>
                    <RawButton onClick={() => setToastOpenA(true)}>
                        <FaRegEdit className='text-red-100 text-xl ml-2' />
                    </RawButton>
                </FlexRow>
            </FlexRow>
        </>
    );
};