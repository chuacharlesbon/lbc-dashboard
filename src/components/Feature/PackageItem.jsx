import React from 'react';
import { FlexColumn, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { Image } from '../../core/Image';
import { CheckBox } from '../../core/Forms';
import { Images } from '../../assets/images/images';
import { RawButton } from '../../core/Buttons';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const PackageItem = ({ className, data, isSelected, onClick, list }) => {

    return (
        <FlexColumn className={`items-center justify-between border-grey-400 rounded-lg shadow-lg border-2 hover:border-red-200 p-2 ${isSelected ? 'border-red-400' : ''} ${list.includes(data) ? 'cursor-not-allowed' : ''} ${className}`} >
            <FlexRow className='w-full items-center'>
                <Text className={`text-sm ${isSelected ? 'text-red-400' : 'text-secondary-200'}`}>
                    {data.type}
                </Text>
                <CheckBox
                    checked={isSelected}
                    className={`phone:mx-0 ${list.includes(data) ? 'cursor-not-allowed' : ''}`}
                    containerClass='ml-auto'
                    id={data.name}
                    name={data.name}
                    label=''
                    onClick={
                        list.includes(data)
                            ? null
                            : () => onClick(data)
                    }
                />
            </FlexRow>
            <Image
                alt={data.name}
                className='my-5'
                src={Images.packageImg}
            />
            <Text className={`${list.includes(data) ? 'text-grey-400' : 'text-secondary-100'} text-center font-bold`}>
                {data.name}
            </Text>
            <Text className={`${list.includes(data) ? 'text-grey-400' : 'text-secondary-100'} text-center`}>
                {data.dimension}
            </Text>
        </FlexColumn>
    );
};

export const RequestItems = ({ data }) => {

    const [newCount, setCount] = React.useState(data.count ?? 1);

    const updateCount = (ascending) => {
        if (newCount === 0 && ascending) {
            setCount(newCount + 1);
        } else if (newCount === 0 && !ascending) {
            //
        } else if (newCount > 0 && ascending) {
            setCount(newCount + 1);
        } else if (newCount > 0 && !ascending) {
            setCount(newCount - 1);
        }
    }

    return (
        <FlexRow className='w-full items-center justify-between py-2'>
            <RawButton onClick={() => { }}>
                <RiDeleteBin6Line className='text-red-400 text-xl ml-2' />
            </RawButton>
            <Text className='text-secondary-100 break-words'>
                {data.name}
            </Text>
            <FlexRow className='w-2/5 items-center justify-around'>
                <RawButton className='text-red-400 font-bold border-2 border-red-400 rounded-lg mx-1 w-8 h-8 flex items-center justify-center hover:bg-red-300' onClick={() => updateCount(false)}>
                    <FaMinus />
                </RawButton>
                <Text className='text-secondary-100 px-2'>
                    {newCount}
                </Text>
                <RawButton className='text-red-400 font-bold border-2 border-red-400 rounded-lg mx-1 w-8 h-8 flex items-center justify-center hover:bg-red-300' onClick={() => updateCount(true)}>
                    <FaPlus />
                </RawButton>
            </FlexRow>
        </FlexRow>

    );
};
