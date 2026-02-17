// src/data/pharmacyData.ts
import { Home, Activity,   Shield,  Truck, Tag } from 'lucide-react';

export interface Product {
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  discount: string;
  icon: any;
  rating: number;
  inStock: boolean;
}

export const PHARMACY_PRODUCTS: Product[] = [
  
 {
    name: 'Medical Equipment Rental',
    category: 'Rent',
    price: 'Contact for Quote',
    originalPrice: 'Best Rates',
    discount: 'On Rent',
    icon: Home,
    rating: 5.0,
    inStock: true,
  },
  {
    name: 'Prescription Medicines',
    category: 'Pharmacy',
    price: 'Discounted',
    originalPrice: 'Market Price',
    discount: 'Charitable Rates',
    icon: Activity,
    rating: 4.9,
    inStock: true,
  }
];

export const PHARMACY_FEATURES = [
  { icon: Truck, title: 'Free Delivery', desc: 'On orders above ₹500' },
  { icon: Shield, title: 'Genuine Products', desc: '100% authentic medicines' },
  { icon: Tag, title: 'Best Prices', desc: 'Upto 40% discount' },
];