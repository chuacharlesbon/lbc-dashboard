import React from 'react';
import { Div } from '../../core/Containers';
import { Image } from '../../core/Image';
import { Images } from '../../assets/images/images';
import { Text } from '../../core/Text';
import { ImWarning } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';
import { getCookie } from '../../hooks';

export const Error = () => {

    const token = getCookie('token');
    const location = useLocation();
    const [returnRoute, setRoute] = React.useState('/');

    React.useEffect(() => {
        if (token !== '') {
            setRoute('/dashboard-home');
        } else {
            setRoute('/');
        }
    }, [location, token])

    return (
        <Div className='fixed top-0 left-0 right-0 bottom-0 z-20 h-screen w-screen flex flex-col justify-center items-center'>
            <Link to={returnRoute}>
                <Image className='h-32 w-32 desktop:w-40 desktop:h-40' alt='LBC logo' src={Images.LBClogo} />
            </Link>
            <Text className='text-secondary-200 text-2xl text-center font-bold flex flex-row justify-center items-center my-4'>
                <ImWarning className="text-red-400 mr-2 desktop:text-xl" />
                404 Not Found
            </Text>
            <Text className='text-secondary-200 text-sm text-center flex flex-row justify-center items-center my-4 w-300px desktop:text-base'>
                The page you're looking for might non-existing, on different URL, or no permission to view.
            </Text>
        </Div>
    );
};

export const Incompatible = () => {

    return (
        <Div className='fixed top-0 left-0 right-0 bottom-0 z-20 h-screen w-screen flex flex-col justify-center items-center'>
            <Link to='/'>
                <Image className='h-32 w-32 desktop:w-40 desktop:h-40' alt='LBC logo' src={Images.LBClogo} />
            </Link>
            <Text className='text-secondary-200 text-2xl text-center font-bold flex flex-row justify-center items-center my-4'>
                <ImWarning className="text-red-400 mr-2 desktop:text-xl" />
                Oops!
            </Text>
            <Text className='text-secondary-200 text-sm text-center flex flex-row justify-center items-center my-4 w-300px desktop:text-base'>
                This device is temporarily incompatible
            </Text>
        </Div>
    );
};