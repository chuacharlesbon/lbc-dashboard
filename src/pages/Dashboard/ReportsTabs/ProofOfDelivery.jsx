import React from 'react';
import { CSVLink } from 'react-csv';
import { ImSpinner2 } from 'react-icons/im';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineDownload } from 'react-icons/ai';
import { ColumnHeader, Pagination, ProofOfDeliveryDataRow } from '../../../components/Tables';
import { tempProofDeliveryData } from '../../../constants/TempData';
import { RawDropdown } from '../../../core/Buttons';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';

export const ProofOfDelivery = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('active');

    const [loading, setLoading] = React.useState(true);
    const [isAscending, setAscending] = React.useState(true);
    const [sortList, setSortList] = React.useStat>(tempProofDeliveryData);

    const [singleView, setSingleView] = React.useState('default');
    const [selected, setSelected] = React.useState('default');
    const [selectedList, setSelectedList] = React.useState([]);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(10);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const newList = sortList.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    React.useEffect(() => {
        if (actionQuery === 'single-view') {
            //
        }
    }, [actionQuery])

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    const onSelectItems = (id) => {
        if (selectedList.includes(id)) {
            const tempList = [...selectedList].filter((value) => value !== id);
            setSelectedList(tempList);
        } else {
            const tempList = [...selectedList];
            tempList.push(id);
            setSelectedList(tempList);
        }
    }

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
                    if (a.bookDate < b.bookDate) { return -1; }
                    if (a.bookDate > b.bookDate) { return 1; }
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
                    if (a.sender < b.sender) { return -1; }
                    if (a.sender > b.sender) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 4){
                const tempList = await sortList.sort((a, b) => {
                    if (a.receiver < b.receiver) { return -1; }
                    if (a.receiver > b.receiver) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 5){
                const tempList = await sortList.sort((a, b) => {
                    if (a.bookDate < b.bookDate) { return -1; }
                    if (a.bookDate > b.bookDate) { return 1; }
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
                    if (a.bookDate > b.bookDate) { return -1; }
                    if (a.bookDate < b.bookDate) { return 1; }
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
                    if (a.sender > b.sender) { return -1; }
                    if (a.sender < b.sender) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 4){
                const tempList = await sortList.sort((a, b) => {
                    if (a.receiver > b.receiver) { return -1; }
                    if (a.receiver < b.receiver) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 5){
                const tempList = await sortList.sort((a, b) => {
                    if (a.bookDate > b.bookDate) { return -1; }
                    if (a.bookDate < b.bookDate) { return 1; }
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

    // CSV Variables
    const newDate = new Date();
    const fileName = newDate.getTime();

    const headers = [
        { label: "Booking Reference", key: "tracking" },
        { label: "Booking Date", key: "bookDate" },
        { label: "Tracking Number", key: "tracking" },
        { label: "Sender", key: "sender" },
        { label: "Receiver", key: "receiver" },
        { label: "Delivery Date", key: "bookDate" },
    ];

    return (
        <>
            <Div className='w-full'>
                <FlexRow className='w-full items-center justify-end py-5'>
                    <Div className='w-48'>
                        <RawDropdown
                            icon={<div />}
                            width='w-full'
                            value={`${selectedList.length} Selected`}
                            options={[]}
                            onSelect={setSelected}
                        />
                    </Div>
                    <CSVLink data={tempProofDeliveryData} filename={`LBC-${fileName}.csv`} headers={headers}>
                        <Div className={`text-white text-center font-semibold bg-red-400 hover:bg-opacity-80 rounded-lg p-2 inline-flex justify-center items-center w-40 ml-2 h-10 ${selectedList.length > 0 ? '' : 'phone:bg-grey-400 cursor-not-allowed'}`}>
                            <AiOutlineDownload className='mr-4 text-white text-xl' />
                            Download
                        </Div>
                    </CSVLink>
                </FlexRow>
                <Div className='w-full border border-grey-400 rounded-lg shadow-lg'>
                    <FlexRow className='w-full items-center justify-between py-2 border border-grey-400'>
                        <Spacer />
                        <ColumnHeader
                            title="Booking Ref No."
                            onClick={() => onSort(0)}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Booking Date"
                            onClick={() => onSort(1)}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Tracking No."
                            onClick={() => onSort(2)}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Sender"
                            onClick={() => onSort(3)}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Receiver"
                            onClick={() => onSort(4)}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Delivery Date"
                            onClick={() => onSort(5)}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                    </FlexRow>
                    {
                        loading ?
                            <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                Loading data ...
                            </Text>
                            :
                            <Div className='w-full'>
                                {
                                    newList.map((item) => (
                                        <ProofOfDeliveryDataRow
                                            data={item}
                                            list={selectedList}
                                            onSelect={onSelectItems}
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
                        totalItems={tempProofDeliveryData.length}
                    />
                </Div>
            </Div>
        </>
    );
};