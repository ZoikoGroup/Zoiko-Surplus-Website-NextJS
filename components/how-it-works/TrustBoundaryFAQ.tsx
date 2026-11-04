"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Sliders,
  Shield,
  EyeOff,
  AlertCircle,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

interface TrustBoundaryItem {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
}

const TRUST_ITEMS: readonly TrustBoundaryItem[] = [
  {
    id: "verification-guarantee",
    icon: <ShieldCheck className="w-4 h-4 text-[#926016]" />,
    question: "Verification ≠ guarantee",
    answer:
      "Verification checks eligibility, identity, and documented status at a point in time. It does not replace buyer due diligence, guarantee commercial performance, or warrant physical item condition beyond verified attestations.",
  },
  {
    id: "seller-control",
    icon: <Sliders className="w-4 h-4 text-[#926016]" />,
    question: "Seller control",
    answer:
      "Sellers retain explicit authority over who sees their inventory, which channels receive offers, and what restrictions apply. No lot is broadcast or listed to unapproved audiences.",
  },
  {
    id: "policy-before-matching",
    icon: <Shield className="w-4 h-4 text-[#926016]" />,
    question: "Policy before matching",
    answer:
      "Governance rules, legal restrictions, and safety filters run prior to any matching logic. Ineligible or non-compliant routes are excluded automatically before options are ranked.",
  },
  {
    id: "confidentiality",
    icon: <EyeOff className="w-4 h-4 text-[#926016]" />,
    question: "Confidentiality",
    answer:
      "Private lot data, seller identity, pricing parameters, and buyer lists are protected behind scoped permissions. No confidential business information is exposed publicly.",
  },
  {
    id: "exceptions-disputes",
    icon: <AlertCircle className="w-4 h-4 text-[#926016]" />,
    question: "Exceptions & disputes",
    answer:
      "When variances, holds, or order exceptions occur, the path provides defined recourse workflows and auditable logs rather than automated default settlements.",
  },
] as const;

export default function TrustBoundaryFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              12
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              TRUST BOUNDARY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            What the path does and doesn’t guarantee.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Short, visible boundaries that hold across every stage. None of
            these implies a verified result on this page.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="flex flex-col space-y-4 pt-2 max-w-7xl">
          {TRUST_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="w-full bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl transition-all duration-200 shadow-xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 md:p-6 flex items-center justify-between text-left group focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon Container */}
                    <div className="w-9 h-9 rounded-xl bg-[#FDF6ED] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm md:text-base font-bold text-[#1E2126]">
                      {item.question}
                    </span>
                  </div>

                  {/* Toggle Indicator Icon */}
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-[#926016] shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#926016] group-hover:scale-110 transition-transform shrink-0 ml-4" />
                  )}
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-[#4F647A] leading-relaxed border-t border-[#F1F5F9] pt-4 ml-13">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Link CTA */}
        <div className="pt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#0F7A60] hover:text-[#0d9668] transition-colors"
          >
            <span>Read the Trust & Safety framework</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
