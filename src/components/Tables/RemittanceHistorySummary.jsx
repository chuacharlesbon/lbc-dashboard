import React from 'react';
import { Div, Divider, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';

export const RemittanceHistorySummary = ({
    referenceId,
    depositedDate,
    amount
}) => (
<>
	<FlexRow className='items-start justify-between w-full'>
        <Div className='w-1/2 px-2'>
            <Text className='text-red-100 text-xs font-semibold'>
                Date Deposited
            </Text>
            <Text className='text-secondary-200 text-xs'>
                {referenceId}
            </Text>
        </Div>
        <Div className='w-1/2 px-2'>
            <Text className='text-secondary-100 text-xs text-right font-semibold'>
                {depositedDate}
            </Text>
            <Text className='text-green-100 text-xs text-right'>
                &#8369; {amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
        </Div>
	</FlexRow>
	<Divider className="text-grey-400 my-5" />
</>
)

export const RemittanceDataTableRow = ({
	data
}) => (
<>
	<FlexRow className='items-center justify-between w-full py-2 hover:bg-grey-400'>
        <Text className='text-secondary-100 text-sm w-1/7 px-4'>
            {data.depositedDate}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-1/7 px-4'>
            {data.paymentDetails}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-1/7 px-4'>
            {data.tracking}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-1/7 px-4'>
            {data.paymentTracking}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-1/7 px-4'>
            {data.deliveryDate}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-1/7 px-4'>
            {data.serviceMode}
        </Text>
        <Text className='text-secondary-100 text-sm text-center w-1/7 px-4'>
            {data.amount}
        </Text>
	</FlexRow>
</>
)