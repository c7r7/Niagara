import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ProductGallery from './components/ProductGallery';
import GiftAssistant from './components/GiftAssistant';
import LocationSection from './components/LocationSection';
import CouponSection from './components/CouponSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <LocationSection />
        <VideoSection />
        <ProductGallery />
        <GiftAssistant />
        <CouponSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;