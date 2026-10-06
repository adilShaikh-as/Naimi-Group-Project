'use client';

interface LocationProps {
  onEnquire: (topic: string) => void;
}

export default function Location({ onEnquire }: LocationProps) {
  const connectivity = [
    {
      title: 'Entertainment',
      places: [
        { name: 'Fun Republic Mall', time: '3 min' },
        { name: 'Infiniti Mall', time: '3 min' },
        { name: 'Citi Mall', time: '3 min' },
        { name: 'Country Club', time: '4 min' },
        { name: 'The Club', time: '8 min' },
      ],
    },
    {
      title: 'Restaurant & Dining',
      places: [
        { name: 'Glocal Junction', time: '3 min' },
        { name: 'Tap Resto Bar', time: '3 min' },
        { name: 'Irish House', time: '3 min' },
        { name: 'Bombay Cocktail Bar', time: '4 min' },
        { name: 'Lord of the Drinks', time: '4 min' },
      ],
    },
    {
      title: 'Education',
      places: [
        { name: 'JBCN Intl. School', time: '2 min' },
        { name: 'Billabong High Intl.', time: '7 min' },
        { name: 'JNMS', time: '12 min' },
        { name: 'NMS', time: '12 min' },
        { name: 'Mithibai College', time: '14 min' },
      ],
    },
    {
      title: 'Healthcare',
      places: [
        { name: 'Aashirwad Hospital', time: '4 min' },
        { name: 'Kokilaben Hospital', time: '5 min' },
        { name: 'Belle Vue Hospital', time: '5 min' },
        { name: 'Criticare Hospital', time: '12 min' },
        { name: 'Nanavati Super Speciality', time: '14 min' },
      ],
    },
  ];

  return (
    <section
      id="location"
      className="bg-[#F3F0E9] px-5 py-24 text-[#171715] md:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#A27D3B]">
              Location & Connectivity
            </span>
          </div>

          <h2 className="font-serif text-[46px] leading-[1] tracking-[-1px] md:text-[65px]">
            Everything within
            <br />
            <span className="font-normal italic text-[#A27D3B]">
              easy reach.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#666057]">
            Strategically located in Andheri West, Sunbeam Heights connects you
            effortlessly to Mumbai&apos;s key destinations, entertainment hubs,
            schools, hospitals and everyday conveniences.
          </p>
        </div>

        {/* Map / Location Card */}
        <div
          onClick={() => onEnquire('Location & Connectivity')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onEnquire('Location & Connectivity');
            }
          }}
          className="group relative block h-[380px] w-full cursor-pointer overflow-hidden border border-[#D6D0C5] bg-[#171715] md:h-[500px] lg:h-[560px]"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#171715] via-[#171715]/40 to-[#171715]/60" />

          {/* Center Content */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="px-4 text-center">
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#C5A059] bg-[#171715]/80 text-[#C5A059] shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                <span className="absolute inset-0 animate-ping rounded-full border border-[#C5A059] opacity-30" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
                  />

                  <circle cx="12" cy="9" r="2.2" />
                </svg>
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#C5A059]">
                Sunbeam Heights
              </p>

              <h3 className="mt-2 font-serif text-3xl italic text-white drop-shadow-md md:text-5xl">
                Andheri West, Mumbai
              </h3>

              <p className="mt-3 text-sm font-medium tracking-wide text-white/80">
                New Link Road · Near Oshiwara Metro Station
              </p>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-between gap-4 border-t border-[#C5A059]/30 bg-[#171715]/95 px-6 py-5 text-white backdrop-blur-md md:flex-row md:items-center md:px-8">
            <div>
              <p className="text-[10px] uppercase tracking-[2px] text-[#C5A059]">
                Project Location
              </p>

              <p className="mt-1 text-sm text-white/90">
                Sunbeam Heights, New Link Road, Andheri West, Mumbai
              </p>
            </div>

            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#E8D4A7]">
              Enquire About Location

              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="mt-20">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#A27D3B]">
                Nearby Landmarks
              </p>

              <h3 className="mt-3 font-serif text-4xl md:text-5xl">
                Connected to{' '}
                <span className="italic text-[#A27D3B]">
                  what matters.
                </span>
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#666057]">
              From everyday essentials to education, healthcare, dining and
              entertainment — everything is close by.
            </p>
          </div>

          <div className="grid gap-10 border-t border-[#D5CEC1] pt-12 md:grid-cols-2 lg:grid-cols-4">
            {connectivity.map((category) => (
              <div key={category.title} className="flex flex-col">
                <h4 className="border-b border-[#D5CEC1]/60 pb-4 text-xs font-bold uppercase tracking-[2px] text-[#A27D3B]">
                  {category.title}
                </h4>

                <div className="mt-6 space-y-4">
                  {category.places.map((place) => (
                    <div
                      key={place.name}
                      className="flex items-baseline justify-between gap-2 text-sm"
                    >
                      <span className="font-serif text-lg italic tracking-wide text-[#2C2925]">
                        {place.name}
                      </span>

                      <span className="shrink-0 text-xs font-semibold tracking-wider text-[#A27D3B]">
                        {place.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}