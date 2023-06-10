import React from 'react';
import { AiOutlineCalendar, AiOutlineDownload } from 'react-icons/ai';
import { FaChevronDown, FaChevronUp, FaUserAlt } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { ColumnHeader, Pagination, SupplyMonitoringDataRow } from '../../../components/Tables';
import { tempGroupBarGraphData, tempProofDeliveryData } from '../../../constants/TempData';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Span, Text } from '../../../core/Text';
import { ResponsiveBar } from '@nivo/bar';

export const SuppliesMonitoring = () => {

    const [loading, setLoading] = React.useState(true);
    const [loading1, setLoading1] = React.useState(true);
    const [isAscending, setAscending] = React.useState(true);
    const [sortList, setSortList] = React.useState(tempProofDeliveryData);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(10);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const newList = sortList.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const colors = ['#F79520', '#D31245'];

    React.useEffect(() => {
        setLoading(true);
        setLoading1(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
        setTimeout(() => {
            setLoading1(false);
        }, 1500)
    }, [])

    const onSort = async (column) => {
        setLoading1(true);
        if (isAscending) {
            if(column == 0){
                const tempList = await sortList.sort((a, b) => {
                    if (a.sender < b.sender) { return -1; }
                    if (a.sender > b.sender) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 1){
                const tempList = await sortList.sort((a, b) => {
                    if (a.bookDate < b.bookDate) { return -1; }
                    if (a.bookDate > b.bookDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 2){
                //
            }else if(column == 3){
                const tempList = await sortList.sort((a, b) => {
                    if (a.receiver < b.receiver) { return -1; }
                    if (a.receiver > b.receiver) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }
            setTimeout(() => {
                setLoading1(false);
                setAscending(!isAscending);
            }, 1000)
        } else {
            if(column == 0){
                const tempList = await sortList.sort((a, b) => {
                    if (a.sender > b.sender) { return -1; }
                    if (a.sender < b.sender) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 1){
                const tempList = await sortList.sort((a, b) => {
                    if (a.bookDate > b.bookDate) { return -1; }
                    if (a.bookDate < b.bookDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 2){
                //
            }else if(column == 3){
                const tempList = await sortList.sort((a, b) => {
                    if (a.receiver > b.receiver) { return -1; }
                    if (a.receiver < b.receiver) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }
            setTimeout(() => {
                setLoading1(false);
                setAscending(!isAscending);
            }, 1000)
        }
    }

    return (
        <>
            <Div className='w-full'>
                <FlexRow className='w-full items-center justify-between py-10'>
                    <Div className='w-3/5 h-80 pr-5'>
                        <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-full h-full'>

                            {/* Controls */}
                            <FlexRow className='w-full items-center justify-between'>
                                <FlexRow className='items-center justify-start'>
                                    <Spacer className='w-4 h-4 rounded-sm mr-4 bg-yellow-100' />
                                    <Text className='text-secondary-100 text-xs font-semibold'>
                                        Remaining Quantity
                                    </Text>
                                </FlexRow>
                                <Spacer className='w-4 h-4' />
                                <FlexRow className='items-center justify-start'>
                                    <Spacer className='w-4 h-4 rounded-sm mr-4 bg-red-400' />
                                    <Text className='text-secondary-100 text-xs font-semibold'>
                                        Consumed Today
                                    </Text>
                                </FlexRow>

                                <FlexRow className='items-center justify-end'>
                                    <AiOutlineDownload className='text-secondary-200 text-xl' />
                                    <Spacer className='w-4 h-4' />
                                    <FaUserAlt className='text-secondary-200' />
                                    <Spacer className='w-4 h-4' />
                                    <Text className='text-secondary-200 text-sm'>
                                        Oct 1 - Nov 1
                                    </Text>
                                    <Spacer className='w-4 h-4' />
                                    <AiOutlineCalendar className='text-secondary-200 text-xl' />
                                </FlexRow>
                            </FlexRow>

                            <Spacer className='w-4 h-4' />

                            {/* Bar Graph */}

                            {
                                loading ?
                                    <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                        <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                        Loading data ...
                                    </Text>
                                    :
                                    <Div className='h-52 w-full'>
                                        <ResponsiveBar
                                            data={tempGroupBarGraphData}
                                            groupMode='grouped'
                                            keys={[
                                                'Remaining Qty',
                                                'Consumed today'
                                            ]}
                                            indexBy="date"
                                            margin={{ top: 12, right: 12, bottom: 25, left: 36 }}
                                            padding={0.3}
                                            valueScale={{ type: 'linear' }}
                                            indexScale={{ type: 'band', round: true }}
                                            colors={colors}
                                            enableGridX={false}
                                            enableGridY={false}
                                            borderColor={{
                                                from: 'color',
                                                modifiers: [
                                                    [
                                                        'darker',
                                                        1.6
                                                    ]
                                                ]
                                            }}
                                            axisTop={null}
                                            axisRight={null}
                                            axisBottom={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                                legendPosition: 'middle',
                                                legendOffset: 32
                                            }}
                                            axisLeft={{
                                                tickSize: 5,
                                                tickPadding: 5,
                                                tickRotation: 0,
                                                tickValues: 5,
                                                legendPosition: 'middle',
                                                legendOffset: 10
                                            }}
                                            labelSkipWidth={12}
                                            labelSkipHeight={12}
                                            labelTextColor={{
                                                from: 'color',
                                                modifiers: [
                                                    [
                                                        'darker',
                                                        1.6
                                                    ]
                                                ]
                                            }}
                                            legends={[]}
                                            role="application"
                                            ariaLabel="Nivo bar chart demo"
                                            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                                        />
                                    </Div>
                            }
                        </Div>
                    </Div>
                    <Div className='w-2/5 h-80 pl-5'>
                        <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-full h-full'>
                            <Text className='text-secondary-100 text-sm'>
                                Data Updated as of Jan 01, 2023
                            </Text>
                            <FlexRow className='w-full items-center justify-between py-2'>
                                <Div className='w-3/5'>
                                    <Text className='text-secondary-100 text-sm font-bold'>
                                        Packaging
                                    </Text>
                                </Div>
                                <Div className='w-2/5'>
                                    <Text className='text-secondary-100 text-sm text-center font-bold'>
                                        Remaining Qty
                                    </Text>
                                </Div>
                            </FlexRow>
                            <FlexRow className='w-full items-center justify-between'>
                                <Div className='w-3/5'>
                                    <Text className='text-secondary-100 text-sm flex flex-row items-center justify-start'>
                                        <FaChevronDown className="text-red-400 mr-5" />
                                        <Span>Pouches</Span>
                                    </Text>
                                </Div>
                                <Div className='w-2/5'>
                                    <Text className='text-secondary-100 text-sm text-center'>
                                        123
                                    </Text>
                                </Div>
                            </FlexRow>
                            <FlexRow className='w-full items-center justify-between'>
                                <Div className='w-3/5'>
                                    <Text className='text-secondary-100 text-sm flex flex-row items-center justify-start'>
                                        <FaChevronUp className="text-red-400 mr-5" />
                                        <Span>Boxes</Span>
                                    </Text>
                                </Div>
                                <Div className='w-2/5'>
                                    <Text className='text-secondary-100 text-sm text-center'>
                                        321
                                    </Text>
                                </Div>
                            </FlexRow>
                            <Text className='text-secondary-100 text-sm ml-10'>
                                KB Mini (in pcs)
                            </Text>
                            <Text className='text-secondary-100 text-sm ml-10'>
                                12
                            </Text>
                            <Text className='text-secondary-100 text-sm ml-10'>
                                KB Small (in pcs)
                            </Text>
                            <Text className='text-secondary-100 text-sm ml-10'>
                                8
                            </Text>
                            <Text className='text-secondary-100 text-sm ml-10'>
                                KB Medium (in pcs)
                            </Text>
                            <Text className='text-secondary-100 text-sm ml-10'>
                                4
                            </Text>
                            <Spacer className='border-t border-grey-400' />
                            <FlexRow className='w-full items-center justify-between py-2'>
                                <Div className='w-3/5 pl-10'>
                                    <Text className='text-secondary-100 text-sm'>
                                        Total
                                    </Text>
                                </Div>
                                <Div className='w-2/5'>
                                    <Text className='text-secondary-100 text-sm text-center'>
                                        468
                                    </Text>
                                </Div>
                            </FlexRow>
                        </Div>
                    </Div>
                </FlexRow>
                <Div className='w-full border border-grey-400 rounded-lg shadow-lg'>
                    <FlexRow className='w-full items-center justify-around py-2 border border-grey-400'>
                        <Text className="text-secondary-100 text-xs text-center font-semibold w-1/8 px-4 py-2">
                            Reference No.
                        </Text>
                        <ColumnHeader
                            title="Requested By"
                            onClick={() => onSort(0)}
                            containerClass="hover:bg-grey-400 rounded-full w-1/8 px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Requested Date"
                            onClick={() => onSort(1)}
                            containerClass="hover:bg-grey-400 rounded-full w-1/7 px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Touchpoint"
                            onClick={() => onSort(2)}
                            containerClass="hover:bg-grey-400 rounded-full w-1/8 px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Receiver"
                            onClick={() => onSort(3)}
                            containerClass="hover:bg-grey-400 rounded-full w-1/8 px-4 py-2"
                            titleClassName=""
                        />
                        <Text className="text-secondary-100 text-xs text-center font-semibold w-1/8 px-4 py-2">
                            Action
                        </Text>
                    </FlexRow>
                    {
                        loading1 ?
                            <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                Loading data ...
                            </Text>
                            :
                            <Div className='w-full'>
                                {
                                    newList.map((item) => (
                                        <SupplyMonitoringDataRow
                                            data={item}
                                        />
                                    ))
                                }
                            </Div>
                    }
                </Div>
                <Spacer className='w-full h-10' />
                <Div className='w-full'>
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={articlesPerPage}
                        paginate={paginate}
                        totalItems={sortList.length}
                    />
                </Div>
            </Div>
        </>
    );
};