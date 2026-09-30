'use client';

interface FinalCTAProps {
  onEnquire: (topic: string) => void;
}

export default function FinalCTA({
  onEnquire,
}: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden bg-[#eeeae0] px-6 py-24 md:px-10 lg:py-32">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-black/10" />

      <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-black/10" />

      <div className="relative mx-auto flex max-w-[1380px] flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-[9px] font-bold uppercase tracking-[3px] text-black/50">
            Private Enquiry
          </p>

          <h2 className="max-w-3xl font-serif text-[48px] leading-[0.95] tracking-[-1px] text-[#171715] md:text-[75px]">
            Your next address
            <br />
            starts here.
          </h2>
        </div>

        <button
          onClick={() =>
            onEnquire('Private Project Enquiry')
          }
          className="group flex w-fit cursor-pointer items-center gap-5 rounded-full bg-[#171715] px-7 py-4 text-xs font-semibold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-[#171715]"
        >
          Begin Your Enquiry

          <span className="text-lg transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}