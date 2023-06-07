export const BorderColors = [
    "border-l-yellow-100",
    "border-l-blue-100",
    "border-l-red-100"
];

export const ToastData = {
    type: {
        suc: 'success',
        err: 'error',
        info: 'info',
        warn: 'warning'
    },
    title: {
        create200: 'Created Successfully!',
        create400: 'Create Failed!',
        update200: 'Updated Successfully!',
        update400: 'Update Failed!',
        delete200: 'Deleted Successfully!',
        delete400: 'Delete Failed!',
        login200: 'Login Success!',
        login400: 'Login Failed!',
    },
    desc: {
        err01: 'Something went wrong. Please try again.',
        err02: 'Something went wrong. Input data is invalid.',
    }

}

export const Months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

export const MonthsFull = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

/////////////////////////////////////
//  Book Now Data
/////////////////////////////////////

export const BookNowSummaryColumn = [
    {
        name: 'Package',
        width: 'w-1/5',
    },
    {
        name: 'Sender',
        width: 'w-1/5',
    },
    {
        name: 'Receiver',
        width: 'w-1/5',
    },
    {
        name: 'COD/COP Amount',
        width: 'w-1/5',
    },
    {
        name: 'COD/COP Disbursal',
        width: 'w-1/5',
    },
];

export const BookNowStage = [
    {
        name: 'Sender',
        stage: 1,
    },
    {
        name: 'Receiver',
        stage: 2,
    },
    {
        name: 'Package',
        stage: 3,
    },
];

/////////////////////////////////////
//  Activity Pages Data
/////////////////////////////////////

export const ActiveColumns = [
    {
        name: 'Tracking No.',
        url: ''
    },
    {
        name: 'Created By',
        url: ''
    },
    {
        name: 'Book Type',
        url: ''
    },
    {
        name: 'Book Date',
        url: ''
    },
];

/////////////////////////////////////
//  Payment Pages Data
/////////////////////////////////////

export const RemittanceHistoryColumns = [
    "Reference No.",
    "Posting Date",
    "Disbursal Mode",
    "Account Name",
    "Payment Status",
    "Amount"
];