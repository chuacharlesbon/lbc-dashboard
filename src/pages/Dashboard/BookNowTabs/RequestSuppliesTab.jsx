import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { ImInfo, ImSpinner2 } from 'react-icons/im';
import { Images } from '../../../assets/images/images';
import { PackageItem, RequestItems } from '../../../components/Feature';
import { SuppliesReceiverInfo } from '../../../components/SuppliesReceiverInfo';
import { tempLBCPackage, tempReceiverData } from '../../../constants/TempData';
import { Button } from '../../../core/Buttons';
import { FlexRow, Div, Spacer, FlexColumn } from '../../../core/Containers';
import { Image } from '../../../core/Image';
import { Span, Text } from '../../../core/Text';

export const RequestSuppliesTab = () => {

    const [loading, setLoading] = React.useState(true);
    const [loading1, setLoading1] = React.useState(false);
    const [requestSubmitted, setRequest] = React.useState(false);

    const [selectedItems, setSelected] = React.useState([]);
    const [addedItems, setAdded] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    const onSelectItems = (item) => {
        setSelected([item])
    }

    const onAddItems = () => {
        const tempList = [...addedItems];
        const tempList2 = tempList.concat(selectedItems);
        setAdded(tempList2);
        setSelected([]);
    }

    const onSubmit = () => {
        setLoading1(true);
        setTimeout(() => {
            setLoading1(false);
            setRequest(true);
        }, 1000)
    }

    return (
        <>
            {
                requestSubmitted ?
                    <FlexColumn className='items-center justify-start w-full'>

                        <Div className='w-500px border border-grey-400 rounded-lg shadow-lg my-10'>
                            <Div
                                className='flex flex-col items-center justify-between p-4 w-full bg-white border-l-8 rounded-lg shadow-lg border-green-100'
                            >
                                <Div className='w-full flex flex-row items-center phone:justify-between tablet:justify-center'>
                                    <Div className='w-1/5'>
                                        <HiCheckCircle className='text-green-100 text-4xl' />
                                    </Div>
                                    <Div className='w-4/5'>
                                        <Text className='font-bold italic text-2xl text-secondary-100 pb-2'>
                                            Supplies Request Submitted
                                        </Text>
                                        <Text className='text-sm text-secondary-200 pt-2'>
                                            You’ve successfully requested supplies!
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
                                        SUPPLIES REQUEST REFERENCE NO.
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
                                    PACKAGING:
                                </Text>
                                <Spacer className='w-2' />
                                <Div className='w-2/3'>
                                    {
                                        addedItems.map((item) => (
                                            <Text className='text-secondary-100 text-sm w-2/3'>
                                                {item.name}{''}{item.type}
                                            </Text>
                                        ))
                                    }
                                </Div>
                            </FlexRow>
                            <FlexRow className='w-full py-1'>
                                <Text className='text-secondary-200 text-sm text-right w-1/3'>
                                    RECEIVER:
                                </Text>
                                <Spacer className='w-2' />
                                <Text className='text-secondary-100 text-sm w-2/3'>
                                    Rio Aquino (+63 9317 336 3188)
                                </Text>
                            </FlexRow>
                            <FlexRow className='w-full py-1'>
                                <Text className='text-secondary-200 text-sm text-right w-1/3'>
                                    RECEIVER ADDRESS:
                                </Text>
                                <Spacer className='w-2' />
                                <Text className='text-secondary-100 text-sm w-2/3'>
                                    Blk 14 Lot 6 MS5 Lancaster New City, General Trias, Cavite, Barangay Navarro
                                </Text>
                            </FlexRow>
                        </Div>

                        <FlexRow className='w-full items-center justify-center pt-5 pb-20'>
                            <Button
                                className='w-32 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                onClick={() => {
                                    setSelected([])
                                    setAdded([])
                                    setRequest(false)
                                }}
                            >
                                Back
                            </Button>
                            <Button
                                className='w-32 ml-2 h-10'
                                onClick={() => {
                                    setSelected([])
                                    setAdded([])
                                    setRequest(false)
                                }}
                            >
                                View Activity
                            </Button>
                        </FlexRow>

                    </FlexColumn>
                    :
                    <FlexRow className='justify-between w-full'>

                        {/* First Body */}
                        <Div className='border-r border-grey-400 w-2/3 h-600px pr-10 py-10'>
                            {
                                loading ?
                                    <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                        <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                        Loading data ...
                                    </Text>
                                    :
                                    <Div className='p-5 w-full h-40 shadow-lg rounded-lg border border-grey-400'>
                                        <Text className='text-secondary-100 text-xs font-bold'>
                                            Supplies Inventory Report
                                            <Span className='mx-1'>as of Jan 1, 2023, 12:00 PM</Span>
                                        </Text>

                                        <FlexRow className='justify-between items-center my-2 w-full'>
                                            <Div className='w-1/5'>
                                                <Text className='text-secondary-100 text-xl text-center font-bold'>
                                                    295
                                                </Text>
                                                <Text className='text-secondary-100 text-center text-sm'>
                                                    No. of Supplies Delivered
                                                </Text>
                                                <Text className='text-secondary-200 text-center text-xs my-2'>
                                                    as of 01/01/2023
                                                </Text>
                                            </Div>
                                            <Div className='w-1/5'>
                                                <Text className='text-secondary-100 text-xl text-center font-bold'>
                                                    95
                                                </Text>
                                                <Text className='text-secondary-100 text-center text-sm'>
                                                    No. of Supplies Consumed
                                                </Text>
                                                <Text className='text-secondary-200 text-center text-xs my-2'>
                                                    as of 01/01/2023
                                                </Text>
                                            </Div>
                                            <Div className='w-1/5'>
                                                <Text className='text-secondary-100 text-xl text-center font-bold'>
                                                    232
                                                </Text>
                                                <Text className='text-secondary-100 text-center text-sm'>
                                                    No. of Supplies Remaining
                                                </Text>
                                                <Text className='text-secondary-200 text-center text-xs my-2'>
                                                    as of 01/01/2023
                                                </Text>
                                            </Div>
                                            <Div className='w-1/5'>
                                                <Text className='text-green-100 text-xl text-center font-bold'>
                                                    95%
                                                </Text>
                                                <Text className='text-secondary-100 text-center text-sm'>
                                                    % Supplies Remaining
                                                </Text>
                                                <Text className='text-secondary-200 text-center text-xs my-2'>
                                                    as of 01/01/2023
                                                </Text>
                                            </Div>
                                        </FlexRow>
                                    </Div>
                            }

                            <Spacer className='h-5' />

                            <Text className='text-secondary-200 text-left font-bold'>
                                CHOOSE PACKAGING
                            </Text>

                            <Div className='w-full overflow-x-scroll p-2'>
                                <FlexRow className='w-1000px py-2'>
                                    {
                                        tempLBCPackage.map((item) => (
                                            <PackageItem
                                                className='w-200px mx-2'
                                                isSelected={selectedItems.includes(item)}
                                                data={item}
                                                onClick={onSelectItems}
                                                list={addedItems}
                                            />
                                        ))
                                    }
                                </FlexRow>
                            </Div>

                            <Spacer className='h-5' />

                            <FlexRow className='w-full items-center justify-center py-2'>
                                <Button
                                    className='w-40 ml-2 h-10'
                                    onClick={onAddItems}
                                >
                                    Add to Bag
                                </Button>
                            </FlexRow>
                        </Div>

                        {/* Second Body */}
                        <Div className='border-l border-grey-400 w-1/3 h-600px p-5'>
                            <FlexColumn className='p-5 w-full h-full items-center justify-between'>
                                <Div className='w-full'>
                                    <SuppliesReceiverInfo
                                        data={tempReceiverData}
                                    />

                                    <Text className='text-secondary-100 text-center font-bold my-5'>
                                        MY SUPPLIES BAG
                                    </Text>

                                    {
                                        addedItems.length > 0 ?
                                            <Div className='w-full'>
                                                {
                                                    addedItems.map((item) => (
                                                        <RequestItems
                                                            className='w-200px mx-2'
                                                            isSelected={selectedItems.includes(item)}
                                                            data={item}
                                                            onClick={onSelectItems}
                                                        />
                                                    ))
                                                }
                                            </Div>
                                            :
                                            <Div className='w-full'>
                                                <Image
                                                    alt='LBC Bag'
                                                    className='my-5 mx-auto'
                                                    src={Images.lbcBag}
                                                />

                                                <Text className='text-secondary-200 text-center text-sm'>
                                                    Your bag is empty
                                                </Text>
                                                <Text className='text-secondary-200 text-center text-sm'>
                                                    Add packaging from the list
                                                </Text>

                                                <Spacer className='h-16 hidden' />

                                            </Div>
                                    }
                                </Div>

                                <FlexRow className='w-full items-center justify-center'>
                                    <Button
                                        className={`w-4/5 ml-2 h-10 phone:rounded-full ${addedItems.length > 0 ? '' : 'phone:bg-grey-400 hover:bg-grey-300'}`}
                                        isLoading={loading1}
                                        onClick={onSubmit}
                                    >
                                        Submit Request
                                    </Button>
                                </FlexRow>
                            </FlexColumn>
                        </Div>
                    </FlexRow>
            }
        </>
    );
};