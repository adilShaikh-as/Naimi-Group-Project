import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0c] text-white">
      {/* Main Footer */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-10 lg:px-14">
          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

            {/* Brand + MahaRERA */}
            <div>
              <div>
                <p className="font-serif text-3xl tracking-wide text-[#E8D4A7]">
                  NAIMI GROUP
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[3px] text-[#C5A059]">
                  Andheri West · Mumbai
                </p>
              </div>

              {/* MahaRERA Certificate */}
              <div className="mt-10">
                <p className="mb-4 text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A059]">
                  MahaRERA Registered
                </p>

                <a
                  href="https://maharera.maharashtra.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Verify Naimi Group MahaRERA registration"
                  className="group block w-full max-w-[430px]"
                >
                  <div className="overflow-hidden rounded-sm bg-white p-3 transition-opacity duration-300 group-hover:opacity-90">
                    <Image
                      src="/projectMahaRERA.jpeg"
                      alt="Naimi Group MahaRERA registration certificate"
                      width={900}
                      height={450}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </a>

                <p className="mt-3 text-[10px] leading-5 text-white/30">
                  Click to verify registration on the official MahaRERA website.
                </p>
              </div>
            </div>

            {/* Project */}
            <div>
              <p className="mb-6 text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A059]">
                Project
              </p>

              <div className="space-y-5 text-sm leading-6 text-white/50">
                <p>
                  <span className="text-base text-white/80">
                    Naimi Group
                  </span>
                  <br />
                  New Link Road
                  <br />
                  Near Oshiwara Metro Station
                  <br />
                  Andheri (W), Mumbai - 400053
                </p>

                <a
                  href="https://maps.app.goo.gl/khaqTxVNr6DVmeuD8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#C5A059] transition-colors hover:text-white"
                >
                  View on Google Maps
                  <span>→</span>
                </a>
              </div>

              {/* Registration */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-[9px] uppercase tracking-[2px] text-white/30">
                  Project MahaRERA
                </p>

                <p className="mt-2 text-sm tracking-wide text-white/70">
                  P51800049875
                </p>

                {/* Agent Registration */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-[9px] uppercase tracking-[2px] text-white/30">
                  Agent MahaRERA
                </p>

                <p className="mt-2 text-sm tracking-wide text-white/70">
                  A51900043176
                </p>
              </div>
              </div>
            </div>

            {/* Explore */}
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