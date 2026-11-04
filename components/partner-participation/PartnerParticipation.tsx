import React from "react";
import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";

export default function PartnerParticipation() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#FBF6EF] py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Text Content & Buttons */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight">
            <span className="text-[#0D1F38]">Explore partner </span>
            <span className="text-[#20B07B] block">participation.</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-[#64748B] text-base md:text-lg leading-relaxed max-w-xl font-normal">
            Zoiko Surplus may work with qualified third-party organizations to
            support seller-authorized surplus disposition pathways.
            Participation depends on market, category, operational capability
            and formal approval.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#965E24] hover:bg-[#804E1C] text-white font-medium rounded-full transition-all duration-200 text-sm md:text-base shadow-sm"
            >
              <span>Contact the Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-gray-50 text-[#0D1F38] font-semibold border border-[#E2E8F0] rounded-full transition-all duration-200 text-sm md:text-base shadow-sm"
            >
              Explore Surplus Network
            </a>
          </div>

          {/* Disclaimer Note */}
          <div className="flex items-start gap-2 pt-2 text-[#71717A] text-xs leading-relaxed max-w-lg">
            <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#A1A1AA]" />
            <p>
              Submitting an inquiry does not establish a partnership, authorize
              custody, assign inventory or guarantee future business.
            </p>
          </div>
        </div>

        {/* Right Column - Image Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[580px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/images/part/1.png"
              alt="Team of professional partners standing together with crossed arms"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
