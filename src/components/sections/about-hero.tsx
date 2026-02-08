"use client";

import React from 'react';
import Image from 'next/image';

export default function AboutHero() {
  const bannerImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/qgyTIlcG9nPu0S2MpmnjxKlrSZQ-1.png";

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A]"
      style={{ background: 'radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%)' }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Image src={bannerImage} alt="About Banner" fill priority className="object-cover object-center" sizes="100vw" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] text-center pt-24 sm:pt-28 pb-12 sm:pb-16">
        <h1 className="text-white font-bold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[1.1] tracking-[-0.02em] animate-[fadeUp_0.7s_ease-out]">
          About Us
        </h1>
        <div className="flex items-center gap-2 text-[14px] sm:text-[16px] font-medium mt-4 sm:mt-6 animate-[fadeUp_1s_ease-out]">
          <a href="/" className="text-[#B7B6B6] hover:text-white transition-colors duration-200">Home</a>
          <span className="text-[#B7B6B6]">/</span>
          <span className="text-white">About Us</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
    </section>
  );
}
