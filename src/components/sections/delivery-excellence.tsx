"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

export default function DeliveryExcellence() {
  const stats = [
    { number: "02", label: "Days Full of Inspiration" },
    { number: "03", label: "Unique Workshop" },
    { number: "20", label: "Skilled Speaker" },
    { number: "02", label: "Great Stages" },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20">
          
          <Reveal direction="left" className="flex-1 w-full relative">
            <div className="max-w-[580px]">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[1.15] text-black mb-4 sm:mb-6 tracking-tight">
                Eventive: delivering your ideas and creations with excellence
              </h2>
              
              <p className="text-[#666666] text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] mb-8 sm:mb-12">
                Eventive specializes in transforming your concepts into reality with unmatched precision and quality. 
                Our team is dedicated to executing your ideas and creations seamlessly, ensuring every detail is perfect.
              </p>

              <div className="grid grid-cols-2 gap-y-6 sm:gap-y-10 gap-x-6 sm:gap-x-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-1 sm:gap-2">
                    <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-none">
                      {stat.number}
                    </span>
                    <span className="text-[#666666] text-[14px] sm:text-[16px] font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="flex-1 w-full lg:max-w-[540px]">
            <div className="relative aspect-[5/4] lg:aspect-[547/600] w-full overflow-hidden rounded-[16px] sm:rounded-[24px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/pwOCQ86eV6uTDBY7fWUfJB09WU-2.jpg"
                alt="Meeting and planning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
                priority
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
