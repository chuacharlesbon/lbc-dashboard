import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Div, FlexColumn, FlexRow, Spacer } from '../../core/Containers';
import { Span, Text } from '../../core/Text';
import { Button, RawButton } from '../../core/Buttons';
import { CheckBox, Radio, RawInput } from '../../core/Forms';
import { useNavigate } from 'react-router-dom';
import { LBCModalTwoFunc } from './LBCModal';
import { BookNowStage } from '../../constants/ConstantsData';
import { StageUI } from '../Feature';
import { FormLabel } from '../../core/Forms/FormLabel';
import { PackageItem } from '../Feature/PackageItem';
import { tempLBCPackage } from '../../constants/TempData';

export const BookNowModal = ({
    onClose, isOpen, data
}) => {

    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(false);
    const [currentStage, setStage] = React.useState(1);
    const [isToastOpen, setToastOpen] = React.useState(false);

    const [contactName, setContactName] = React.useState('');
    const [contactNum, setContactNum] = React.useState('');

    const [shipmentType, setShipmentType] = React.useState('Air');

    const [selectedItems, setSelected] = React.useState([]);

    const onSelectItems = (item) => {
        setSelected([item])
    }

    const onSaveLater = () => {
        setLoading(true);
        if (currentStage > 0) {
            setTimeout(() => {
                setToastOpen(false);
                setLoading(false);
            }, 2000);
            setTimeout(() => {
                onClose();
            }, 3000);
        }
    }

    const onChangeStage = (stage, type) => {
        if (type === 'next' && stage === 3) {
            navigate('/book-now?booking=added')
            onClose();
        } else if (type === 'next') {
            setStage(stage + 1)
        } else if (type === 'prev') {
            setStage(stage - 1)
        }
    }

    return (
        <>
            <LBCModalTwoFunc
                description={
                    <>
                        <Span>You can go back anytime to finish your booking by clicking</Span>
                        <Span className='mx-1 font-bold'>Activity {`>`} Draft</Span>
                        <Span>in the menu.</Span>
                    </>
                }
                isOpen={isToastOpen}
                onClose={() => setToastOpen(false)}
                title='Save for later?'
                toastKind='info'
                buttonTextFirst='Cancel'
                buttonTextSecond='Save for later'
                onClickSecond={onSaveLater}
                loading={loading}
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

                                <FlexColumn className='justify-between bg-white border border-grey-400 h-3/4 w-700px px-10 py-5 rounded-lg shadow-lg'>
                                    <FlexRow className='w-full items-center justify-start'>
                                        {
                                            BookNowStage.map((item) => (
                                                <StageUI
                                                    label={item.name}
                                                    count={item.stage}
                                                    currentIndex={currentStage}
                                                    onStage={currentStage === item.stage || currentStage > item.stage}
                                                />
                                            ))
                                        }
                                    </FlexRow>

                                    <Div className='w-full h-3/4 my-2 p-5 overflow-y-scroll'>
                                        {
                                            currentStage === 1 ?
                                                <Div className='w-full'>
                                                    <Text className='text-secondary-200 text-left'>
                                                        How do you want to send your package?
                                                    </Text>
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
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Landmark'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Spacer className='w-1/3' />
                                                        <CheckBox
                                                            containerClass='w-2/3'
                                                            id='save-address'
                                                            name='save-address'
                                                            label={
                                                                <Text className='text-secondary-200 text-sm'>
                                                                    Save Contact to Address Book
                                                                </Text>
                                                            }
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                                            PICK UP SCHEDULE:
                                                        </Text>
                                                        <input className='w-48 text-secondary-200 block rounded-lg' type='date' />
                                                        <Spacer className='w-1/3' />
                                                    </FlexRow>
                                                </Div>
                                                :
                                                <></>
                                        }
                                        {
                                            currentStage === 2 ?
                                                <Div className='w-full'>
                                                    <Text className='text-secondary-200 text-left'>
                                                        How do you want to your package received?
                                                    </Text>
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
                                                            DELIVERY ADDRESS:
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
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Landmark'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Spacer className='w-1/3' />
                                                        <CheckBox
                                                            containerClass='w-2/3'
                                                            id='save-address'
                                                            name='save-address'
                                                            label={
                                                                <Text className='text-secondary-200 text-sm'>
                                                                    Save Contact to Address Book
                                                                </Text>
                                                            }
                                                        />
                                                    </FlexRow>
                                                </Div>
                                                :
                                                <></>
                                        }
                                        {
                                            currentStage === 3 ?
                                                <Div className='w-full'>
                                                    <FlexRow className='w-full items-center justify-between'>
                                                        <Div className='w-1/4 p-2'>
                                                            <FormLabel className='text-secondary-200 text-left' isRequired>
                                                                Item name
                                                            </FormLabel>
                                                            <RawInput
                                                                className='phone:border-grey-400 text-secondary-200 text-sm'
                                                                containerClass='my-2'
                                                                name=''
                                                                placeholder=''
                                                                onChange={() => { }}
                                                                type='text'
                                                            //value=''
                                                            />
                                                        </Div>
                                                        <Div className='w-1/4 p-2'>
                                                            <FormLabel className='text-secondary-200 text-left' isRequired>
                                                                Item Value
                                                            </FormLabel>
                                                            <RawInput
                                                                className='phone:border-grey-400 text-secondary-200 text-sm'
                                                                containerClass='my-2'
                                                                name=''
                                                                placeholder=''
                                                                onChange={() => { }}
                                                                type='text'
                                                            //value=''
                                                            />
                                                        </Div>
                                                        <Div className='w-1/2 p-2'>
                                                            <FormLabel className='text-secondary-200 text-left' isRequired>
                                                                Shipment Type
                                                            </FormLabel>
                                                            <FlexRow className='w-full items-center justify-start'>
                                                                <Radio
                                                                    containerClass='rounded-lg p-2 border border-grey-400 m-2 w-2/5'
                                                                    isChecked={shipmentType === 'Air'}
                                                                    label="Air"
                                                                    name="air"
                                                                    onClick={() => setShipmentType('Air')}
                                                                    optionId="shipment"
                                                                />
                                                                <Radio
                                                                    containerClass='rounded-lg p-2 border border-grey-400 m-2 w-2/5'
                                                                    isChecked={shipmentType === 'Sea'}
                                                                    label="Sea"
                                                                    name="sea"
                                                                    onClick={() => setShipmentType('Sea')}
                                                                    optionId="shipment"
                                                                />
                                                            </FlexRow>
                                                        </Div>
                                                    </FlexRow>

                                                    <CheckBox
                                                        containerClass=''
                                                        id='save-address'
                                                        name='save-address'
                                                        label='Use Cash on Delivery (COD) or Cash on Pick Up (COP)'
                                                    />

                                                    <Text className='text-secondary-200 text-left text-sm p-2'>
                                                        LBC will collect the payment from the receiver on your behalf upon delivery of your item
                                                    </Text>

                                                    <Div className='pl-5'>
                                                        <FlexRow className='w-full items-center justify-start'>
                                                            <CheckBox
                                                                containerClass=''
                                                                id='save-address'
                                                                name='save-address'
                                                                label='COD Amount'
                                                            />
                                                            <RawInput
                                                                className='phone:border-grey-400 text-secondary-200 text-sm'
                                                                containerClass='mx-5'
                                                                name=''
                                                                placeholder='Enter amount'
                                                                onChange={() => { }}
                                                                type='text'
                                                            //value=''
                                                            />
                                                        </FlexRow>
                                                        <CheckBox
                                                            containerClass=''
                                                            id='save-address'
                                                            name='save-address'
                                                            label='Freight Amount'
                                                        />
                                                    </Div>

                                                    <Spacer className='h-5' />

                                                    <FlexRow className='w-full items-center justify-between'>
                                                        <Div className='w-1/4 p-2'>
                                                            <FormLabel className='text-secondary-200 text-left' isRequired>
                                                                {`Act. Weight (kg)`}
                                                            </FormLabel>
                                                            <RawInput
                                                                className='phone:border-grey-400 text-secondary-200 text-sm'
                                                                containerClass='my-2'
                                                                name=''
                                                                placeholder=''
                                                                onChange={() => { }}
                                                                type='text'
                                                            //value=''
                                                            />
                                                        </Div>
                                                        <Div className='w-3/4 p-2'>
                                                            <FormLabel className='text-secondary-200 text-left' isRequired>
                                                                {`Item Dimensions (cm)`}
                                                            </FormLabel>
                                                            <FlexRow className='w-full items-center justify-start'>
                                                                <Text className='text-secondary-200 text-xs'>
                                                                    Length
                                                                </Text>
                                                                <RawInput
                                                                    className='phone:border-grey-400 text-secondary-200 text-sm'
                                                                    containerClass='m-2 w-12'
                                                                    name=''
                                                                    placeholder=''
                                                                    onChange={() => { }}
                                                                    type='text'
                                                                //value=''
                                                                />
                                                                <Text className='text-secondary-200 text-xs'>
                                                                    x Width
                                                                </Text>
                                                                <RawInput
                                                                    className='phone:border-grey-400 text-secondary-200 text-sm'
                                                                    containerClass='m-2 w-12'
                                                                    name=''
                                                                    placeholder=''
                                                                    onChange={() => { }}
                                                                    type='text'
                                                                //value=''
                                                                />
                                                                <Text className='text-secondary-200 text-xs'>
                                                                    x Height
                                                                </Text>
                                                                <RawInput
                                                                    className='phone:border-grey-400 text-secondary-200 text-sm'
                                                                    containerClass='m-2 w-12'
                                                                    name=''
                                                                    placeholder=''
                                                                    onChange={() => { }}
                                                                    type='text'
                                                                //value=''
                                                                />
                                                            </FlexRow>
                                                        </Div>
                                                    </FlexRow>

                                                    <Text className='text-secondary-200 text-left font-bold'>
                                                        Packaging
                                                    </Text>

                                                    <Div className='w-full overflow-x-scroll py-2'>
                                                        <FlexRow className='w-1000px py-2'>
                                                            {
                                                                tempLBCPackage.map((item) => (
                                                                    <PackageItem
                                                                        className='w-200px mx-2'
                                                                        isSelected={selectedItems.includes(item)}
                                                                        data={item}
                                                                        onClick={onSelectItems}
                                                                        list={[]}
                                                                    />
                                                                ))
                                                            }
                                                        </FlexRow>
                                                    </Div>
                                                </Div>
                                                :
                                                <></>
                                        }
                                    </Div>

                                    <FlexRow className='w-full items-center justify-center py-2'>
                                        <RawButton className='w-1/4' onClick={() => setToastOpen(true)}>
                                            <Text className='text-red-400 font-bold'>
                                                Save for later
                                            </Text>
                                        </RawButton>
                                        <Spacer className='w-1/4' />
                                        <Button
                                            className='w-1/4 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                            onClick={currentStage === 1
                                                ? onClose
                                                : () => onChangeStage(currentStage, 'prev')
                                            }
                                        >
                                            {currentStage === 1 ? "Cancel" : 'Back'}
                                        </Button>
                                        <Button
                                            className='w-1/4 ml-2 h-10'
                                            onClick={() => onChangeStage(currentStage, 'next')}
                                            isLoading={loading}
                                        >
                                            Next
                                        </Button>
                                    </FlexRow>
                                </FlexColumn>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};