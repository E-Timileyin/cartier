"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FashionStyle from '@/components/FashionStyle';
import ModelSection from '@/components/ModelSection';
import Contact from '@/components/Contact';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <FashionStyle />
      <ModelSection />
      <Contact />
    </div>
  );
}