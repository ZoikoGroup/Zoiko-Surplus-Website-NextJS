import React from "react";
import { AlertTriangle, Flag, ShieldAlert, X } from "lucide-react";

export default function ExcludedClaimsAndGoods() {
  const limits = [
    {
      id: "1",
      title: "Food and perishables",
      description:
        "A separate food-safety gate. No food handling route is approved here.",
      image: "/images/join/12.png",
      icon: AlertTriangle,
    },
    {
      id: "2",
      title: "Recalled goods",
      description: "Recalled goods are excluded or escalated, never routed.",
      image: "/images/join/13.png",
      icon: Flag,
    },
    {
      id: "3",
      title: "Regulated and hazardous goods",
      description:
        "These need specific legal clearance. No clearance is implied.",
      image: "/images/join/14.png",
      icon: ShieldAlert,
    },
    {
      id: "4",
      title: "Unsupported claims",
      description:
        'No "1000+ partners", guaranteed volume or donation outcome is stated.',
      image: "/images/join/15.png",
      icon: X,
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#FFFFFF] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#926016]">
              05
            </span>
            <div className="h-[1px] w-12 bg-[#E5D5C5]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              EXCLUDED CLAIMS AND GOODS
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#111827] sm:text-[44px]">
            What this page will not say or route.
          </h2>

          <p className="mt-3 max-w-[600px] text-[16px] leading-relaxed text-[#4B5563]">
            Some goods and some claims are out of scope. They are stated plainly
            so nobody plans around them.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {limits.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex h-[300px] flex-col justify-end overflow-hidden rounded-[24px] bg-[#111827] p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
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
                    LIMIT {item.id}
                  </span>
                  <h3 className="mt-1 text-[20px] font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#D1D5DB]">
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
