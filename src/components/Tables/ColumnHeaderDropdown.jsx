import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FaCaretDown } from 'react-icons/fa';
import { Div } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RawButton } from '../../core/Buttons';

export const ColumnHeaderDropdown = ({
  options,
  value,
  containerClass,
  containerButtonClass,
  titleClassName,
  onSelect
}) => {

  return (
    <Div className='w-full'>
      <Menu as="div" className={`w-full relative inline-block text-left ${containerClass}`}>
        <div>
          <Menu.Button
            className={`flex flex-row items-center justify-between w-full p-2 rounded-lg hover:shadow-xl hover:bg-opacity-20 ${containerButtonClass}`}
          >
            <Text className={`w-5/6 mr-auto truncate text-ellipsis text-left ${titleClassName}`}>
              {value}
            </Text>
            <FaCaretDown className={`w-1/6 ${titleClassName}`} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute right-0 mt-1 origin-top-right bg-white divide-y w-full divide-secondary-300 
            rounded-lg shadow-lg border border-grey-400`}
          >
            <Menu.Item>
              <Div className='w-full'>
              {options.map((value) => (
                <div className="px-1 py-1 " key={value.name}>
                  {value.list.map((item) => (
                    <Div className='w-full'>
                      <RawButton
                        className='w-full'
                        onClick={() => onSelect(item.name)}
                      >
                        <Text
                          className={`hover:bg-red-400 hover:text-white text-secondary-100 group flex rounded-lg items-center w-full px-2 py-3 text-base`}
                        >
                          {item.name}
                        </Text>
                      </RawButton>
                    </Div>
                  ))}
                </div>
              ))}
              </Div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </Div>
  )
};