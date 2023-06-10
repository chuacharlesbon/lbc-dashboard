import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaFilter, FaUserAlt } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RecurrenceOptions } from '../../../constants/Dropdowns';
import { tempBarGraphData2 } from '../../../constants/TempData';
import { RawDropdown } from '../../../core/Buttons';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { ResponsiveBar } from '@nivo/bar';

export const StatusReport = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('active');

    const [loading, setLoading] = React.useState(true);

    const [singleView, setSingleView] = React.useState('default');

    const [sortBy, setSort] = React.useState('SHIPMENTS BY LAST STATUS');
    const [timeline, setTimeline] = React.useState('Daily');

    const colors = ['#F79520', '#F37777', '#63C9A8', '#3173AF', '#202123B3'];

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    return (
        <>
            <Div className='w-full'>
                <Spacer className='w-10 h-10' />
                <Div className='w-full border border-grey-400 rounded-lg shadow-lg'>
                    <FlexRow className='w-full items-center justify-between py-5'>
                        <Div className='w-96'>
                            <RawDropdown
                                icon={<FaFilter className='text-secondary-200 text-xl mr-5' />}
                                width='w-full'
                                value={sortBy}
                                options={[]}
                                onSelect={setSort}
                            />
                        </Div>
                        <FlexRow className='items-center'>
                            <Div className='w-48 mx-2'>
                                <RawDropdown
                                    icon={<div />}
                                    width='w-full'
                                    border='border phone:border-grey-100'
                                    value={timeline}
                                    options={RecurrenceOptions}
                                    onSelect={setTimeline}
                                />
                            </Div>
                            <input className='text-sm w-48 mx-2 block rounded-lg' type='date' value='2023-01-01' />
                            <FaUserAlt className='text-secondary-200 text-xl mx-2 hover:bg-grey-400' />
                            <Link className='w-10' to="/LBC_shipments.xlsx" target="_blank" download >
                                <AiOutlineDownload className='text-secondary-200 text-2xl hover:bg-grey-400 rounded-lg' />
                            </Link>
                        </FlexRow>
                    </FlexRow>

                    {/* Bar Graph */}
                    {
                        loading ?
                            <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                Loading data ...
                            </Text>
                            :
                            <Div className='h-200px w-full'>
                                <ResponsiveBar
                                    data={tempBarGraphData2}
                                    keys={[
                                        'Picked up/Dropped Off',
                                        'For Disposition',
                                        'In-transit',
                                        'Delivered',
                                        'Returned',
                                    ]}
                                    indexBy="country"
                                    margin={{ top: 12, right: 12, bottom: 25, left: 50 }}
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

                    {/*  Custom Legends - ( Non-Interactive ) */}
                    <FlexRow className='items-center justify-start p-5'>
                        <FlexRow className='w-1/7 items-center justify-center p-2'>
                            <Spacer className='w-4 h-4 rounded-sm mr-4 bg-yellow-100' />
                            <Text className='text-secondary-100 text-xs font-semibold'>
                                Picked Up/ Dropped Off
                            </Text>
                        </FlexRow>
                        <FlexRow className='w-1/7 items-center justify-start py-2'>
                            <Spacer className='w-4 h-4 rounded-sm mr-4 bg-red-100' />
                            <Text className='text-secondary-100 text-xs font-semibold'>
                                For Disposition
                            </Text>
                        </FlexRow>
                        <FlexRow className='w-1/7 items-center justify- py-2'>
                            <Spacer className='w-4 h-4 rounded-sm mr-4 bg-blue-100' />
                            <Text className='text-secondary-100 text-xs font-semibold'>
                                In-transit
                            </Text>
                        </FlexRow>
                        <FlexRow className='w-1/7 items-center justify-start py-2'>
                            <Spacer className='w-4 h-4 rounded-sm mr-4 bg-green-100' />
                            <Text className='text-secondary-100 text-xs font-semibold'>
                                Delivered
                            </Text>
                        </FlexRow>
                        <FlexRow className='w-1/7 items-center justify-start py-2'>
                            <Spacer className='w-4 h-4 rounded-sm mr-4 bg-secondary-200' />
                            <Text className='text-secondary-100 text-xs font-semibold'>
                                Returned
                            </Text>
                        </FlexRow>

                    </FlexRow>
                </Div>
            </Div>
        </>
    );
};