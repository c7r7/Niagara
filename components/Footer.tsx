import React, { useState } from 'react';
import { SHOP_NAME, SHOP_LOCATION } from '../constants';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 3000);
        setEmail('');
    }
  };

  return (
    <footer id="footer" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-niagara-light">{SHOP_NAME}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your premier stop for authentic Niagara Falls souvenirs, apparel, and gifts. Located in the heart of the tourist district.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-slate-400 hover:text-niagara-light transition-colors">Hoodies & Tees</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-niagara-light transition-colors">Keychains</a></li>
              <li><a href="#coupons" className="text-slate-400 hover:text-niagara-light transition-colors">Coupons</a></li>
              <li><a href="#assistant" className="text-slate-400 hover:text-niagara-light transition-colors">Gift Finder</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>{SHOP_LOCATION}<br/>(Near Niagara Falls State Park)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="shrink-0" size={18} />
                <span>(716) 555-0199</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="shrink-0" size={18} />
                <span>hello@fallsidetreasures.com</span>
              </li>
            </ul>
          </div>

          {/* Loyalty / Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Join the Club</h4>
            <p className="text-slate-400 text-sm mb-4">
              Sign up for exclusive deals and updates on new arrivals.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input 
                type="email" 
                required
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-niagara-light transition-colors"
              />
              <button 
                type="submit"
                className="w-full bg-niagara-light hover:bg-niagara-blue text-white font-bold py-2 rounded-lg transition-colors"
              >
                {subscribed ? 'Welcome Aboard!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {SHOP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;