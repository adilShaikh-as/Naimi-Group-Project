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

            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A059]">
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
          <div className="grid grid-cols-3 border-y border-white/10 bg-[#151513] px-5 py-4 md:grid-cols-[1.3fr_1fr_1fr] md:px-6">

            <p className="text-[9px] font-medium uppercase tracking-[2px] text-white/35">
              Type
            </p>

            <p className="text-[9px] font-medium uppercase tracking-[2px] text-white/35">
              Carpet Area
            </p>

            <p className="text-[9px] font-medium uppercase tracking-[2px] text-white/35">
              Starting Price
            </p>

          </div>

          {/* Rows */}
          <div className="border-b border-white/10">

            {residences.map((residence, index) => (
              <div
                key={residence.type}
                className="group grid grid-cols-3 border-t border-white/10 px-5 py-7 transition-colors duration-300 hover:bg-[#151513] md:grid-cols-[1.3fr_1fr_1fr] md:px-6 md:py-8"
              >

                {/* Type */}
                <div>
                  <h3 className="font-serif text-xl text-white md:text-2xl">
                    {residence.type}
                  </h3>
                </div>

                {/* Carpet Area */}
                <div className="flex items-start">
                  <p className="text-sm text-white/55 md:text-base">
                    {residence.area}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-start justify-between gap-3">

                  <div>
                    <p className="font-serif text-xl text-[#C5A059] md:text-2xl">
                      {residence.price}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[1px] text-white/25">
                      onwards
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      onEnquire(
                        `${residence.type} — ${residence.area} — ${residence.price}`
                      )
                    }
                    className="hidden cursor-pointer border border-[#C5A059]/40 px-4 py-2 text-[9px] font-semibold uppercase tracking-[1px] text-[#C5A059] transition-all duration-300 hover:bg-[#C5A059] hover:text-[#11110f] md:block"
                  >
                    Request Pricing →
                  </button>

                </div>

                {/* Mobile button */}
                <div className="col-span-3 mt-5 md:hidden">
                  <button
                    onClick={() =>
                      onEnquire(
                        `${residence.type} — ${residence.area} — ${residence.price}`
                      )
                    }
                    className="w-full cursor-pointer border border-[#C5A059]/40 px-4 py-3 text-left text-[9px] font-semibold uppercase tracking-[1px] text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-[#11110f]"
                  >
                    Request Pricing →
                  </button>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom note */}
        <div className="mt-7 flex flex-col justify-between gap-3 md:flex-row">
          <p className="text-[9px] uppercase tracking-[1.5px] text-white/25">
            Premium 2 & 3 BHK residences
          </p>

          <p className="text-[9px] uppercase tracking-[1.5px] text-white/25">
            *Prices are indicative and subject to applicable taxes,
            availability and developer terms.
          </p>
        </div>

      </div>
    </section>
  );
}