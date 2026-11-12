import React from "react";
import { ArrowRight } from "lucide-react";

export default function CallToActionBanner() {
  return (
    <section className="w-full overflow-x-hidden bg-[#FFFFFF] px-6 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {/* Banner Container */}
        <div className="group relative flex h-[530px] w-full flex-col items-center justify-center overflow-hidden rounded-[32px] bg-[#111827] px-6 text-center shadow-md sm:px-12">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/join/28.png"
              alt="Start with a conversation, not a commitment"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-[#0B132B]/50 to-[#0B132B]/30" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-[800px]">
            <h2 className="text-[38px] font-bold tracking-tight text-white sm:text-[52px] lg:text-[56px] leading-[1.15]">
              Start with a conversation, not a commitment.
            </h2>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-[12px] bg-[#926016] px-7 py-3.5 text-[14px] font-semibold text-white shadow-sm hover:bg-[#7A5010] transition-colors"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="h-4 w-4 stroke-[2.25]" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-[12px] border border-white/40 bg-white/10 px-7 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                Explore Surplus Network
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
