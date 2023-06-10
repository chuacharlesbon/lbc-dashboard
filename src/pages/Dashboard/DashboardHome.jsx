import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Analytics } from './DashboardHome/Analytics';
import { LBCCarouselSlider } from './DashboardHome/Carousel';
import { PerformanceReports } from './DashboardHome/PerformanceReports';
import { RemittanceReports } from './DashboardHome/RemittanceReports';
import { RecentBookingReports } from './DashboardHome/RecentBookingReports';
import { NavbarMain, TopNavBar } from '../../components/Navigation';
import { Div, FlexColumn, FlexRow, Spacer } from '../../core/Containers';

export const DashboardHome = () => {

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('status');

    return (
        <FlexRow className='w-full h-full items-center justify-between'>
            {/* Side Navigation */}
            <NavbarMain route='Home' />

            {/* Main Dashboard */}
            <FlexColumn className='w-full h-full'>

                {/* Top Navigation */}
                <TopNavBar
                    showMenu={true}
                    showNotifBell={true}
                    showSearchBar={true}
                />

                {/* Dashboard */}
                <Div className='w-full h-full overflow-y-auto p-10 bg-white'>
                    <FlexRow className='justify-between w-full h-700px'>
                        <Analytics />
                        <Div className='mx-auto w-1/2'>
                            <LBCCarouselSlider />
                            <Spacer className='h-10' />

                            {
                                actionQuery === "remittance-status"
                                    ? <FlexRow className='w-full'>
                                        <RecentBookingReports />
                                        <RemittanceReports />
                                    </FlexRow>
                                    : <PerformanceReports />
                            }

                            <Spacer className='h-10' />
                        </Div>
                    </FlexRow>
                </Div>

            </FlexColumn>
        </FlexRow>
    );
};