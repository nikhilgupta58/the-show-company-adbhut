"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden min-h-[100vh] md:min-h-[900px] flex items-center pt-[100px] md:pt-[120px] pb-16 md:pb-24">
      {/* Background Glows */}
      <div className="absolute top-[10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full opacity-30 blur-[100px] md:blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123, 66, 255, 0.4) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full opacity-20 blur-[80px] md:blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(253, 191, 0, 0.3) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Text Content */}
        <div className="flex-1 max-w-[620px] text-center lg:text-left">
          <Reveal delay={0}>
            <p className="text-[#999999] font-semibold tracking-wide uppercase text-xs sm:text-sm mb-4 md:mb-6">
              15-17 December National IT Hall
            </p>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-white text-[40px] sm:text-[52px] md:text-[60px] lg:text-[72px] leading-[1.05] font-bold tracking-tight mb-4 md:mb-6">
              Tech Innovation Event 2025
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-[#999999] text-base sm:text-lg lg:text-xl max-w-[500px] leading-relaxed mx-auto lg:mx-0 mb-6 md:mb-8">
              Tech Innovation Event 2024: Unveiling breakthrough technologies and networking opportunities for industry pioneers.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="/pricing"
                className="bg-[#7f3cff] hover:bg-[#6b26f5] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-[12px] font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(127,60,255,0.4)]"
              >
                Buy Tickets
              </a>
              <a 
                href="/schedule"
                className="border border-[#2e2e2e] hover:border-[#7f3cff] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-[12px] font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center bg-transparent backdrop-blur-sm hover:bg-white/5"
              >
                See Schedule
              </a>
            </div>
          </Reveal>

          {/* Decorative Spiral */}
          <Reveal delay={500} className="mt-12 md:mt-16 hidden lg:block">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/gyrIpDXQWcbTvvCZEvELcMro18E-6.svg"
              width={85}
              height={65}
              alt="Decorative Shape"
              className="animate-float"
            />
          </Reveal>
        </div>

        {/* Hero Image Collage */}
        <Reveal delay={200} direction="right" className="flex-1 relative w-full max-w-[540px]">
          <div className="relative w-full aspect-[1/1.1] sm:aspect-[1/1.15]">
            
            {/* Top-left circular image */}
            <div className="absolute top-[2%] left-[5%] sm:left-[8%] w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden border-4 border-[#0a0a0a] z-30 shadow-2xl">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/YqTmzVdZju3dxrZsl3NEuW5SXOU-1.png"
                fill
                className="object-cover"
                alt="Event Highlight"
              />
            </div>

            {/* Main center arch image (large, yellow bg) */}
            <div className="absolute top-[10%] right-0 w-[200px] h-[300px] sm:w-[260px] sm:h-[400px] lg:w-[320px] lg:h-[480px] bg-[#fdbf00] rounded-t-full overflow-hidden border-[8px] sm:border-[12px] border-[#0a0a0a] shadow-2xl z-20">
              <div className="relative w-full h-full">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/Zhnz6N8rDB0JnyCJxw4L2o4c-3.png"
                  fill
                  className="object-cover object-top"
                  alt="Speaker"
                />
              </div>
            </div>

            {/* Bottom-left arch image */}
            <div className="absolute bottom-[5%] left-[2%] w-[130px] h-[120px] sm:w-[160px] sm:h-[140px] lg:w-[180px] lg:h-[150px] rounded-t-full overflow-hidden border-4 border-[#0a0a0a] z-30 shadow-2xl">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/hl2nIlrCik9wBDG8ko1LUVs1Q5k-2.png"
                fill
                className="object-cover"
                alt="Networking"
              />
            </div>

            {/* Floating decorative icons */}
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/JNSlc28hpJxTWYvl92A4FqP6g-2.svg"
              width={27}
              height={27}
              alt="Star"
              className="absolute top-[35%] left-[30%] animate-float hidden sm:block"
            />
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/9HtwXUd6KxFzAsfNkBtot7HjqRc-3.svg"
              width={60}
              height={60}
              alt="Burst Shape"
              className="absolute top-[3%] right-[3%] animate-spin-slow"
            />
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/ChUr61NQy5bloVvnh3fknYIN6s-4.svg"
              width={42}
              height={42}
              alt="Star Shape"
              className="absolute bottom-[18%] right-[-5px] z-40 animate-float-delayed hidden sm:block"
            />
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/QGqaUCf8iYQfTlsoSd9vBEFuQMo-5.svg"
              width={53}
              height={56}
              alt="Spiral Ribbon"
              className="absolute bottom-[3%] left-[35%] z-40 animate-float hidden sm:block"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
