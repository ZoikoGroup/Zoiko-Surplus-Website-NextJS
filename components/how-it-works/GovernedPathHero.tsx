import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GovernedPathHero() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-4 font-sans">
      <div className="max-w-[1660px] mx-auto">
        {/* Banner Card Container */}
        <div className="relative w-full aspect-[16/7] md:aspect-[21/9] min-h-[420px] md:min-h-[480px] rounded-3xl overflow-hidden shadow-xl flex items-center p-8 md:p-16">
          {/* Background Image */}
          <Image
            src="/images/how/1.png"
            alt="Two business professionals reviewing warehouse inventory on digital tablet and documents"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />

          {/* Dark Gradient Overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/85 via-[#0B192C]/70 to-[#0B192C]/30 backdrop-blur-[1px]" />

          {/* Content Overlay */}
          <div className="relative z-10 max-w-2xl flex flex-col items-start space-y-6">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.12] max-w-120 tracking-tight">
              <span className="text-white">A governed path from</span>
              <span className="text-[#18A884]">{" "}surplus to </span>
              <span className="text-[#18A884] block">outcome.</span>
            </h1>

            {/* Description */}
            <p className="text-[#CBD5E1] text-sm md:text-base leading-relaxed font-normal max-w-xl">
              Qualify stock and participants, apply the right controls, reach
              permitted demand, complete authorized transactions, and retain
              evidence when things change.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#965E24] hover:bg-[#804E1C] text-white font-medium rounded-full transition-all duration-200 text-sm md:text-base shadow-sm"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent hover:bg-white/10 text-white font-semibold border border-white/40 rounded-full transition-all duration-200 text-sm md:text-base shadow-sm backdrop-blur-xs"
              >
                Become a Verified Buyer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
