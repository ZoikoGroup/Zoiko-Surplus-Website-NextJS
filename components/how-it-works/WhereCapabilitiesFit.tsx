import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface CapabilityCard {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: readonly string[];
  linkText: string;
  linkHref: string;
}

const CAPABILITY_CARDS: readonly CapabilityCard[] = [
  {
    id: "surplus-enterprise",
    imageSrc: "/images/how/7.png",
    imageAlt:
      "Enterprise team evaluating inventory boxes in warehouse facility",
    title: "Surplus Enterprise",
    description:
      "Qualify and govern stock, plan disposition and keep evidence.",
    tags: ["Qualify", "Govern", "Prove"],
    linkText: "Explore Enterprise",
    linkHref: "#",
  },
  {
    id: "surplus-exchange",
    imageSrc: "/images/how/8.png",
    imageAlt: "Person using POS mobile terminal to complete transaction",
    title: "Surplus Exchange",
    description: "Reach verified demand and complete governed transactions.",
    tags: ["Match", "Transact"],
    linkText: "Explore Exchange",
    linkHref: "#",
  },
  {
    id: "surplus-network",
    imageSrc: "/images/how/9.png",
    imageAlt: "Warehouse logistics personnel handshaking with partner",
    title: "Surplus Network",
    description:
      "Coordinate permitted partners and carry routes to resolution.",
    tags: ["Optimize", "Resolve"],
    linkText: "Explore Network",
    linkHref: "#",
  },
] as const;

export default function WhereCapabilitiesFit() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-20">
        {/* TOP SECTION: Three Capabilities Grid */}
        <div className="flex flex-col space-y-12">
          {/* Header Section */}
          <div className="flex flex-col space-y-4 max-w-3xl">
            {/* Eyebrow badge / section tag */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold tracking-wider text-[#1E2126]">
                07
              </span>
              <span className="w-11 h-[2px] bg-[#D3DDE8]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
                THE THREE CAPABILITIES
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
              Where the capabilities fit the path.
            </h2>

            {/* Subtitle */}
            <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
              Enterprise, Exchange and Network are three parts of one governed
              system — each owning different stages.
            </p>
          </div>

          {/* 3 Columns Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
            {CAPABILITY_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md group"
              >
                {/* Image Header with External Icon */}
                <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Top-Right Corner Arrow Badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center border border-white/50 text-[#1E2126] group-hover:bg-white group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-xl font-bold text-[#1E2126]">
                      {card.title}
                    </h3>
                    <p className="text-[#4F647A] text-xs md:text-sm leading-relaxed font-normal">
                      {card.description}
                    </p>

                    {/* Stage Pill Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#E6F4F1] text-[#10B981] text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-2 border-t border-[#F1F5F9]">
                    <a
                      href={card.linkHref}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#926016] hover:text-[#744b0e] transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION: Trusted Input Banner Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-md">
          {/* Left Dark Box */}
          <div className="lg:col-span-6 bg-[#0C2140] p-8 md:p-14 flex flex-col justify-between space-y-8 text-white">
            <div className="flex flex-col space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] tracking-tight">
                Every stage produces a trusted input for the next.
              </h3>
              <p className="text-[#CBD5E1] text-sm md:text-base leading-relaxed font-normal max-w-lg">
                Policy and safety run before matching; exceptions have defined
                routes; nothing confidential is ever shown on public pages.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#965E24] hover:bg-[#804E1C] text-white font-medium rounded-full transition-all duration-200 text-sm shadow-sm"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent hover:bg-white/10 text-white font-semibold border border-white/30 rounded-full transition-all duration-200 text-sm shadow-sm backdrop-blur-xs"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          {/* Right Image Box */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/how/10.png"
              alt="Policies and procedures binder on desk next to laptop keyboard"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
