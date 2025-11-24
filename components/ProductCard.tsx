import React from 'react';
import { Product } from '../types';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {product.popular && (
          <span className="absolute top-4 left-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Popular
          </span>
        )}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white transition-colors">
          <Heart size={18} />
        </button>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-xs font-medium text-niagara-blue mb-2 uppercase tracking-wide">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-1">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <span className="text-xl font-bold text-slate-800">
            ${product.price.toFixed(2)}
          </span>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-niagara-blue transition-colors">
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
