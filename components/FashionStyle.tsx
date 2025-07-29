"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import test from '@/app/assets/images/test.jpeg'

const FashionStyle = () => {
  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex items-center justify-between mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-wider leading-tight">
            <span className="block">CHOOSE</span>
            <span className="block">YOUR</span>
            <span className="block">FASHION STYLE</span>
          </h2>
          <ArrowRight size={48} className="hidden lg:block text-white/60" />
        </div>

        {/* Fashion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Large Image */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden">
              < Image
                src={test}
                alt="testing"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>

          {/* Right Column - Stacked Images */}
          <div className="space-y-8">
            <div className="relative group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={test}
                  alt="Elegant Jewelry"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={test}
                  alt="Fashion Accessories"
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
    </section>
  );
};

export default FashionStyle;