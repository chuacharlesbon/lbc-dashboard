import React from 'react';
import { FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RawInput } from '../../core/Forms';
import { ImUpload3 } from 'react-icons/im';
import { FaRegEdit } from 'react-icons/fa';

export const DeliveryDataRow = ({
	deliveryId,
    deliverySize,
    logisticsType,
    deliveryDate,
    transactionDate,
	clientNameFrom,
    clientAddressFrom,
    clientNameTo,
    clientAddressTo,
}) => (
<>
	<FlexRow className='items-center justify-between w-2400px py-2 hover:bg-grey-400'>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {deliveryId}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {deliverySize}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {logisticsType}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {deliveryDate}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {transactionDate}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {clientNameFrom}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {clientAddressFrom}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {clientNameTo}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {clientAddressTo}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <RawInput
            className='phone:border-grey-400'
            containerClass='w-200px'
            name='disposition'
            placeholder=''
            onChange={() => {}}
            type='disposition'
            value=''
        />
        <FlexRow className='items-center justify-center w-200px'>
            <ImUpload3 className='text-red-100 text-xl mr-2' />
            <FaRegEdit className='text-red-100 text-xl ml-2' />
        </FlexRow>
	</FlexRow>
</>
)

export const DeliveryDataTableRow = ({
	data
}) => (
<>
	<FlexRow className='items-center justify-between w-2800px py-2 hover:bg-grey-400'>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {data.tracking}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-200px px-4'>
            {data.encodedDate}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-200px px-4'>
            {data.deliveryReq}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-200px px-4'>
            {data.consigneeName}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-200px px-4'>
            {data.consigneeContact}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-400px px-4'>
            {data.consigneeAddress}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-200px px-4'>
            {data.consigneeContact}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-200px px-4'>
            {data.acceptanceDate}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-200px px-4'>
            {data.status}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-200px px-4'>
            {data.statusDate}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-200px px-4'>
            {data.reason}
        </Text>
        <RawInput
            className='phone:border-grey-400'
            containerClass='w-200px'
            name='disposition'
            placeholder=''
            onChange={() => {}}
            type='disposition'
            value=''
        />
        <FlexRow className='items-center justify-center w-200px'>
            <ImUpload3 className='text-red-100 text-xl mr-2' />
            <FaRegEdit className='text-red-100 text-xl ml-2' />
        </FlexRow>
	</FlexRow>
</>
)