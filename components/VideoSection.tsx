import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-niagara-blue/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Experience the Rush
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Take a virtual tour of the Falls and see why Fallsside Treasures is the perfect stop on your journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-black aspect-video group">
            
            {/* 
              -----------------------------------------------------------------------
              HOW TO UPLOAD YOUR OWN VIDEO:
              1. Place your video file (e.g., 'my-shop.mp4') in the 'public' folder of your project.
              2. Comment out the <iframe> block below.
              3. Uncomment the <video> block below.
              -----------------------------------------------------------------------
            */}

            {/* OPTION 1: YouTube Embed (Active) */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/H6Gb824t6TY?autoplay=0&controls=1&rel=0" 
              title="Niagara Falls Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>

            {/* OPTION 2: Your Local Video (Uncomment to use) */}
            {/* 
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/path-to-thumbnail-image.jpg" // Optional: Image shown before play
            >
              <source src="/my-shop-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            */}

          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <Play size={14} className="text-niagara-light" fill="currentColor" />
              <span>Watch in 4K for the best experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;