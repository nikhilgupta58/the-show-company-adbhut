"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const galleryImages = [
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/oxuRg8FbESc0Cw7B8qGzTfvqJI-9.jpg", alt: "People applauding" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/uTbqf1zuRRSUS44Jsxpri2yg-8.png", alt: "Working on laptops" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/KNZ1rjmsTTQOSSn8eb7DzCVbd8-10.png", alt: "Speaker with microphone" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/j6SM5TLQf271wwOCLkUeco5JghE-11.png", alt: "Speaker portrait" },
  { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/UFYDqkSni7aI3ZA7m2Ol4EXSmpo-12.png", alt: "Conference hall" },
];

const GalleryPreview = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white flex flex-col items-center">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-10 sm:mb-[60px] max-w-[620px] mx-auto">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-black mb-4 leading-[1.2]">
              Check our latest gallery
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#666666] leading-[1.6]">
              Team with all the tools they need to streamline your event planning process. Some top artists have gained global
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 mb-10 sm:mb-[60px]">
          <Reveal delay={0} className="col-span-2 md:col-span-6 overflow-hidden rounded-[16px] sm:rounded-[24px] group">
            <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[370px]">
              <Image src={galleryImages[0].url} alt={galleryImages[0].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={100} className="col-span-1 md:col-span-3 overflow-hidden rounded-[16px] sm:rounded-[24px] group">
            <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[370px]">
              <Image src={galleryImages[1].url} alt={galleryImages[1].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={200} className="col-span-1 md:col-span-3 overflow-hidden rounded-[16px] sm:rounded-[24px] group">
            <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[370px]">
              <Image src={galleryImages[2].url} alt={galleryImages[2].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Reveal>

          <Reveal delay={100} className="col-span-1 md:col-span-3 overflow-hidden rounded-[16px] sm:rounded-[24px] group">
            <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[280px]">
              <Image src={galleryImages[3].url} alt={galleryImages[3].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={200} className="col-span-1 md:col-span-9 overflow-hidden rounded-[16px] sm:rounded-[24px] group">
            <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[280px]">
              <Image src={galleryImages[4].url} alt={galleryImages[4].alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex justify-center">
            <a 
              href="/gallery" 
              className="inline-flex items-center justify-center bg-[#7B42FF] text-white px-6 sm:px-[32px] py-3.5 sm:py-[16px] rounded-[12px] font-semibold text-[14px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(123,66,255,0.3)]"
            >
              View All Gallery
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GalleryPreview;
