'use client';

interface FinalCTAProps {
  onEnquire: (topic: string) => void;
}

export default function FinalCTA({
  onEnquire,
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#eeeae0] px-6 py-24 md:px-10 lg:py-32">
      {/* Decorative background circles */}
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-black/10" />
      <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-black/10" />

      <div className="relative mx-auto flex max-w-[1380px] flex-col justify-between gap-10 md:flex-row md:items-end">
        <div className="max-w-4xl">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[3px] text-[#A27D3B]">
            Trusted Excellence · Naimi Group
          </p>

          <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-1px] text-[#171715] sm:text-[48px] md:text-[62px]">
            Proud marketing partners for over <span className="italic text-[#A27D3B]">700+ landmark projects</span> across Mumbai.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#666057] md:text-base font-light">
            Benefit from our unmatched market leadership, direct developer pricing, and verified inventory access. Your dream home awaits.
          </p>
        </div>

        <button
          onClick={() =>
            onEnquire('Private Project Enquiry — 700+ Projects')
          }
          className="group flex w-fit shrink-0 cursor-pointer items-center gap-5 rounded-full bg-[#171715] px-8 py-4 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#A27D3B]"
        >
          Enquire Now

          <span className="text-lg transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}