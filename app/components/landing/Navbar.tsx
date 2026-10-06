'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NavbarProps {
  onEnquire: () => void;
}

const links = [
  ['Overview', '#overview'],
  ['About', '#about'],
  ['Properties', '#properties'],
  ['Amenities', '#amenities'],
  ['Location', '#location'],
];

export default function Navbar({ onEnquire }: NavbarProps) {
  const [open, setOpen] = useState(false);

  
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);

    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, []);

  const handleEnquire = () => {
    setOpen(false);
    onEnquire();
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-[100] w-full border-b border-[#C5A059]/20 bg-[#0d0d0c]/95 text-white backdrop-blur-md">
        <div className="mx-auto flex h-[80px] w-full max-w-[1500px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-10">
          
          {/* Logo Only */}
          <a
            href="#overview"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-md sm:h-14 sm:w-14">
              <Image
                src="/new_logo.png"
                alt="Naimi Group Logo"
                fill
                sizes='180px'
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="px-4 text-[12px] font-light text-white/70 transition-colors duration-300 hover:text-[#C5A059] xl:px-5"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right side: CTA (Now visible on mobile) + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleEnquire}
              className="cursor-pointer border border-[#C5A059] bg-transparent px-3.5 py-2 text-[10px] font-medium text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059] hover:text-[#171715] sm:px-5 sm:py-2.5 sm:text-[11px]"
            >
              Enquire Now
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative flex h-10 w-10 cursor-pointer items-center justify-center lg:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-[#E8D4A7] transition-all duration-300 ${
                  open ? 'rotate-45' : '-translate-y-[7px]'
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-[#E8D4A7] transition-all duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-[#E8D4A7] transition-all duration-300 ${
                  open ? '-rotate-45' : 'translate-y-[7px]'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-[80px] z-[99] overflow-y-auto bg-[#0d0d0c] text-white transition-all duration-300 lg:hidden ${
          open
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="mx-auto flex min-h-full max-w-[1500px] flex-col px-6 pb-10 pt-4 sm:px-8">
          <div className="flex flex-col">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-serif text-2xl text-white/80 transition-colors hover:text-[#C5A059] sm:text-3xl"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            onClick={handleEnquire}
            className="mt-8 w-full cursor-pointer bg-[#C5A059] px-6 py-4 text-xs font-semibold tracking-wide text-[#171715] transition-all hover:bg-[#e0c27b]"
          >
            Enquire Now
          </button>

          <p className="mt-auto pt-10 text-[9px] uppercase tracking-[2px] text-white/30">
            Sunbeam Heights · Andheri West, Mumbai
          </p>
        </div>
      </div>
    </>
  );
}