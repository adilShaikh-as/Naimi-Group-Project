'use client';

import { useState } from 'react';
import Image from 'next/image';

interface EnquiryModalProps {
  isOpen: boolean;
  topic: string;
  onClose: () => void;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function EnquiryModal({
  isOpen,
  topic,
  onClose,
}: EnquiryModalProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  // the brochure link stays gated — it only renders once this topic has
  // actually reached a successful submission below
  const isBrochureRequest = topic === 'Download Brochure';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // honeypot — real users never fill this in, bots often do
    if (formData.get('company')) {
      setStatus('success');
      return;
    }

    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      topic,
      privateEnquiry: formData.get('privateEnquiry') === 'on',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  }

  function handleClose() {
    setStatus('idle');
    setErrorMessage('');
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#090908]/80 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative flex max-h-[92vh] w-full max-w-[900px] overflow-hidden bg-[#F3F0E9] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close enquiry form"
          className="absolute right-5 top-5 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white/70 text-xl font-light text-[#171715] backdrop-blur-sm transition-all duration-300 hover:border-[#A27D3B] hover:bg-[#A27D3B] hover:text-white"
        >
          ×
        </button>

        {/* Left — Editorial panel with Larger Logo */}
        <div className="relative hidden w-[40%] flex-col justify-between overflow-hidden bg-[#171715] p-10 text-white md:flex lg:p-12">
          <div className="absolute -bottom-32 -left-32 h-[320px] w-[320px] rounded-full border border-[#C5A059]/20" />
          <div className="absolute -bottom-24 -left-24 h-[240px] w-[240px] rounded-full border border-[#C5A059]/10" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-md">
              <Image
                src="/new_logo.png"
                alt="Naimi Group Logo"
                fill
                className="object-contain"
              />
            </div>
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
            {status === 'success' ? (
              /* ------------------ Success state ------------------ */
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#A27D3B]/12 text-2xl text-[#A27D3B]">
                  ✓
                </div>
                <h3 className="mb-3 font-serif text-3xl leading-[1.05] text-[#171715]">
                  Thank you.
                </h3>
                <p className="mb-8 max-w-[320px] text-sm leading-6 text-[#777168]">
                  {isBrochureRequest ? (
                    <>Your brochure is ready to download below.</>
                  ) : (
                    <>
                      Your enquiry about{' '}
                      <span className="text-[#A27D3B]">{topic}</span> has
                      been received. Our team will reach out shortly.
                    </>
                  )}
                </p>

                {isBrochureRequest && (
                  <a
                    href="/brochure.pdf"
                    download="Naimi_Heights_Brochure.pdf"
                    onClick={handleClose}
                    className="mb-4 bg-[#A27D3B] px-8 py-4 text-[10px] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#171715]"
                  >
                    Download Brochure
                  </a>
                )}

                <button
                  onClick={handleClose}
                  className={
                    isBrochureRequest
                      ? 'text-[10px] font-semibold uppercase tracking-[2px] text-[#777168] underline underline-offset-4 transition-colors hover:text-[#171715]'
                      : 'bg-[#171715] px-8 py-4 text-[10px] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#A27D3B]'
                  }
                >
                  Close
                </button>
              </div>
            ) : (
              <>
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
                <form onSubmit={handleSubmit} className="space-y-7">
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
                      name="name"
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
                      name="phone"
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
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      className="w-full border-b border-[#D2CBC0] bg-transparent px-0 py-3 text-sm text-[#171715] outline-none transition-colors placeholder:text-[#AAA399] focus:border-[#A27D3B]"
                    />
                  </div>

                  {/* Private Enquiry checkbox */}
                  <label
                    htmlFor="privateEnquiry"
                    className="flex cursor-pointer items-start gap-3 border-t border-[#DDD6CA] pt-6"
                  >
                    <input
                      id="privateEnquiry"
                      name="privateEnquiry"
                      type="checkbox"
                      defaultChecked
                      className="mt-0.5 h-4 w-4 flex-none cursor-pointer accent-[#A27D3B]"
                    />
                    <span className="text-xs leading-5 text-[#555049]">
                      <span className="font-semibold text-[#171715]">
                        Keep this a private enquiry
                      </span>{' '}
                      — my details will only be shared with the Naimi Group
                      sales team and not passed on to other agents, brokers,
                      or portals.
                    </span>
                  </label>

                  {/* honeypot field — hidden from real users */}
                  <div className="absolute left-[-9999px] h-0 w-0 opacity-0">
                    <label htmlFor="company">Leave this field blank</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-600">{errorMessage}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group mt-3 flex w-full cursor-pointer items-center justify-between bg-[#171715] px-6 py-5 text-[10px] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#A27D3B] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {status === 'submitting'
                        ? 'Sending…'
                        : isBrochureRequest
                        ? 'Get Brochure'
                        : 'Request a Conversation'}
                    </span>
                    <span className="text-xl font-light transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </form>

                {/* Privacy note */}
                <div className="mt-7 flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />
                  <p className="text-[9px] leading-4 text-[#999187]">
                    Your information is kept confidential and will only be
                    used by our team to respond to your enquiry.
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-10 flex items-center justify-between border-t border-[#DDD6CA] pt-5 text-[8px] uppercase tracking-[1.5px] text-[#AAA399]">
                  <span>Naimi Heights</span>
                  <span>Andheri West · Mumbai</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}