"use client";

import { useEffect, useState } from 'react';

interface NavbarProps {
  activePage?: string;
}

const Navbar = ({ activePage = 'Home' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
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
      className={`fixed overflow-hidden top-0 h-[88px] left-0 right-0 z-[100] w-full transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between w-full h-[72px] md:h-[88px] px-5 sm:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center flex-shrink-0 relative z-[110]">
          <div className="relative w-[140px] md:w-[181px]">
            <img
              src="./logo.png"
              alt="Monks Event"
              className="object-contain scale-110"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[15px] font-semibold transition-colors duration-200 ${link.name === activePage
                ? 'text-white'
                : 'text-[#999999] hover:text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:inline-flex items-center justify-center px-5 lg:px-6 py-2.5 border border-[#2e2e2e] rounded-[12px] bg-transparent text-white text-sm lg:text-base font-semibold hover:bg-white hover:text-black transition-all duration-300"
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
        {navLinks.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-2xl font-bold transition-all duration-300 ${link.name === activePage ? 'text-white' : 'text-[#999] hover:text-white'
              }`}
            style={{
              transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#"
          className="mt-4 px-8 py-3 border border-[#2e2e2e] rounded-[12px] text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
          style={{
            transitionDelay: mobileOpen ? `${navLinks.length * 80}ms` : '0ms',
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

export default Navbar;
