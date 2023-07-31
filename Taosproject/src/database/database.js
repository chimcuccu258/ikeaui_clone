export const COLORS = {
  white: '#ffffff',
  black: '#111111',
  green: '#00AC76',
  red: '#C04345',
  blue: '#045cb0',
  yellow: '#f4d104',
  grey: '#F5F5F5',
  darkGrey: '#484848',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'furniture',
    productName: 'VIMLE 2-seat sofa',
    productPrice: 579,
    description: '2-seat sofa, with wide armrests/Saxemara black-blue',
    isOff: true,
    // offPercentage: 10,
    productImage: require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/VIMLE/VIMLE_1.jpg'),
    isAvailable: true,
    productImageList: [
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/VIMLE/VIMLE_2.jpg'),
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/VIMLE/VIMLE_3.jpg'),
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/VIMLE/VIMLE_4.jpg'),
    ],
  },
  {
    id: 2,
    category: 'furniture',
    productName: 'SMEDSTORP 2-seat sofa',
    productPrice: 679,
    description: '2-seat sofa, Viarp/beige/brown oak',
    isOff: false,
    productImage: require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/SMEDSTORP/SMEDSTORP_1.jpg'),
    isAvailable: true,
    productImageList: [
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/SMEDSTORP/SMEDSTORP_2.jpg'),
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/SMEDSTORP/SMEDSTORP_3.jpg'),
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/SMEDSTORP/SMEDSTORP_4.jpg'),
    ],
  },
  {
    id: 3,
    category: 'furniture',
    productName: 'SODERHAMN 2-seat sofa',
    productPrice: 669,
    description: '2-seat sofa, with chaise longue/Gunnared beige',
    isOff: true,
    // offPercentage: 18,
    productImage: require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/SODERHAMN/SODERHAMN_1.jpg'),
    isAvailable: true,
    productImageList: [
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/SODERHAMN/SODERHAMN_2.jpg'),
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/SODERHAMN/SODERHAMN_3.jpg'),
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/SODERHAMN/SODERHAMN_4.jpg'),
    ],
  },
  {
    id: 4,
    category: 'furniture',
    productName: 'KNOPPARP 2-seat sofa',
    productPrice: 99.99,
    description: '2-seat sofa, Knisa light grey',
    isOff: false,
    productImage: require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/KNOPPARP/KNOPPARP_1.jpg'),
    isAvailable: true,
    productImageList: [
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/KNOPPARP/KNOPPARP_2.jpg'),
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/KNOPPARP/KNOPPARP_3.jpg'),
      require('./images/furniture/sofas/fabric_sofas/two-seat-sofas/KNOPPARP/KNOPPARP_4.jpg'),
    ],
  },
];

export const Rooms = [
  {
    id: 1,
    category: 'rooms',
    productName: 'Home office',
    productImage: require('./images/rooms/Room_1.jpg'),
    screen: "HomeOffice"
  },
  {
    id: 2,
    category: 'rooms',
    productName: 'Living room',
    productImage: require('./images/rooms/Room_2.jpg'),
    screen: "LivingRoom"
  },
  {
    id: 3,
    category: 'rooms',
    productName: 'Dining',
    productImage: require('./images/rooms/Room_3.jpg'),
  },
  {
    id: 4,
    category: 'rooms',
    productName: 'Bedroom',
    productImage: require('./images/rooms/Room_4.jpg'),
  },
  {
    id: 5,
    category: 'rooms',
    productName: "Children's room",
    productImage: require('./images/rooms/Room_5.jpg'),
  },
  {
    id: 6,
    category: 'rooms',
    productName: 'Bathroom',
    productImage: require('./images/rooms/Room_6.jpg'),
  },
  {
    id: 7,
    category: 'rooms',
    productName: 'Kitchen',
    productImage: require('./images/rooms/Room_7.jpg'),
  },
  {
    id: 8,
    category: 'rooms',
    productName: 'Hallway',
    productImage: require('./images/rooms/Room_8.jpg'),
  },
  {
    id: 9,
    category: 'rooms',
    productName: 'Laundry room',
    productImage: require('./images/rooms/Room_9.jpg'),
  },
  {
    id: 10,
    category: 'rooms',
    productName: 'Outdoor',
    productImage: require('./images/rooms/Room_10.jpg'),
  },
  {
    id: 11,
    category: 'rooms',
    productName: 'Student room',
    productImage: require('./images/rooms/Room_11.jpg'),
  },
  {
    id: 12,
    category: 'rooms',
    productName: "Teen's room",
    productImage: require('./images/rooms/Room_12.jpg'),
  },
  {
    id: 13,
    category: 'rooms',
    productName: 'IKEA for Business',
    productImage: require('./images/rooms/Room_13.jpg'),
  },
];

export const FootContents = [
  {
    id: 1,
    category: 'customerService',
    content: 'Customer service',
  },
  {
    id: 2,
    category: 'customerService',
    content: 'My orders',
  },
  {
    id: 3,
    category: 'customerService',
    content: 'Returns & claims',
  },
  {
    id: 4,
    category: 'customerService',
    content: 'Delivery',
  },
  {
    id: 5,
    category: 'customerService',
    content: 'Stock information',
  },
  {
    id: 6,
    category: 'customerService',
    content: 'Services',
  },
  {
    id: 7,
    category: 'customerService',
    content: 'Recalls',
  },
  {
    id: 8,
    category: 'customerService',
    content: 'Personal advice',
  },
];
