import React from 'react';
import { Div, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RawButton } from '../../core/Buttons';
import { LBCModal } from '../Modals/LBCModal';
import { Loading } from '../../pages/Window/Loading';

export const NotificationsRow = ({
    id,
    date,
    subject,
    excerpt,
    status
}) => {

    const [loading, setLoading] = React.useState(false);
    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastKind, setToastKind] = React.useState('');
    const [toastTitle, setToastTitle] = React.useState('Account Created');
    const [toastDesc, setToastDesc] = React.useState('Redirecting to onboarding.');

    const onDelete = () => {
        setLoading(true);

        if(status === 'Unread'){
            setToastKind('success');
            setToastTitle('Success!');
            setToastDesc('Notification has been deleted.');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                setToastOpen(true);
            }, 1500);setTimeout(() => {
                setToastOpen(false);
            }, 3000);
        }else{
            setToastKind('error');
            setToastTitle('Failed.');
            setToastDesc('Something went wrong.');
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
            <FlexRow className='items-center justify-between w-full py-2 hover:bg-grey-400'>
                <Text className='text-secondary-100 text-sm font-semibold w-1/5 px-4'>
                    {date}
                </Text>
                <Div className='w-3/5 px-4'>
                    <Text className='text-secondary-100 font-semibold'>
                        {subject}
                    </Text>
                    <Text className='text-secondary-100 text-sm'>
                        {excerpt}
                    </Text>
                </Div>
                <FlexRow className='items-center justify-center w-1/5'>
                    <Text className='text-secondary-100 font-semibold'>
                        {status}
                    </Text>
                    <RawButton onClick={onDelete}>
                        <RiDeleteBin6Line className='text-red-100 text-xl ml-2' />
                    </RawButton>
                </FlexRow>
            </FlexRow>
        </>
    )
};