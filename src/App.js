import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { FlexRow } from './core/Containers';
import { RawButton } from './core/Buttons';
import { Text } from './core/Text';
import { ForgotPassword, Login, Logout } from './pages/Auth';
import { Error, Incompatible, Loading, NoAuth } from './pages/Window';
import { BsFillChatRightDotsFill } from 'react-icons/bs';
import { getCookie, useCookie, useWindowSize } from './hooks';

function App() {

  const token = getCookie('token');
  const dimension = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();

  const [cookie, updateCookie] = useCookie('location', '/');

  React.useEffect(() => {
    if (dimension.width < 1024) {
      //navigate('/incompatible');
    } else if (location.pathname === '/incompatible') {
      //navigate(cookie);
    } else {
      updateCookie(location.pathname, 0.5);
    }
  }, [dimension])

  React.useEffect(() => {
    if (token !== '' && (location.pathname === '/' || location.pathname === '/forgot-password')) {
      navigate('/dashboard-home');
    } else if (token !== '' && location.pathname === '*') {
      navigate('/dashboard-home');
    } else if (token === '' && location.pathname !== '/' && location.pathname !== '/forgot-password') {
      navigate('/');
    } else {
      //
    }
  }, [location])

  return (
    //<div className="phone:h-780px phone:w-1440px tabletWide:h-full tabletWide:w-full relative">
    <div className="h-full w-full relative">

      <Routes>

        {/* Authentication Pages */}
        <Route element={<Login />} path="/" />
        <Route element={<ForgotPassword />} path="/forgot-password" />

        {/* Dashboard Pages */}

        {/* 
        <Route element={<DashboardHome />} path="/dashboard-home" />
        <Route element={<DashboardDeliveryTableData />} path="/dashboard-home/delivery-table-data" />
        <Route element={<SummaryRemittanceReportsPage />} path="/dashboard-home/summary-remittance-table-data" />
        <Route element={<RemittanceReportsPage />} path="/dashboard-home/remittance-table-data" />
         */}

        {/* Book Now Pages */}
        {/* <Route element={<BookNow />} path="/book-now" /> */}

        {/* Reports Pages */}
        {/* <Route element={<Reports />} path="/reports" /> */}

        {/* Activity Pages */}
        {/* <Route element={<Activity />} path="/activity" /> */}

        {/* Payment Pages */}
        {/* <Route element={<Payments />} path="/payments" /> */}

        {/* Profile */}
        {/* 
        <Route element={<UserProfile />} path="/profile" />
        <Route element={<Notifications />} path="/notifications" />
         */}

        {/* Window States */}
        <Route element={<Error />} path="*" />
        <Route element={<Loading />} path="/load" />
        <Route element={<NoAuth />} path="/no-auth" />
        <Route element={<Logout />} path="/logout" />
        <Route element={<Incompatible />} path="/incompatible" />

      </Routes>

      {
        location.pathname === '/' ||
          location.pathname === '/forgot-password' ||
          location.pathname === '/incompatible' ||
          location.pathname === '/load' ||
          location.pathname === '/*' ||
          location.pathname === '/no-auth' ||
          location.pathname === '/logout' ?
          <></>
          :
          <div className='absolute z-10 bottom-0 right-24 h-12 w-36 bg-white rounded-tr-xl rounded-tl-xl'>
            <RawButton
              className='w-full h-full'
              onClick={() => {}}>
              <FlexRow className='items-center justify-center h-full w-full bg-grey-200 hover:bg-grey-300 rounded-tr-xl rounded-tl-xl cursor-pointer'>
                <BsFillChatRightDotsFill className='text-red-400 mr-2' />
                <Text className='text-red-400 font-semibold'>
                  Chat with us!
                </Text>
              </FlexRow>
            </RawButton>
          </div>
      }

    </div>
  );
}

export default App;
