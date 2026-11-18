"use client";
import React, { useState } from "react";
import { Globe, CheckCircle2, Lock, Clock } from "lucide-react";

export default function MarketAndCategoryBoundary() {
  const [market, setMarket] = useState("Select a market");

  const statuses = [
    {
      title: "Inquiry open",
      description:
        "Shown only where intake is real and tested. None is shown here.",
      icon: CheckCircle2,
      bgColor: "bg-[#E2F5F0]",
      iconColor: "text-[#1FA88A]",
    },
    {
      title: "Not accepting inquiries",
      description: "Public guidance and a support route are shown instead.",
      icon: Lock,
      bgColor: "bg-[#FEF6EE]",
      iconColor: "text-[#926016]",
    },
    {
      title: "Not activated",
      description: '"Service not currently available for the selected market."',
      icon: Clock,
      bgColor: "bg-[#FEF6EE]",
      iconColor: "text-[#926016]",
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#FEFAF7] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#926016]">
              04
            </span>
            <div className="h-[1px] w-12 bg-[#E5D5C5]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              MARKET AND CATEGORY BOUNDARY
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#111827] sm:text-[44px]">
            Global by architecture. Local by activation.
          </h2>

          <p className="mt-3 max-w-[650px] text-[16px] leading-relaxed text-[#4B5563]">
            Partnership pathways open market by market and category by category.
            A region choice never confers eligibility.
          </p>
        </div>

        {/* Market Selector Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-[20px] border border-[#E5E7EB] bg-white p-4 shadow-sm">
          <span className="text-[14px] font-medium text-[#4B5563] ml-2">
            Market
          </span>
          <div className="relative inline-block w-full sm:w-auto">
            <button
              type="button"
              className="flex items-center justify-between w-full sm:w-[220px] rounded-[12px] border border-[#D1D5DB] bg-white px-4 py-2.5 text-[14px] font-medium text-[#111827] shadow-sm hover:bg-[#F9FAFB] transition-colors"
            >
              <span>{market}</span>
            </button>
          </div>
        </div>

        {/* Notice Banner */}
        <div className="mt-4 flex items-center gap-3 rounded-[12px] bg-[#FEF9E7] px-5 py-3.5 border border-[#F3E8C6] text-[#7A5510] max-w-[490px]">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F3E8C6]/50">
            <Globe className="h-3.5 w-3.5 text-[#926016]" />
          </div>
          <p className="text-[12px] font-medium leading-relaxed sm:text-[13px]">
            No market selected. Status is shown only from approved data.
          </p>
        </div>

        {/* Status Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {statuses.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${item.bgColor} ${item.iconColor}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-[18px] font-bold text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#4B5563]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
