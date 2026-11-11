"use client";

import { useState, type FormEvent } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function GeneralInquiry() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [country, setCountry] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !topic) {
      setError("Please provide your name, business email, and inquiry topic.");
      return;
    }
    if (message.trim().length < 20) {
      setError("Please enter at least 20 characters explaining how we can help.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      id="general-inquiry"
      aria-labelledby="general-inquiry-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              GENERAL INQUIRY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="general-inquiry-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Send a general inquiry
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[600px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            For corporate, press and accessibility questions. Seller, buyer and partner requests have their own paths above.
          </p>

          {/* Form + Sidebar Split */}
          <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Left Form Card */}
            <form
              onSubmit={handleSubmit}
              className="rounded-[20px] border border-slate-200/90 bg-white p-7 shadow-2xs sm:p-8 lg:col-span-7"
            >
              {/* Privacy Reminder Banner */}
              <div className="flex items-start gap-2.5 rounded-[10px] border border-[#f5dfb8] bg-[#fdf7e7] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>
                  Please do not include passwords, identity documents, payment details or confidential inventory records.
                </span>
              </div>

              <h3 className="mt-6 text-[18px] font-extrabold text-[#0c1e38]">Your details</h3>

              {/* Name & Email */}
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="desktop-full-name" className="block text-[12px] font-bold text-[#0c1e38]">
                    Full name
                  </label>
                  <input
                    id="desktop-full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1.5 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="desktop-email" className="block text-[12px] font-bold text-[#0c1e38]">
                    Business email
                  </label>
                  <input
                    id="desktop-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1.5 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                  />
                </div>
              </div>

              {/* Organization & Country */}
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="desktop-org" className="block text-[12px] font-bold text-[#0c1e38]">
                    Organization <span className="font-normal text-[#64748b]">(optional)</span>
                  </label>
                  <input
                    id="desktop-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="mt-1.5 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="desktop-country" className="block text-[12px] font-bold text-[#0c1e38]">
                    Country or market <span className="font-normal text-[#64748b]">(optional)</span>
                  </label>
                  <select
                    id="desktop-country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="mt-1.5 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="uk">United Kingdom</option>
                    <option value="eu">European Union</option>
                    <option value="us">United States</option>
                    <option value="other">Other</option>
                  </select>
                  <p className="mt-1 text-[10.5px] text-[#64748b]">
                    Informational only. It does not grant eligibility.
                  </p>
                </div>
              </div>

              {/* Inquiry Topic */}
              <div className="mt-4">
                <label htmlFor="desktop-topic" className="block text-[12px] font-bold text-[#0c1e38]">
                  Inquiry topic
                </label>
                <select
                  id="desktop-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="mt-1.5 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                >
                  <option value="">Select a topic</option>
                  <option value="corporate">Corporate &amp; company information</option>
                  <option value="press">Press &amp; media inquiry</option>
                  <option value="accessibility">Accessibility</option>
                  <option value="general">General inquiry</option>
                </select>
                <p className="mt-1 text-[10.5px] text-[#64748b]">
                  Seller, buyer and partner requests use the route cards above.
                </p>
              </div>

              {/* Message */}
              <div className="mt-4">
                <label htmlFor="desktop-message" className="block text-[12px] font-bold text-[#0c1e38]">
                  How can we help?
                </label>
                <textarea
                  id="desktop-message"
                  rows={5}
                  maxLength={2000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 w-full rounded-[8px] border border-slate-200 bg-white p-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                />
                <p className="mt-1 text-[10.5px] text-[#64748b]">
                  {message.length} / 2000 characters. At least 20 are needed.
                </p>
              </div>

              {/* Checkbox */}
              <label className="mt-4 flex items-center gap-2.5 text-[11.5px] text-[#556987]">
                <input
                  type="checkbox"
                  checked={marketingOptIn}
                  onChange={(e) => setMarketingOptIn(e.target.checked)}
                  className="size-4 rounded border-slate-300 text-[#926016] focus:ring-[#926016]"
                />
                <span>
                  Marketing updates (optional). Leave unchecked if you only want a reply to this inquiry.
                </span>
              </label>

              <p className="mt-3 text-[10.5px] text-[#64748b]">
                Read the <span className="underline">privacy information</span> before you send. We do not collect uploads or attachments here.
              </p>

              {error && (
                <p className="mt-3 text-[12px] font-semibold text-red-700">{error}</p>
              )}

              {submitted && (
                <div className="mt-4 rounded-[10px] border border-[#cceee4] bg-[#eefaf6] p-3.5 text-[12px] text-[#065f46]">
                  Inquiry noted for demonstration purposes. On live channels, a reference number is issued once confirmed.
                </div>
              )}

              <button
                type="submit"
                className="mt-5 inline-flex h-[42px] items-center justify-center rounded-full bg-[#926016] px-6 text-[13px] font-bold text-white shadow-xs transition-colors hover:bg-[#784f12]"
              >
                Send inquiry
              </button>
            </form>

            {/* Right Sidebar Cards */}
            <div className="flex flex-col gap-5 lg:col-span-5">
              {/* Safety and confidentiality */}
              <div className="rounded-[18px] border border-slate-200/90 bg-white p-6 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <h3 className="text-[15px] font-extrabold text-[#0c1e38]">
                    Safety and confidentiality
                  </h3>
                </div>

                <div className="mt-4 flex flex-col gap-2.5 text-[12.5px] text-[#556987]">
                  {[
                    "No credentials or passwords",
                    "No personal identity documents",
                    "No sensitive lot or inventory data",
                    "No file uploads",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to expect */}
              <div className="rounded-[18px] border border-slate-200/90 bg-white p-6 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <h3 className="text-[15px] font-extrabold text-[#0c1e38]">
                    What to expect
                  </h3>
                </div>

                <div className="mt-4 flex flex-col gap-2.5 text-[12.5px] text-[#556987]">
                  {[
                    "You get a reference number only after receipt is confirmed.",
                    "We do not promise a response time here.",
                    "A message does not make you a verified buyer or approved partner.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            GENERAL INQUIRY
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Send a general inquiry
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            For corporate, press and accessibility questions. Seller, buyer and partner requests have their own paths above.
          </p>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-2xs"
          >
            <div className="flex items-start gap-2.5 rounded-[10px] border border-[#f5dfb8] bg-[#fdf7e7] p-3.5 text-[11px] leading-relaxed text-[#7c5c2b]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>
                Please do not include passwords, identity documents, payment details or confidential inventory records.
              </span>
            </div>

            <h3 className="mt-5 text-[16.5px] font-extrabold text-[#0c1e38]">Your details</h3>

            <div className="mt-3.5 flex flex-col gap-3.5">
              <div>
                <label htmlFor="mobile-full-name" className="block text-[11.5px] font-bold text-[#0c1e38]">
                  Full name
                </label>
                <input
                  id="mobile-full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="mobile-email" className="block text-[11.5px] font-bold text-[#0c1e38]">
                  Business email
                </label>
                <input
                  id="mobile-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="mobile-org" className="block text-[11.5px] font-bold text-[#0c1e38]">
                  Organization <span className="font-normal text-[#64748b]">(optional)</span>
                </label>
                <input
                  id="mobile-org"
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="mt-1 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="mobile-country" className="block text-[11.5px] font-bold text-[#0c1e38]">
                  Country or market <span className="font-normal text-[#64748b]">(optional)</span>
                </label>
                <select
                  id="mobile-country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="uk">United Kingdom</option>
                  <option value="eu">European Union</option>
                  <option value="us">United States</option>
                  <option value="other">Other</option>
                </select>
                <p className="mt-1 text-[10px] text-[#64748b]">
                  Informational only. It does not grant eligibility.
                </p>
              </div>

              <div>
                <label htmlFor="mobile-topic" className="block text-[11.5px] font-bold text-[#0c1e38]">
                  Inquiry topic
                </label>
                <select
                  id="mobile-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="mt-1 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                >
                  <option value="">Select a topic</option>
                  <option value="corporate">Corporate &amp; company information</option>
                  <option value="press">Press &amp; media inquiry</option>
                  <option value="accessibility">Accessibility</option>
                  <option value="general">General inquiry</option>
                </select>
                <p className="mt-1 text-[10px] text-[#64748b]">
                  Seller, buyer and partner requests use the route cards above.
                </p>
              </div>

              <div>
                <label htmlFor="mobile-message" className="block text-[11.5px] font-bold text-[#0c1e38]">
                  How can we help?
                </label>
                <textarea
                  id="mobile-message"
                  rows={4}
                  maxLength={2000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-[8px] border border-slate-200 bg-white p-3 text-[13px] text-[#0c1e38] focus:border-[#926016] focus:outline-none"
                />
                <p className="mt-1 text-[10px] text-[#64748b]">
                  {message.length} / 2000 characters. At least 20 are needed.
                </p>
              </div>

              <label className="flex items-start gap-2.5 text-[11px] leading-relaxed text-[#556987]">
                <input
                  type="checkbox"
                  checked={marketingOptIn}
                  onChange={(e) => setMarketingOptIn(e.target.checked)}
                  className="mt-0.5 size-4 rounded border-slate-300 text-[#926016] focus:ring-[#926016]"
                />
                <span>
                  Marketing updates (optional). Leave unchecked if you only want a reply to this inquiry.
                </span>
              </label>

              <p className="text-[10px] leading-relaxed text-[#64748b]">
                Read the <span className="underline">privacy information</span> before you send. We do not collect uploads or attachments here.
              </p>

              {error && (
                <p className="text-[11.5px] font-semibold text-red-700">{error}</p>
              )}

              {submitted && (
                <div className="rounded-[10px] border border-[#cceee4] bg-[#eefaf6] p-3 text-[11.5px] text-[#065f46]">
                  Inquiry noted for demonstration purposes. On live channels, a reference number is issued once confirmed.
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#926016] px-6 text-[12.5px] font-bold text-white shadow-xs"
                >
                  Send inquiry
                </button>
              </div>
            </div>
          </form>

          {/* Stacked Right Cards */}
          <div className="mt-5 flex flex-col gap-4">
            <div className="rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs">
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <h3 className="text-[14.5px] font-extrabold text-[#0c1e38]">
                  Safety and confidentiality
                </h3>
              </div>

              <div className="mt-3.5 flex flex-col gap-2 text-[12px] text-[#556987]">
                {[
                  "No credentials or passwords",
                  "No personal identity documents",
                  "No sensitive lot or inventory data",
                  "No file uploads",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs">
              <div className="flex items-center gap-2">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h3 className="text-[14.5px] font-extrabold text-[#0c1e38]">
                  What to expect
                </h3>
              </div>

              <div className="mt-3.5 flex flex-col gap-2 text-[12px] text-[#556987]">
                {[
                  "You get a reference number only after receipt is confirmed.",
                  "We do not promise a response time here.",
                  "A message does not make you a verified buyer or approved partner.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
