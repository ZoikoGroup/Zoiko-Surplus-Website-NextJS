import React from "react";
import {
  ListChecks,
  Globe,
  Building,
  FileText,
  AlertTriangle,
} from "lucide-react";

export default function PartnerCapabilityCards() {
  const capabilities = [
    {
      title: "Services",
      description: "What the organization can do, described in general terms.",
      icon: ListChecks,
    },
    {
      title: "Geography",
      description:
        "Where it can operate. Regions are configured and activated separately.",
      icon: Globe,
    },
    {
      title: "Facilities",
      description:
        "Sites and handling capability, as the partner describes them.",
      icon: Building,
    },
    {
      title: "Proof",
      description:
        "Evidence a reviewer may ask for, with expiry. Never published.",
      icon: FileText,
    },
    {
      title: "Restrictions",
      description:
        "Categories or goods the organization cannot or will not handle.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#FFFFFF] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#926016]">
              03
            </span>
            <div className="h-[1px] w-12 bg-[#E5D5C5]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              PARTNER CAPABILITY CARDS
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#111827] sm:text-[44px]">
            What an organization may be asked to describe.
          </h2>

          <p className="mt-3 max-w-[650px] text-[16px] leading-relaxed text-[#4B5563]">
            Informational only. No partner names, logos, volumes or counts are
            shown, because none are verified.
          </p>
        </div>

        {/* Main Content Layout: Left Image + Right Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Left Large Image Card */}
          <div className="group relative flex h-[580px] w-full flex-col justify-end overflow-hidden rounded-[24px] bg-[#111827] p-6 shadow-sm">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/join/11.png"
                alt="Illustrative imagery"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Bottom Left Badge */}
            <div className="relative z-10 self-start rounded-full bg-white/90 px-4 py-1.5 backdrop-blur-sm text-[12px] font-medium text-[#111827] shadow-sm">
              Illustrative imagery
            </div>
          </div>

          {/* Right Cards Stack / Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {capabilities.map((item, index) => {
              const IconComponent = item.icon;
              const isOdd = index % 2 === 0; // index 0, 2, 4 (1st, 3rd, 5th items)

              return (
                <div
                  key={index}
                  className={`flex flex-col justify-between rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${
                        isOdd
                          ? "bg-[#E2F5F0] text-[#1FA88A]"
                          : "bg-[#FEF6EE] text-[#926016]"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-[18px] font-bold text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#4B5563]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
