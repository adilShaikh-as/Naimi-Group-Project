import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0c] text-white">
      {/* Main Footer */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-10 lg:px-14">
          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

            {/* Brand Logo & Name */}
            <div>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-md">
                  <Image
                    src="/new_logo.png"
                    alt="Naimi Group Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg tracking-wide text-[#E8D4A7]">
                    NAIMI GROUP
                  </p>
                  <p className="text-[9px] uppercase tracking-[3px] text-[#C5A059]">
                    Andheri West · Mumbai
                  </p>
                </div>
              </div>
            </div>

            {/* RERA Compliance Details */}
            <div>
              <p className="mb-6 text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A059]">
                Compliance & Registrations
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-[9px] uppercase tracking-[2px] text-white/35">
                    Project MahaRERA
                  </p>
                  <p className="mt-1 text-sm tracking-wide text-white/80">
                    P51800049875
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-[9px] uppercase tracking-[2px] text-white/35">
                    Agent MahaRERA
                  </p>
                  <p className="mt-1 text-sm tracking-wide text-white/80">
                    A51900043176
                  </p>
                </div>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <p className="mb-6 text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A059]">
                Explore
              </p>

              <nav className="flex flex-col items-start gap-4 text-sm text-white/50">
                <a
                  href="#overview"
                  className="transition-colors hover:text-[#C5A059]"
                >
                  Overview
                </a>

                <a
                  href="#about"
                  className="transition-colors hover:text-[#C5A059]"
                >
                  About
                </a>

                <a
                  href="#properties"
                  className="transition-colors hover:text-[#C5A059]"
                >
                  Properties
                </a>

                <a
                  href="#amenities"
                  className="transition-colors hover:text-[#C5A059]"
                >
                  Amenities
                </a>

                <a
                  href="#location"
                  className="transition-colors hover:text-[#C5A059]"
                >
                  Location
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-b border-white/10 bg-[#11110f]">
        <div className="mx-auto max-w-[1500px] px-6 py-9 md:px-10 lg:px-14">
          <div className="max-w-[1200px] text-[10px] leading-5 text-white/30">
            <p>
              <span className="text-white/50">Disclaimer:</span>{' '}
              All images, renders, floor plans, and visuals shown on this
              website are for illustrative and representational purposes only
              and are not to scale. They are intended solely to give a general
              impression of the project and may differ from the actual unit,
              layout, or surroundings. Nothing on this website constitutes a
              legal offer or forms part of any binding agreement or commitment.
              While every effort is made to ensure the information here is
              accurate and up to date, the Promoter makes no warranty as to its
              completeness. Prospective buyers are advised to independently
              verify all details — including area, amenities, pricing, and
              terms of sale — with the Sales Team before making any purchase
              decision. Terms &amp; Conditions apply.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0d0d0c]">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-3 px-6 py-6 text-[9px] uppercase tracking-[1.5px] text-white/25 md:flex-row md:px-10 lg:px-14">
          <p>© 2026 Naimi Group. All Rights Reserved.</p>

          <p>Luxury Real Estate · Mumbai</p>
        </div>
      </div>
    </footer>
  );
}