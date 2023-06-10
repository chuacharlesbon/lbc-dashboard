import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActiveTab, PastTab, DraftTab } from './ActivityTabs';
import { NavbarMain, TopNavBar } from '../../components/Navigation/NavbarMain';
import { Div, Divider, FlexColumn, FlexRow } from '../../core/Containers';
import { classNames } from '../../helpers/ClassNames';
import { Tab } from '@headlessui/react';

export const Activity = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('option');

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const tabs = ['Active', 'Past', 'Draft'];

    React.useEffect(() => {
        if (actionQuery === '0') {
            setSelectedIndex(0)
            navigate('/activity');
        } else if (actionQuery === '1') {
            setSelectedIndex(1)
            navigate('/activity');
        } else if (actionQuery === '2') {
            setSelectedIndex(2)
            navigate('/activity');
        }
    }, [actionQuery, navigate])

    return (
        <FlexRow className='w-full h-full items-center justify-between'>
            {/* Side Navigation */}
            <NavbarMain route='Activity' />

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
                    <FlexRow className='w-full'>
                        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                            <FlexColumn className='w-full'>
                                <Tab.List className="tabletWide:space-x-4">
                                    {tabs.map((tab) => (
                                        <Tab
                                            className={({ selected }) =>
                                                classNames(
                                                    'p-2 font-semibold w-auto focus:border-b-4 focus:border-yellow-400 ring:border-yellow-400 outline-none',
                                                    selected
                                                        ? 'text-yellow-100 border-b-4 border-yellow-400'
                                                        : 'text-secondary-200  hover:text-secondary-100',
                                                )
                                            }
                                            key={tab}
                                        >
                                            {tab}
                                        </Tab>
                                    ))}
                                </Tab.List>
                                <Divider className="text-grey-400" />
                                <Tab.Panels className="w-full">
                                    <Tab.Panel className={`w-full`}>
                                        <ActiveTab />
                                    </Tab.Panel>
                                    <Tab.Panel className={`w-full`}>
                                        <PastTab />
                                    </Tab.Panel>
                                    <Tab.Panel className={`w-full`}>
                                        <DraftTab />
                                    </Tab.Panel>
                                </Tab.Panels>
                            </FlexColumn>
                        </Tab.Group>
                    </FlexRow>
                </Div>
            </FlexColumn>
        </FlexRow>
    );
};