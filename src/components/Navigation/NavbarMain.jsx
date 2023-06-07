import { Div, FlexColumn, FlexRow, Spacer } from '../../core/Containers';
import { Text } from '../../core/Text';
import { Image } from '../../core/Image';
import { ImHome, ImUser } from 'react-icons/im';
import { IoMdApps } from 'react-icons/io';
import { AiFillBook, AiFillFileText, AiOutlineStop } from 'react-icons/ai';
import { CgCalendarDates } from 'react-icons/cg';
import { FaTruck, FaQuestionCircle, FaWallet, FaAddressBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BookNowOptions, ToolsOptions } from '../../constants/Dropdowns';
import { Images } from '../../assets/images/images';
import { MdLocationOn } from 'react-icons/md';
import { BsBook, BsFillBoxSeamFill, BsFillHandbagFill } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';

export const NavbarMain = ({ route }) => {

    const getIcon = (name) => {
        if (name === 'Address Book') {
            return <FaAddressBook />;
        } else if (name === 'Nearby Branches') {
            return <MdLocationOn />;
        } else if (name === 'Prohibited Items') {
            return <AiOutlineStop />;
        } else if (name === 'Delivery Zones') {
            return <BsBook />;
        } else if (name === 'Delivery Lead Time') {
            return <GoCalendar />;
        } else if (name === 'Customer Support') {
            return <ImUser />;
        } else if (name === 'Terms & Conditions') {
            return <AiFillFileText />;
        } else if (name === 'Products & Services') {
            return <BsFillBoxSeamFill />;
        } else if (name === 'Send Tipid') {
            return <BsFillHandbagFill />;
        } else {
            return <FaAddressBook />;
        }
    }

    return (
        <FlexColumn className='bg-red-400 h-full w-1/12 py-2 laptopSm:py-5 items-center justify-between'>
            <Div>
                <FlexColumn className='mx-auto justify-center items-center laptopSm:w-24'>
                    <Image className='h-14 w-14' alt='LBC logo' src={Images.LBClogo} />
                    <Text className='text-white text-xs text-center'>
                        BUSINESS
                    </Text>
                    <Text className='text-white text-xs text-center'>
                        SOLUTIONS
                    </Text>
                </FlexColumn>

                <Spacer className='border border-white bg-white my-2' />

                <Link to='/dashboard-home'>
                    <FlexColumn className={`${route === 'Home' ? 'text-white' : 'text-secondary-200'} mx-auto py-2 laptopSm:py-5 justify-center items-center laptopSm:w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
                        <ImHome className={`laptopSm:text-2xl`} />
                        <Text className={`text-xs text-center`}>
                            Home
                        </Text>
                    </FlexColumn>
                </Link>

                <Link to='/book-now'>
                    <FlexColumn className={`${route === 'Book Now' ? 'text-white' : 'text-secondary-200'} mx-auto py-2 laptopSm:py-5 justify-center items-center laptopSm:w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white parentToolTip`}>
                        <AiFillBook className={`laptopSm:text-2xl`} />
                        <Text className={`text-xs text-center`}>
                            Book Now
                        </Text>

                        <Div className='childTooltip left-full pl-5 z-10'>
                            <Div className='w-48 p-2 laptopSm:p-5 rounded-lg shadow-lg bg-white border border-grey-400'>
                                {
                                    BookNowOptions.map((link) => (
                                        <Link className='block text-secondary-100 text-xs laptopSm:text-base hover:text-red-100 hover:font-bold hover:bg-grey-400 p-2' to={link.url}>
                                            {link.name}
                                        </Link>
                                    ))
                                }
                            </Div>
                        </Div>
                    </FlexColumn>
                </Link>

                <Link to='/activity'>
                    <FlexColumn className={`${route === 'Activity' ? 'text-white' : 'text-secondary-200'} mx-auto py-2 laptopSm:py-5 justify-center items-center laptopSm:w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
                        <CgCalendarDates className={`laptopSm:text-2xl`} />
                        <Text className={`text-xs text-center`}>
                            Activity
                        </Text>
                    </FlexColumn>
                </Link>

                <Link to='/reports'>
                    <FlexColumn className={`${route === 'Reports' ? 'text-white' : 'text-secondary-200'} mx-auto py-2 laptopSm:py-5 justify-center items-center laptopSm:w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
                        <FaTruck className={`laptopSm:text-2xl`} />
                        <Text className={`text-xs text-center`}>
                            Reports
                        </Text>
                    </FlexColumn>
                </Link>

                <Link to='/payments'>
                    <FlexColumn className={`${route === 'Payments' ? 'text-white' : 'text-secondary-200'} mx-auto py-2 laptopSm:py-5 justify-center items-center laptopSm:w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
                        <FaWallet className={`laptopSm:text-2xl`} />
                        <Text className={`text-xs text-center`}>
                            Payments
                        </Text>
                    </FlexColumn>
                </Link>

            </Div>

            <Div>
                <FlexColumn className={`text-white mx-auto py-2 laptopSm:py-5 justify-center items-center laptopSm:w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white parentToolTip`}>
                    <IoMdApps className={`laptopSm:text-2xl`} />
                    <Text className={`text-xs text-center`}>
                        Tools
                    </Text>

                    <Div className='childTooltip left-full bottom-0 pl-5 z-10'>
                        <Div className='w-300px h-300px p-2 laptopSm:px-5 rounded-lg shadow-lg bg-white border border-grey-400 pt-8'>
                            <FlexRow className='items-start justify-between w-full'>
                                {
                                    ToolsOptions.tools1.map((link) => (
                                        <Link className='w-20 block text-secondary-100 text-xs text-center rounded-ld hover:text-red-400 hover:bg-red-300 p-1' to={link.url}>
                                            <Div className='flex items-center justify-center w-8 h-8 rounded-md bg-grey-300 mb-1 mx-auto text-red-400 text-sm'>
                                                {getIcon(link.name)}
                                            </Div>
                                            {link.name}
                                        </Link>
                                    ))
                                }
                            </FlexRow>
                            <FlexRow className='items-start justify-between w-full'>
                                {
                                    ToolsOptions.tools2.map((link) => (
                                        <Link className='w-20 block text-secondary-100 text-xs text-center rounded-ld hover:text-red-400 hover:bg-red-300 p-1' to={link.url}>
                                            <Div className='flex items-center justify-center w-8 h-8 rounded-md bg-grey-300 mb-1 mx-auto text-red-400 text-sm'>
                                                {getIcon(link.name)}
                                            </Div>
                                            {link.name}
                                        </Link>
                                    ))
                                }
                            </FlexRow>
                            <FlexRow className='items-start justify-between w-full'>
                                {
                                    ToolsOptions.tools3.map((link) => (
                                        <Link className='w-20 block text-secondary-100 text-xs text-center rounded-ld hover:text-red-400 hover:bg-red-300 p-1 m-1' to={link.url}>
                                            <Div className='flex items-center justify-center w-8 h-8 rounded-md bg-grey-300 mb-1 mx-auto text-red-400 text-sm'>
                                                {getIcon(link.name)}
                                            </Div>
                                            {link.name}
                                        </Link>
                                    ))
                                }
                            </FlexRow>
                        </Div>
                    </Div>
                </FlexColumn>
                <FlexColumn className={`text-white mx-auto py-2 laptopSm:py-5 justify-center items-center laptopSm:w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
                    <FaQuestionCircle className={`laptopSm:text-2xl`} />
                    <Text className={`text-xs text-center`}>
                        Help
                    </Text>
                </FlexColumn>
            </Div>
        </FlexColumn>
    );
};