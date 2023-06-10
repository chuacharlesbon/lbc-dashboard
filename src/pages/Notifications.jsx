import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { NavbarMain, TopNavBar } from './../components/Navigation';
import { ColumnHeaderSearch, ColumnHeaderDropdown, NotificationsRow, Pagination } from './../components/Tables';
import { DataSort, DataSortStatus1 } from '../constants/Dropdowns';
import { tempNotificationData } from './../constants/TempData';
import { Div, FlexColumn, FlexRow, Spacer } from './../core/Containers';
import { RawInput } from '../core/Forms';
import { Text } from './../core/Text';

export const Notifications = () => {

    const [loading, setLoading] = React.useState(true);

    const [notifKeyword, setKeyword] = React.useState('');
    const [notifDate, setDate] = React.useState('Date');
    const [notifSubject, setSubject] = React.useState('');
    const [notifStatus, setStatus] = React.useState('Status');
    const [sortList, setSortList] = React.useStat>(tempNotificationData);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(5);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const currentNotifications = sortList.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onSearch = (e) => {
        e.preventDefault();

    }

    const onSortDate = async (type) => {
        if (type === 'Ascending') {
            const tempList = await sortList.sort((a, b) => {
                if (a.date < b.date) { return -1; }
                if (a.date > b.date) { return 1; }
                return 0;
            });
            setSortList(tempList);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        } else if (type === 'Descending') {
            const tempList = await sortList.sort((a, b) => {
                if (a.date > b.date) { return -1; }
                if (a.date < b.date) { return 1; }
                return 0;
            });
            setSortList(tempList);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        }
    }

    const onSortSubject = async () => {
        if(notifSubject.trim() !== ''){
            const tempList = await sortList.filter((a) => a.excerpt.toString().toLowerCase().includes(notifSubject.toLowerCase()) || a.date.toString().toLowerCase().includes(notifSubject.toLowerCase()));
            setSortList(tempList);
        }else{
            setSortList(tempNotificationData);
        }
    }

    const onSortStatus = async (type) => {
        if (type === 'Read') {
            const tempList = await tempNotificationData.filter((a) => a.status == 'Read');
            setSortList(tempList);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        } else if (type === 'Unread') {
            const tempList = await tempNotificationData.filter((a) => a.status == 'Unread');
            setSortList(tempList);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        } else {
            setSortList(tempNotificationData);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        }
    }

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    React.useEffect(() => {
        onSortSubject();
    }, [notifSubject])

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
                    showSearchBar={false}
                />

                {/* Body */}
                <Div className='w-full h-full overflow-y-auto p-10 bg-white'>
                    <FlexColumn className='w-full'>
                        {/* Header */}
                        <Text className='text-secondary-200 font-bold'>
                            Notifications
                        </Text>
                        <Spacer className='h-10' />

                        {/* Search Bar */}
                        <form className="" onSubmit={e => onSearch(e)}>
                            <RawInput
                                className='phone:border-grey-400'
                                containerClass=''
                                name='search'
                                placeholder=''
                                onChange={setKeyword}
                                type='search'
                                value={notifKeyword}
                            />
                            <button className="hidden" type='submit'>
                                Log In
                            </button>
                        </form>

                        {/* Body */}
                        <Spacer className='h-10' />
                        <Div className='border border-grey-400 rounded-lg shadow-lg p-5'>
                            <FlexRow className='items-center justify-between w-full'>
                                <Div className='w-1/5 p-2'>
                                    <ColumnHeaderDropdown
                                        containerClass=''
                                        containerButtonClass='border border-red-400'
                                        options={DataSort}
                                        onSelect={onSortDate}
                                        titleClassName='text-secondary-100'
                                        value='Date'
                                    />
                                </Div>
                                <Div className='w-3/5 p-2'>
                                    <ColumnHeaderSearch
                                        className='phone:border-red-400 p-2'
                                        containerClass=''
                                        name='search'
                                        placeholder='Subject'
                                        onChange={setSubject}
                                        onSubmit={onSortSubject}
                                        type='search'
                                        value={notifSubject}
                                    />
                                </Div>
                                <Div className='w-1/5 p-2'>
                                    <ColumnHeaderDropdown
                                        containerClass=''
                                        containerButtonClass='border border-red-400'
                                        options={DataSortStatus1}
                                        onSelect={onSortStatus}
                                        titleClassName='text-secondary-100'
                                        value='Status'
                                    />
                                </Div>
                            </FlexRow>

                            {
                                loading ?
                                    <Text className='text-red-400 text-center flex flex-row justify-center items-center my-24'>
                                        <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                        Loading data ...
                                    </Text>
                                    :
                                    <>
                                        {
                                            currentNotifications.length > 0 ?
                                                <>
                                                    {
                                                        currentNotifications.map((list) => (
                                                            <NotificationsRow
                                                                id={list.id}
                                                                date={list.date}
                                                                subject={list.subject}
                                                                excerpt={list.excerpt}
                                                                status={list.status}
                                                            />
                                                        ))
                                                    }
                                                </>
                                                :
                                                <Text className='text-red-400 text-center flex flex-row justify-center items-center my-24'>
                                                    No data to be displayed
                                                </Text>
                                        }
                                    </>
                            }
                        </Div>

                        <Spacer className='h-10' />
                        <Div className=''>
                            <Pagination
                                currentPage={currentPage}
                                itemsPerPage={articlesPerPage}
                                paginate={paginate}
                                totalItems={tempNotificationData.length}
                            />
                        </Div>
                    </FlexColumn>
                </Div>

            </FlexColumn>
        </FlexRow>
    );
};