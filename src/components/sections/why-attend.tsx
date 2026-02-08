"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

export default function WhyAttendSection() {
  const features = ["Hands-On Workshops", "Innovative Exhibits", "Networking Opportunities", "Career Development"];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[100px] flex justify-center items-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center gap-10 lg:gap-[60px]">
        
        <Reveal direction="left" className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[496px] aspect-[496/399] rounded-[16px] sm:rounded-[24px] overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/2BJnimNZEwyD8TtByvTvEa2Hd2s-3.webp"
              alt="Speaker at event"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal direction="right" className="w-full md:w-1/2">
          <div className="max-w-[540px]">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.2] tracking-[-0.02em] text-[#000000] mb-4 sm:mb-6">
              Why attend our eventive
            </h2>
            
            <p className="text-[14px] sm:text-[16px] leading-[1.6] text-[#666666] mb-6 sm:mb-10">
              Our tech event is a premier gathering for industry leaders, innovators, and enthusiasts. 
              Whether you&apos;re a seasoned professional, a budding entrepreneur, or simply passionate about technology, 
              this is the place to be.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4 mb-8 sm:mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#7B42FF] mr-3" />
                  <h6 className="text-[16px] sm:text-[18px] font-semibold leading-[1.1] text-[#000000]">
                    {feature}
                  </h6>
                </div>
              ))}
            </div>

            <a 
              href="/pricing"
              className="inline-block px-8 sm:px-[40px] py-3.5 sm:py-[18px] bg-[#7B42FF] text-white text-[14px] font-semibold rounded-[12px] hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(123,66,255,0.3)]"
            >
              Buy Tickets
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
