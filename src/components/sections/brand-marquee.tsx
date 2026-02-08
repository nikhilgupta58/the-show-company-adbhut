'use client';

import React from 'react';
import Image from 'next/image';

const brands = [
  {
    name: 'Logo 01',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/XJXYrCeuW0llQRgtF69zSqyu87g-7.svg',
    width: 192,
    height: 24,
  },
  {
    name: 'Logo 02',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/WL0XKBd6bmYY9n9vXiMotBvQ-8.svg',
    width: 187,
    height: 40,
  },
  {
    name: 'Logo 03',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/Vp5SIphRJDzj00oKuFCGsHdsM-9.svg',
    width: 187,
    height: 40,
  },
  {
    name: 'Logo 04',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/XQveWfLanrR5c9OabO8I62vNCo-10.svg',
    width: 158,
    height: 40,
  },
  {
    name: 'Logo 05',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/p760rTtbHPHxjlbjS9REfcVuYU-11.svg',
    width: 155,
    height: 40,
  },
  {
    name: 'Logo 06',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/bfLAuKHJCL5OzXGMONhcyxZ4o-12.svg',
    width: 182,
    height: 40,
  },
  {
    name: 'Logo 07',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/XJXYrCeuW0llQRgtF69zSqyu87g-7.svg',
    width: 192,
    height: 40,
  }
];

export default function BrandMarquee() {
  const allBrands = [...brands, ...brands];

  return (
    <section className="w-full overflow-hidden bg-[#FEF2D1]">
      <div className="relative flex items-center py-5 sm:py-6">
        <div className="animate-marquee flex whitespace-nowrap">
          {allBrands.map((brand, idx) => (
            <div 
              key={`brand-${idx}`} 
              className="flex-shrink-0 flex items-center justify-center px-6 sm:px-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="object-contain h-6 sm:h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
