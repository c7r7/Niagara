import { Product, ProductCategory, Coupon } from './types';

export const SHOP_NAME = "Fallsside Treasures";
export const SHOP_LOCATION = "310 Rainbow Blvd, Niagara Falls, NY 14303";

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Niagara Falls Varsity Hoodie',
    price: 49.99,
    category: ProductCategory.CLOTHING,
    description: 'Classic navy blue pullover with white "Niagara Falls, NY" varsity lettering and front pocket.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'p2',
    name: 'Falls Photo Keychain - Horseshoe',
    price: 6.99,
    category: ProductCategory.ACCESSORIES,
    description: 'Durable acrylic keychain featuring a stunning high-res photo of the Horseshoe Falls mist.',
    image: 'https://images.unsplash.com/photo-1534234828563-025c93d30b91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'p3',
    name: 'Sunset Falls Keychain',
    price: 6.99,
    category: ProductCategory.ACCESSORIES,
    description: 'Metal rimmed keychain capturing the golden hour sunset over the American Falls.',
    image: 'https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'p4',
    name: 'Grey "Mist Rider" Hoodie',
    price: 54.00,
    category: ProductCategory.CLOTHING,
    description: 'Heavyweight heather grey hoodie with a vintage distressed print of the Maid of the Mist.',
    image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'p5',
    name: 'NY State Park Tee',
    price: 24.99,
    category: ProductCategory.CLOTHING,
    description: 'Soft cotton T-shirt featuring the official Niagara Falls State Park emblem.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p6',
    name: 'Rainbow Bridge Metal Keyring',
    price: 8.50,
    category: ProductCategory.ACCESSORIES,
    description: 'Detailed brass-finish keyring showing the iconic arch of the Rainbow Bridge.',
    image: 'https://images.unsplash.com/photo-1541892862-29e1877661b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p7',
    name: 'I Love NY Mug',
    price: 14.00,
    category: ProductCategory.SOUVENIRS,
    description: 'Classic white ceramic mug with the famous "I Love NY" logo.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p8',
    name: 'Maple Leaf Snow Globe',
    price: 18.00,
    category: ProductCategory.SOUVENIRS,
    description: 'Mini snow globe with a 3D model of the falls inside.',
    image: 'https://images.unsplash.com/photo-1545649969-95a73e1c6b84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p9',
    name: 'Adventure Zip-Up Hoodie',
    price: 58.00,
    category: ProductCategory.CLOTHING,
    description: 'Performance fleece zip-up, perfect for hiking the gorge trails.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p10',
    name: 'Magnet Set (3-Pack)',
    price: 12.00,
    category: ProductCategory.SOUVENIRS,
    description: 'Set of 3 magnets featuring day, night, and winter views of the Falls.',
    image: 'https://images.unsplash.com/photo-1569429532588-4c3e32d66762?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const COUPONS: Coupon[] = [
  {
    id: 'c1',
    code: 'NYFALLS10',
    discount: '10% OFF',
    description: 'Save on any hoodie or sweatshirt. Perfect for chilly evenings!',
    expiry: 'Valid all season',
    color: 'bg-gradient-to-r from-blue-600 to-indigo-600'
  },
  {
    id: 'c2',
    code: 'KEYCHAINFREE',
    discount: 'BOGO FREE',
    description: 'Buy one photo keychain, get a second one for free.',
    expiry: 'Valid this week',
    color: 'bg-gradient-to-r from-emerald-500 to-teal-600'
  },
  {
    id: 'c3',
    code: 'SOUVENIR20',
    discount: '$20 OFF',
    description: 'Spend $100 or more on souvenirs and get $20 off instantly.',
    expiry: 'Expires Sunday',
    color: 'bg-gradient-to-r from-rose-500 to-pink-600'
  }
];