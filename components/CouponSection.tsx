import React from 'react';
import { COUPONS } from '../constants';
import { Tag, Clock } from 'lucide-react';

const CouponSection: React.FC = () => {
  return (
    <section id="coupons" className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-niagara-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-4">
            Special Offers
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Show these coupons at checkout to redeem exclusive savings. We love treating our visitors!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COUPONS.map((coupon) => (
            <div key={coupon.id} className="relative group perspective">
              <div className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white`}>
                {/* Dashed Border Visual for Coupon */}
                <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-2xl m-2 pointer-events-none"></div>
                
                <div className={`h-24 ${coupon.color} flex items-center justify-center`}>
                  <h3 className="text-3xl font-bold text-white tracking-widest shadow-sm">
                    {coupon.discount}
                  </h3>
                </div>
                
                <div className="p-6 text-center">
                  <div className="inline-block bg-slate-100 px-4 py-1 rounded-md mb-4 border border-slate-200">
                     <span className="font-mono font-bold text-xl text-slate-700 tracking-wider">
                       {coupon.code}
                     </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4 font-medium">
                    {coupon.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-1 text-xs text-slate-400">
                    <Clock size={12} />
                    <span>{coupon.expiry}</span>
                  </div>
                </div>

                {/* Corner cutout visual effects */}
                <div className="absolute top-24 -left-3 w-6 h-6 bg-slate-50 rounded-full"></div>
                <div className="absolute top-24 -right-3 w-6 h-6 bg-slate-50 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CouponSection;
