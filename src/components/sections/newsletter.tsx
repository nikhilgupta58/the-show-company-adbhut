"use client";

import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-[100px] md:py-[120px]">
      {/* Decorative Assets */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="absolute left-[5%] top-[50%] hidden -translate-y-1/2 md:block">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/2GNhmMajuWfu7dO5y6Z5m5obj9U-4.svg"
            alt="Decorative Swirl"
            width={72}
            height={64}
            className="opacity-80"
          />
        </div>
        
        <div className="absolute right-[10%] top-[40%] hidden -translate-y-1/2 md:block">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/oSfQJ4m3UDOjAsYrNaL5SHsyiD0-5.svg"
            alt="Decorative Star"
            width={64}
            height={64}
            className="opacity-90"
          />
        </div>

        {/* Content Wrapper */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <h2 className="mb-6 font-display text-[32px] font-bold leading-[1.2] text-white md:text-[48px]">
            Never miss a single news
          </h2>
          
          <p className="mb-10 max-w-[650px] font-sans text-[16px] leading-[1.6] text-[#B7B6B6]">
            Stay informed with all the latest updates and news about our events. Never miss a moment of our exciting and innovative gatherings in the world of technology and beyond.
          </p>

          {/* Form */}
          <form 
            className="flex w-full max-w-[500px] flex-col gap-4 md:flex-row md:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[56px] w-full rounded-[12px] border-none bg-white px-6 font-sans text-[16px] text-black outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="h-[56px] min-w-[124px] rounded-[12px] bg-[#7B42FF] px-8 font-sans text-[16px] font-semibold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Background Gradient Effect - matching "cta-gradient" logic */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(123, 66, 255, 0.08) 0%, transparent 70%)'
        }}
      />
    </section>
  );
};

export default Newsletter;