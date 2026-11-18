import React from "react";
import { Truck, Share2, Leaf, Shield } from "lucide-react";

export default function PartnerRoles() {
  const roles = [
    {
      id: "01",
      title: "Logistics provider",
      description:
        "Pickup and transport coordination, where a seller authorizes it.",
      image: "/images/join/4.png",
      icon: Truck,
    },
    {
      id: "02",
      title: "Redistribution and reuse operator",
      description: "Moves permitted goods to verified recipients.",
      image: "/images/join/5.png",
      icon: Share2,
    },
    {
      id: "03",
      title: "Recovery operator",
      description:
        "Material recovery and recycling for goods that cannot be resold.",
      image: "/images/join/6.png",
      icon: Leaf,
    },
    {
      id: "04",
      title: "Specialist provider",
      description: "Specialist handling for specific goods pathways.",
      image: "/images/join/7.png",
      icon: Shield,
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#FFFFFF] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#A67C52]">
              01
            </span>
            <div className="h-[1px] w-12 bg-[#E5D5C5]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#A67C52]">
              PARTNER ROLE TAXONOMY
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#111827] sm:text-[44px]">
            Four illustrative roles.
          </h2>

          <p className="mt-3 max-w-[600px] text-[16px] leading-relaxed text-[#4B5563]">
            Roles describe the kinds of organizations that may be considered.
            They are not an open directory.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <div
                key={role.id}
                className="group relative flex h-[300px] flex-col justify-end overflow-hidden rounded-[24px] bg-[#111827] p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={role.image}
                    alt={role.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/60 to-transparent" />
                </div>

                {/* Top Right Icon Badge */}
                <div className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-[#926016] shadow-sm">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8FE6CF]">
                    ROLE {role.id}
                  </span>
                  <h3 className="mt-1 text-[20px] font-bold leading-snug text-white">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#D1D5DB]">
                    {role.description}
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
