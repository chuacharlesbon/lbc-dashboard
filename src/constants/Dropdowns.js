export const UserDrawers = [
    {
      name: 'USER 1',
      links: [
        {
          name: 'Company Account 1',
          url: '/profile/account1',
        },
        {
          name: 'Company Account 2',
          url: '/profile/account2',
        },
        {
          name: 'Log Out',
          url: '/logout',
        },
      ],
    },
  ];
  
  export const XtendlyDrawers = [
    {
      name: 'USER 1',
      links: [
        {
          name: 'Xtendly',
          url: '/profile/xtendly',
        },
        {
          name: 'Log Out',
          url: '/logout',
        },
      ],
    },
  ];
  
  export const AnalyticsDeliveryDrawers = [
    {
      name: 'USER 1',
      links: [
        {
          name: 'Delivery Status',
          url: '/dashboard-home?status=delivery-status',
          filter: [
            {
              name: 'In-transit',
              url: 'in-transit'
            },
            {
              name: 'For Disposition',
              url: 'for-disposition'
            },
            {
              name: 'Delivered',
              url: 'delivered'
            },
            {
              name: 'Returned',
              url: 'returned'
            },
            {
              name: 'Others',
              url: 'others'
            },
            {
              name: 'Make Default',
              url: 'default-delivery-status'
            },
          ]
        },
        {
          name: 'Remittance Status',
          url: '/dashboard-home?status=remittance-status',
          filter: [
            {
              name: 'Total COD Amount',
              url: 'total-cod-amount'
            },
            {
              name: 'Amount Remitted',
              url: 'amount-remitted'
            },
            {
              name: 'For Remittance',
              url: 'for-remittance'
            },
            {
              name: 'Make Default',
              url: 'default-remittance'
            },
          ]
        },
      ],
    },
  ];
  
  export const DataSort = [
    {
      name: 'DATE',
      list: [
        {
          name: 'Ascending',
          link: 'ascending'
        },
        {
          name: 'Descending',
          link: 'descending'
        },
      ]
    }
  ];
  
  export const DataSortStatus1 = [
    {
      name: 'Status 1',
      list: [
        {
          name: 'Read',
          link: 'read'
        },
        {
          name: 'Unread',
          link: 'unread',
        },
        {
          name: 'Default',
          link: 'default',
        },
      ]
    }
  ];
  
  export const BookNowOptions = [
    {
      name: 'Book Now',
      url: '/book-now?option=0'
    },
    {
      name: 'Schedule Pick Up',
      url: '/book-now?option=1'
    },
    {
      name: 'Request Supplies',
      url: '/book-now?option=2'
    },
  ];
  
  export const ToolsOptions = {
    tools1: [
      {
        name: 'Address Book',
        url: '/tools/address-book'
      },
      {
        name: 'Nearby Branches',
        url: '/tools/nearby-branches'
      },
      {
        name: 'Prohibited Items',
        url: '/tools/prohibited-items'
      },
    ],
    tools2: [
      {
        name: 'Delivery Zones',
        url: '/tools/delivery-zones'
      },
      {
        name: 'Delivery Lead Time',
        url: '/tools/delivery-lead-time'
      },
      {
        name: 'Customer Support',
        url: '/tools/customer-support'
      },
    ],
    tools3: [
      {
        name: 'Terms & Conditions',
        url: '/tools/terms-conditions'
      },
      {
        name: 'Products & Services',
        url: '/tools/products-services'
      },
      {
        name: 'Send Tipid',
        url: '/tools/send-tipid'
      },
    ]
  };
  
  export const RecurrenceOptions = [
    {
      name: 'Recurrence',
      links: [
        {
          name: "Daily",
          url: "/book-now?recurrence=0"
        },
        {
          name: "Weekly",
          url: "/book-now?recurrence=1"
        },
        {
          name: "Monthly",
          url: "/book-now?recurrence=2"
        },
      ]
    }
  ];
  
  export const Weekly = [
    {
      abb: "M",
      value: "Mon",
    },
    {
      abb: "T",
      value: "Tue",
    },
    {
      abb: "W",
      value: "Wed",
    },
    {
      abb: "Th",
      value: "Thu",
    },
    {
      abb: "F",
      value: "Fri",
    },
    {
      abb: "S",
      value: "Sat",
    },
    {
      abb: "Su",
      value: "Sun",
    },
  ];