import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { PerformanceDataRow } from '../../../components/Tables';
import { tempMonthlyPerformancePercent, tempWeeklyPerformancePercent, tempDailyPerformancePercent, tempPerformanceDataRow } from '../../../constants/TempData';
import { RecurrenceOptions } from '../../../constants/Dropdowns';
import { RawDropdown } from '../../../core/Buttons';
import { Div, FlexRow, TextDivider } from '../../../core/Containers';
import { Text } from '../../../core/Text';

export const PerformanceReports = () => {

    const [loading, setLoading] = React.useState(true);
    const [loading1, setLoading1] = React.useState(true);

    const [timeline, setTimeline] = React.useState('Monthly');
    const [currentData, setData] = React.useState(tempMonthlyPerformancePercent);
    const [newList, setList] = React.useState(tempPerformanceDataRow);

    React.useEffect(() => {
        const tempList = [...newList].reverse();
        setList(tempList);
        if (timeline === 'Monthly') {
            setData(tempMonthlyPerformancePercent);
        } else if (timeline === 'Weekly') {
            setData(tempWeeklyPerformancePercent);
        } else {
            setData(tempDailyPerformancePercent);
        }
    }, [timeline])

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 750)
    }, [timeline])

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        setTimeout(() => {
            setLoading1(false);
        }, 2500)
    }, [])

    return (
        <Div className='w-full rounded-lg border border-grey-400'>
            <FlexRow className='justify-between items-center py-4 px-10'>
                <Text className='text-secondary-100 text-sm font-bold'>
                    Delivery Performance
                </Text>
                <RawDropdown
                    icon={<div />}
                    width='w-40'
                    value={timeline}
                    options={RecurrenceOptions}
                    onSelect={setTimeline}
                />
                <input className='text-sm w-40 mx-2 block rounded-lg' type='date' value='2023-01-01' />
            </FlexRow>

            {
                loading ?
                    <Text className='text-red-400 text-center flex flex-row justify-center items-center my-4'>
                        <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                    </Text>
                    :
                    <FlexRow className='justify-between items-center border border-grey-400 shadow-xl rounded-xl m-5 py-4 px-10'>
                        {
                            currentData.map((item) => (
                                <Div>
                                    <Text className='text-green-100 text-xl text-center font-bold'>
                                        {item.percent}%
                                    </Text>
                                    <Text className='text-secondary-100 text-xs text-center'>
                                        {item.title}
                                    </Text>
                                </Div>
                            ))
                        }
                    </FlexRow>
            }

            <TextDivider
                className='bg-grey-400'
                textType="end"
                textElement={
                    <Link to="/dashboard-home/delivery-table-data">
                        <Text className='text-red-400 text-xs font-bold'>
                            View all
                        </Text>
                    </Link>
                }
            />

            {
                loading1 ?
                    <Text className='text-red-400 text-center flex flex-row justify-center items-center my-4'>
                        <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                    </Text>
                    :
                    <Div className='w-full p-5'>
                        {
                            newList.map((list) => (
                                <PerformanceDataRow
                                    deliveryId={list.deliveryId}
                                    deliverySize={list.deliverySize}
                                    logisticsType={list.logisticsType}
                                    deliveryDate={list.deliveryDate}
                                    transactionDate={list.transactionDate}
                                    clientNameFrom={list.clientNameFrom}
                                    clientAddressFrom={list.clientAddressFrom}
                                    clientNameTo={list.clientNameTo}
                                    clientAddressTo={list.clientAddressTo}
                                />
                            ))
                        }
                    </Div>
            }
        </Div>
    );
};
