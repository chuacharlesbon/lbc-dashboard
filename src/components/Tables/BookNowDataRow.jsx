import React from 'react';
import { Div, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';

export const BookNowDataRow = ({
    deliveryId,
}) => (
    <>
        <FlexRow className='items-start justify-between w-3000px py-2 hover:bg-grey-400'>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                Pick Up
            </Text>
            <Div className='w-200px px-4'>
                <Text className='text-secondary-100 text-sm font-semibold'>
                    John Doe
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    +63 9876543210
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    Metro Manila
                </Text>
            </Div>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                Delivery
            </Text>
            <Div className='w-200px px-4'>
                <Text className='text-secondary-100 text-sm font-semibold'>
                    Mary Jane
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    +63 9876543210
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    Metro Manila
                </Text>
            </Div>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                Bag
            </Text>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                PHP 1,234.00
            </Text>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                Air
            </Text>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                PHP 1,234.00
            </Text>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                5 kg
            </Text>
            <Div className='w-200px px-4'>
                <Text className='text-secondary-100 text-sm'>
                    L: 5cm x
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    W: 15cm X
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    H: 10cm x
                </Text>
            </Div>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                Test
            </Text>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                Test
            </Text>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                Test
            </Text>
            <Text className='text-secondary-100 text-sm w-200px px-4'>
                Test
            </Text>
            <FlexRow className='items-center justify-center w-200px'>
                <RiDeleteBin6Line className='text-red-100 text-xl mr-2' />
                <FaRegEdit className='text-red-100 text-xl ml-2' />
            </FlexRow>
        </FlexRow>
    </>
)