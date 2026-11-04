import React from "react";
import { Globe, Layers, Sliders } from "lucide-react";

interface ConfigCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CONFIG_CARDS: readonly ConfigCard[] = [
  {
    id: "market-activation",
    icon: <Globe className="w-5 h-5 text-white" />,
    title: "Market activation",
    description:
      "Partners are enabled per market and corridor, not globally by default.",
  },
  {
    id: "category-scope",
    icon: <Layers className="w-5 h-5 text-white" />,
    title: "Category scope",
    description:
      "A partner is scoped to the categories it's qualified and contracted for.",
  },
  {
    id: "service-configuration",
    icon: <Sliders className="w-5 h-5 text-white" />,
    title: "Service configuration",
    description:
      "Only the specific services a partner is approved for are enabled.",
  },
] as const;

export default function CategoryAndMarketConfiguration() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              08
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              CATEGORY & MARKET CONFIGURATION
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Participation is configured, not blanket.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Approval is specific — to markets, categories and services. A
            partner is never enabled everywhere by default.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {CONFIG_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 flex flex-col space-y-4 transition-all duration-200 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0B192C] flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div className="flex flex-col space-y-2 pt-1">
                <h3 className="text-lg font-bold text-[#1E2126]">
                  {card.title}
                </h3>
                <p className="text-[#4F647A] text-sm leading-relaxed font-normal">
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
