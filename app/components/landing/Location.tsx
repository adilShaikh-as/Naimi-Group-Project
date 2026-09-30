'use client';

export default function Location() {
  const connectivity = [
    {
      title: 'Entertainment',
      places: [
        'Fun Republic Mall — 3 min',
        'Infiniti Mall — 3 min',
        'Citi Mall — 3 min',
        'Country Club — 4 min',
        'The Club — 8 min',
      ],
    },
    {
      title: 'Restaurant',
      places: [
        'Glocal Junction — 3 min',
        'Tap Resto Bar — 3 min',
        'Irish House — 3 min',
        'Bombay Cocktail Bar — 4 min',
        'Lord of the Drinks — 4 min',
      ],
    },
    {
      title: 'Education',
      places: [
        'JBCN Intl. School — 2 min',
        'Billabong High Intl. — 7 min',
        'JNMS — 12 min',
        'NMS — 12 min',
        'Mithibai College — 14 min',
      ],
    },
    {
      title: 'Healthcare',
      places: [
        'Aashirwad Hospital — 4 min',
        'Kokilaben Hospital — 5 min',
        'Belle Vue Hospital — 5 min',
        'Criticare Hospital — 12 min',
        'Nanavati Super Speciality — 14 min',
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

            <span className="text-[9px] font-semibold uppercase tracking-[3px] text-[#A27D3B]">
              Location & Connectivity
            </span>
          </div>

          <h2 className="font-serif text-[46px] leading-[1] tracking-[-1px] md:text-[65px]">
            Everything within
            <br />
            <span className="text-[#A27D3B]">
              easy reach.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#706A60]">
            Strategically located in Andheri West, Naimi Heights
            connects you effortlessly to Mumbai&apos;s key
            destinations, entertainment hubs, schools, hospitals
            and everyday conveniences.
          </p>
        </div>

        <a
          href="https://maps.app.goo.gl/khaqTxVNr6DVmeuD8"
          target="_blank"
          rel="noreferrer"
          className="group relative block h-[380px] w-full overflow-hidden border border-[#D6D0C5] bg-[#DDD9D0] md:h-[500px] lg:h-[560px]"
        >

          {/* Empty map/image area */}
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#A27D3B]/40 bg-[#F3F0E9] text-[#A27D3B] shadow-sm transition-transform duration-500 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7"
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

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#7B7468]">
                Naimi Heights
              </p>

              <h3 className="mt-2 font-serif text-2xl text-[#171715] md:text-3xl">
                Andheri West, Mumbai
              </h3>

              <p className="mt-3 text-xs text-[#817A70]">
                New Link Road · Near Oshiwara Metro Station
              </p>

            </div>

          </div>

          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between gap-4 bg-[#171715]/95 px-6 py-5 text-white backdrop-blur-md md:flex-row md:items-center md:px-8">

            <div>
              <p className="text-[9px] uppercase tracking-[2px] text-[#C5A059]">
                Project Location
              </p>

              <p className="mt-1 text-xs text-white/65">
                Naimi Heights, New Link Road, Andheri West, Mumbai
              </p>
            </div>

            <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#E8D4A7]">
              Open Google Maps
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>

          </div>

        </a>

        <div className="mt-20">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#A27D3B]">
                Nearby
              </p>

              <h3 className="mt-3 font-serif text-4xl md:text-5xl">
                Connected to what matters.
              </h3>
            </div>

            <p className="max-w-sm text-xs leading-6 text-[#817A70]">
              From everyday essentials to education, healthcare,
              dining and entertainment — everything is close by.
            </p>

          </div>

          <div className="grid border-t border-[#D5CEC1] md:grid-cols-2 lg:grid-cols-4">

            {connectivity.map((category, index) => (

              <div
                key={category.title}
                className={`px-5 py-7 md:px-6 md:py-8 ${
                  index !== 0
                    ? 'border-t border-[#D5CEC1] md:border-l md:border-t-0'
                    : ''
                }`}
              >

                <h4 className="text-[10px] font-semibold uppercase tracking-[2px] text-[#171715]">
                  {category.title}
                </h4>

                <div className="mt-5 space-y-2.5">

                  {category.places.map((place) => (
                    <p
                      key={place}
                      className="text-[10px] font-medium leading-3 text-[#716B62]"
                    >
                      {place}
                    </p>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[#D5CEC1] pt-7 md:flex-row md:items-center">

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[2px] text-[#A27D3B]">
              And many more
            </p>

            <p className="mt-2 text-xs text-[#817A70]">
              A well-connected neighbourhood designed around
              convenience and everyday city living.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/khaqTxVNr6DVmeuD8"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 border border-[#A27D3B] px-5 py-3 text-[9px] font-semibold uppercase tracking-[1.5px] text-[#A27D3B] transition-all duration-300 hover:bg-[#A27D3B] hover:text-white"
          >
            Explore Location

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}