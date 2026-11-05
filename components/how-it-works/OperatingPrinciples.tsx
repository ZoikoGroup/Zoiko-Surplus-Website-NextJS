import React from "react";
import { Sliders, ShieldCheck, Shield, FolderCheck } from "lucide-react";

interface PrincipleCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PRINCIPLE_CARDS: readonly PrincipleCard[] = [
  {
    id: "seller-controlled-markets",
    icon: <Sliders className="w-5 h-5 text-[#20B07B]" />,
    title: "Seller-controlled markets",
    description:
      "Sellers decide which verified buyers ever see an opportunity.",
  },
  {
    id: "qualified-participation",
    icon: <ShieldCheck className="w-5 h-5 text-[#20B07B]" />,
    title: "Qualified participation",
    description:
      "Identity, role and eligibility are checked in context, not assumed.",
  },
  {
    id: "governed-disposition",
    icon: <Shield className="w-5 h-5 text-[#20B07B]" />,
    title: "Governed disposition",
    description:
      "Policy and safety rules apply before any route is offered or ranked.",
  },
  {
    id: "evidence-exceptions",
    icon: <FolderCheck className="w-5 h-5 text-[#20B07B]" />,
    title: "Evidence & exceptions",
    description:
      "Outcomes are recorded, and disputes follow defined processes.",
  },
] as const;

export default function OperatingPrinciples() {
  return (
    <section className="w-full bg-[#0C2140] py-16 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-white">
              03
            </span>
            <span className="w-11 h-[2px] bg-[#2E476D]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#20B07B]">
              OPERATING PRINCIPLES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.2] tracking-tight">
            Four principles behind every stage.
          </h2>

          {/* Subtitle */}
          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed font-normal pt-1">
            These are descriptions of how the platform is designed to operate —
            not certifications or third-party endorsements.
          </p>
        </div>

        {/* 4 Columns Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {PRINCIPLE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#1C3356] border border-[#FFFFFF24] rounded-2xl p-6 md:p-8 flex flex-col space-y-5 transition-all duration-200 hover:border-[#FFFFFF40]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#20B07B]/15 flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div className="flex flex-col space-y-2 pt-1">
                <h3 className="text-base md:text-lg font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-[#94A3B8] text-xs md:text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
