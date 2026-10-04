'use client';

import Image from 'next/image';

interface HeroProps {
  onEnquire: (topic: string) => void;
}

export default function Hero({ onEnquire }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#11110f] md:min-h-[92vh]"
    >
      {/* Background image */}
      <Image
        src="/hero-bg.jpeg"
        alt="Naimi Heights, Andheri West"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#11110f] via-[#11110f]/30 to-black/20 sm:via-[#11110f]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 md:px-10 md:pt-40 lg:pb-20">
        <div className="max-w-4xl">
          <h1 className="max-w-4xl font-serif text-[44px] leading-[0.98] tracking-[-1px] text-white min-[400px]:text-[52px] sm:text-[68px] sm:tracking-[-1.5px] md:text-[88px] md:leading-[0.94] md:tracking-[-2px] lg:text-[104px] xl:text-[120px]">
            Naimi
            <br />
            <span className="text-[#E8D4A7]">Heights</span>
          </h1>

          <div className="mt-6 flex flex-col gap-8 sm:mt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-md">
              <p className="text-sm leading-6 text-white/75 sm:text-base sm:leading-7 md:text-lg">
                Elevated living in the heart of Andheri West. Premium 2 & 3
                BHK residences designed for contemporary Mumbai living.
              </p>

              <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-7">
                <button
                  onClick={() => onEnquire('Enquiry')}
                  className="w-full cursor-pointer rounded-full bg-[#C5A059] px-6 py-3.5 text-xs font-semibold tracking-wide text-[#171715] transition-all hover:bg-[#e0c27b] min-[420px]:w-auto sm:py-3"
                >
                  Enquiry
                </button>

                {/* Brochure is lead-gated — opens the enquiry modal; the
                    actual PDF is only revealed after a successful submit */}
                <button
                  onClick={() => onEnquire('Download Brochure')}
                  className="inline-flex w-full items-center justify-center cursor-pointer rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#171715] min-[420px]:w-auto sm:py-3"
                >
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="flex items-end gap-8 border-l border-white/20 pl-5 sm:gap-10 sm:pl-6 lg:pb-1">
              <div>
                <p className="text-[9px] uppercase tracking-[2px] text-white/50">
                  Starting From
                </p>
                <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                  ₹2.34 Cr*
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[2px] text-white/50">
                  Configuration
                </p>
                <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                  2 & 3 BHK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-7 z-10 hidden items-center gap-3 text-[9px] uppercase tracking-[3px] text-white/50 lg:flex">
        Scroll to explore
        <span className="h-px w-10 bg-white/30" />
      </div>
    </section>
  );
}