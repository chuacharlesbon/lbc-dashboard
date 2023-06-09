import React from 'react';
import { Div } from '../../core/Containers';
import { Image } from '../../core/Image';
import { Images } from '../../assets/images/images';
import { Text } from '../../core/Text';
import { ImSpinner2 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { useCookie } from '../../hooks';

export const Logout = () => {

    /* Temp Data */
    const [token, updateToken] = useCookie('token', '');
    const [firstname, updateFirstName] = useCookie('firstName', '');
    const [lastname, updatelastName] = useCookie('lastName', '');
    const [usermail, updateEmail] = useCookie('email', '');
    const [company, updateCompany] = useCookie('company', '');

    const navigate = useNavigate();

    React.useEffect(() => {
        updateToken('', 0);
        updateFirstName('', 0);
        updatelastName('', 0);
        updateEmail('', 0);
        updateCompany('', 0);

        setTimeout(() => {
            navigate('/');
        }, 2000);
    }, [navigate, updateToken, updateFirstName, updatelastName, updateEmail, updateCompany ])

    return (
        <Div className='fixed top-0 left-0 right-0 bottom-0 z-20 h-screen w-screen flex flex-col justify-center items-center'>
            <Image className='h-32 w-32' alt='LBC logo' src={Images.LBClogo} />
            <Text className='text-secondary-200 text-sm text-center flex flex-row justify-center items-center my-4 desktop:text-base'>
                <ImSpinner2 className="animate-spin mr-2 desktop:text-xl" />
                Logging out
            </Text>
            <Text className='hidden'>
                {token}{firstname}{lastname}{usermail}{company}
            </Text>
        </Div>
    );
};