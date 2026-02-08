"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const PhotoGallery = () => {
  const images = [
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/F8tqgOByYCrOTcFh76dpyTCPao-14.png",
      alt: "Event Photography 1",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/nkpw8Z3J7dbLgb0xq5lBqBfvQ-15.png",
      alt: "Event Photography 2",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/uTbqf1zuRRSUS44Jsxpri2yg-16.png",
      alt: "Event Photography 3",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/oxuRg8FbESc0Cw7B8qGzTfvqJI-17.jpg",
      alt: "Event Photography 4",
    },
    {
      url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/KNZ1rjmsTTQOSSn8eb7DzCVbd8-18.png",
      alt: "Event Photography 5",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px] overflow-hidden" id="gallery">
      <div className="max-w-[1240px] px-5 sm:px-8 mx-auto">
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <Reveal>
            <div className="text-center max-w-[690px] mb-4 sm:mb-8">
              <h2 className="text-[#0a0a0a] text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-4 sm:mb-5 tracking-tight leading-[1.2]">
                Check our latest gallery
              </h2>
              <p className="text-[#999999] text-sm sm:text-base lg:text-lg leading-relaxed">
                Team with all the tools they need to streamline your event planning process. Some top artists have gained global
              </p>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full">
            <Reveal delay={0} className="col-span-2 group overflow-hidden rounded-[16px] sm:rounded-[24px]">
              <div className="relative w-full h-[200px] sm:h-[280px] lg:h-[350px]">
                <Image src={images[0].url} alt={images[0].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={100} className="col-span-1 group overflow-hidden rounded-[16px] sm:rounded-[24px]">
              <div className="relative w-full h-[200px] sm:h-[280px] lg:h-[350px]">
                <Image src={images[1].url} alt={images[1].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={200} className="col-span-1 group overflow-hidden rounded-[16px] sm:rounded-[24px]">
              <div className="relative w-full h-[200px] sm:h-[280px] lg:h-[350px]">
                <Image src={images[2].url} alt={images[2].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </Reveal>

            <Reveal delay={100} className="col-span-1 group overflow-hidden rounded-[16px] sm:rounded-[24px]">
              <div className="relative w-full h-[180px] sm:h-[240px] lg:h-[280px]">
                <Image src={images[3].url} alt={images[3].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={200} className="col-span-2 sm:col-span-2 group overflow-hidden rounded-[16px] sm:rounded-[24px]">
              <div className="relative w-full h-[180px] sm:h-[240px] lg:h-[280px]">
                <Image src={images[4].url} alt={images[4].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <a 
              href="/gallery"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#7f3cff] hover:bg-[#6b2fd9] transition-all duration-300 rounded-[12px] text-white font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-[0_0_20px_rgba(127,60,255,0.3)]"
            >
              View All Gallery
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
