import React from 'react';
import validator from 'validator';
import { Link, useNavigate } from 'react-router-dom';
import { FlexRow, FlexColumn, Spacer } from '../../core/Containers';
import { Text, Span } from '../../core/Text';
import { Image } from '../../core/Image';
import { RawInput } from '../../core/Forms';
import { LBCModal } from '../../components/Modals/LBCModal';
import { Loading } from '../Window/Loading';
import { Images } from '../../assets/images/images';
import { useCookie } from '../../hooks';
import { tempUsersData } from '../../constants/TempData';

export const Login = () => {

    /* Temp Data */
    const [token, updateToken] = useCookie('token', '');
    const [firstname, updateFirstName] = useCookie('firstName', '');
    const [lastname, updatelastName] = useCookie('lastName', '');
    const [usermail, updateEmail] = useCookie('email', '');
    const [company, updateCompany] = useCookie('company', '');

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastKind, setToastKind] = React.useState('');
    const [toastTitle, setToastTitle] = React.useState('Account Created');
    const [toastDesc, setToastDesc] = React.useState('Redirecting to onboarding.');

    const tempID = (new Date()).getMilliseconds().toString();

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const isEmail = validator.isEmail(email);

        const tempList = tempUsersData.filter((user) => user.email === email);

        if (isEmail && tempList.length > 0) {
            updateToken(tempID);
            updateFirstName(tempList[0].firstname, 0.25);
            updatelastName(tempList[0].lastname, 0.25);
            updateEmail(tempList[0].email, 0.25);
            updateCompany(tempList[0].company, 0.25);
            setToastKind('success');
            setToastTitle('Logging in');
            setToastDesc('Redirecting...');

            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                setToastOpen(true);
            }, 1500);
            setTimeout(() => {
                setLoading(false);
                navigate(`/dashboard-home`);
            }, 3000);
        } else if (tempList.length === 0) {
            setToastKind('error');
            setToastTitle('Login Failed!');
            setToastDesc('Please enter your correct credentials.');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                setToastOpen(true);
            }, 1500);
            setTimeout(() => {
                setToastOpen(false);
            }, 3000);
        }
    }

    return (
        <>
            {
                loading ?
                    <Loading />
                    :
                    <></>
            }
            <LBCModal
                description={toastDesc}
                isOpen={isToastOpen}
                onClose={() => setToastOpen(false)}
                title={toastTitle}
                toastKind={toastKind}
            />
            <FlexRow className='justify-center items-center h-full w-full'>
                <FlexColumn className='justify-center items-center w-500px h-500px rounded-lg shadow-xl border border-grey-400 desktop:w-600px desktop:h-600px'>

                    <Image className='h-32 w-32 desktop:h-40 desktop:w-40' alt='LBC logo' src={Images.LBClogo} />

                    <Spacer className='h-2' />

                    <Text className='text-secondary-100 text-sm font-bold text-center desktop:text-base'>
                        BUSINESS
                    </Text>
                    <Text className='text-secondary-100 text-sm font-bold text-center desktop:text-base'>
                        SOLUTIONS
                    </Text>

                    <Spacer className='h-5' />

                    <Text className='text-secondary-200 text-xl font-bold text-center desktop:text-2xl'>
                        Sign in
                    </Text>
                    <Text className='text-secondary-200 text-sm text-center desktop:text-base'>
                        with your LBC Express Account
                    </Text>

                    <Spacer className='h-10' />

                    <form className="" onSubmit={e => onSubmit(e)}>
                        <RawInput
                            className='phone:border-grey-400'
                            containerClass='w-300px'
                            name='email'
                            placeholder='Email or Username'
                            onChange={setEmail}
                            type='email'
                            value={email}
                        />
                        <Spacer className='h-4' />
                        <RawInput
                            className='phone:border-grey-400'
                            containerClass='w-300px'
                            name='password'
                            placeholder='Password'
                            onChange={setPassword}
                            type='password'
                            value={password}
                        />
                        <button className="hidden" type='submit'>
                            Log In
                        </button>
                    </form>

                    <Spacer className='h-10' />

                    <Link className='text-red-400 text-sm font-bold text-center desktop:text-base' to='/forgot-password'>
                        Forgot Password?
                    </Link>
                    <Text className=' text-xs italic text-center desktop:text-sm'>
                        <Span className='text-secondary-200 italic mr-2'>
                            Issuses in logging in?
                        </Span>
                        <a className='text-red-400 font-bold' href='https://www.lbcexpress.com/us/contact-support' rel="noreferrer" target='_blank'>
                            Support Center
                        </a>
                    </Text>

                </FlexColumn>
            </FlexRow>
            <Text className='hidden'>
                {token}{firstname}{lastname}{usermail}{company}
            </Text>
        </>
    );
};