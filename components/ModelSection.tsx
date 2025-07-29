"use client";

import test from '@/app/assets/images/test.jpeg'
import Image from 'next/image';


const ModelSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider leading-tight mb-8">
            <span className="block">READY TO</span>
            <span className="block">BE A MODEL</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Images */}
          <div className="space-y-8">
            {/* Large Image */}
            <div className="relative group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={test}
                  alt="Luxury Watch Model"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-sm tracking-wider text-white/80 leading-relaxed">
                Distinguished in The New York, The Juste Un Clov<br />
                Bracelet Was The First Cartier Piece To Suggest The<br />
                New Ingenious Silhouettes Bijoux. First Un<br />
                Objective Briti. Sounding Like Elegance Up By Modern<br />
                Originated Entertainment Among And Now.
              </p>
              <button className="text-sm tracking-[0.2em] text-white border-b border-white/30 hover:border-white transition-colors duration-300 pb-1">
                [ SEE MORE ]
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Model Image */}
            <div className="relative group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={test}
                  alt="testing"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Text and CTA */}
            <div className="space-y-8">
              <p className="text-sm tracking-wider text-white/80 leading-relaxed">
                Delicate Bygone And Berg As Jewel Of Jewelry<br />
                Design Should As Evolution In Wax Timeless And<br />
                Meaningful, It In The Gent Of Serious Love Ritualistic.
              </p>
              
              <button className="text-sm tracking-[0.2em] text-white border-b border-white/30 hover:border-white transition-colors duration-300 pb-1">
                [ SEE MORE ]
              </button>

              {/* Small Image */}
              <div className="relative group cursor-pointer max-w-xs">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={test}
                    alt="Fashion Portrait"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 lg:mt-32">
          <div className="w-16 h-16 border border-white/30 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-b border-r border-white/50 transform rotate-45 -translate-x-0.5 -translate-y-0.5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;