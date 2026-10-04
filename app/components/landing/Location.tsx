'use client';

export default function Location() {
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

        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#A27D3B]">
              Location & Connectivity
            </span>
          </div>

          <h2 className="font-serif text-[46px] leading-[1] tracking-[-1px] md:text-[65px]">
            Everything within
            <br />
            <span className="text-[#A27D3B] italic font-normal">
              easy reach.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#666057]">
            Strategically located in Andheri West, Sunbeam Heights
            connects you effortlessly to Mumbai&apos;s key
            destinations, entertainment hubs, schools, hospitals
            and everyday conveniences.
          </p>
        </div>

        {/* Map Card with Background Image */}
        <a
          href="https://maps.app.goo.gl/khaqTxVNr6DVmeuD8"
          target="_blank"
          rel="noreferrer"
          className="group relative block h-[380px] w-full overflow-hidden border border-[#D6D0C5] bg-[#171715] md:h-[500px] lg:h-[560px]"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80')" 
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#171715] via-[#171715]/40 to-[#171715]/60"></div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-4">
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#C5A059] bg-[#171715]/80 text-[#C5A059] shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                <span className="absolute inset-0 rounded-full border border-[#C5A059] animate-ping opacity-30"></span>
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
                  <circle
                    cx="12"
                    cy="9"
                    r="2.2"
                  />
                </svg>
              </div>

              <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#C5A059]">
                Sunbeam Heights
              </p>

              <h3 className="mt-2 font-serif text-3xl text-white md:text-5xl drop-shadow-md italic">
                Andheri West, Mumbai
              </h3>

              <p className="mt-3 text-sm text-white/80 tracking-wide font-medium">
                New Link Road · Near Oshiwara Metro Station
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-between gap-4 bg-[#171715]/95 px-6 py-5 text-white backdrop-blur-md md:flex-row md:items-center md:px-8 border-t border-[#C5A059]/30">
            <div>
              <p className="text-[10px] uppercase tracking-[2px] text-[#C5A059]">
                Project Location
              </p>
              <p className="mt-1 text-sm text-white/90">
                Sunbeam Heights, New Link Road, Andheri West, Mumbai
              </p>
            </div>

            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#E8D4A7]">
              Open Google Maps
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </a>

        {/* Nearby Landmarks - Borderless Editorial Typography Styling */}
        <div className="mt-20">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#A27D3B]">
                Nearby Landmarks
              </p>
              <h3 className="mt-3 font-serif text-4xl md:text-5xl">
                Connected to <span className="italic text-[#A27D3B]">what matters.</span>
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#666057]">
              From everyday essentials to education, healthcare,
              dining and entertainment — everything is close by.
            </p>
          </div>

          <div className="grid gap-10 border-t border-[#D5CEC1] pt-12 md:grid-cols-2 lg:grid-cols-4">
            {connectivity.map((category) => (
              <div key={category.title} className="flex flex-col">
                <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#A27D3B] pb-4 border-b border-[#D5CEC1]/60">
                  {category.title}
                </h4>

                <div className="mt-6 space-y-4">
                  {category.places.map((place) => (
                    <div key={place.name} className="flex items-baseline justify-between gap-2 text-sm">
                      <span className="font-serif italic text-lg text-[#2C2925] tracking-wide">
                        {place.name}
                      </span>
                      <span className="text-xs font-semibold tracking-wider text-[#A27D3B] shrink-0">
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