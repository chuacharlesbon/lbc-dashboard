import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { ImUpload3, ImInfo, ImSpinner2 } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Images } from '../../../assets/images/images';
import { BookNowModal } from '../../../components/Modals';
import { ColumnHeader, BookNowDataRow, BookNowDataEditRow, BookNowDataSummaryRow } from '../../../components/Tables';
import { BookNowSummaryColumn } from '../../../constants/ConstantsData';
import { BookNowSummaryDetails } from '../../../constants/TempData';
import { Button, RawButton } from '../../../core/Buttons';
import { Div, Divider, FlexColumn, FlexRow, Spacer } from '../../../core/Containers';
import { CheckBox, FileInput } from '../../../core/Forms';
import { Image } from '../../../core/Image';
import { Span, Text } from '../../../core/Text';

export const BookNowTab = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('booking');

    const [bookType, setBookType] = React.useState('default');
    const [bookAdded, setBookAdded] = React.useState(false);

    const [loading, setLoading] = React.useState(true);
    const [isToastOpenA, setToastOpenA] = React.useState(false);

    const inputFileRef = React.useRef(null);
    const [file, setFile] = React.useState([{ name: 'browse', size: 0 }]);
    const [prevFile, setPrevFile] = React.useState([{ name: 'browse', size: 0 }]);
    const [uploaded, setUpload] = React.useState(false);

    React.useEffect(() => {
        if (actionQuery === 'added') {
            setBookAdded(true)
            setBookType('summary')
        }
    }, [actionQuery])

    React.useEffect(() => {
        setPrevFile(file)
        setUpload(true)
        setTimeout(() => {
            if (file != null) {
                if (file.length > 0) {
                    if (file[0].name !== 'browse' && prevFile !== file) {
                        setUpload(false)
                        setBookAdded(true)
                    }
                }
            }
        }, 2000)
    }, [file, prevFile, inputFileRef])

    const onCancelFile = () => {
        setUpload(false)
        setFile(prevFile)
    }

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [bookType, bookAdded])

    return (
        <>
            <BookNowModal
                isOpen={isToastOpenA}
                onClose={() => setToastOpenA(false)}
            />
            {
                bookType === 'summary' && !loading ?
                    <FlexColumn className='w-full'>
                        <Spacer className='p-5' />
                        <Text className='text-secondary-200 font-bold'>
                            SUMMARY
                        </Text>
                        <Text className='text-secondary-200'>
                            Kindly review the summary details before placing your order
                        </Text>
                        <Spacer className='p-5' />

                        <Div className='w-full border border-grey-400 rounded-md p-5'>
                            <Text className='text-secondary-200 font-bold'>
                                BOOKING DETAILS
                            </Text>
                            <FlexRow className='w-full items-center justify-between py-2 border-b-2 border-secondary-200'>
                                {
                                    BookNowSummaryColumn.map((item) => (
                                        <Div className={`${item.width}`}>
                                            <Text className='text-secondary-200 text-left font-bold'>
                                                {item.name}
                                            </Text>
                                        </Div>
                                    ))
                                }
                            </FlexRow>
                            <Div className='h-3/4 desktop:h-400px overflow-y-scroll py-5'>
                                {
                                    BookNowSummaryDetails.map((list) => (
                                        <BookNowDataSummaryRow
                                            data={list}
                                        />
                                    ))
                                }
                            </Div>

                        </Div>

                        <CheckBox
                            containerClass='w-full py-4'
                            id='agreement'
                            name='agreement'
                            label={
                                <Text className='text-secondary-200 text-xs laptop:text-sm desktop:text-base'>
                                    I  have read, understood and agree to<a className='m-1 text-red-400 text-xs underline' href='https://www.lbcexpress.com' rel="noreferrer" target='_blank'>LBC’s Terms of Service</a>and
                                    <a className='ml-1 text-red-400 text-xs underline' href='https://www.lbcexpress.com' rel="noreferrer" target='_blank'>Privacy Policy</a>
                                </Text>
                            }
                        />

                        <FlexRow className='w-full items-center justify-center pt-5 pb-20'>
                            <Button
                                className='w-32 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                onClick={() => setBookType('default')}
                            >
                                Back
                            </Button>
                            <Button
                                className='w-32 ml-2 h-10'
                                onClick={() => setBookType('booked')}
                            >
                                Book Now
                            </Button>
                        </FlexRow>

                    </FlexColumn>
                    :
                    <>
                        {
                            bookType === 'summary' && loading ?
                                <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                    <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                    Loading data ...
                                </Text>
                                :
                                <></>
                        }
                    </>
            }
            {
                bookType === 'booked' && !loading ?
                    <FlexColumn className='w-full items-center'>
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
                                            Booking Confirmed
                                        </Text>
                                        <Text className='text-sm text-secondary-200 pt-2'>
                                            You’ve successfully booked multiple orders! November 11, 2022 9:06 AM
                                        </Text>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>

                        <Div className='w-full rounded-sm shadow-sm border border-grey-400 p-10'>
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

                            {
                                BookNowSummaryDetails.map((list) => (
                                    <BookNowDataEditRow
                                        data={list}
                                    />
                                ))
                            }
                        </Div>

                        <FlexRow className='w-full items-center justify-center pt-5 pb-20'>
                            <Button
                                className='w-32 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                onClick={() => navigate('/')}
                            >
                                Home
                            </Button>
                            <Button
                                className='w-32 ml-2 h-10'
                                onClick={() => { }}
                            >
                                View Activity
                            </Button>
                        </FlexRow>
                    </FlexColumn>
                    :
                    <>
                        {
                            bookType === 'booked' && loading ?
                                <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                    <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                    Loading data ...
                                </Text>
                                :
                                <></>
                        }
                    </>
            }
            {
                bookType === 'default' && !loading ?
                    <Div className='w-full'>
                        <Spacer className='h-5' />
                        <FlexRow className='items-center justify-between'>
                            <Text className='text-secondary-200 font-bold'>
                                BOOKING DETAILS
                            </Text>
                            <input className='w-48 block rounded-lg' type='date' value='2023-01-01' />
                        </FlexRow>
                        <Spacer className='h-5' />

                        <Div className='w-full border border-grey-400 rounded-lg shadow-lg overflow-x-scroll my-5'>
                            <FlexRow className='items-center justify-between w-3000px'>
                                <ColumnHeader
                                    icon={false}
                                    title="Send via"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Sender"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Deliver via"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Receiver"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Item Name"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Item Name (Value)"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Shipment Mode"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="COD Amount (PHP)"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Actual Weight (kg)"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Item Dimension L x W x H (cm)"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Packaging"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Special Instructions"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Freight Free"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="COP/COD Amount"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Action"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2 phone:justify-center"
                                    titleClassName=""
                                />
                            </FlexRow>
                            <Divider className='text-grey-100 my-2 w-3000px' />

                            {
                                bookAdded ?
                                    <Div>
                                        <BookNowDataRow deliveryId='1' />
                                        <BookNowDataRow deliveryId='1' />
                                        <BookNowDataRow deliveryId='1' />
                                    </Div>
                                    :
                                    <Text className='text-secondary-200 text-sm text-center py-10'>
                                        No data to be displayed
                                    </Text>
                            }

                        </Div>

                        <Div className='w-full p-2'>

                            <FlexRow className='justify-center w-full'>
                                <RawButton className='bg-grey-500 hover:bg-grey-400 rounded-lg p-2' onClick={() => setToastOpenA(true)}>
                                    <Text className='text-secondary-200 text-sm font-bold'>
                                        + Add Booking
                                    </Text>
                                </RawButton>
                            </FlexRow>

                            <Text className='text-secondary-200 text-center my-2'>
                                OR
                            </Text>

                            <FlexRow className='items-center justify-between w-full'>
                                <Spacer className='border-t-2 border-grey-400 w-2/5' />
                                <Text className='text-secondary-200 text-center font-semibold w-1/5'>
                                    UPLOAD EXCEL
                                </Text>
                                <Spacer className='border-t-2 border-grey-400 w-2/5' />
                            </FlexRow>

                            {
                                uploaded && file[0].name !== 'browse' ?
                                    <FlexColumn className='items-start jusitfy-center w-96 m-5 p-5 mx-auto rounded-lg bg-grey-500 hover:bg-grey-400'>

                                        <FlexRow className='w-full items-center justify-between mb-2'>
                                            <Text className='text-secondary-200 text-sm'>
                                                File Upload
                                            </Text>
                                            <RawButton onClick={onCancelFile}>
                                                <FaTimes className='text-secondary-200 text-xs' />
                                            </RawButton>
                                        </FlexRow>
                                        <FlexRow className='w-96 items-center justify-between'>
                                            <Div className='w-72'>
                                                <div
                                                    className='rounded-full background-play h-2.5'
                                                    style={{
                                                        width: `100%`
                                                    }}
                                                />
                                            </Div>
                                            <Text className='text-secondary-200 text-xs w-24 pl-5'>
                                                {(file[0].size / 1000000).toFixed(2)} MB
                                            </Text>
                                        </FlexRow>
                                    </FlexColumn>
                                    :
                                    <FlexColumn className='items-center jusitfy-center w-96 m-5 p-5 mx-auto rounded-lg bg-grey-500 hover:bg-grey-400'>
                                        <ImUpload3 className='text-grey-300 text-center' />
                                        <FlexRow className='items-center jusitfy-center'>
                                            <Text className='text-secondary-200 text-sm my-2'>
                                                Drop xlsx or
                                            </Text>
                                            <FileInput
                                                file={file}
                                                setFile={setFile}
                                                fileRef={inputFileRef}
                                            >
                                                <Text className={`${file[0].name !== 'browse' ? 'w-40' : ''} truncate text-blue-100 text-sm my-2 mx-1 hover:underline`}>
                                                    {file[0].name}
                                                </Text>
                                            </FileInput>

                                            {
                                                file[0].name !== 'browse' ?
                                                    <RawButton onClick={() => setFile([{ name: 'browse', size: 0 }])}>
                                                        <FaTimes className='text-secondary-200 text-xs' />
                                                    </RawButton>
                                                    :
                                                    <></>
                                            }
                                        </FlexRow>
                                    </FlexColumn>
                            }

                            <Link to="/sample_lbc_book_now.xlsx" target="_blank" download className="text-blue-100 text-center text-sm mx-auto hover:underline block">Download a sample .xlsx template</Link>

                            <Spacer className='h-5' />

                            <Div className='bg-grey-300 py-2'>
                                <Div className='w-3/4 mx-auto'>
                                    <Text className='flex flex-row items-center jusitfy-center text-secondary-200 text-xs font-bold'>
                                        <ImInfo className='inline mr-2' />
                                        <Span>Helpful Tips</Span>
                                    </Text>
                                    <Div className='px-10'>
                                        <Text className='text-secondary-200 text-xs'>
                                            &#x2022; Make sure you fill out the correct Item Value for each order. This will be the basis of COD/COP Item Value collection
                                        </Text>
                                        <Text className='text-secondary-200 text-xs'>
                                            &#x2022; For Home Delivery, ensure that your area is serviceable. Check serviceable areas<a className='m-1 text-blue-100 text-xs underline' href='https://www.lbcexpress.com/branches' rel="noreferrer" target='_blank'>here.</a>For Branch Pick Ups, find branches
                                            <a className='ml-1 text-blue-100 text-xs underline' href='https://www.lbcexpress.com/branches' rel="noreferrer" target='_blank'>here.</a>
                                        </Text>
                                        <Text className='text-secondary-200 text-xs'>
                                            &#x2022; After booking your orders, check the <Link className='m-1 text-blue-100 text-xs underline' to='/'>Dashboard</Link> to view the Booking Reference Number list
                                        </Text>
                                    </Div>
                                </Div>
                            </Div>

                            {
                                bookAdded ?
                                    <FlexRow className='w-full items-center justify-center pt-5 pb-20'>
                                        <Button
                                            className='w-32 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                            onClick={() => setBookType('default')}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            className='w-32 ml-2 h-10'
                                            onClick={() => setBookType('summary')}
                                        >
                                            Next
                                        </Button>
                                    </FlexRow>
                                    :
                                    <></>
                            }

                        </Div>
                    </Div>
                    :
                    <>
                        {
                            bookType === 'default' && loading ?
                                <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                    <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                    Loading data ...
                                </Text>
                                :
                                <></>
                        }
                    </>
            }
        </>
    );
};