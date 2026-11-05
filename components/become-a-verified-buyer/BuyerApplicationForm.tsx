"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const steps = [
  { num: 1, label: "Identity" },
  { num: 2, label: "Organization" },
  { num: 3, label: "Interest" },
  { num: 4, label: "Documents" },
  { num: 5, label: "Declarations" },
  { num: 6, label: "Review" },
];

export default function BuyerApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [authority, setAuthority] = useState("");

  // Step 2 & 3 state for multi-step demo capability
  const [companyName, setCompanyName] = useState("");
  const [registeredCountry, setRegisteredCountry] = useState("United Kingdom");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="start-application" aria-labelledby="start-application-heading" className={`${hanken} w-full order-9 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-white/90`}>08</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#009b72]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
              BUYER APPLICATION
            </span>
          </div>

          {/* Heading */}
          <h2
            id="start-application-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-white sm:text-[42px] lg:text-[46px]"
          >
            Start your application.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#94a3b8] sm:text-[16px]">
            A short, staged form. Required fields are marked; KYB documents are optional at this stage.
          </p>

          {/* Multi-step Application Card */}
          <div className="mt-10 max-w-[1020px] overflow-hidden rounded-[20px] bg-white text-[#0f172a] shadow-[0_16px_48px_rgba(0,0,0,0.3)]">
            {/* Top Stepper Bar */}
            <div className="flex flex-wrap items-center gap-2 border-b border-[#f1f5f9] bg-[#fbf9f5] px-6 py-3.5">
              {steps.map((st) => {
                const isActive = currentStep === st.num;
                return (
                  <button
                    key={st.num}
                    type="button"
                    onClick={() => setCurrentStep(st.num)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-bold transition-all ${
                      isActive
                        ? "bg-[#0c1e38] text-white shadow-xs"
                        : "text-[#64748b] hover:bg-slate-200/50 hover:text-[#0f172a]"
                    }`}
                  >
                    <span className="text-[11px]">{st.num}</span>
                    <span>{st.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Form Body */}
            <form onSubmit={handleContinue} className="p-8 sm:p-10">
              {currentStep === 1 && (
                <div>
                  <h3 className="text-[16.5px] font-bold text-[#0f172a]">
                    Applicant identity
                  </h3>
                  <p className="mt-1 text-[12.5px] text-[#556987]">
                    Tell us who is applying. The representative must have authority to apply for the organization.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullname" className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                        Full name *
                      </label>
                      <input
                        id="fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Jane Doe"
                        className="mt-1.5 w-full rounded-[10px] border border-[#cbd5e1] px-4 py-2.5 text-[13.5px] text-[#0f172a] placeholder:text-slate-400 focus:border-[#009b72] focus:outline-none focus:ring-1 focus:ring-[#009b72]"
                      />
                    </div>

                    {/* Role / Title */}
                    <div>
                      <label htmlFor="roletitle" className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                        Role / title *
                      </label>
                      <input
                        id="roletitle"
                        type="text"
                        required
                        value={roleTitle}
                        onChange={(e) => setRoleTitle(e.target.value)}
                        placeholder="Procurement Lead"
                        className="mt-1.5 w-full rounded-[10px] border border-[#cbd5e1] px-4 py-2.5 text-[13.5px] text-[#0f172a] placeholder:text-slate-400 focus:border-[#009b72] focus:outline-none focus:ring-1 focus:ring-[#009b72]"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label htmlFor="workemail" className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                        Work email *
                      </label>
                      <input
                        id="workemail"
                        type="email"
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="mt-1.5 w-full rounded-[10px] border border-[#cbd5e1] px-4 py-2.5 text-[13.5px] text-[#0f172a] placeholder:text-slate-400 focus:border-[#009b72] focus:outline-none focus:ring-1 focus:ring-[#009b72]"
                      />
                    </div>

                    {/* Authority to Apply */}
                    <div>
                      <label htmlFor="authority" className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                        Authority to apply *
                      </label>
                      <div className="relative mt-1.5">
                        <select
                          id="authority"
                          required
                          value={authority}
                          onChange={(e) => setAuthority(e.target.value)}
                          className="w-full appearance-none rounded-[10px] border border-[#cbd5e1] bg-white px-4 py-2.5 text-[13.5px] text-[#0f172a] focus:border-[#009b72] focus:outline-none focus:ring-1 focus:ring-[#009b72]"
                        >
                          <option value="">Select...</option>
                          <option value="director">Director / Executive Officer</option>
                          <option value="procurement">Procurement Lead / Head of Buying</option>
                          <option value="owner">Owner / Managing Partner</option>
                          <option value="authorized-agent">Authorized Commercial Agent</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#64748b]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep > 1 && (
                <div className="py-4">
                  <h3 className="text-[16.5px] font-bold text-[#0f172a]">
                    Stage {currentStep}: {steps[currentStep - 1]?.label}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-[#556987]">
                    Demonstration intake fields configured for {steps[currentStep - 1]?.label}. Proceed through to preview receipt.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                        Registered Entity Name
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Acme Global Retail Ltd."
                        className="mt-1.5 w-full rounded-[10px] border border-[#cbd5e1] px-4 py-2.5 text-[13.5px]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                        Jurisdiction
                      </label>
                      <input
                        type="text"
                        value={registeredCountry}
                        onChange={(e) => setRegisteredCountry(e.target.value)}
                        className="mt-1.5 w-full rounded-[10px] border border-[#cbd5e1] px-4 py-2.5 text-[13.5px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="mt-8 flex items-center justify-between border-t border-[#f1f5f9] pt-6">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="text-[13px] font-bold text-[#64748b] hover:text-[#0f172a]"
                  >
                    ← Back
                  </button>
                ) : <span />}

                <button
                  type="submit"
                  className="inline-flex h-[42px] items-center justify-center gap-2 rounded-[10px] bg-[#926016] px-6 text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#a66e1b]"
                >
                  <span>{currentStep === 6 ? "Submit Application" : "Continue"}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Demonstration Notice Card */}
          <div className="mt-4 flex max-w-[1020px] items-center gap-2.5 rounded-[12px] border border-[#f5e6d0] bg-[#fbf5eb] px-5 py-3.5 text-[#0f172a]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#926016"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-[#926016]"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-[12px] font-medium text-[#78350f]">
              This is a demonstration form. It validates your entries and shows a receipt, but does not send, store or transmit anything.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#fbf9f5] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>08</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            BUYER APPLICATION
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Start your application.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          A short, staged form. Required fields are marked; KYB documents are optional at this stage.
        </p>

        {/* Form Container Card */}
        <div className="mt-7 overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
          {/* Stepper Header Pills */}
          <div className="border-b border-[#f1f5f9] bg-[#faf6ef] px-4 py-3">
            <div className="flex items-center gap-2 overflow-x-auto text-[11px] font-bold whitespace-nowrap">
              <span className="flex items-center gap-1.5 rounded-full bg-[#0c1e38] px-3 py-1 text-white">
                <span className="flex size-3.5 items-center justify-center rounded-full bg-white/20 text-[9px]">1</span>
                <span>Identity</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[#64748b]">
                <span className="flex size-3.5 items-center justify-center rounded-full bg-slate-200 text-[9px] text-[#64748b]">2</span>
                <span>Organization</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[#64748b]">
                <span className="flex size-3.5 items-center justify-center rounded-full bg-slate-200 text-[9px] text-[#64748b]">3</span>
                <span>Interest</span>
              </span>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleContinue} className="p-5">
            <h3 className="text-[15px] font-bold text-[#0f172a]">
              Applicant identity
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
              Tell us who is applying. The representative must have authority to apply for the organization.
            </p>

            <div className="mt-5 flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                  Full name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  className="mt-1.5 w-full rounded-[10px] border border-[#cbd5e1] px-3.5 py-2.5 text-[13px] text-[#0f172a] focus:border-[#009b72] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                  Role / title *
                </label>
                <input
                  type="text"
                  required
                  value={roleTitle}
                  onChange={(e) => setRoleTitle(e.target.value)}
                  placeholder="Procurement Lead"
                  className="mt-1.5 w-full rounded-[10px] border border-[#cbd5e1] px-3.5 py-2.5 text-[13px] text-[#0f172a] focus:border-[#009b72] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                  Work email *
                </label>
                <input
                  type="email"
                  required
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-[10px] border border-[#cbd5e1] px-3.5 py-2.5 text-[13px] text-[#0f172a] focus:border-[#009b72] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                  Authority to apply *
                </label>
                <select
                  required
                  value={authority}
                  onChange={(e) => setAuthority(e.target.value)}
                  className="mt-1.5 w-full rounded-[10px] border border-[#cbd5e1] bg-white px-3.5 py-2.5 text-[13px] text-[#0f172a] focus:border-[#009b72] focus:outline-none"
                >
                  <option value="">Select...</option>
                  <option value="officer">Director / Officer</option>
                  <option value="procurement">Authorized Procurement Lead</option>
                  <option value="owner">Business Owner / Partner</option>
                  <option value="agent">Authorized Purchasing Agent</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex h-[46px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#926016] text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#a66e1b]"
            >
              <span>Continue</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>

        {/* Demo Notice Callout */}
        <div className="mt-4 flex items-start gap-2.5 rounded-[12px] border border-[#f5e6d0] bg-[#fbf5eb] p-3.5 text-[11.5px] leading-relaxed text-[#78350f]">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#926016"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0 text-[#926016]"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>
            This is a demonstration form: it validates your entries and shows a receipt, but does not send, store or transmit anything.
          </span>
        </div>
      </div>
    </section>
  );
}
