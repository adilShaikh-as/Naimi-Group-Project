'use client';

import Image from 'next/image';

interface AmenitiesProps {
  onEnquire: (topic: string) => void;
}

const amenities = [
  {
    title: 'Fitness Centre',
    subtitle: 'Train. Move. Perform.',
    enquiry: 'Fitness Centre & Gym',
    image: '/gym.jpeg', 
  },
  {
    title: 'Swimming Pool',
    subtitle: 'A private escape above the city.',
    enquiry: 'Swimming Pool & Deck',
    image: '/swimming_pool.jpeg',
  },
  {
    title: 'Kids Play Area',
    subtitle: 'A beautiful Kids Playing Area.',
    enquiry: 'Beautiful Kids Play Zone',
    image: '/kids-zone.png',
  },
  {
    title: 'Sky Lines',
    subtitle: 'Evenings with a view.',
    enquiry: 'Sundeck & Sky Lounge',
    image: '/sky_lines.jpeg',
  },
];

export default function Amenities({
  onEnquire,
}: AmenitiesProps) {
  return (
    <section
      id="amenities"
      className="bg-[#EAE5DA] px-6 py-24 md:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#A27D3B]">
              Lifestyle
            </span>
          </div>

          <h2 className="font-serif text-[46px] leading-[1] md:text-[65px]">
            Every day,
            <br />
            <span className="text-[#A27D3B]">
              elevated.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-6 text-[#706A60]">
            <span className='font-bold'>15+ lifestyle amenities </span>designed to bring wellness,
            leisure and social experiences closer to home.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12">

          {/* Fitness Centre (Large Left Card) */}
          <div
            onClick={() => onEnquire(amenities[0].enquiry)}
            className="group relative h-[520px] cursor-pointer overflow-hidden md:col-span-7 bg-[#555249]"
          >
            <Image
              src={amenities[0].image}
              alt={amenities[0].title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 z-10">
              <p className="mb-2 text-[9px] uppercase tracking-[3px] text-[#E8D4A7]">
                Wellness
              </p>
              <h3 className="font-serif text-4xl text-white">
                {amenities[0].title}
              </h3>
              <p className="mt-2 text-xs text-white/70">
                {amenities[0].subtitle}
              </p>
            </div>
          </div>

          {/* Right Column (Pool & Sky Lounge) */}
          <div className="grid gap-5 md:col-span-5">
            <div
              onClick={() => onEnquire(amenities[1].enquiry)}
              className="group relative h-[250px] cursor-pointer overflow-hidden bg-[#555249]"
            >
              <Image
                src={amenities[1].image}
                alt={amenities[1].title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-5 left-5 z-10">
                <h3 className="font-serif text-2xl text-white">
                  {amenities[1].title}
                </h3>
                <p className="mt-1 text-xs text-white/70">
                  {amenities[1].subtitle}
                </p>
              </div>
            </div>

            <div
              onClick={() => onEnquire(amenities[2].enquiry)}
              className="group relative h-[250px] cursor-pointer overflow-hidden bg-[#555249]"
            >
              <Image
                src={amenities[2].image}
                alt={amenities[2].title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-5 left-5 z-10">
                <h3 className="font-serif text-2xl text-white">
                  {amenities[2].title}
                </h3>
                <p className="mt-1 text-xs text-white/70">
                  {amenities[2].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Banquet Hall (Bottom Full-Width Card) */}
        <div
          onClick={() => onEnquire(amenities[3].enquiry)}
          className="group relative mt-5 h-[300px] cursor-pointer overflow-hidden bg-[#555249]"
        >
          <Image
            src={amenities[3].image}
            alt={amenities[3].title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
            <p className="text-[9px] uppercase tracking-[3px] text-[#E8D4A7]">
              Gather beautifully
            </p>
            <h3 className="mt-2 font-serif text-4xl text-white md:text-5xl">
              {amenities[3].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}