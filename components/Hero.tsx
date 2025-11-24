import React from 'react';
import { MapPin } from 'lucide-react';
import { SHOP_LOCATION } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[80vh] overflow-hidden">
      
      {/* Background Video Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-cover"
          poster="https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            filter: 'brightness(0.6)' 
          }}
        >
          {/* 
            Direct link to a high-quality waterfall video from Pexels (Royalty Free).
            This bypasses YouTube embedding restrictions and file size limits.
          */}
          <source src="https://videos.pexels.com/video-files/3722818/3722818-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Hero Content */}
      <div className="container relative mx-auto z-20">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-serif font-bold text-5xl sm:text-7xl drop-shadow-xl leading-tight">
                Authentic <br/> Niagara Gifts
              </h1>
              <p className="mt-6 text-xl text-slate-100 drop-shadow-md max-w-2xl mx-auto font-medium">
                The best selection of printed hoodies, photo keychains, and local souvenirs on Rainbow Blvd. Take the memory home with you.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#products" 
                  className="bg-niagara-light text-white font-bold hover:bg-niagara-blue transition-all duration-300 px-8 py-4 rounded-full shadow-lg transform hover:-translate-y-1 text-lg"
                >
                  Shop Souvenirs
                </a>
                <a 
                  href="#coupons"
                  className="bg-white text-niagara-blue font-bold hover:bg-slate-100 transition-all duration-300 px-8 py-4 rounded-full shadow-lg transform hover:-translate-y-1 text-lg"
                >
                  View Coupons
                </a>
              </div>
              
              <div className="mt-8 flex items-center justify-center text-white/90 gap-2 text-sm bg-black/30 w-fit mx-auto px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <MapPin size={16} />
                <span>{SHOP_LOCATION}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Divider */}
      <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-20 z-20" style={{ transform: "translateZ(0)" }}>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-mist-white fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Hero;