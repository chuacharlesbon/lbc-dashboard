import React from 'react';
import { Div, Divider, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';

export const PerformanceDataRow = ({
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
	<FlexRow className='items-center justify-between w-full'>
        <Div className='w-1/4 px-2'>
            <Text className='text-red-100 text-xs font-semibold'>
                {deliveryId}
            </Text>
            <Text className='text-secondary-200 text-xs'>
                {deliverySize}
            </Text>
            <Text className='text-secondary-200 text-xs'>
                {deliveryDate}
            </Text>
        </Div>
        <Div className='w-1/4 px-2'>
            <Text className='text-secondary-100 text-xs font-semibold'>
                {clientNameFrom}
            </Text>
            <Text className='text-secondary-200 text-xs'>
                {clientAddressFrom}
            </Text>
        </Div>
        <Div className='w-1/4 px-2'>
            <Text className='text-secondary-100 text-xs font-semibold'>
                {clientNameTo}
            </Text>
            <Text className='text-secondary-200 text-xs'>
                {clientAddressTo}
            </Text>
        </Div>
        <Div className='w-1/4 px-2'>
            <Text className='text-yellow-100 text-xs font-semibold'>
                {logisticsType.toUpperCase()}
            </Text>
            <Text className='text-yellow-100 text-xs'>
                {transactionDate}
            </Text>
        </Div>
	</FlexRow>
	<Divider className="text-grey-400 my-5" />
</>
)