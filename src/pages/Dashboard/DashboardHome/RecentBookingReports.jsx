import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { RecentBookingSummary } from '../../../components/Tables';
import { tempPerformanceDataRow } from '../../../constants/TempData';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';

export const RecentBookingReports = () => {

    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    return (
        <Div className='w-1/2'>
            <Div className='w-full rounded-lg border border-grey-400 mr-1'>
                <FlexRow className='justify-between items-center py-4 px-10'>
                    <Text className='text-secondary-100 text-xs font-bold'>
                        Recent Bookings
                    </Text>
                    <Link className='ml-auto' to="/activity">
                        <Text className='text-red-400 text-xs font-bold'>
                            View all
                        </Text>
                    </Link>
                    <Spacer className='' />
                </FlexRow>

                {
                    loading ?
                        <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                            <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                            Loading data ...
                        </Text>
                        :
                        <Div className='w-full p-5'>
                            {
                                tempPerformanceDataRow.map((list) => (
                                    <RecentBookingSummary
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
        </Div>
    );
};
