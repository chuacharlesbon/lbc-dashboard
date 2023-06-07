import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Div, FlexRow, Spacer } from '../../core/Containers';
import { Text } from '../../core/Text';
import { FaTimes } from 'react-icons/fa';
import { Button, RawButton, ScheduleDropdown } from '../../core/Buttons';
import { RecurrenceOptions } from '../../constants/Dropdowns';
import { RawInput } from '../../core/Forms';
import { useNavigate } from 'react-router-dom';
import { LBCModal } from './LBCModal';
import { ToastData } from '../../constants/ConstantsData';

export const PickUpScheduleChange = ({
    onClose, isOpen, data
}) => {

    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(false);
    const [recurrence, setRecurrence] = React.useState(data?.pickUpSchedule ?? 'Once a Week (Mon)');
    const [contactName, setContactName] = React.useState(data?.contactName ?? 'John Doe');
    const [contactNum, setContactNum] = React.useState(data?.contactNum ?? '+6391234567890');
    const [estTrans, setEstTrans] = React.useState(data?.estVolumePerPickup ?? '');
    const [specialIns, setSpecialIns] = React.useState(data?.specialInstruction ?? '');

    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastKind, setToastKind] = React.useState('success');
    const [toastTitle, setToastTitle] = React.useState('Change Request Submitted');
    const [toastDesc, setToastDesc] = React.useState('Current schedule will be followed until further notice. November 11, 2022 9:06 AM');

    const [daysSelected, setDaysSelected] = React.useState([]);

    const setDayValue = (day) => {
        if(daysSelected.includes(day)){
            const tempList = daysSelected.filter(item => item !== day);
            setDaysSelected(tempList);
            setTimeout(() => {
                setRecurrence(`Recurs every (${tempList.toString()})`)
            }, 750);
        }else{
            const tempList = [...daysSelected];
            tempList.push(day);
            setDaysSelected(tempList)
            setTimeout(() => {
                setRecurrence(`Recurs every (${tempList.toString()})`)
            }, 750);
        }
    }
    
    const onSave = () => {
        setLoading(true);
        if((data.id) % 2 === 0){
            setTimeout(() => {
                setToastOpen(true);
                setLoading(false);
                setToastKind(ToastData.type.err);
                setToastTitle(ToastData.title.update400);
                setToastDesc(ToastData.desc.err02);
            }, 2000);
            setTimeout(() => {
                setToastOpen(false);
            }, 5000);
        }else{
            setTimeout(() => {
                setToastOpen(false);
                setLoading(false);
                navigate(`/book-now?option=1&schedule=updated`);
                onClose();
            }, 2000);
        }
    }

    return (
        <>
            <LBCModal
                description={toastDesc}
                isOpen={isToastOpen}
                onClose={() => setToastOpen(false)}
                title={toastTitle}
                toastKind={toastKind}
            />
            <Transition appear as={Fragment} show={isOpen}>
                <Dialog
                    as="div"
                    className='fixed inset-0 z-50 overflow-hide'
                    onClose={onClose}
                >
                    <div className="h-full w-full text-center flex justify-end">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease duration-300 transform"
                            enterFrom="opacity-0 -translate-y-full"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease duration-300 transform"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-full"
                        >
                            <div
                                className="h-full w-full overflow-hidden z-20 p-5 align-middle transition-all transform flex flex-col items-center justify-center bg-secondary-200"
                            >

                                {/* ---------- Modal Body ---------- */}

                                <div className='bg-white border border-grey-400 w-700px px-10 py-5 rounded-lg shadow-lg'>
                                    <FlexRow className='w-full items-center justify-between'>
                                        <Text className='text-secondary-200 text-sm font-bold'>
                                            PICK UP SCHEDULE CHANGE REQUEST
                                        </Text>
                                        <RawButton onClick={onClose}>
                                            <FaTimes className='text-secondary-200 text-xl' />
                                        </RawButton>
                                    </FlexRow>
                                    <Spacer className='h-5' />
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            PICK UP SCHEDULE:
                                        </Text>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            {recurrence}
                                        </Text>
                                        <Div className='w-1/3 px-auto'>
                                        <ScheduleDropdown
                                                icon={<div />}
                                                value={recurrence}
                                                dayValue={daysSelected}
                                                width='w-48'
                                                options={RecurrenceOptions}
                                                onSelect={setRecurrence}
                                                onSelectDay={setDayValue}
                                            />
                                        </Div>
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            CONTACT PERSON:
                                        </Text>
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-1/3 pr-2'
                                            name='contactName'
                                            placeholder='Name'
                                            onChange={setContactName}
                                            type='text'
                                            value={contactName}
                                        />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass=' w-1/3 pl-2'
                                            name='contactNum'
                                            placeholder='Number'
                                            onChange={setContactNum}
                                            type='text'
                                            value={contactNum}
                                        />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            PICK UP ADDRESS:
                                        </Text>
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-1/3 pr-2'
                                            name=''
                                            placeholder='Unit'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass=' w-1/3 pl-2'
                                            name=''
                                            placeholder='Street'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Spacer className='w-1/3' />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-1/3 pr-2'
                                            name=''
                                            placeholder='Region'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass=' w-1/3 pl-2'
                                            name=''
                                            placeholder='City'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Spacer className='w-1/3' />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-1/3 pr-2'
                                            name=''
                                            placeholder='Barangay'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                        <Spacer className='w-1/3' />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            ESTIMATED VOLUME PER PICK UP:
                                        </Text>
                                        <FlexRow className='w-1/3 items-center justify-start'>
                                            <RawInput
                                                className='phone:border-grey-400 text-secondary-200 text-sm'
                                                containerClass='w-10'
                                                name=''
                                                placeholder='0'
                                                onChange={setEstTrans}
                                                type='text'
                                                value={estTrans}
                                            />
                                            <Spacer className='w-4' />
                                            <Text className='text-secondary-200 text-sm text-left'>
                                                Transactions
                                            </Text>
                                        </FlexRow>
                                        <Spacer className='w-1/3' />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            SPECIAL INSTRUCTIONS:
                                        </Text>
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-2/3'
                                            name='Instructions'
                                            placeholder='Instructions'
                                            onChange={setSpecialIns}
                                            type='text'
                                            value={specialIns}
                                        />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-end py-2'>
                                        <Button
                                            className='w-1/4 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            className='w-1/4 ml-2 h-10'
                                            onClick={onSave}
                                            isLoading={loading}
                                        >
                                            Save
                                        </Button>
                                    </FlexRow>
                                    <Spacer className='h-2' />
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export const PickUpScheduleCreate = ({
    onClose, isOpen
}) => {

    const [loading, setLoading] = React.useState(false);
    const [recurrence, setRecurrence] = React.useState('Daily');
    const [contactName, setContactName] = React.useState('');
    const [contactNum, setContactNum] = React.useState('');
    const [estTrans, setEstTrans] = React.useState('');
    const [specialIns, setSpecialIns] = React.useState('');

    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastKind, setToastKind] = React.useState('success');
    const [toastTitle, setToastTitle] = React.useState('Change Request Submitted');
    const [toastDesc, setToastDesc] = React.useState('Current schedule will be followed until further notice. November 11, 2022 9:06 AM');

    const [daysSelected, setDaysSelected] = React.useState([]);

    const setDayValue = (day) => {
        setRecurrence('Weekly');
        if(daysSelected.includes(day)){
            const tempList = daysSelected.filter(item => item !== day);
            setDaysSelected(tempList);
            setTimeout(() => {
                setRecurrence(`Recurs every (${tempList.toString()})`)
            }, 750);
        }else{
            const tempList = [...daysSelected];
            tempList.push(day);
            setDaysSelected(tempList)
            setTimeout(() => {
                setRecurrence(`Recurs every (${tempList.toString()})`)
            }, 750);
        }
    }

    const onSave = () => {
        setLoading(true);
        if((Math.random()*2) % 2 === 0){
            setTimeout(() => {
                setToastOpen(true);
                setLoading(false);
                setToastKind(ToastData.type.err);
                setToastTitle(ToastData.title.update400);
                setToastDesc(ToastData.desc.err02);
            }, 2000);
            setTimeout(() => {
                onClose();
            }, 5000);
        }else{
            setTimeout(() => {
                setToastOpen(true);
                setLoading(false);
                setToastKind(ToastData.type.suc);
                setToastTitle(ToastData.title.create200);
                setToastDesc('Pick Up Schedule has been submitted.');
            }, 2000);
            setTimeout(() => {
                onClose();
                setToastOpen(false);
            }, 5000);
        }
    }

    return (
        <>
            <LBCModal
                description={toastDesc}
                isOpen={isToastOpen}
                onClose={() => setToastOpen(false)}
                title={toastTitle}
                toastKind={toastKind}
            />
            <Transition appear as={Fragment} show={isOpen}>
                <Dialog
                    as="div"
                    className='fixed inset-0 z-50 overflow-hide'
                    onClose={onClose}
                >
                    <div className="h-full w-full text-center flex justify-end">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease duration-300 transform"
                            enterFrom="opacity-0 -translate-y-full"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease duration-300 transform"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-full"
                        >
                            <div
                                className="h-full w-full overflow-hidden z-20 p-5 align-middle transition-all transform flex flex-col items-center justify-center bg-secondary-200"
                            >

                                {/* ---------- Modal Body ---------- */}

                                <div className='bg-white border border-grey-400 w-700px px-10 py-5 rounded-lg shadow-lg'>
                                    <FlexRow className='w-full items-center justify-between'>
                                        <Text className='text-secondary-200 text-sm font-bold'>
                                            ADD PICK UP SCHEDULE REQUEST
                                        </Text>
                                        <RawButton onClick={onClose}>
                                            <FaTimes className='text-secondary-200 text-xl' />
                                        </RawButton>
                                    </FlexRow>
                                    <Spacer className='h-5' />
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            PICK UP SCHEDULE:
                                        </Text>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            {recurrence}
                                        </Text>
                                        <Div className='w-1/3 px-auto'>
                                            <ScheduleDropdown
                                                icon={<div />}
                                                value={recurrence}
                                                dayValue={daysSelected}
                                                width='w-48'
                                                options={RecurrenceOptions}
                                                onSelect={setRecurrence}
                                                onSelectDay={setDayValue}
                                            />
                                        </Div>
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            CONTACT PERSON:
                                        </Text>
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-1/3 pr-2'
                                            name='contactName'
                                            placeholder='Name'
                                            onChange={setContactName}
                                            type='text'
                                            value={contactName}
                                        />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass=' w-1/3 pl-2'
                                            name='contactNum'
                                            placeholder='Number'
                                            onChange={setContactNum}
                                            type='text'
                                            value={contactNum}
                                        />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            PICK UP ADDRESS:
                                        </Text>
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-1/3 pr-2'
                                            name=''
                                            placeholder='Unit'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass=' w-1/3 pl-2'
                                            name=''
                                            placeholder='Street'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Spacer className='w-1/3' />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-1/3 pr-2'
                                            name=''
                                            placeholder='Region'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass=' w-1/3 pl-2'
                                            name=''
                                            placeholder='City'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Spacer className='w-1/3' />
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-1/3 pr-2'
                                            name=''
                                            placeholder='Barangay'
                                            onChange={() => { }}
                                            type='text'
                                            //value=''
                                        />
                                        <Spacer className='w-1/3' />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            ESTIMATED VOLUME PER PICK UP:
                                        </Text>
                                        <FlexRow className='w-1/3 items-center justify-start'>
                                            <RawInput
                                                className='phone:border-grey-400 text-secondary-200 text-sm'
                                                containerClass='w-10'
                                                name=''
                                                placeholder='0'
                                                onChange={setEstTrans}
                                                type='text'
                                                value={estTrans}
                                            />
                                            <Spacer className='w-4' />
                                            <Text className='text-secondary-200 text-sm text-left'>
                                                Transactions
                                            </Text>
                                        </FlexRow>
                                        <Spacer className='w-1/3' />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-between py-2'>
                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                            SPECIAL INSTRUCTIONS:
                                        </Text>
                                        <RawInput
                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                            containerClass='w-2/3'
                                            name='Instructions'
                                            placeholder='Instructions'
                                            onChange={setSpecialIns}
                                            type='text'
                                            value={specialIns}
                                        />
                                    </FlexRow>
                                    <FlexRow className='w-full items-center justify-end py-2'>
                                        <Button
                                            className='w-1/4 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            className='w-1/4 ml-2 h-10'
                                            onClick={onSave}
                                            isLoading={loading}
                                        >
                                            Save
                                        </Button>
                                    </FlexRow>
                                    <Spacer className='h-2' />
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};