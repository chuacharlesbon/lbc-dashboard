import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { NavbarMain, TopNavBar } from '../../../components/Navigation/';
import { ColumnHeader, DeliveryDataRow, DeliveryDataTableRow, Pagination } from '../../../components/Tables/';
import { tempDeliveryTableData, tempDispostionData } from '../../../constants/TempData';
import { Div, Divider, FlexColumn, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';

export const DashboardDeliveryTableData = () => {

    const [loading, setLoading] = React.useState(true);
    const [isAscending, setAscending] = React.useState(true);
    const [sortList, setSortList] = React.useState(tempDeliveryTableData);

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
                    if (a.tracking < b.tracking) { return -1; }
                    if (a.tracking > b.tracking) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 1){
                const tempList = await sortList.sort((a, b) => {
                    if (a.encodedDate < b.encodedDate) { return -1; }
                    if (a.encodedDate > b.encodedDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 2){
                const tempList = await sortList.sort((a, b) => {
                    if (a.deliveryReq < b.deliveryReq) { return -1; }
                    if (a.deliveryReq > b.deliveryReq) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 3){
                const tempList = await sortList.sort((a, b) => {
                    if (a.consigneeName < b.consigneeName) { return -1; }
                    if (a.consigneeName > b.consigneeName) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 4 || column == 6){
                const tempList = await sortList.sort((a, b) => {
                    if (a.consigneeContact < b.consigneeContact) { return -1; }
                    if (a.consigneeContact > b.consigneeContact) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 5){
                const tempList = await sortList.sort((a, b) => {
                    if (a.consigneeAddress < b.consigneeAddress) { return -1; }
                    if (a.consigneeAddress > b.consigneeAddress) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 7){
                const tempList = await sortList.sort((a, b) => {
                    if (a.acceptanceDate < b.acceptanceDate) { return -1; }
                    if (a.acceptanceDate > b.acceptanceDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 8){
                const tempList = await sortList.sort((a, b) => {
                    if (a.status < b.status) { return -1; }
                    if (a.status > b.status) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 9){
                const tempList = await sortList.sort((a, b) => {
                    if (a.statusDate < b.statusDate) { return -1; }
                    if (a.statusDate > b.statusDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 10){
                const tempList = await sortList.sort((a, b) => {
                    if (a.reason < b.reason) { return -1; }
                    if (a.reason > b.reason) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }
            setTimeout(() => {
                setLoading(false);
                setAscending(!isAscending);
            }, 1000)
        } else {
            if(column == 0){
                const tempList = await sortList.sort((a, b) => {
                    if (a.tracking > b.tracking) { return -1; }
                    if (a.tracking < b.tracking) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 1){
                const tempList = await sortList.sort((a, b) => {
                    if (a.encodedDate > b.encodedDate) { return -1; }
                    if (a.encodedDate < b.encodedDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 2){
                const tempList = await sortList.sort((a, b) => {
                    if (a.deliveryReq > b.deliveryReq) { return -1; }
                    if (a.deliveryReq < b.deliveryReq) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 3){
                const tempList = await sortList.sort((a, b) => {
                    if (a.consigneeName > b.consigneeName) { return -1; }
                    if (a.consigneeName < b.consigneeName) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 4 || column == 6){
                const tempList = await sortList.sort((a, b) => {
                    if (a.consigneeContact > b.consigneeContact) { return -1; }
                    if (a.consigneeContact < b.consigneeContact) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 5){
                const tempList = await sortList.sort((a, b) => {
                    if (a.consigneeAddress > b.consigneeAddress) { return -1; }
                    if (a.consigneeAddress < b.consigneeAddress) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 7){
                const tempList = await sortList.sort((a, b) => {
                    if (a.acceptanceDate > b.acceptanceDate) { return -1; }
                    if (a.acceptanceDate < b.acceptanceDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 8){
                const tempList = await sortList.sort((a, b) => {
                    if (a.status > b.status) { return -1; }
                    if (a.status < b.status) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 9){
                const tempList = await sortList.sort((a, b) => {
                    if (a.statusDate > b.statusDate) { return -1; }
                    if (a.statusDate < b.statusDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 10){
                const tempList = await sortList.sort((a, b) => {
                    if (a.reason > b.reason) { return -1; }
                    if (a.reason < b.reason) { return 1; }
                    return 0;
                });
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
                                For Disposition as of MM DD YY
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
                        <Div className='w-full overflow-x-scroll border border-grey-400 rounded-lg shadow-lg p-5'>
                            <FlexRow className='items-center justify-between w-2800px'>
                                <ColumnHeader
                                    title="Tracking No."
                                    onClick={() => onSort(0)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Encoded Date"
                                    onClick={() => onSort(1)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Delivery Requirement"
                                    onClick={() => onSort(2)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Consignee Name"
                                    onClick={() => onSort(3)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Consignee Mobile"
                                    onClick={() => onSort(4)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <Div className='w-400px'>
                                <ColumnHeader
                                    title="Consignee Address"
                                    onClick={() => onSort(5)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2 mx-auto"
                                    titleClassName=""
                                />
                                </Div>
                                <ColumnHeader
                                    title="Consignee Mobile No."
                                    onClick={() => onSort(6)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Acceptance Date"
                                    onClick={() => onSort(7)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Last Status"
                                    onClick={() => onSort(8)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Last Status Date"
                                    onClick={() => onSort(9)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Reason"
                                    onClick={() => onSort(10)}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <Text className="text-secondary-100 text-xs text-center font-bold w-200px px-4 py-2">
                                    Disposition
                                </Text>
                                <Text className="text-secondary-100 text-xs text-center font-bold w-200px px-4 py-2">
                                    Action
                                </Text>
                            </FlexRow>
                            <Divider className='text-grey-100 my-2 w-2800px' />

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
                                                <DeliveryDataTableRow
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
                                totalItems={tempDeliveryTableData.length}
                            />
                        </Div>
                    </FlexColumn>
                </Div>

            </FlexColumn>
        </FlexRow>
    );
};