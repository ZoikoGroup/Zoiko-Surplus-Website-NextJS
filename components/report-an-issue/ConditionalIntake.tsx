"use client";

import Image from "next/image";
import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function ConditionalIntake() {
  const [issueType, setIssueType] = useState("Select a type");
  const [relationship, setRelationship] = useState("Observer");
  const [country, setCountry] = useState("Not specified");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [wantsReply, setWantsReply] = useState(false);
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  return (
    <section id="report-form" aria-label="Conditional Intake - Report form preview" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">05</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              CONDITIONAL INTAKE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Report form, shown as a preview.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Reporting is currently unavailable on this page. Intake would appear only when it is verified and operational.
          </p>

          {/* Two-Column Grid: Form Preview on Left, Preview Notes + Photo on Right */}
          <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Form Card (7.5 cols) */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7 lg:p-9 shadow-xs lg:col-span-7 xl:col-span-8">
              {/* Emergency Warning Banner */}
              <div className="flex items-center gap-2.5 rounded-xl border border-rose-200 bg-[#fff1f2] px-4 py-3 text-[#be123c]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span className="text-[12.5px] font-medium leading-relaxed">
                  Immediate danger? Contact local emergency services. Do not use this form.
                </span>
              </div>

              {/* Subheading */}
              <h3 className={`${sora} mt-7 text-[19px] font-bold text-[#0c1e38]`}>
                About the concern
              </h3>

              {/* Field Row 1: Issue Type & Relationship */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="issue-type" className="block text-[12px] font-semibold text-[#0c1e38]">
                    Issue type
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      id="issue-type"
                      value={issueType}
                      onChange={(e) => setIssueType(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#475569] shadow-2xs focus:border-[#926016] focus:outline-none"
                    >
                      <option value="Select a type">Select a type</option>
                      <option value="Product safety or recall">Product safety or recall</option>
                      <option value="Brand or authenticity">Brand or authenticity</option>
                      <option value="Suspicious activity">Suspicious activity</option>
                      <option value="Access or disclosure misuse">Access or disclosure misuse</option>
                      <option value="Other trust concern">Other trust concern</option>
                    </select>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="relationship" className="block text-[12px] font-semibold text-[#0c1e38]">
                    Your relationship
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      id="relationship"
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#475569] shadow-2xs focus:border-[#926016] focus:outline-none"
                    >
                      <option value="Observer">Observer</option>
                      <option value="Buyer / Customer">Buyer / Customer</option>
                      <option value="Seller / Supplier">Seller / Supplier</option>
                      <option value="Brand owner / IP representative">Brand owner / IP representative</option>
                      <option value="Other party">Other party</option>
                    </select>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Field: Country or market */}
              <div className="mt-4">
                <label htmlFor="country" className="block text-[12px] font-semibold text-[#0c1e38]">
                  Country or market <span className="text-slate-400 font-normal">(if relevant)</span>
                </label>
                <div className="relative mt-1.5">
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#475569] shadow-2xs focus:border-[#926016] focus:outline-none"
                  >
                    <option value="Not specified">Not specified</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="European Union">European Union</option>
                    <option value="United States">United States</option>
                    <option value="Other / Global">Other / Global</option>
                  </select>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <p className="mt-1 text-[11px] text-[#94a3b8]">
                  Informational. Leaves internal routing open.
                </p>
              </div>

              {/* Field: Brief summary */}
              <div className="mt-4">
                <label htmlFor="summary" className="block text-[12px] font-semibold text-[#0c1e38]">
                  Brief summary
                </label>
                <input
                  id="summary"
                  type="text"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder=""
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-[#0c1e38] shadow-2xs focus:border-[#926016] focus:outline-none"
                />
              </div>

              {/* Field: Description */}
              <div className="mt-4">
                <label htmlFor="description" className="block text-[12px] font-semibold text-[#0c1e38]">
                  Describe what happened and why you are concerned
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder=""
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3.5 text-[13px] text-[#0c1e38] shadow-2xs focus:border-[#926016] focus:outline-none"
                />
              </div>

              {/* Subheading: Reply */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <h4 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                  Reply
                </h4>

                {/* Checkbox: I would like a reply */}
                <label className="mt-3 flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wantsReply}
                    onChange={(e) => setWantsReply(e.target.checked)}
                    className="mt-0.5 size-4 rounded border-slate-300 text-[#926016] focus:ring-[#926016]"
                  />
                  <div>
                    <span className="text-[12.5px] font-medium text-[#0c1e38]">
                      I would like a reply
                    </span>
                    <p className="text-[11px] text-[#94a3b8]">
                      A reply option is offered only if approved. No response time is promised.
                    </p>
                  </div>
                </label>

                {/* Email and Organization Fields */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-[12px] font-semibold text-[#0c1e38]">
                      Email <span className="text-slate-400 font-normal">(if reply requested)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=""
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-[#0c1e38] shadow-2xs focus:border-[#926016] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="org" className="block text-[12px] font-semibold text-[#0c1e38]">
                      Organization <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <input
                      id="org"
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder=""
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-[#0c1e38] shadow-2xs focus:border-[#926016] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Privacy Checkbox */}
                <label className="mt-5 flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-0.5 size-4 rounded border-slate-300 text-[#926016] focus:ring-[#926016]"
                  />
                  <span className="text-[12px] leading-relaxed text-[#556987]">
                    I have read the privacy notice and am not including sensitive files or credentials.
                  </span>
                </label>

                {/* Submit button preview */}
                <div className="mt-6">
                  <button
                    type="button"
                    disabled
                    className="inline-flex h-[44px] items-center justify-center rounded-full bg-[#926016] px-7 text-[13.5px] font-semibold text-white shadow-xs opacity-90 cursor-not-allowed"
                  >
                    Review report
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Preview Notes + Photo (4.5 cols) */}
            <div className="flex flex-col gap-6 lg:col-span-5 xl:col-span-4">
              {/* Preview Only Checklist Card */}
              <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 14 14" />
                  </svg>
                  <h3 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                    Preview only
                  </h3>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-start gap-2.5">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="text-[12.5px] leading-relaxed text-[#556987]">
                      No intake is connected. Nothing is sent and no reference is issued.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="text-[12.5px] leading-relaxed text-[#556987]">
                      Fields and options need owner approval.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="text-[12.5px] leading-relaxed text-[#556987]">
                      Not for general support or emergencies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo Showcase */}
              <div className="relative h-[250px] lg:h-[280px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 shadow-sm">
                <Image
                  src="/images/Report-an-Issue/r9.jpg"
                  alt="Documentation of intake notes and packaging verification"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated to mobile screens)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-10">
          {/* Eyebrow */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              CONDITIONAL INTAKE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Report form, shown as a preview.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Reporting is currently unavailable on this page. Intake would appear only when it is verified and operational.
          </p>

          {/* Mobile Form Card */}
          <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs">
            {/* Red Warning Banner */}
            <div className="flex items-start gap-2.5 rounded-xl border border-rose-200 bg-[#fff1f2] p-3 text-[#be123c]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span className="text-[11.5px] font-medium leading-[1.45]">
                <span className="font-semibold">Immediate danger?</span> Contact local emergency services. Do not use this form.
              </span>
            </div>

            {/* Amber Warning Banner */}
            <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-[#fefce8] p-3 text-[#92400e]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span className="text-[11.5px] font-medium leading-[1.45]">
                Do not send identity files, payment details, passwords, private listings or confidential screenshots.
              </span>
            </div>

            {/* Subheading: About the concern */}
            <h3 className={`${sora} mt-5 text-[17px] font-bold text-[#0c1e38]`}>
              About the concern
            </h3>

            {/* Field: Issue type */}
            <div className="mt-4">
              <label className="block text-[12px] font-semibold text-[#0c1e38]">
                Issue type
              </label>
              <div className="relative mt-1.5">
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#475569] shadow-2xs focus:border-[#926016] focus:outline-none"
                >
                  <option value="Select a type">Select a type</option>
                  <option value="Product safety or recall">Product safety or recall</option>
                  <option value="Brand or authenticity">Brand or authenticity</option>
                  <option value="Suspicious activity">Suspicious activity</option>
                  <option value="Access or disclosure misuse">Access or disclosure misuse</option>
                  <option value="Other trust concern">Other trust concern</option>
                </select>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            {/* Field: Your relationship */}
            <div className="mt-3.5">
              <label className="block text-[12px] font-semibold text-[#0c1e38]">
                Your relationship
              </label>
              <div className="relative mt-1.5">
                <select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#475569] shadow-2xs focus:border-[#926016] focus:outline-none"
                >
                  <option value="Observer">Observer</option>
                  <option value="Buyer / Customer">Buyer / Customer</option>
                  <option value="Seller / Supplier">Seller / Supplier</option>
                  <option value="Brand owner / IP representative">Brand owner / IP representative</option>
                  <option value="Other party">Other party</option>
                </select>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            {/* Field: Country or market */}
            <div className="mt-3.5">
              <label className="block text-[12px] font-semibold text-[#0c1e38]">
                Country or market <span className="text-slate-400 font-normal">(if relevant)</span>
              </label>
              <div className="relative mt-1.5">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#475569] shadow-2xs focus:border-[#926016] focus:outline-none"
                >
                  <option value="Not specified">Not specified</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="European Union">European Union</option>
                  <option value="United States">United States</option>
                  <option value="Other / Global">Other / Global</option>
                </select>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94a3b8]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <p className="mt-1 text-[11px] text-[#94a3b8]">
                Informational. Leaves internal routing open.
              </p>
            </div>

            {/* Field: Brief summary */}
            <div className="mt-3.5">
              <label className="block text-[12px] font-semibold text-[#0c1e38]">
                Brief summary
              </label>
              <input
                type="text"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder=""
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-[#0c1e38] shadow-2xs focus:border-[#926016] focus:outline-none"
              />
            </div>

            {/* Field: Description */}
            <div className="mt-3.5">
              <label className="block text-[12px] font-semibold text-[#0c1e38]">
                Describe what happened and why you are concerned
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder=""
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white p-3.5 text-[13px] text-[#0c1e38] shadow-2xs focus:border-[#926016] focus:outline-none"
              />
            </div>

            {/* Subheading: Reply */}
            <div className="mt-5 border-t border-slate-100 pt-5">
              <h4 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                Reply
              </h4>

              {/* Checkbox: I would like a reply */}
              <label className="mt-3 flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={wantsReply}
                  onChange={(e) => setWantsReply(e.target.checked)}
                  className="mt-0.5 size-4 rounded border-slate-300 text-[#926016] focus:ring-[#926016]"
                />
                <div>
                  <span className="text-[12.5px] font-medium text-[#0c1e38]">
                    I would like a reply
                  </span>
                  <p className="text-[11px] text-[#94a3b8]">
                    A reply option is offered only if approved. No response time is promised.
                  </p>
                </div>
              </label>

              {/* Fields: Email and Org */}
              <div className="mt-3.5 flex flex-col gap-3">
                <div>
                  <label className="block text-[12px] font-semibold text-[#0c1e38]">
                    Email <span className="text-slate-400 font-normal">(if reply requested)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-[#0c1e38] shadow-2xs focus:border-[#926016] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#0c1e38]">
                    Organization <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder=""
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[13px] text-[#0c1e38] shadow-2xs focus:border-[#926016] focus:outline-none"
                  />
                </div>
              </div>

              {/* Checkbox: Privacy */}
              <label className="mt-4 flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="mt-0.5 size-4 rounded border-slate-300 text-[#926016] focus:ring-[#926016]"
                />
                <span className="text-[11.5px] leading-relaxed text-[#556987]">
                  I have read the privacy notice and am not including sensitive files or credentials.
                </span>
              </label>

              {/* Button */}
              <div className="mt-5">
                <button
                  type="button"
                  disabled
                  className="flex h-[44px] w-full items-center justify-center rounded-full bg-[#926016] text-[13.5px] font-semibold text-white shadow-xs opacity-90 cursor-not-allowed"
                >
                  Review report
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Preview Only Checklist Card */}
          <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 14 14" />
              </svg>
              <h3 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                Preview only
              </h3>
            </div>

            <div className="mt-3.5 flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-[12px] leading-relaxed text-[#556987]">
                  No intake is connected. Nothing is sent and no reference is issued.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-[12px] leading-relaxed text-[#556987]">
                  Fields and options need owner approval.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p className="text-[12px] leading-relaxed text-[#556987]">
                  Not for general support or emergencies.
                </p>
              </div>
            </div>
          </div>

          {/* Photo Showcase at bottom of Section 05: r40.jpg */}
          <div className="relative mt-4 h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xs">
            <Image
              src="/images/Report-an-Issue/r40.jpg"
              alt="Worker securing parcel at packaging desk"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
