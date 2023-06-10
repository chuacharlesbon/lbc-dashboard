import React from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { HiCheckCircle } from 'react-icons/hi';
import { ImInfo, ImSpinner2 } from 'react-icons/im';
import { useLocation } from 'react-router-dom';
import { Images } from '../../../assets/images/images';
import { PickupScheduleItem, PickupScheduleItemSummary } from '../../../components';
import { PickUpScheduleCreate } from '../../../components/Modals/PickupScheduleModal';
import { scheduledPickups, tempBorderColors, tempPickupScheduleData } from '../../../constants/TempData';
import { Button, RawButton } from '../../../core/Buttons';
import { FlexRow, Div, Spacer, FlexColumn } from '../../../core/Containers';
import { Image } from '../../../core/Image';
import { Text, Span } from '../../../core/Text';
import { formatDate } from '../../../helpers/formatters';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const SchedulePickUpTab = () => {

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('schedule');

    const [loading, setLoading] = React.useState(true);
    const [loading1, setLoading1] = React.useState(true);
    const [isToastOpenA, setToastOpenA] = React.useState(false);
    const [isSingleView, setIsSingleView] = React.useState(false);

    const [currentDate, setDate] = React.useState(new Date());

    React.useEffect(() => {
        if (actionQuery === 'updated') {
            setIsSingleView(true)
        }
    }, [actionQuery])

    React.useEffect(() => {
        setLoading(true);
        setLoading1(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
        setTimeout(() => {
            setLoading1(false);
        }, 1500)
    }, [isSingleView, currentDate])

    return (
        <>
            <PickUpScheduleCreate
                isOpen={isToastOpenA}
                onClose={() => setToastOpenA(false)}
            />
            {
                isSingleView ?
                    /* Pick Up Schedule Single View */
                    <FlexColumn className='items-center justify-start w-full'>

                        <Div className='w-500px border border-grey-400 rounded-lg shadow-lg my-5'>
                            <Div
                                className='flex flex-col items-center justify-between p-4 w-full bg-white border-l-8 rounded-lg shadow-lg border-green-100'
                            >
                                <Div className='w-full flex flex-row items-center phone:justify-between tablet:justify-center'>
                                    <Div className='w-1/5'>
                                        <HiCheckCircle className='text-green-100 text-4xl' />
                                    </Div>
                                    <Div className='w-4/5'>
                                        <Text className='font-bold italic text-2xl text-secondary-100 pb-2'>
                                            Change Request Submitted
                                        </Text>
                                        <Text className='text-sm text-secondary-200 pt-2'>
                                            Current schedule will be followed until further notice. November 11, 2022 9:06 AM
                                        </Text>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>

                        <Div className='w-700px rounded-sm shadow-sm border border-grey-400 p-10'>
                            <FlexRow className='w-full items-center justify-between'>
                                <Image className='h-14 w-14' alt='LBC logo' src={Images.LBClogo} />
                                <Div>
                                    <Text className='text-sm text-secondary-200'>
                                        PICK UP CHANGE REQUEST REFERENCE NO.
                                    </Text>
                                    <Text className='text-xl text-secondary-200 font-bold'>
                                        32528190004353
                                    </Text>
                                </Div>
                                <Div>
                                    <Image className='' alt='Code' src={Images.SampleQrBarCode} />
                                    <Text className='flex flex-row items-center jusitfy-center text-secondary-200 text-xs font-bold'>
                                        <ImInfo className='inline mr-2' />
                                        <Span>Keep this QR and barcode as reference</Span>
                                    </Text>
                                </Div>
                            </FlexRow>

                            <Spacer className='h-5' />

                            <FlexRow className='w-full py-1'>
                                <Text className='text-secondary-200 text-sm text-right w-1/3'>
                                    PICK UP SCHEDULE:
                                </Text>
                                <Spacer className='w-2' />
                                <Text className='text-secondary-100 text-sm w-2/3'>
                                    Recurs every Mondays, Wednesdays, and Thursdays
                                </Text>
                            </FlexRow>
                            <FlexRow className='w-full py-1'>
                                <Text className='text-secondary-200 text-sm text-right w-1/3'>
                                    CONTACT PERSON:
                                </Text>
                                <Spacer className='w-2' />
                                <Text className='text-secondary-100 text-sm w-2/3'>
                                    Rio Aquino (+63 9317 336 3188)
                                </Text>
                            </FlexRow>
                            <FlexRow className='w-full py-1'>
                                <Text className='text-secondary-200 text-sm text-right w-1/3'>
                                    PICK UP ADDRESS:
                                </Text>
                                <Spacer className='w-2' />
                                <Text className='text-secondary-100 text-sm w-2/3'>
                                    Blk 14 Lot 6 MS5 Lancaster New City, General Trias, Cavite, Barangay Navarro
                                </Text>
                            </FlexRow>
                            <FlexRow className='w-full py-1'>
                                <Text className='text-secondary-200 text-sm text-right w-1/3'>
                                    ESTIMATED VOLUME PER PICK UP:
                                </Text>
                                <Spacer className='w-2' />
                                <Text className='text-secondary-100 text-sm w-2/3'>
                                    75 Transactions
                                </Text>
                            </FlexRow>
                            <FlexRow className='w-full py-1'>
                                <Text className='text-secondary-200 text-sm text-right w-1/3'>
                                    SPECIAL INSTRUCTIONS:
                                </Text>
                                <Spacer className='w-2' />
                                <Text className='text-secondary-100 text-sm w-2/3'>
                                    Please handle it with care.
                                </Text>
                            </FlexRow>
                        </Div>

                        <FlexRow className='w-full items-center justify-center pt-5 pb-20'>
                            <Button
                                className='w-32 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                onClick={() => setIsSingleView(false)}
                            >
                                Back
                            </Button>
                            <Button
                                className='w-32 ml-2 h-10'
                                onClick={() => setIsSingleView(false)}
                            >
                                View Activity
                            </Button>
                        </FlexRow>

                    </FlexColumn>
                    :
                    /* Pick Up Schedule Summary */

                    <FlexRow className='justify-between w-full'>
                        <Div className='w-1/3 h-750px px-5 py-10'>
                            <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-full h-full'>
                                <FlexRow className='items-center w-full'>
                                    <Div>
                                        <Text className='text-secondary-100 text-2xl font-bold'>
                                            {currentDate.getDate() > 9 ? currentDate.getDate() : `0${currentDate.getDate()}`}
                                        </Text>
                                        <Text className='text-secondary-100 font-semibold'>
                                            {formatDate(currentDate)}
                                        </Text>
                                    </Div>
                                    <Spacer className='ml-auto' />
                                    <RawButton className='m-1 p-1 hover:bg-grey-400'>
                                        <BsChevronLeft className='text-red-400 text-xl font-bold' />
                                    </RawButton>
                                    <RawButton className='m-1 p-1 hover:bg-grey-400'>
                                        <BsChevronRight className='text-red-400 text-xl font-bold' />
                                    </RawButton>
                                </FlexRow>

                                {
                                    loading ?
                                        <Text className='text-red-400 text-center flex flex-row justify-center items-center my-16 desktop:my-20'>
                                            <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                            Loading data ...
                                        </Text>
                                        :
                                        <Div className='overflow-y-scroll h-200px my-5'>
                                            {
                                                tempPickupScheduleData.map((item, index) => (
                                                    <PickupScheduleItemSummary
                                                        data={item}
                                                        className={`${tempBorderColors[index % 2]}`}
                                                        id={item.id}
                                                        pickUpSchedule={item.pickUpSchedule}
                                                        address={item.address}
                                                        contactPerson={item.contactPerson}
                                                        estVolumePerPickup={item.estVolumePerPickup}
                                                        specialInstruction={item.specialInstruction}
                                                    />
                                                ))
                                            }
                                        </Div>
                                }

                                <Spacer className='w-5 h-5' />

                                <Div className='w-250px h-250px mx-auto'>
                                    <Calendar
                                        className={`rounded-lg mx-auto`}
                                        tileClassName={({ activeStartDate, date, view }) => view === 'month' && scheduledPickups.includes((new Date(date)).toString()) ? 'text-blue-100 font-bold' : 'text-grey-200'}
                                        onChange={(d) => setDate(d)}
                                        value={currentDate}
                                    />
                                </Div>
                            </Div>
                        </Div>
                        <Div className='w-2/3 h-750px px-5 py-10'>
                            <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-full h-full'>
                                <Text className='text-secondary-200 font-bold'>
                                    PICK UP SCHEDULES
                                </Text>
                                <Spacer className='h-5' />
                                {
                                    loading1 ?
                                        <Text className='text-red-400 text-center flex flex-row justify-center items-center my-24'>
                                            <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                            Loading data ...
                                        </Text>
                                        :
                                        <Div className='overflow-y-scroll h-400px'>
                                            {
                                                tempPickupScheduleData.map((item, index) => (
                                                    <PickupScheduleItem
                                                        data={item}
                                                        className={`${tempBorderColors[index % 2]}`}
                                                        id={item.id}
                                                        pickUpSchedule={item.pickUpSchedule}
                                                        address={item.address}
                                                        contactPerson={item.contactPerson}
                                                        estVolumePerPickup={item.estVolumePerPickup}
                                                        specialInstruction={item.specialInstruction}
                                                    />
                                                ))
                                            }
                                        </Div>
                                }
                                <FlexRow className='justify-center w-full my-5'>
                                    <RawButton className='bg-grey-500 hover:bg-grey-400 rounded-lg shadow-lg p-2' onClick={() => setToastOpenA(true)}>
                                        <Text className='text-secondary-200 text-sm font-bold'>
                                            + Add Schedule
                                        </Text>
                                    </RawButton>
                                </FlexRow>
                                <FlexRow className='bg-grey-400 items-start justify-center p-5'>
                                    <ImInfo className='text-secondary-200 text-2xl' />
                                    <Div className='px-2'>
                                        <Text className='text-secondary-200 text-xs'>
                                            Requests to change the details in your current pick up schedule or add new pick up schedules will be reviewed by our team, before they will be applied, but we will get back to you as soon as we can. We thank you for your patience.
                                        </Text>
                                    </Div>
                                </FlexRow>
                            </Div>
                        </Div>
                    </FlexRow>
            }
        </>
    );
};