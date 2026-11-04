import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function InterestIsEarnedCTA() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-4 font-sans">
      <div className="max-w-[1660px] mx-auto">
        {/* Banner Card Container */}
        <div className="relative w-full aspect-[16/7] md:aspect-[24/9] min-h-[300px] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center text-center p-6 md:p-12">
          {/* Background Image */}
          <Image
            src="/images/part/11.png"
            alt="Person using credit card machine in warehouse fulfillment center"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />

          {/* Dark Overlay Gradient for contrast */}
          <div className="absolute inset-0 bg-[#0C21407A] backdrop-blur-[2px]" />

          {/* Content Overlay */}
          <div className="relative z-10 max-w-3xl flex flex-col items-center space-y-6">
            {/* Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] tracking-tight">
              Interest is the start approval is earned.
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#965E24] hover:bg-[#804E1C] text-white font-medium rounded-full transition-all duration-200 text-sm md:text-base shadow-sm"
              >
                <span>Contact the Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent hover:bg-white/10 text-white font-semibold border border-white/40 rounded-full transition-all duration-200 text-sm md:text-base shadow-sm backdrop-blur-xs"
              >
                Surplus Network
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
