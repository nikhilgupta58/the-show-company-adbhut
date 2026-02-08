"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const CTACard = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-[100px] bg-white overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="relative w-full rounded-[16px] sm:rounded-[24px] bg-[#0A0A0A] overflow-hidden min-h-[300px] sm:min-h-[360px] flex items-center shadow-sm">
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 100%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 0% 0%, rgba(123, 66, 255, 0.15) 0%, transparent 50%)' }} />

            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center px-6 sm:px-8 md:px-[60px] py-10 sm:py-16 md:py-0">
              <div className="md:col-span-7 flex flex-col items-start gap-6 sm:gap-10">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-white tracking-tight leading-[1.1]">
                    Let&apos;s join the tech achievement
                  </h2>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] text-white/70 max-w-[540px] leading-relaxed">
                    Innovate, collaborate, and revolutionize the future with cutting-edge technology and groundbreaking advancements.
                  </p>
                </div>

                <a 
                  href="/pricing" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#FFC519] hover:opacity-90 transition-all duration-300 text-black font-semibold text-[14px] sm:text-[16px] rounded-[12px] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,197,25,0.3)]"
                >
                  Buy Tickets
                </a>
              </div>

              <div className="hidden md:block md:col-span-5 relative h-[360px] self-end">
                <div className="absolute bottom-0 right-0 w-[110%] h-[120%] z-20">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/g5azrEBmeEfj8kg7alEY6fzMow-13.webp"
                    alt="Speaker"
                    width={600}
                    height={600}
                    className="object-contain object-bottom h-full w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTACard;
