export default function Highlights() {
  const highlights = [
    ['2 & 3 BHK', 'Premium Residences'],
    ['649–1001', 'SQ.FT. Carpet Area'],
    ['29+', 'Floors of Elevation'],
    ['Andheri West', 'Mumbai'],
  ];

  return (
    <section className="border-b border-[#D8D1C4] bg-[#EAE5DA]">
      <div className="mx-auto grid max-w-[1380px] grid-cols-2 md:grid-cols-4">
        {highlights.map(([value, label], index) => (
          <div
            key={value}
            className={`px-6 py-8 md:px-10 md:py-10 ${
              index !== 0
                ? 'border-l border-[#D4CCBD]'
                : ''
            }`}
          >
            <p className="font-serif text-2xl text-[#171715] md:text-3xl">
              {value}
            </p>

            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[2px] text-[#7B7468]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}