export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#045cb0',
  yellow: '#f4d104',
  grey: '#C1C1C1',
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
  },
  {
    id: 2,
    category: 'rooms',
    productName: 'Living room',
    productImage: require('./images/rooms/Room_2.jpg'),
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
];
