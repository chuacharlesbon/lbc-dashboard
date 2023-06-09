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

export const ForgotPassword = () => {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    //const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastKind, setToastKind] = React.useState('');
    const [toastTitle, setToastTitle] = React.useState('Account Created');
    const [toastDesc, setToastDesc] = React.useState('Redirecting to onboarding.');

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const isEmail = validator.isEmail(email);

        if (isEmail) {
            setToastKind('success');
            setToastTitle('Email sent!');
            setToastDesc('A confirmation email has been sent for verification.');

            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                setToastOpen(true);
            }, 1500);
            setTimeout(() => {
                setLoading(false);
                navigate(`/`);
            }, 3000);
        } else {
            setToastKind('error');
            setToastTitle('Email is invalid!');
            setToastDesc('Please enter a correct email.');
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

                    <Image className='h-32 w-32 desktop:w-40 desktop:h-40' alt='LBC logo' src={Images.LBClogo} />

                    <Spacer className='h-2' />

                    <Text className='text-secondary-100 text-sm font-bold text-center desktop:text-base'>
                        BUSINESS
                    </Text>
                    <Text className='text-secondary-100 text-sm font-bold text-center desktop:text-base'>
                        SOLUTIONS
                    </Text>

                    <Spacer className='h-5' />

                    <Text className='text-secondary-200 text-xl font-bold text-center desktop:text-2xl'>
                        Forgot Password
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
                        <button className="hidden" type='submit'>
                            Log In
                        </button>
                    </form>

                    <Spacer className='h-10' />

                    <Link className='text-red-400 text-sm font-bold text-center desktop:text-base' to='/'>
                        Already have an account?
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
        </>
    );
};