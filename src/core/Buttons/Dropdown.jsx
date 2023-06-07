import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Div, FlexRow } from '../Containers';
import { Text } from '../Text';
import { FaUserAlt, FaChevronDown, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { UserDrawers, XtendlyDrawers, Weekly } from '../../constants/Dropdowns';
import { RawButton } from './RawButton';
import { getCookie } from '../../hooks';

export const Dropdown = () => {

  const firstname = getCookie('firstName').toString();
  const lastname = getCookie('lastName').toString();
  const company = getCookie('company').toString();

  return (
    <Div className={`w-64 text-right`}>
      <Menu as="div" className="w-64 relative inline-block text-left">
        <div>
          <Menu.Button
            className={`flex flex-row items-center justify-center w-full px-5 py-4 font-poppins text-base font-normal rounded-md hover:border border-grey-400 hover:shadow-xl hover:bg-opacity-20`}
          >
            <FaUserAlt className='text-red-400 mr-4' />
            <Div className="flex flex-col">
              <Text className="mr-auto truncate text-ellipsis text-left text-red-400 w-40">
                {firstname}{' '}{lastname}
              </Text>
            </Div>
            <FaChevronDown className="text-xl text-red-400" />
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
          {
            company === 'Xtendly' ?
              <Menu.Items
                className={`z-10 absolute right-0 mt-1 origin-top-right font-poppins
            bg-white divide-y w-64 divide-secondary-300 
            rounded-md shadow-lg`}
              >
                {XtendlyDrawers.map((value) => (
                  <div className="px-1 py-1 " key={value.name}>
                    {value.links.map((link) => (
                      <Menu.Item key={link.name}>
                        {({ active }) => (
                          <Link
                            className={`${active ? 'bg-red-400 text-white' : 'text-secondary-100'
                              }  group flex rounded-md items-center
                    w-full px-4 py-3 text-base`}
                            to={link.url}
                          >
                            {link.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                ))}
              </Menu.Items>
              :
              <Menu.Items
                className={`z-10 absolute right-0 mt-1 origin-top-right font-poppins
            bg-white divide-y w-64 divide-secondary-300 
            rounded-md shadow-lg`}
              >
                {UserDrawers.map((value) => (
                  <div className="px-1 py-1 " key={value.name}>
                    {value.links.map((link) => (
                      <Menu.Item key={link.name}>
                        {({ active }) => (
                          <Link
                            className={`${active ? 'bg-red-100 text-white' : 'text-secondary-100'
                              }  group flex rounded-md items-center
                    w-full px-4 py-3 text-base`}
                            to={link.url}
                          >
                            {link.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                ))}
              </Menu.Items>
          }
        </Transition>
      </Menu>
    </Div>
  )
};

export const RawDropdown = ({
  icon, value, width, border, options, onSelect
}) => {

  return (
    <Div className={`${width} px-2 text-right`}>
      <Menu as="div" className={`${width} px-2 relative inline-block text-left`}>
        <div>
          <Menu.Button
            className={`${width} px-2 flex flex-row items-center justify-center rounded-lg border-grey-400 hover:shadow-xl hover:bg-opacity-20 ${border ?? 'hover:border'}`}
          >
            {icon}
            <Text className={`p-2 mr-auto truncate text-ellipsis text-left text-secondary-100 text-sm font-semibold`}>
              {value}
            </Text>
            <FaCaretDown className="text-secondary-100" />
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
            className={`${width} absolute z-50 -right-2 mt-1 origin-top-right bg-white divide-y divide-secondary-300 rounded-lg shadow-lg`}
          >
            <Menu.Item>
              <div className='w-full rounded-lg border border-grey-500'>
                {options.map((value) => (
                  <div className="w-full px-1 py-1" key={value.name}>
                    {value.links.map((link) => (
                      <RawButton className='w-full parentToolTip' onClick={() => onSelect(link.name)}>
                        <Text
                          className={`hover:bg-red-400 hover:text-white text-secondary-100 group flex flex-row rounded-md items-center justify-between p-2 text-sm text-ellipsis truncate`}
                        >
                          {link.name}
                        </Text>
                      </RawButton>
                    ))}
                  </div>
                ))}
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </Div>
  )
};

export const ScheduleDropdown = ({
  icon, value, dayValue, width, options, onSelect, onSelectDay,
}) => {

  return (
    <Div className={`${width} px-2 text-right`}>
      <Menu as="div" className={`${width} px-2 relative inline-block text-left`}>
        <div>
          <Menu.Button
            className={`${width} px-2 flex flex-row items-center justify-center rounded-lg hover:border border-grey-400 hover:shadow-xl hover:bg-opacity-20`}
          >
            {icon}
            <Text className={`p-2 mr-auto truncate text-ellipsis text-left text-red-400 text-sm font-semibold`}>
              {value}
            </Text>
            <FaCaretDown className="text-red-400" />
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
            className={`${width} absolute -right-2 mt-1 origin-top-right bg-white divide-y divide-secondary-300 rounded-lg shadow-lg`}
          >
            <Menu.Item>
              <div className='w-full rounded-lg border border-grey-500'>
                {options.map((value) => (
                  <div className="w-full px-1 py-1" key={value.name}>
                    {value.links.map((link) => (
                      <RawButton className='w-full parentToolTip' onClick={() => onSelect(link.name)}>
                        <Text
                          className={`hover:bg-red-400 hover:text-white text-secondary-100 group flex flex-row rounded-md items-center justify-between p-2 text-sm text-ellipsis truncate`}
                        >
                          {link.name}
                          {
                            link.name === 'Weekly' ?
                              <FaCaretRight className='ml-auto text-secondary-100' />
                              :
                              <></>
                          }
                        </Text>

                        {

                          link.name === 'Weekly' ?
                            <Div className='childTooltip left-full top-0 z-20'>
                              <FlexRow className='p-5 rounded-lg shadow-lg bg-white border border-grey-400'>
                                {
                                  Weekly.map((day) => (
                                    <RawButton className={`w-5 h-5 mx-2 flex items-center justify-center rounded-full ${dayValue.includes(day.value) ? 'bg-red-400 text-white' : 'bg-grey-400 text-secondary-200'}`} onClick={() => onSelectDay(day.value)}>
                                      {day.abb}
                                    </RawButton>
                                  ))
                                }
                              </FlexRow>
                            </Div>
                            :
                            <></>
                        }
                      </RawButton>
                    ))}
                  </div>
                ))}
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </Div>
  )
};