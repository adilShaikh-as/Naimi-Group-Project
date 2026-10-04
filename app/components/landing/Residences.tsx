'use client';

type ResidenceProps = {
  onEnquire: (topic: string) => void;
};

const residences = [
  {
    type: '2 BHK',
    area: '649 sq ft',
    price: '₹2.34 Cr',
  },
  {
    type: '2 BHK Grand',
    area: '702 sq ft',
    price: '₹2.53 Cr',
  },
  {
    type: '3 BHK',
    area: '1,001 sq ft',
    price: '₹3.60 Cr',
  },
  {
    type: 'Exclusive Duplex',
    area: '—',
    price: '₹3.32 Cr+',
  },
];

export default function Residence({ onEnquire }: ResidenceProps) {
  return (
    <section
      id="properties"
      className="bg-[#0d0d0c] px-5 py-24 text-white md:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#C5A059]">
              Residences
            </span>
          </div>

          <h2 className="font-serif text-[46px] leading-[1] tracking-[-1px] md:text-[64px]">
            Find your
            <br />
            <span className="text-[#C5A059]">
              perfect residence.
            </span>
          </h2>
        </div>

        {/* Pricing Table */}
        <div className="w-full">

          {/* Table Header */}
          <div className="grid grid-cols-3 border-y border-white/15 bg-[#151513] px-6 py-5 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-white/50">
              Type
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-white/50">
              Carpet Area
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-white/50">
              Starting Price
            </p>
          </div>

          {/* Rows */}
          <div className="border-b border-white/10">
            {residences.map((residence) => (
              <div
                key={residence.type}
                className="grid grid-cols-1 gap-5 border-t border-white/10 px-6 py-8 transition-colors duration-300 hover:bg-[#151513] md:grid-cols-[1.3fr_1fr_1fr] md:items-center md:gap-0 md:px-8 md:py-10"
              >
                {/* Type */}
                <div>
                  <h3 className="font-serif text-2xl text-white md:text-3xl">
                    {residence.type}
                  </h3>
                </div>

                {/* Carpet Area */}
                <div className="flex items-center">
                  <p className="text-base text-white/70 md:text-lg font-medium">
                    {residence.area}
                  </p>
                </div>

                {/* Price and Uniform Button layout */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-serif text-2xl text-[#C5A059] md:text-3xl">
                      {residence.price}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[1.5px] text-white/40">
                      onwards
                    </p>
                  </div>

                  {/* Uniform button: full-width on mobile (w-full), fixed uniform width on desktop (md:w-[210px]) */}
                  <button
                    onClick={() =>
                      onEnquire(
                        `Enquire Now for ${residence.type} — ${residence.area} — ${residence.price}`
                      )
                    }
                    className="w-full md:w-[210px] cursor-pointer rounded border border-[#C5A059] bg-[#C5A059]/15 px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[1.5px] text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059] hover:text-[#11110f]"
                  >
                    Enquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col justify-between gap-3 md:flex-row">
          <p className="text-[10px] uppercase tracking-[1.5px] text-white/40 font-medium">
            Premium 2 & 3 BHK residences
          </p>

          <p className="text-[10px] uppercase tracking-[1.5px] text-white/40 font-medium">
            *Prices are indicative and subject to applicable taxes,
            availability and developer terms.
          </p>
        </div>

      </div>
    </section>
  );
}