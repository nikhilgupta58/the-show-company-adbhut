"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const InstagramGrid = () => {
  const instagramData = [
    {
      id: 1,
      title: 'Friendship Club',
      views: '50K views',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/IkAXNLMnx9UznrmlzukXt5gaYEk-9.webp',
    },
    {
      id: 2,
      title: 'Business Confer...',
      views: '20K views',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/Va3UnRJKrhF0PCsG1IZncOrROA-10.webp',
    },
    {
      id: 3,
      title: 'Holi Festival',
      views: '26K views',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/g5azrEBmeEfj8kg7alEY6fzMow-21.webp',
    },
    {
      id: 4,
      title: 'Next-gen Marketing',
      views: '30K views',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/yKuKfe7pb3CKj1fFIeyjNPXvQA-11.webp',
    },
  ];

  return (
    <section className="w-full bg-[#f3e8ff] py-16 sm:py-20 lg:py-[120px] px-5 sm:px-8 overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4 sm:gap-6">
            <h2 className="text-[#0a0a0a] font-bold leading-[1.2] tracking-[-0.02em] text-[32px] sm:text-[40px] lg:text-[48px]">
              More from Monks Event
            </h2>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#0a0a0a20] rounded-[12px] px-5 sm:px-[24px] py-3 sm:py-[14px] bg-transparent text-[#0a0a0a] font-semibold text-[14px] sm:text-[16px] hover:bg-black/5 transition-all duration-300 hover:scale-105 flex-shrink-0"
            >
              Follow on Instagram
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {instagramData.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <div className="relative group aspect-[3/4] sm:aspect-[3/4.5] overflow-hidden rounded-[16px] sm:rounded-[24px] bg-[#121212] cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 flex flex-col items-start z-10">
                  <h3 className="text-white font-bold text-[14px] sm:text-[16px] lg:text-[18px] mb-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-white/70 font-bold text-[10px] sm:text-[12px] uppercase tracking-wider">
                    {item.views}
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
