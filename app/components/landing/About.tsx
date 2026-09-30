import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F3F0E9] px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#A27D3B]">
              The Naimi Assurance
            </span>
          </div>

          <h2 className="max-w-xl font-serif text-[36px] leading-[1.05] tracking-[-1px] text-[#171715] sm:text-[43px] md:text-[58px] md:leading-[1.03]">
            We verify the
            <br />
            <span className="text-[#A27D3B]">home before you.</span>
          </h2>

          <div className="mt-8 max-w-lg space-y-5 text-[15px] leading-7 text-[#666057]">
            <p>
              Your peace of mind is our starting point. Before stepping in as
              the Official Marketing Partner for this luxury Andheri West
              development, Naimi Group&apos;s independent verification team
              completed exhaustive due diligence across approvals, RERA
              compliances and builder track records.
            </p>

            <p>
              Backed by 9+ years of market leadership and hundreds of
              on-ground site visits, we represent residences we would
              confidently recommend to our own family.
            </p>
          </div>

          <div className="mt-9 border-l-2 border-[#C5A059] pl-5">
            <p className="font-serif text-lg leading-7 text-[#302D27]">
              Priority inventory. Direct-from-developer pricing. End-to-end
              documentation support.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 hidden h-24 w-24 border-l border-t border-[#C5A059] md:block" />

          {/* Main image */}
          <div className="relative h-[380px] overflow-hidden bg-[#D9D4C9] sm:h-[460px] md:h-[620px]">
            <Image
              src="/about-session.jpeg"
              alt="Naimi Heights residences"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Small overlapping image (optional) */}
          <div className="absolute -bottom-8 -left-8 hidden w-44 overflow-hidden border-8 border-[#F3F0E9] md:block">
            <div className="relative h-44 bg-[#CFC9BC]">
              {/* <Image
                src="/about-small.jpg"
                alt="Naimi Heights interior detail"
                fill
                sizes="176px"
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}