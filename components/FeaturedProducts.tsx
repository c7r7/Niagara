import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { ArrowRight, Flame } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  // Select specific items: New Hoodies and Keychains
  const featuredIds = ['p1', 'p2', 'p3', 'p4'];
  const featuredItems = PRODUCTS.filter(p => featuredIds.includes(p.id));

  return (
    <section className="py-20 bg-mist-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1 bg-red-100 rounded-md">
                <Flame className="text-red-500" size={18} fill="currentColor" />
              </span>
              <span className="text-red-500 font-bold tracking-wider uppercase text-sm">
                Trending Souvenirs
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-800 leading-tight">
              Official Falls Gear & Gifts
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Check out our best-selling Niagara Falls hoodies and collectible photo keychains. 
              High-quality prints and memories that last a lifetime.
            </p>
          </div>
          <a href="#products" className="hidden md:flex items-center gap-2 text-niagara-blue font-bold hover:text-niagara-light transition-colors mt-6 md:mt-0">
            View All Items <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <a href="#products" className="inline-flex items-center gap-2 text-niagara-blue font-bold hover:text-niagara-light transition-colors">
            View All Items <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;