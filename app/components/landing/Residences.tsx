
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
      className="bg-[#0d0d0c] px-5 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">

        {/* Header */}
        <div className="mb-12 max-w-3xl sm:mb-14 md:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#C5A059] sm:text-[11px]">
              Residences
            </span>
          </div>

          <h2 className="font-serif text-[42px] leading-[0.98] tracking-[-1px] min-[400px]:text-[48px] sm:text-[58px] md:text-[68px] lg:text-[76px]">
            Find your
            <br />
            <span className="text-[#C5A059]">perfect residence.</span>
          </h2>
        </div>

        {/* Pricing Table */}
        <div className="w-full">

          {/* Table Header */}
          <div className="hidden border-y border-white/15 bg-[#151513] px-6 py-5 md:grid md:grid-cols-[1.3fr_1fr_1fr] md:px-8 lg:px-10">
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
                className="
                  border-t border-white/10
                  px-0 py-8
                  transition-colors duration-300
                  hover:bg-[#151513]
                  sm:py-9
                  md:grid md:grid-cols-[1.3fr_1fr_1fr]
                  md:items-center
                  md:gap-0
                  md:px-6
                  md:py-10
                  lg:px-8
                  lg:py-12
                "
              >
                {/* Type */}
                <div>
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[2px] text-white/35 md:hidden">
                    Residence
                  </p>

                  <h3 className="font-serif text-[30px] leading-tight tracking-[-0.5px] text-white min-[400px]:text-[32px] sm:text-[36px] md:text-[34px] lg:text-[38px]">
                    {residence.type}
                  </h3>
                </div>

                {/* Mobile details */}
                <div className="mt-7 grid grid-cols-2 gap-6 md:hidden">
                  <div>
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[2px] text-white/35">
                      Carpet Area
                    </p>

                    <p className="text-lg font-medium text-white/75 sm:text-xl">
                      {residence.area}
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[2px] text-white/35">
                      Starting Price
                    </p>

                    <p className="font-serif text-[25px] leading-none text-[#C5A059] sm:text-[28px]">
                      {residence.price}
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[1.5px] text-white/35">
                      onwards
                    </p>
                  </div>
                </div>

                {/* Desktop Carpet Area */}
                <div className="hidden md:flex md:items-center">
                  <p className="text-lg font-medium text-white/70 lg:text-xl">
                    {residence.area}
                  </p>
                </div>

                {/* Desktop Price + Button */}
                <div className="mt-7 md:mt-0 md:flex md:items-center md:justify-between md:gap-6">
                  <div className="hidden md:block">
                    <p className="font-serif text-[28px] text-[#C5A059] lg:text-[32px]">
                      {residence.price}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[1.5px] text-white/40">
                      onwards
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      onEnquire(
                        `Enquire Now for ${residence.type} — ${residence.area} — ${residence.price}`
                      )
                    }
                    className="
                      mt-7 w-full cursor-pointer rounded
                      border border-[#C5A059]
                      bg-[#C5A059]/15
                      px-6 py-4
                      text-[11px] font-bold uppercase tracking-[1.5px]
                      text-[#C5A059]
                      transition-all duration-300
                      hover:bg-[#C5A059]
                      hover:text-[#11110f]
                      sm:py-4.5
                      md:mt-0
                      md:w-[190px]
                      lg:w-[210px]
                    "
                  >
                    Enquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-7 flex flex-col gap-3 sm:mt-8 md:flex-row md:items-start md:justify-between">
          <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-white/40 sm:text-[11px]">
            Premium 2 & 3 BHK residences
          </p>

          <p className="max-w-xl text-[10px] font-medium leading-5 tracking-[0.5px] text-white/40 sm:text-[11px] md:text-right">
            *Prices are indicative and subject to applicable taxes,
            availability and developer terms.
          </p>
        </div>

      </div>
    </section>
  );
}

