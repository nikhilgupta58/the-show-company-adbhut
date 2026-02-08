"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  activePage?: string;
}

const Header = ({ activePage = 'About' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 border-b border-white/5 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-black/80 backdrop-blur-md'
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-[72px] md:h-[88px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center relative z-[110]">
          <div className="relative w-[140px] h-[24px] md:w-[181px] md:h-[31px]">
            <Image
              src="./logo.png"
              alt="Monks Event Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[15px] font-medium transition-all duration-200 hover:text-[#7B4DFF] ${item.name === activePage ? 'text-[#7B4DFF]' : 'text-[#B7B6B6]'
                }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:inline-flex px-5 lg:px-6 py-2.5 border border-white/20 rounded-lg text-sm lg:text-[16px] font-semibold text-white transition-all duration-300 hover:border-[#7B4DFF] hover:bg-[#7B4DFF]"
        >
          Get This Template
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-[105] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {navItems.map((item, i) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`text-2xl font-bold transition-all duration-300 ${item.name === activePage ? 'text-[#7B4DFF]' : 'text-[#999] hover:text-white'
              }`}
            style={{
              transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {item.name}
          </a>
        ))}
        <a
          href="#"
          className="mt-4 px-8 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-[#7B4DFF] hover:border-[#7B4DFF] transition-all duration-300"
          style={{
            transitionDelay: mobileOpen ? `${navItems.length * 80}ms` : '0ms',
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Get This Template
        </a>
      </div>
    </header>
  );
};

export default Header;
