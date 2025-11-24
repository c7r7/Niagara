import React from 'react';
import { MapPin, Navigation, ShoppingBag } from 'lucide-react';
import { SHOP_LOCATION } from '../constants';

const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Text Content */}
          <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center relative">
             {/* Decorative background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-niagara-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-niagara-blue/20 text-niagara-light text-xs font-bold uppercase tracking-wide mb-6 w-fit">
                <MapPin size={12} />
                <span>Prime Location</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Just Steps from the Park
              </h2>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Located right on Rainbow Blvd, we are the perfect stop after a visit to Niagara Falls State Park or the Rainbow Bridge. Escape the crowds and shop in comfort.
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-emerald-400">
                    <Navigation size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Easy Access</h4>
                    <p className="text-slate-400">{SHOP_LOCATION}. <br/>Walking distance from the Maid of the Mist entrance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-xl text-amber-400">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Tax-Free Shopping Available</h4>
                    <p className="text-slate-400">Ask us about duty-free eligibility for international visitors.</p>
                  </div>
                </li>
              </ul>

              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("310 Rainbow Blvd, Niagara Falls, NY 14303")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-niagara-light hover:text-white transition-all duration-300 font-bold px-8 py-4 rounded-xl shadow-lg w-full sm:w-auto"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Map Visual */}
          <div className="lg:w-1/2 min-h-[400px] lg:min-h-full relative bg-slate-800">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              title="Shop Location at 310 Rainbow Blvd"
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              style={{ filter: 'grayscale(0.1) contrast(1.1)' }}
              src="https://maps.google.com/maps?q=310%20Rainbow%20Blvd,%20Niagara%20Falls,%20NY%2014303&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-900/50 to-transparent lg:bg-gradient-to-r lg:from-slate-900/20 lg:to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;