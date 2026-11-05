import React from "react";
import Image from "next/image";
import { ShieldCheck, Share2, Sliders, ArrowRight } from "lucide-react";

interface JourneyStep {
  number: number;
  boldText: string;
  lightText: string;
}

interface AudienceCard {
  id: string;
  badgeIcon: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  title: string;
  steps: readonly JourneyStep[];
  linkText: string;
  linkHref: string;
}

const AUDIENCE_CARDS: readonly AudienceCard[] = [
  {
    id: "verified-buyer",
    badgeIcon: <ShieldCheck className="w-4 h-4 text-[#1E2126]" />,
    imageSrc: "/images/how/4.png",
    imageAlt: "Buyer shopping in retail store setting",
    title: "Verified buyer",
    steps: [
      { number: 1, boldText: "Apply", lightText: "and complete verification." },
      {
        number: 2,
        boldText: "Get entitled",
        lightText: "by a seller for an audience.",
      },
      {
        number: 3,
        boldText: "Discover",
        lightText: "permitted opportunities.",
      },
      {
        number: 4,
        boldText: "Transact",
        lightText: "where enabled, with evidence.",
      },
    ],
    linkText: "Become a Verified Buyer",
    linkHref: "#",
  },
  {
    id: "authorized-partner",
    badgeIcon: <Share2 className="w-4 h-4 text-[#1E2126]" />,
    imageSrc: "/images/how/5.png",
    imageAlt: "Partner professionals discussing warehouse operations",
    title: "Authorized partner",
    steps: [
      { number: 1, boldText: "Apply", lightText: "to participate." },
      {
        number: 2,
        boldText: "Verify",
        lightText: "identity, licensing, capability.",
      },
      {
        number: 3,
        boldText: "Get scoped",
        lightText: "to permitted services & markets.",
      },
      {
        number: 4,
        boldText: "Perform",
        lightText: "coordinated services, evidenced.",
      },
    ],
    linkText: "Explore Partner Participation",
    linkHref: "#",
  },
  {
    id: "enterprise-seller",
    badgeIcon: <Sliders className="w-4 h-4 text-[#1E2126]" />,
    imageSrc: "/images/how/6.png",
    imageAlt: "Enterprise seller managing products at counter",
    title: "Enterprise seller",
    steps: [
      {
        number: 1,
        boldText: "Qualify",
        lightText: "stock and set documentation.",
      },
      {
        number: 2,
        boldText: "Govern",
        lightText: "audiences, routes and policy.",
      },
      { number: 3, boldText: "Decide", lightText: "on permitted disposition." },
      { number: 4, boldText: "Prove", lightText: "outcomes with evidence." },
    ],
    linkText: "Explore Surplus Enterprise",
    linkHref: "#",
  },
] as const;

export default function ThreeAudienceJourneys() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              05
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              THREE AUDIENCE JOURNEYS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            The same path, three points of view.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Sellers, verified buyers and authorized partners each enter the
            governed path differently — but every role runs through the same
            seven stages.
          </p>
        </div>

        {/* 3 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {AUDIENCE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md group"
            >
              {/* Card Image Header */}
              <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Floating Round Icon Badge */}
                <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center border border-white/50 text-[#1E2126]">
                  {card.badgeIcon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold text-[#1E2126]">
                    {card.title}
                  </h3>

                  {/* Numbered Steps List */}
                  <div className="flex flex-col space-y-3">
                    {card.steps.map((step) => (
                      <div
                        key={step.number}
                        className="flex items-start gap-2.5 text-xs md:text-sm"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#0B192C] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {step.number}
                        </span>
                        <p className="text-[#4F647A] leading-relaxed">
                          <strong className="text-[#1E2126] font-bold">
                            {step.boldText}
                          </strong>{" "}
                          {step.lightText}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Link CTA */}
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
    </section>
  );
}
