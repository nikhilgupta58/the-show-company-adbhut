"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const speakers = [
  { name: 'Make Torello', role: 'UX Designer', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/IkAXNLMnx9UznrmlzukXt5gaYEk-4.webp', href: '/speakers/make-torello' },
  { name: 'David Brown', role: 'Developer', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/Va3UnRJKrhF0PCsG1IZncOrROA-5.webp', href: '/speakers/david-brown' },
  { name: 'Jenifer Moore', role: 'Marketer', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/yKuKfe7pb3CKj1fFIeyjNPXvQA-6.webp', href: '/speakers/jenifer-moore' },
  { name: 'Angela Bower', role: 'Entrepreneur', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/xnS6qPVhThaercLGat98sy3DsL4-7.webp', href: '/speakers/emily-davis' },
];

const SpeakersGrid = () => {
  return (
    <section className="bg-[#F2EBFF] py-16 sm:py-20 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[1.2] text-[#000000] max-w-[500px]">
              Meet the top incredible speakers
            </h2>
            <a 
              href="/speakers" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#7B42FF] text-white font-semibold text-sm rounded-[12px] transition-all duration-300 hover:opacity-90 hover:scale-105 flex-shrink-0"
            >
              View All Speakers
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {speakers.map((speaker, index) => (
            <Reveal key={index} delay={index * 100}>
              <a 
                href={speaker.href}
                className="group flex flex-col bg-white rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative aspect-[0.85] w-full bg-[#f3f3f3] overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-[#000000] mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#666666] tracking-wide uppercase">
                    {speaker.role}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersGrid;
