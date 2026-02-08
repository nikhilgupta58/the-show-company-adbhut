"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/reveal';

const scheduleData = [
  {
    id: 1,
    title: 'The Future of Digital Innovation',
    speaker: 'Make Torello',
    time: '10:00 AM - 11:00 AM',
    description: 'The Future of Digital Innovation: Harnessing emerging technologies to revolutionize industries, enhance user experiences, and drive unprecedented growth in a rapidly evolving digital landscape.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/xXaQSZ8HT0ej6sYJHzyYdit9jk-7.png',
    bgColor: 'bg-[#FEF2D1]',
  },
  {
    id: 2,
    title: 'Trends AI and Machine Learning',
    speaker: 'David Brown',
    time: '11:00 AM - 12:00 AM',
    description: 'AI and Machine Learning are revolutionizing industries by enabling advanced data analysis, personalized experiences, and intelligent automation, paving the way for smarter and more efficient solutions across various sectors.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/qMiEBqg3hR2qLBHta88TpwTAJU-8.png',
    bgColor: 'bg-[#ECE4FF]',
  },
  {
    id: 3,
    title: 'Digital Marketing for a New Era',
    speaker: 'Jenifer Moore',
    time: '7:00 AM - 8:00 AM',
    description: 'Navigate the evolving landscape of digital marketing in a new era, harnessing innovative strategies and technologies to create compelling campaigns that resonate with audiences and drive business growth.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/ZubtLJzRVY6ZxVpKYj0tmWtX4-12.png',
    bgColor: 'bg-[#D6F1FF]',
  },
  {
    id: 4,
    title: 'Introduction to Blockchain',
    speaker: 'David Brown',
    time: '6:00 AM - 6:00 AM',
    description: 'Blockchain introduction: Decentralized ledger tech records secure, transparent, immutable transactions across networks, transforming finance and supply chain management.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/images/6irboJkQhAckAzYkk9myLPjkeR0-13.png',
    bgColor: 'bg-[#FCE8E0]',
  },
];

const Schedule = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px] relative overflow-hidden">
      {/* Decorative Doodles */}
      <div className="absolute top-[120px] left-[10%] opacity-60 hidden lg:block">
        <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/D5hgjk0PgAH6j9naDjNFW9kgI-15.svg" width="40" alt="doodle" className="animate-float" />
      </div>
      <div className="absolute top-[180px] right-[10%] opacity-60 hidden lg:block">
        <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/PaV8ygD6dcdawmKAPo6MEWwRx4I-16.svg" width="60" alt="doodle" className="animate-spin-slow" />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="text-center mb-10 sm:mb-[60px]">
            <h2 className="text-[#0a0a0a] text-[32px] sm:text-[40px] lg:text-[48px] font-bold mb-4 tracking-tight leading-[1.2]">
              Browse all the schedule
            </h2>
            <p className="max-w-[600px] mx-auto text-[#999999] text-base lg:text-[18px] leading-[1.6]">
              Explore the complete event schedule to find sessions, speakers, and activities that match your interests and needs.
            </p>
          </div>
        </Reveal>

        {/* Date Header */}
        <Reveal delay={100}>
          <div className="bg-[#0a0a0a] rounded-[16px] sm:rounded-[24px] px-5 sm:px-8 py-4 sm:py-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-3">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5 sm:w-6 sm:h-6">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="font-bold text-base sm:text-[20px]">Day 01</span>
              </div>
              <span className="text-base sm:text-[20px] font-bold">Sunday, December 2025</span>
            </div>
            <div className="font-bold text-base sm:text-[20px]">
              Innovation & Technology
            </div>
          </div>
        </Reveal>

        {/* Session Cards */}
        <div className="space-y-4 sm:space-y-6">
          {scheduleData.slice(0, 2).map((session, i) => (
            <Reveal key={session.id} delay={150 + i * 100}>
              <div className={`${session.bgColor} rounded-[16px] sm:rounded-[24px] p-5 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md`}>
                <div className="flex-shrink-0">
                  <div className="w-full sm:w-[180px] h-[160px] sm:h-[120px] rounded-[12px] sm:rounded-[16px] overflow-hidden">
                    <Image 
                      src={session.image} 
                      alt={session.speaker}
                      width={180}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-[#0a0a0a] text-[20px] sm:text-[24px] font-bold leading-tight">
                      {session.title}
                    </h3>
                    <span className="text-[#0a0a0a] font-bold text-base sm:text-[20px] whitespace-nowrap">
                      {session.time}
                    </span>
                  </div>
                  <div className="text-[#0a0a0a] font-semibold text-[14px] sm:text-[16px] mb-3 sm:mb-4">
                    By {session.speaker}
                  </div>
                  <p className="text-[#0a0a0af2] text-[14px] sm:text-[16px] leading-[1.6] max-w-[800px]">
                    {session.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Lunch Break */}
          <div className="py-6 sm:py-8 text-center flex flex-col items-center">
            <div className="w-full h-px bg-[#e5e7eb] mb-4" />
            <h4 className="text-[#0a0a0a] text-base sm:text-[20px] font-bold uppercase tracking-wide">
              Lunch Break & Networking
            </h4>
            <p className="text-[#0a0a0a] text-base sm:text-[18px] font-bold mt-1">12:30 PM - 2:00PM</p>
            <div className="w-full h-px bg-[#e5e7eb] mt-4" />
          </div>

          {scheduleData.slice(2, 4).map((session, i) => (
            <Reveal key={session.id} delay={150 + i * 100}>
              <div className={`${session.bgColor} rounded-[16px] sm:rounded-[24px] p-5 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md`}>
                <div className="flex-shrink-0">
                  <div className="w-full sm:w-[180px] h-[160px] sm:h-[120px] rounded-[12px] sm:rounded-[16px] overflow-hidden">
                    <Image 
                      src={session.image} 
                      alt={session.speaker}
                      width={180}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-1">
                    <h3 className="text-[#0a0a0a] text-[20px] sm:text-[24px] font-bold leading-tight">
                      {session.title}
                    </h3>
                    <span className="text-[#0a0a0a] font-bold text-base sm:text-[20px] whitespace-nowrap">
                      {session.time}
                    </span>
                  </div>
                  <div className="text-[#0a0a0a] font-semibold text-[14px] sm:text-[16px] mb-3 sm:mb-4">
                    By {session.speaker}
                  </div>
                  <p className="text-[#0a0a0af2] text-[14px] sm:text-[16px] leading-[1.6] max-w-[800px]">
                    {session.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 sm:mt-12 text-center">
            <a 
              href="/schedule" 
              className="inline-block bg-[#7f3cff] text-white font-bold text-[16px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-[12px] hover:bg-[#6c32db] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(127,60,255,0.3)]"
            >
              See All Schedule
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Schedule;
