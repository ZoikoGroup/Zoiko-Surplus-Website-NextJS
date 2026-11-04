import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface BoundaryItem {
  id: string;
  title: string;
  description: string;
}

const BOUNDARY_ITEMS: readonly BoundaryItem[] = [
  {
    id: "need-to-know",
    title: "Need-to-know only",
    description: "Just the route data required to perform the service.",
  },
  {
    id: "no-private-data",
    title: "No seller-private data",
    description: "Inventory, prices and buyer identities stay protected.",
  },
  {
    id: "recorded-access",
    title: "Recorded access",
    description: "Who accessed what is governed and recorded.",
  },
] as const;

export default function IntegrationAndDataBoundary() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Image Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-[580px] aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="/images/part/6.png"
              alt="Partners working together with packages and laptop for data boundary representation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
            />
          </div>
        </div>

        {/* Right Column - Content & List */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8 order-1 lg:order-2">
          {/* Header Block */}
          <div className="flex flex-col space-y-4">
            {/* Eyebrow badge / section tag */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold tracking-wider text-[#1E2126]">
                09
              </span>
              <span className="w-11 h-[2px] bg-[#D3DDE8]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
                INTEGRATION & DATA BOUNDARY
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
              Partners see only what a route needs.
            </h2>

            {/* Subtitle */}
            <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
              Any integration is scoped and non-identifying by default. Partners
              never receive seller-private inventory, pricing or buyer
              identities.
            </p>
          </div>

          {/* Feature Items List using Reusable Objects */}
          <div className="flex flex-col space-y-6">
            {BOUNDARY_ITEMS.map((item) => (
              <div key={item.id} className="flex items-start gap-2">
                <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3]" />
                </div>
                <div className="flex flex-col space-y-1">
                  <h3 className="text-base font-bold text-[#1E2126]">
                    {item.title}
                  </h3>
                  <p className="text-[#4F647A] text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
