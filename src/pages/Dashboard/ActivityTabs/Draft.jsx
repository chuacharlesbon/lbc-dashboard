import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { useLocation, useNavigate } from 'react-router-dom';
import { Images } from '../../../assets/images/images';
import { ActivityItemsDataRow, ColumnHeader, DraftDataRow, Pagination, PaginationCustom } from '../../../components/Tables';
import { BookNowSummaryDetails, tempActivityData } from '../../../constants/TempData';
import { Button, RawButton, RawDropdown } from '../../../core/Buttons';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Image } from '../../../core/Image';
import { Text } from '../../../core/Text';

export const DraftTab = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('active');

    const [loading, setLoading] = React.useState(true);
    const [isAscending, setAscending] = React.useState(true);
    const [sortList, setSortList] = React.useState(tempActivityData);

    const [singleView, setSingleView] = React.useState('default');
    const [selected, setSelected] = React.useState('default');
    const [selectedList, setSelectedList] = React.useState([]);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(10);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const newItems = sortList.slice(indexOfFirstArticle, indexOfLastArticle);

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
                    if (a.createdBy < b.createdBy) { return -1; }
                    if (a.createdBy > b.createdBy) { return 1; }
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
                    if (a.createdBy > b.createdBy) { return -1; }
                    if (a.createdBy < b.createdBy) { return 1; }
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
        <>
            {
                singleView === 'default' ?
                    <Div className='w-full'>
                        <Spacer className='w-full h-10' />
                        <Div className='w-full border border-grey-400 rounded-lg shadow-lg'>
                            <FlexRow className='items-center justify-between py-2 border border-grey-400'>
                                <ColumnHeader
                                    title="Created by"
                                    onClick={() => onSort(0)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/7 px-4 py-2"
                                    titleClassName=""
                                />
                                <Text className="text-secondary-100 text-xs text-center font-semibold w-1/7 px-4 py-2">
                                    Item
                                </Text>
                                <Text className="text-secondary-100 text-xs text-center font-semibold w-1/7 px-4 py-2">
                                    Packaging
                                </Text>
                                <Text className="text-secondary-100 text-xs text-center font-semibold w-1/7 px-4 py-2">
                                    Item Value
                                </Text>
                                <Text className="text-secondary-100 text-xs text-center font-semibold w-1/7 px-4 py-2">
                                    Sender
                                </Text>
                                <Text className="text-secondary-100 text-xs text-center font-semibold w-1/7 px-4 py-2">
                                    Receiver
                                </Text>
                                <Text className="text-secondary-100 text-xs text-center font-semibold w-1/7 px-4 py-2">
                                    Action
                                </Text>
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
                                            newItems.map((item) => (
                                                <DraftDataRow
                                                    data={item}
                                                    onSelect={() => { }}
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
                                totalItems={tempActivityData.length}
                            />
                        </Div>
                    </Div>
                    :
                    <Div className='w-full'>
                        <Spacer className='w-full' />
                        <Div className='w-full rounded-sm shadow-sm border border-grey-400 p-10'>
                            <FlexRow className='w-full items-center justify-start'>
                                <Image className='h-14 w-14' alt='LBC logo' src={Images.LBClogo} />
                                <Div className='ml-10 mr-auto'>
                                    <Text className='text-sm text-secondary-200'>
                                        MULTIPLE BOOKING REFERENCE NO.
                                    </Text>
                                    <Text className='text-xl text-secondary-200 font-bold'>
                                        {singleView}
                                    </Text>
                                </Div>
                                <Div className='ml-auto'>
                                    <FlexRow>
                                        <RawDropdown
                                            icon={<div />}
                                            width='w-full'
                                            value={`${selectedList.length} Selected`}
                                            options={[]}
                                            onSelect={setSelected}
                                        />
                                        <Button
                                            className='w-72 ml-2 h-10'
                                            onClick={() => { }}
                                        >
                                            Print Air Waybill
                                        </Button>
                                    </FlexRow>
                                </Div>
                            </FlexRow>

                            <Spacer className='h-5' />

                            {
                                BookNowSummaryDetails.map((list) => (
                                    <ActivityItemsDataRow
                                        data={list}
                                        onSelect={onSelectItems}
                                    />
                                ))
                            }
                        </Div>

                        <Spacer className='w-full h-10' />
                        <Div className='w-full'>
                            <PaginationCustom
                                element2={
                                    <RawButton className='text-secondary-200 mx-4' onClick={() => setSingleView('default')}>
                                        Go Back
                                    </RawButton>
                                }
                                currentPage={currentPage}
                                itemsPerPage={articlesPerPage}
                                paginate={paginate}
                                totalItems={tempActivityData.length}
                            />
                        </Div>
                    </Div>
            }
        </>
    );
};