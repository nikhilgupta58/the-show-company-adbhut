"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const InfluencersSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden py-16 sm:py-20 lg:py-[120px] px-5 sm:px-8">
      {/* Glow Effects */}
      <div 
        className="absolute top-1/2 left-[-10%] w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] -translate-y-1/2 rounded-full opacity-40 blur-[120px]" 
        style={{ background: 'radial-gradient(circle, rgba(0, 0, 255, 0.4) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-[-10%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full opacity-20 blur-[100px]" 
        style={{ background: 'radial-gradient(circle, rgba(253, 191, 0, 0.3) 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* Left: Arched Portrait */}
          <Reveal direction="left" className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="absolute bottom-0 right-[-20px] w-[200px] lg:w-[240px] h-[280px] lg:h-[340px] bg-[#FEF2D1] rounded-t-full hidden lg:block z-0" />
            
            <div className="absolute bottom-[-40px] left-[-20px] z-20 hidden lg:block">
              <Image 
                src="https://framerusercontent.com/images/gyrIpDXQWcbTvvCZEvELcMro18E.svg" 
                alt="Decorative spiral" 
                width={85} 
                height={65} 
                className="opacity-80 animate-float"
              />
            </div>

            <div className="relative z-10 w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]">
              <div 
                className="relative aspect-[4/5] overflow-hidden border-[8px] sm:border-[12px] border-[#FEF2D1]/10 bg-[#121212]"
                style={{ borderRadius: '250px 250px 24px 24px' }}
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/tQWD0UY2DzGGzGS1qmDzxCaxRgo-6.png"
                  alt="Influencer Portrait"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </Reveal>

          {/* Right: Text and Details */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-4 self-center lg:self-end lg:mr-20 hidden sm:block">
              <Image 
                src="https://framerusercontent.com/images/9HtwXUd6KxFzAsfNkBtot7HjqRc.svg" 
                alt="Star burst" 
                width={60} 
                height={60} 
                className="animate-spin-slow"
              />
            </div>

            <Reveal>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6 lg:mb-8 max-w-[500px]">
                The event boasts our top creative influencers
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-[#999999] text-base lg:text-lg leading-relaxed mb-8 lg:mb-12 max-w-[480px]">
                The event features renowned influencers and innovators shaping trends and driving creativity across various industries.
              </p>
            </Reveal>

            <Reveal delay={200} className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 lg:gap-y-8 w-full">
                <div className="border-t border-[#2e2e2e] pt-4 lg:pt-6 group">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 group-hover:text-[#7f3cff] transition-colors">
                    Sarah Johnson
                  </h3>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">December 15, 2025</p>
                    <p className="text-sm text-[#999999]">10:00 AM - 11:30 AM</p>
                  </div>
                </div>
                <div className="border-t border-[#2e2e2e] pt-4 lg:pt-6 group">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 group-hover:text-[#7f3cff] transition-colors">
                    Christopher Wilson
                  </h3>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">December 17, 2025</p>
                    <p className="text-sm text-[#999999]">12:00 PM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfluencersSection;
