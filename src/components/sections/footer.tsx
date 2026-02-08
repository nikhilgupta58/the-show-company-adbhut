"use client";

import React from 'react';
import Reveal from '@/components/ui/reveal';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 sm:py-20 lg:py-[120px] relative overflow-hidden">
      {/* Newsletter Block */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        <Reveal>
          <div className="max-w-[760px] mx-auto text-center mb-16 sm:mb-20 lg:mb-[100px] relative">
            {/* Decorative Icons */}
            <div className="absolute left-[-100px] lg:left-[-150px] top-[40px] hidden lg:block opacity-80">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/2GNhmMajuWfu7dO5y6Z5m5obj9U-5.svg" 
                alt="Decorative Swirl" 
                width={103} 
                height={77}
                className="animate-float"
              />
            </div>
            <div className="absolute right-[-100px] lg:right-[-150px] top-[-20px] hidden lg:block opacity-80">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/oSfQJ4m3UDOjAsYrNaL5SHsyiD0-6.svg" 
                alt="Decorative Sparkle" 
                width={83} 
                height={84}
                className="animate-spin-slow"
              />
            </div>

            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] mb-4 sm:mb-[20px]">
              Never miss a single news
            </h2>
            <p className="text-[#B7B6B6] text-[14px] sm:text-[16px] leading-[1.6] mb-6 sm:mb-[40px] max-w-[640px] mx-auto">
              Stay informed with all the latest updates and news about our events. Never miss a moment of our exciting and innovative gatherings in the world of technology and beyond.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-[580px] mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-grow">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full h-[48px] sm:h-[56px] px-5 sm:px-6 rounded-[8px] bg-white text-black text-[14px] sm:text-[16px] focus:outline-none placeholder:text-[#666666] transition-shadow focus:shadow-[0_0_0_2px_rgba(123,77,255,0.3)]"
                />
              </div>
              <button className="h-[48px] sm:h-[56px] px-6 sm:px-8 bg-[#7B4DFF] text-white font-semibold rounded-[8px] transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap hover:shadow-[0_0_20px_rgba(123,77,255,0.4)]">
                Subscribe
              </button>
            </form>
          </div>
        </Reveal>

        {/* Footer Navigation */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:justify-between pt-8 sm:pt-[60px]">
          {/* Logo */}
          <a href="/" className="inline-block">
            <img 
              src="/logo.png" 
              alt="Monks Event Logo" 
              className="w-[140px] sm:w-[181px] h-auto bg-transparent"
            />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-3">
            {['About', "Speaker's", 'Schedule', 'Gallery', 'Pricing', 'FAQ', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`/${item.toLowerCase().replace("'", "").replace(" ", "-")}`}
                className="text-[14px] sm:text-[16px] font-medium text-white hover:text-[#7B4DFF] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/ylnenZRNZiNaiyvnqssSuH73JWo-7.svg", url: "#" },
              { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/tojREC9ifQ5nkC970WpwebUIHNk-8.svg", url: "#" },
              { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/HVCibRFBCoU8byKMbSl7Npr5KIE-9.svg", url: "#" },
              { icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/3orl4MUeY6UNS0iLxEtXEp0bk-10.svg", url: "#" }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.url}
                className="w-[36px] h-[36px] rounded-full border border-white/20 flex items-center justify-center hover:border-[#7B4DFF] hover:bg-[#7B4DFF]/10 transition-all duration-300"
              >
                <img src={social.icon} alt="Social icon" className="w-[16px] h-[16px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 w-full mt-8 sm:mt-[40px] mb-6 sm:mb-[40px]"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#B7B6B6] text-[13px] sm:text-[16px]">
            Copyright &copy; Design Monks All Rights Reserved
          </p>
        </div>
      </div>

      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle,_rgba(255,_197,_25,_0.05)_0%,_transparent_70%)] blur-[80px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[40%] bg-[radial-gradient(circle,_rgba(123,_77,_255,_0.08)_0%,_transparent_70%)] blur-[80px]" />
      </div>
    </footer>
  );
};

export default Footer;
