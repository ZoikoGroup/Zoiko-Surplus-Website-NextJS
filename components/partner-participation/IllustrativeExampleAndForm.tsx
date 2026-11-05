"use client";
import React from "react";
import Image from "next/image";
import { Clock, Check, ArrowRight } from "lucide-react";

interface WalkthroughStep {
  id: string;
  title: string;
  description: string;
}

interface FormFeature {
  id: string;
  text: string;
}

const WALKTHROUGH_STEPS: readonly WalkthroughStep[] = [
  {
    id: "express-interest",
    title: "An organization expresses interest",
    description:
      "A logistics provider submits an inquiry for a market where intake is open — no assigned work implied.",
  },
  {
    id: "initial-review",
    title: "Initial review",
    description:
      "We assess relevance and capability; there's a potential fit, with no commitment.",
  },
  {
    id: "verification",
    title: "Verification",
    description:
      "Identity, licensing and insurance are checked for the service offered.",
  },
  {
    id: "contracting-scope",
    title: "Contracting & scope",
    description:
      "The partner is contracted and scoped to specific markets, categories and services.",
  },
  {
    id: "coordinated-route",
    title: "Coordinated route",
    description:
      "Later, where a seller approves a route, the partner may be coordinated — and the outcome is evidenced.",
  },
] as const;

const FORM_FEATURES: readonly FormFeature[] = [
  {
    id: "feature-1",
    text: "A real conversation with a person — not an instant decision.",
  },
  {
    id: "feature-2",
    text: "We ask only for what we need to route your inquiry.",
  },
  {
    id: "feature-3",
    text: "No confidential operational documents at this stage.",
  },
] as const;

export default function IllustrativeExampleAndForm() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-20">
        {/* TOP SECTION: Illustrative Walkthrough */}
        <div className="flex flex-col space-y-12">
          {/* Header Section */}
          <div className="flex flex-col space-y-4 max-w-3xl">
            {/* Eyebrow badge / section tag */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold tracking-wider text-[#1E2126]">
                10
              </span>
              <span className="w-11 h-[2px] bg-[#D3DDE8]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
                ILLUSTRATIVE EXAMPLE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
              How participation could progress — anonymized.
            </h2>

            {/* Subtitle */}
            <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
              An explicitly illustrative, non-operational walkthrough. It
              contains no real partners, brands, figures or live data.
            </p>
          </div>

          {/* Grid Layout: Image + Walkthrough Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            {/* Left Image Card */}
            <div className="lg:col-span-6 flex">
              <div className="relative w-full min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src="/images/part/8.png"
                  alt="Team of logistics warehouse workers with tablet and clipboard"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right Card: Walkthrough Steps */}
            <div className="lg:col-span-6 border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col bg-white shadow-xs">
              {/* Card Header */}
              <div className="bg-[#FFFBF5] p-5 md:p-6 border-b border-[#E2E8F0] flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-base font-bold text-[#1E2126]">
                  Participation walkthrough
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDF6ED] text-[#926016] text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded-md border border-[#FDE68A]/60">
                  <Clock className="w-3 h-3 text-[#926016]" />
                  ILLUSTRATIVE · ANONYMIZED · NO LIVE DATA
                </span>
              </div>

              {/* Card List Items */}
              <div className="divide-y divide-[#E2E8F0] flex-1">
                {WALKTHROUGH_STEPS.map((step) => (
                  <div
                    key={step.id}
                    className="p-5 md:p-6 flex flex-col space-y-1"
                  >
                    <h4 className="text-sm font-bold text-[#1E2126]">
                      {step.title}
                    </h4>
                    <p className="text-[#4F647A] text-xs leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Express Interest Form Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-md">
          {/* Left Dark Card */}
          <div className="lg:col-span-5 bg-[#0C2140] p-8 md:p-12 flex flex-col justify-between space-y-8 text-white">
            <div className="flex flex-col space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Tell us about your organization.
              </h3>
              <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
                Share a few details and we’ll route your inquiry to the right
                team where partner intake is open. This is the start of a review
                — not an application for assigned work.
              </p>

              {/* List of features */}
              <div className="flex flex-col space-y-4 pt-2">
                {FORM_FEATURES.map((feature) => (
                  <div key={feature.id} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-1 stroke-[3]" />
                    <span className="text-sm text-[#CBD5E1] font-normal leading-normal">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Note & Alternative Action Buttons */}
            <div className="flex flex-col space-y-4 pt-6 border-t border-[#1E293B]">
              <p className="text-xs text-[#94A3B8]">
                An existing partner? Use your approved support channel rather
                than this form.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-[#965E24] hover:bg-[#804E1C] text-white text-xs font-semibold rounded-full transition-colors"
                >
                  Apply to Become a Buyer
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-transparent hover:bg-white/10 text-white text-xs font-semibold rounded-full border border-white/20 transition-colors"
                >
                  Surplus Exchange
                </a>
              </div>
            </div>
          </div>

          {/* Right Light Form Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 flex flex-col justify-between space-y-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col space-y-5"
            >
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl font-bold text-[#1E2126]">
                  Express interest
                </h3>
                <p className="text-xs text-[#4F647A]">
                  All fields are required unless noted.
                </p>
              </div>

              {/* Form Input 1: Organization Name */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="organizationName"
                  className="text-xs font-bold text-[#1E2126]"
                >
                  Organization name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organizationName"
                  placeholder="Acme Logistics Ltd"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm text-[#1E2126] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#965E24]/50 focus:border-[#965E24] transition-all"
                />
              </div>

              {/* Form Input 2: Work Email */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="workEmail"
                  className="text-xs font-bold text-[#1E2126]"
                >
                  Work email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="workEmail"
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm text-[#1E2126] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#965E24]/50 focus:border-[#965E24] transition-all"
                />
              </div>

              {/* Form Select 1: Service Area */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="serviceArea"
                  className="text-xs font-bold text-[#1E2126]"
                >
                  Service area <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceArea"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm text-[#1E2126] bg-white focus:outline-none focus:ring-2 focus:ring-[#965E24]/50 focus:border-[#965E24] transition-all"
                >
                  <option value="" disabled>
                    Select a service..
                  </option>
                  <option value="logistics">Logistics & Transport</option>
                  <option value="inspection">Inspection & Grading</option>
                  <option value="recovery">Recovery & Recycling</option>
                  <option value="donation">Donation & Redistribution</option>
                </select>
              </div>

              {/* Form Select 2: Market / Region */}
              <div className="flex flex-col space-y-1.5">
                <label
                  htmlFor="marketRegion"
                  className="text-xs font-bold text-[#1E2126]"
                >
                  Market / region <span className="text-red-500">*</span>
                </label>
                <select
                  id="marketRegion"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm text-[#1E2126] bg-white focus:outline-none focus:ring-2 focus:ring-[#965E24]/50 focus:border-[#965E24] transition-all"
                >
                  <option value="" disabled>
                    Select a market..
                  </option>
                  <option value="uk">
                    United Kingdom — Apparel & Footwear
                  </option>
                  <option value="europe">Other European Regions</option>
                  <option value="global">Global / Other</option>
                </select>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="termsConsent"
                  required
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-[#965E24] focus:ring-[#965E24] shrink-0"
                />
                <label
                  htmlFor="termsConsent"
                  className="text-xs text-[#4F647A] leading-relaxed"
                >
                  I understand that submitting this inquiry does not establish a
                  partnership, authorize custody, assign inventory or guarantee
                  future business. <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3.5 bg-[#965E24] hover:bg-[#804E1C] text-white font-semibold rounded-full transition-all duration-200 text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Submit inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <p className="text-[11px] text-[#94A3B8] text-center pt-2">
              This is a demonstration form. Submitting validates your entries
              but does not send or store anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
