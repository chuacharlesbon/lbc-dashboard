import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { NavbarMain, TopNavBar } from '../../../components/Navigation/';
import { ColumnHeader, DeliveryDataRow, Pagination, RemittanceDataTableRow } from '../../../components/Tables/';
import { tempRemittanceTableData, tempDispostionData } from '../../../constants/TempData';
import { Div, Divider, FlexColumn, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';

export const RemittanceReportsPage = () => {

    const [loading, setLoading] = React.useState(true);
    const [isAscending, setAscending] = React.useState(true);
    const [sortList, setSortList] = React.useState>(tempRemittanceTableData);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(5);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const newItems = sortList.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    const onSort = async (column) => {
        setLoading(true);
        if (isAscending) {
            if(column == 0){
                const tempList = await sortList.sort((a, b) => {
                    if (a.depositedDate < b.depositedDate) { return -1; }
                    if (a.depositedDate > b.depositedDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 1){
                const tempList = await sortList.sort((a, b) => {
                    if (a.paymentDetails < b.paymentDetails) { return -1; }
                    if (a.paymentDetails > b.paymentDetails) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 2){
                const tempList = await sortList.sort((a, b) => {
                    if (a.tracking < b.tracking) { return -1; }
                    if (a.tracking > b.tracking) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 3){
                const tempList = await sortList.sort((a, b) => {
                    if (a.paymentTracking < b.paymentTracking) { return -1; }
                    if (a.paymentTracking > b.paymentTracking) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 4){
                const tempList = await sortList.sort((a, b) => {
                    if (a.deliveryDate < b.deliveryDate) { return -1; }
                    if (a.deliveryDate > b.deliveryDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 5){
                const tempList = await sortList.sort((a, b) => {
                    if (a.serviceMode < b.serviceMode) { return -1; }
                    if (a.serviceMode > b.serviceMode) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 6){
                const tempList = await sortList.sort((a, b) => a.amount - b.amount );
                setSortList(tempList);
            }
            setTimeout(() => {
                setLoading(false);
                setAscending(!isAscending);
            }, 1000)
        } else {
            if(column == 0){
                const tempList = await sortList.sort((a, b) => {
                    if (a.depositedDate > b.depositedDate) { return -1; }
                    if (a.depositedDate < b.depositedDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 1){
                const tempList = await sortList.sort((a, b) => {
                    if (a.paymentDetails > b.paymentDetails) { return -1; }
                    if (a.paymentDetails < b.paymentDetails) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 2){
                const tempList = await sortList.sort((a, b) => {
                    if (a.tracking > b.tracking) { return -1; }
                    if (a.tracking < b.tracking) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 3){
                const tempList = await sortList.sort((a, b) => {
                    if (a.paymentTracking > b.paymentTracking) { return -1; }
                    if (a.paymentTracking < b.paymentTracking) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 4){
                const tempList = await sortList.sort((a, b) => {
                    if (a.deliveryDate > b.deliveryDate) { return -1; }
                    if (a.deliveryDate < b.deliveryDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 5){
                const tempList = await sortList.sort((a, b) => {
                    if (a.serviceMode > b.serviceMode) { return -1; }
                    if (a.serviceMode < b.serviceMode) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 6){
                const tempList = await sortList.sort((a, b) => b.amount - a.amount );
                setSortList(tempList);
            }
            setTimeout(() => {
                setLoading(false);
                setAscending(!isAscending);
            }, 1000)
        }
    }

    return (
        <FlexRow className='w-full h-full items-center justify-between'>
            {/* Side Navigation */}
            <NavbarMain route='Home' />

            {/* Main Dashboard */}
            <FlexColumn className='w-11/12 h-full'>

                {/* Top Navigation */}
                <TopNavBar
                    showMenu={true}
                    showNotifBell={true}
                    showSearchBar={true}
                />

                {/* Body */}
                <Div className='w-full h-full overflow-y-auto p-10 bg-white'>
                    <FlexRow className='justify-between w-full'>
                        <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-3/5 h-48'>
                            <Text className='text-secondary-100 text-xs font-bold'>
                            Remittance History as of
                            </Text>
                        </Div>
                        <FlexColumn className='justify-between shadow-lg rounded-lg border border-grey-400 p-5 w-1/3 h-48'>
                            <Text className='text-secondary-100 text-xs font-bold'>
                                Summary per Reason as of Mar 2023
                            </Text>
                            <Div className='overflow-scroll w-full h-28'>
                            {
                                tempDispostionData.map((list) => (
                                    <DeliveryDataRow
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
                        </FlexColumn>
                    </FlexRow>
                    <Spacer className='h-10' />
                    <FlexColumn className='w-full'>
                        <Div className='w-full border border-grey-400 rounded-lg shadow-lg'>
                            <FlexRow className='items-center justify-between w-full my-2'>
                                <ColumnHeader
                                    title="Date Deposited"
                                    onClick={() => onSort(0)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/7 px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Payment Details"
                                    onClick={() => onSort(1)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/7 px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Tracking No."
                                    onClick={() => onSort(2)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/7 px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Payment Tracking No."
                                    onClick={() => onSort(3)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/7 px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Delivery Date"
                                    onClick={() => onSort(4)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/7 px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Service Mode"
                                    onClick={() => onSort(5)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/7 px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Amount Collected"
                                    onClick={() => onSort(6)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/7 px-4 py-2"
                                    titleClassName=""
                                />
                            </FlexRow>
                            <Divider className='text-grey-400' />

                            {
                                loading ?
                                    <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                        <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                        Loading data ...
                                    </Text>
                                    :
                                    <>
                                        {
                                            newItems.map((list) => (
                                                <RemittanceDataTableRow
                                                    data={list}
                                                />
                                            ))
                                        }
                                    </>
                            }
                        </Div>
                        <Text className='text-red-400 text-xs font-bold my-2'>
                            {`Disclaimer: Coverage is Twelve (12) months from encoded date.`}
                        </Text>
                        <Div className='w-full'>
                        <Pagination
                        currentPage={currentPage}
                        itemsPerPage={articlesPerPage}
                        paginate={paginate}
                        totalItems={tempRemittanceTableData.length}
                        />
                        </Div>
                    </FlexColumn>
                </Div>

            </FlexColumn>
        </FlexRow>
    );
};