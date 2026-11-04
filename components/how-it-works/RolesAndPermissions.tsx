import React from "react";
import { Sliders, ShieldCheck, EyeOff, Share2 } from "lucide-react";

interface RoleCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ROLE_CARDS: readonly RoleCard[] = [
  {
    id: "seller-roles",
    icon: <Sliders className="w-5 h-5 text-[#10B981]" />,
    title: "Seller roles",
    description:
      "Define, approve and change what is offered, to whom and under which rules.",
  },
  {
    id: "reviewer-controls",
    icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" />,
    title: "Reviewer controls",
    description:
      "Named reviewers approve changes at defined checkpoints — nothing is one-click irreversible.",
  },
  {
    id: "buyer-separation",
    icon: <EyeOff className="w-5 h-5 text-[#10B981]" />,
    title: "Buyer separation",
    description:
      "Verified buyers are a distinct audience; verification, invitation and transaction access are separate checks.",
  },
  {
    id: "partner-separation",
    icon: <Share2 className="w-5 h-5 text-[#10B981]" />,
    title: "Partner separation",
    description:
      "Partners operate only where separately contracted and activated.",
  },
] as const;

export default function RolesAndPermissions() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              10
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              ROLES & PERMISSIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Separation of duties, across the path.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Seller, reviewer, buyer and partner are distinct roles with distinct
            permissions — authority stays explicit and auditable.
          </p>
        </div>

        {/* 4 Columns Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {ROLE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 flex flex-col space-y-4 transition-all duration-200 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E6F4F1] flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div className="flex flex-col space-y-2 pt-1">
                <h3 className="text-base md:text-lg font-bold text-[#1E2126]">
                  {card.title}
                </h3>
                <p className="text-[#4F647A] text-xs md:text-sm leading-relaxed font-normal">
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
