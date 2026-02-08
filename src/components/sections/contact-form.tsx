"use client";

import React from 'react';
import Image from 'next/image';

export default function ContactForm() {
  return (
    <section 
      className="bg-white py-[80px] md:py-[120px] px-6" 
    >
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center">
        
        {/* Section Title Block */}
        <div className="max-w-[760px] text-center mb-[60px]">
          <h2 className="text-[#000000] text-[32px] md:text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] mb-4">
            Reach out us for more information
          </h2>
          <p className="text-[#666666] text-base leading-[1.6] font-normal">
            Reach out to us for more information: Our team is available to answer your questions, 
            provide detailed insights, and assist with any inquiries you may have. Contact us today!
          </p>
        </div>

        {/* Contact Content Wrapper */}
        <div className="w-full flex flex-col lg:flex-row gap-[40px] items-start">
          
          {/* Left Column: Contact Info Block (Lavender Card) */}
          <div className="w-full lg:w-[380px] bg-[#EBE5FF] rounded-[16px] p-[40px] flex flex-col gap-[32px]">
            {/* Address */}
            <a 
              href="https://www.google.com/maps/search/101+NextGen+Street,+Austin,+TX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <h6 className="text-[#000000] text-[18px] font-semibold leading-[1.4] mb-3">
                Our Address
              </h6>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/pNjLklgtbkDUVnzx3gNtfxS1M-2.svg" 
                    alt="Map Pin" 
                    width={14} 
                    height={18}
                  />
                </div>
                <p className="text-[#000000] text-base leading-[1.4]">
                  101 NextGen Street, Austin, TX
                </p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:8801234567890" className="group">
              <h6 className="text-[#000000] text-[18px] font-semibold leading-[1.4] mb-3">
                Call or Message
              </h6>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/jBpPVPnYuKJviRAm8oZhTmRm5I-3.svg" 
                    alt="Phone" 
                    width={14} 
                    height={18}
                  />
                </div>
                <p className="text-[#000000] text-base leading-[1.4]">
                  +880 123 456 7890
                </p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:hello@designmonks.com" className="group">
              <h6 className="text-[#000000] text-[18px] font-semibold leading-[1.4] mb-3">
                Email Us
              </h6>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dc392388-8c5b-4717-bf8b-ddc1836c2430-monkseventpro-framer-website/assets/svgs/10qFSv8gwsQBmPIbnrxBx2h9Vc-4.svg" 
                    alt="Email" 
                    width={16} 
                    height={14}
                  />
                </div>
                <p className="text-[#000000] text-base leading-[1.4]">
                  hello@designmonks.com
                </p>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form Block */}
          <div className="flex-1 w-full">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[#000000] text-[14px] font-semibold leading-[1.4]">
                    First Name*
                  </label>
                  <input 
                    type="text" 
                    placeholder="First name"
                    className="w-full bg-white border border-[#E0E0E0] rounded-[8px] px-4 py-3 text-base text-[#000000] focus:outline-none focus:border-[#7B4DFF] focus:ring-2 focus:ring-[#7B4DFF]/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#000000] text-[14px] font-semibold leading-[1.4]">
                    Last Name*
                  </label>
                  <input 
                    type="text" 
                    placeholder="Last name"
                    className="w-full bg-white border border-[#E0E0E0] rounded-[8px] px-4 py-3 text-base text-[#000000] focus:outline-none focus:border-[#7B4DFF] focus:ring-2 focus:ring-[#7B4DFF]/10 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#000000] text-[14px] font-semibold leading-[1.4]">
                  Email Address*
                </label>
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="w-full bg-white border border-[#E0E0E0] rounded-[8px] px-4 py-3 text-base text-[#000000] focus:outline-none focus:border-[#7B4DFF] focus:ring-2 focus:ring-[#7B4DFF]/10 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#000000] text-[14px] font-semibold leading-[1.4]">
                  Inquiry Type*
                </label>
                <input 
                  type="text" 
                  placeholder="Ticket booking"
                  className="w-full bg-white border border-[#E0E0E0] rounded-[8px] px-4 py-3 text-base text-[#000000] focus:outline-none focus:border-[#7B4DFF] focus:ring-2 focus:ring-[#7B4DFF]/10 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#000000] text-[14px] font-semibold leading-[1.4]">
                  Message
                </label>
                <textarea 
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full bg-white border border-[#E0E0E0] rounded-[8px] px-4 py-3 text-base text-[#000000] focus:outline-none focus:border-[#7B4DFF] focus:ring-2 focus:ring-[#7B4DFF]/10 transition-all resize-none"
                />
              </div>

              <div className="mt-2">
                <button 
                  type="submit"
                  className="bg-[#7B4DFF] text-white font-semibold text-base px-8 py-3 rounded-[8px] hover:scale-105 transition-transform duration-200 cursor-pointer text-center inline-block"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
