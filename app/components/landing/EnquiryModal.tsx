'use client';

interface EnquiryModalProps {
  isOpen: boolean;
  topic: string;
  onClose: () => void;
}

export default function EnquiryModal({
  isOpen,
  topic,
  onClose,
}: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#090908]/80 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-[92vh] w-full max-w-[900px] overflow-hidden bg-[#F3F0E9] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/70 text-xl font-light text-[#171715] backdrop-blur-sm transition-all duration-300 hover:border-[#A27D3B] hover:bg-[#A27D3B] hover:text-white"
        >
          ×
        </button>

        {/* Left — Editorial panel */}
        <div className="relative hidden w-[40%] flex-col justify-between overflow-hidden bg-[#171715] p-10 text-white md:flex lg:p-12">

          {/* Decorative circle */}
          <div className="absolute -bottom-32 -left-32 h-[320px] w-[320px] rounded-full border border-[#C5A059]/20" />
          <div className="absolute -bottom-24 -left-24 h-[240px] w-[240px] rounded-full border border-[#C5A059]/10" />

          <div className="relative z-10">
            <p className="text-[9px] font-semibold uppercase tracking-[3px] text-[#C5A059]">
              Naimi Group
            </p>

            <div className="mt-3 h-px w-10 bg-[#C5A059]" />
          </div>

          <div className="relative z-10">
            <p className="mb-4 font-serif text-4xl leading-[1.05] text-[#E8D4A7] lg:text-5xl">
              Your next
              <br />
              address
              <br />
              awaits.
            </p>

            <p className="max-w-[260px] text-xs leading-6 text-white/40">
              Share your details and our team will get in touch with you
              regarding your enquiry.
            </p>
          </div>

          <div className="relative z-10">
            <p className="text-[9px] uppercase tracking-[2px] text-white/30">
              Andheri West · Mumbai
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div className="max-h-[92vh] flex-1 overflow-y-auto">
          <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

            {/* Header */}
            <div className="mb-10 pr-10">
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[3px] text-[#A27D3B]">
                Private Enquiry
              </p>

              <h3 className="font-serif text-[38px] leading-[0.95] tracking-[-0.5px] text-[#171715] sm:text-[44px]">
                Let&apos;s talk
                <br />
                about your
                <br />
                <span className="text-[#A27D3B]">next home.</span>
              </h3>

            
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Enquiry Submitted Successfully!');
                onClose();
              }}
              className="space-y-7"
            >
              {/* Name */}
              <div className="group">
                <label
                  htmlFor="full-name"
                  className="mb-2 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[2px] text-[#777168]"
                >
                  <span className="text-[#A27D3B]">01</span>
                  Full Name
                </label>

                <input
                  id="full-name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full border-b border-[#D2CBC0] bg-transparent px-0 py-3 text-sm text-[#171715] outline-none transition-colors placeholder:text-[#AAA399] focus:border-[#A27D3B]"
                />
              </div>

              {/* Phone */}
              <div className="group">
                <label
                  htmlFor="phone"
                  className="mb-2 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[2px] text-[#777168]"
                >
                  <span className="text-[#A27D3B]">02</span>
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  className="w-full border-b border-[#D2CBC0] bg-transparent px-0 py-3 text-sm text-[#171715] outline-none transition-colors placeholder:text-[#AAA399] focus:border-[#A27D3B]"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="mb-2 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[2px] text-[#777168]"
                >
                  <span className="text-[#A27D3B]">03</span>
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="w-full border-b border-[#D2CBC0] bg-transparent px-0 py-3 text-sm text-[#171715] outline-none transition-colors placeholder:text-[#AAA399] focus:border-[#A27D3B]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group mt-3 flex w-full cursor-pointer items-center justify-between bg-[#171715] px-6 py-5 text-[10px] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#A27D3B]"
              >
                <span>Request a Conversation</span>

                <span className="text-xl font-light transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            {/* Privacy */}
            <div className="mt-7 flex items-start gap-3">
              <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />

              <p className="text-[9px] leading-4 text-[#999187]">
                Your information is kept confidential and will only be used
                by our team to respond to your enquiry.
              </p>
            </div>

            {/* Bottom detail */}
            <div className="mt-10 flex items-center justify-between border-t border-[#DDD6CA] pt-5 text-[8px] uppercase tracking-[1.5px] text-[#AAA399]">
              <span>Naimi Heights</span>
              <span>Andheri West · Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}