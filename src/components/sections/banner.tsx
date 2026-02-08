import React from 'react';
import Image from 'next/image';

const ContactBanner = () => {
  return (
    <section className="relative overflow-hidden w-full flex flex-col items-center justify-center bg-[#000000]">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/qgyTIlcG9nPu0S2MpmnjxKlrSZQ-1.png"
          alt="Contact Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-transparent opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-5 sm:px-8 pt-[120px] sm:pt-[140px] pb-16 sm:pb-[100px] flex flex-col items-center text-center">
        <h1 className="text-white text-[48px] sm:text-[64px] md:text-[80px] font-bold tracking-[-0.02em] leading-[1.1] mb-4 sm:mb-6">
          Get on Touch
        </h1>
        <nav className="flex items-center gap-1.5 text-[14px] sm:text-[16px] font-medium">
          <a href="/" className="text-[#B7B6B6] hover:text-white transition-colors duration-200">Home</a>
          <span className="text-[#B7B6B6] mx-1">/</span>
          <span className="text-white">Contact Us</span>
        </nav>
      </div>
    </section>
  );
};

export default ContactBanner;
