"use client";
import { ArrowRight } from 'lucide-react';
import test from '@/app/assets/images/test.jpeg'
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={test}
          alt="home image"
          width={400}
          height={499}
          className="w-full h-full object-cover p-4 object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 lg:space-y-12">
          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-wider leading-none">
            <span className="block">SYMBOL</span>
            <span className="block italic">of</span>
            <span className="block">BEAUTY</span>
          </h1>

          {/* Subtitle and CTA */}
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto">
            <div className="flex items-center space-x-4 mb-8 lg:mb-0">
              <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border border-white/50 rounded-full"></div>
              </div>
              <div className="text-left">
                <p className="text-sm tracking-wider text-white/80">Crafting Timeless</p>
                <p className="text-sm tracking-wider text-white/80">Jewelry Stories</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm tracking-wider text-white/80 mb-4">
                Extraordinary Owned And<br />
                High-End Professional Rituals.<br />
                Become A Crafted Signature.
              </p>
              <button className="group inline-flex items-center space-x-2 border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                <span className="text-sm tracking-wider">Shop Now</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;