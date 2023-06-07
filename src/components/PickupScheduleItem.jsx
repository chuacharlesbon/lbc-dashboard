import React from 'react';
import { Div, FlexRow, Spacer } from '../core/Containers';
import { Text } from '../core/Text';
import { RawButton } from '../core/Buttons';
import { FaRegEdit } from 'react-icons/fa';
import { PickUpScheduleChange } from './Modals';
import { Link } from 'react-router-dom';

export const PickupScheduleItem = ({
  id, className, pickUpSchedule, address, contactPerson, estVolumePerPickup, specialInstruction, data
}) => {

  const [isToastOpenA, setToastOpenA] = React.useState(false);

  return (
    <>
      <PickUpScheduleChange
        data={data}
        isOpen={isToastOpenA}
        onClose={() => setToastOpenA(false)}
      />
      <FlexRow className={`my-5 p-5 hover:bg-grey-500 items-start justify-between w-full border-l-8 border border-t-grey-400 border-r-grey-400 border-b-grey-400 rounded-lg shadow-xl ${className}`} >
        <Div className='w-10/12'>
          <FlexRow className=''>
            <Text className='text-secondary-200 text-sm font-bold'>
              Pick Up Schedule:
            </Text>
            <Spacer className='w-2' />
            <Text className='text-secondary-200 text-sm'>
              {pickUpSchedule}
            </Text>
          </FlexRow>
          <FlexRow className=''>
            <Text className='text-secondary-200 text-sm font-bold'>
              Address:
            </Text>
            <Spacer className='w-2' />
            <Text className='text-secondary-200 text-sm'>
              {address}
            </Text>
          </FlexRow>
          <FlexRow className=''>
            <Text className='text-secondary-200 text-sm font-bold'>
              Contact Person:
            </Text>
            <Spacer className='w-2' />
            <Text className='text-secondary-200 text-sm'>
              {contactPerson}
            </Text>
          </FlexRow>
          <FlexRow className=''>
            <Text className='text-secondary-200 text-sm font-bold'>
              Estimated Volume per Pick Up:
            </Text>
            <Spacer className='w-2' />
            <Text className='text-secondary-200 text-sm'>
              {estVolumePerPickup} Transactions
            </Text>
          </FlexRow>
          <FlexRow className=''>
            <Text className='text-secondary-200 text-sm font-bold'>
              Special Instructions:
            </Text>
            <Spacer className='w-2' />
            <Text className='text-secondary-200 text-sm'>
              {specialInstruction}
            </Text>
          </FlexRow>
        </Div>
        <Div className=''>
          <RawButton className='' onClick={() => setToastOpenA(true)}>
            <FaRegEdit className='text-red-100 text-xl ml-2' />
          </RawButton>
        </Div>
      </FlexRow>
    </>
  );
};

export const PickupScheduleItemSummary = ({
  className, address
}) => {

  return (
    <>
      <FlexRow className={`my-2 p-2 hover:bg-grey-500 items-start justify-between w-full border-l-8 border border-t-grey-400 border-r-grey-400 border-b-grey-400 rounded-lg shadow-xl ${className}`} >
        <Div className='w-11/12'>
          <Text className='text-secondary-200 text-sm'>
            Scheduled Pick up at {address}
          </Text>
          <Link className='text-red-400 text-x font-bold' to='/book-now?option=1&schedule=updated'>
            View Transaction Details
          </Link>
        </Div>
      </FlexRow>
    </>
  );
};
