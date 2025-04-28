import { Product, Category } from '../types';

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'OnePlus Nord CE 3 Lite 5G',
    description: 'OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage) with 108MP main camera and 67W SUPERVOOC fast charging',
    price: 19999,
    originalPrice: 25999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
    brand: 'OnePlus',
    model: 'Nord CE 3 Lite 5G',
    color: 'Pastel Lime',
    dimensions: '165.5 x 76 x 8.3 mm',
    weight: '195g',
    warranty: '1 Year Manufacturer Warranty',
    createdAt: '2023-05-15T10:30:00Z',
    gallery: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 2,
    name: 'Men\'s Cotton Casual Shirt',
    description: 'Premium quality cotton casual shirt for men. Perfect for daily wear and casual outings.',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Clothing',
    createdAt: '2023-06-20T14:45:00Z'
  },
  {
    id: 3,
    name: 'boAt Airdopes 141 TWS Earbuds',
    description: 'boAt Airdopes 141 TWS Earbuds with 42H Playtime, Beast Mode, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)',
    price: 1299,
    originalPrice: 4490,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
    createdAt: '2023-07-05T09:15:00Z'
  },
  {
    id: 4,
    name: 'Women\'s Printed Maxi Dress',
    description: 'Elegant printed maxi dress for women. Perfect for parties and special occasions.',
    price: 1599,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Clothing',
    createdAt: '2023-08-12T11:30:00Z'
  },
  {
    id: 5,
    name: 'Prestige Electric Kettle',
    description: 'Prestige Pklss Electric Kettle 1.7L',
    price: 849,
    originalPrice: 1195,
    image: 'https://m.media-amazon.com/images/I/41I+2YEwDLL.jpg',
    category: 'Home',
    createdAt: '2023-09-03T16:20:00Z'
  },
  {
    id: 6,
    name: 'The Psychology of Money',
    description: 'Timeless lessons on wealth, greed, and happiness by Morgan Housel',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Books',
    createdAt: '2023-10-18T13:45:00Z'
  },
  {
    id: 7,
    name: 'Samsung Galaxy Tab A9+',
    description: 'Samsung Galaxy Tab A9+ WiFi Tablet, 27.94 cm (11.0"), RAM 8GB, ROM 128GB Expandable, Android 13, Graphite',
    price: 19999,
    originalPrice: 28999,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
    createdAt: '2023-11-25T10:10:00Z'
  },
  {
    id: 8,
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated stainless steel water bottle that keeps your drinks hot or cold for hours.',
    price: 599,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Home',
    createdAt: '2023-12-07T15:30:00Z'
  },
  {
    id: 9,
    name: 'Atomic Habits',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear',
    price: 399,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Books',
    createdAt: '2024-01-14T12:15:00Z'
  },
  {
    id: 10,
    name: 'Men\'s Running Shoes',
    description: 'Comfortable and durable running shoes for men. Perfect for daily workouts and running.',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Clothing',
    createdAt: '2024-02-22T09:45:00Z'
  },
  {
    id: 11,
    name: 'Noise ColorFit Pro 3 Smartwatch',
    description: 'Noise ColorFit Pro 3 Smartwatch with 1.55" HD Display, 10-Day Battery, Waterproof, Heart Rate Monitor, Sleep Tracking',
    price: 3499,
    originalPrice: 5999,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Electronics',
    createdAt: '2024-03-10T14:20:00Z'
  },
  {
    id: 12,
    name: 'Non-Stick Cookware Set',
    description: '5-piece non-stick cookware set for your kitchen. Includes pans and pots of different sizes.',
    price: 2999,
    originalPrice: 4999,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTXIINDE1YDebMWmE5Pt8c7bp5Xg0WZJGxVk1l6cGcj3u1i8ZkUov6wfoF6e_Z6YdZADQhBzzajDjcyUdLvVIZLDXapAolQBs2wvpoWPAXRA0CxECmLN5bZw',
    category: 'Home',
    createdAt: '2024-04-05T11:30:00Z'
  }
];

export const featuredProducts = [
  allProducts[0],
  allProducts[2],
  allProducts[4],
  allProducts[6],
  allProducts[8],
  allProducts[10]
];

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'books',
    name: 'Books',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];