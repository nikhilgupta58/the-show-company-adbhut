"use client";

import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const CTABanner = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-[120px] bg-white flex justify-center items-center px-5 sm:px-8">
      <Reveal className="max-w-[1200px] w-full">
        <div className="relative w-full bg-[#0a0a0a] rounded-[16px] sm:rounded-[24px] overflow-hidden min-h-[360px] md:min-h-[460px] flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="flex-1 p-6 sm:p-8 md:p-16 z-10">
            <h2 className="text-white text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[1.1] mb-4 sm:mb-6 max-w-[500px] tracking-tight">
              Let&apos;s join the tech achievement
            </h2>
            <p className="text-[#999999] text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] mb-6 sm:mb-10 max-w-[480px]">
              Let&apos;s join the tech achievement: Innovate, collaborate, and revolutionize the future with cutting-edge technology and groundbreaking advancements.
            </p>
            <a 
              href="/pricing" 
              className="inline-block bg-[#FDBF00] hover:bg-[#eab308] text-[#0a0a0a] px-6 sm:px-8 py-3 sm:py-4 rounded-[12px] font-semibold text-[14px] sm:text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(253,191,0,0.3)]"
            >
              Buy Tickets
            </a>
          </div>

          {/* Portrait */}
          <div className="relative w-full md:w-[45%] h-[300px] sm:h-[400px] md:h-full self-end md:absolute md:right-0 md:bottom-0 flex items-end justify-center md:justify-end">
            <div className="relative w-full md:w-[500px] h-[350px] sm:h-[500px] md:h-[600px] flex items-end overflow-visible">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/j6SM5TLQf271wwOCLkUeco5JghE-19.png"
                alt="Speaker"
                width={500}
                height={600}
                className="object-contain object-bottom select-none pointer-events-none"
                priority
              />
            </div>
          </div>

          {/* Glow */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[50%] opacity-30"
              style={{ background: 'radial-gradient(circle at center, rgba(253, 191, 0, 0.4) 0%, transparent 70%)' }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTABanner;
