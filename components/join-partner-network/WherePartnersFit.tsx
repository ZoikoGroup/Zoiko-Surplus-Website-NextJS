import React from "react";
import { Building2, Layers, Truck, Lock } from "lucide-react";

export default function WherePartnersFit() {
  const responsibilities = [
    {
      id: "01",
      title: "Seller authorizes",
      description:
        "The enterprise seller decides what is disposed of, to whom, and under which terms.",
      image: "/images/join/8.png",
      icon: Building2,
    },
    {
      id: "02",
      title: "Zoiko coordinates",
      description:
        "Zoiko Surplus provides governance, qualification and coordination. It does not own fleets, warehouses or custody by default.",
      image: "/images/join/9.png",
      icon: Layers,
    },
    {
      id: "03",
      title: "Partner executes",
      description:
        "An approved partner performs the contracted service, under its own contract and permissions.",
      image: "/images/join/10.png",
      icon: Truck,
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#FEFAF7] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#926016]">
              02
            </span>
            <div className="h-[1px] w-12 bg-[#E5D5C5]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              WHERE PARTNERS FIT
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#111827] sm:text-[44px]">
            Three distinct responsibilities.
          </h2>

          <p className="mt-3 max-w-[650px] text-[16px] leading-relaxed text-[#4B5563]">
            The platform, the partner and the seller each hold a different part.
            None replaces another.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {responsibilities.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Image Container with Top Right Icon Badge */}
                <div className="relative h-[220px] w-full overflow-hidden bg-[#111827]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-[#926016] shadow-sm">
                    <IconComponent className="h-4 w-4" />
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1FA88A]">
                    ROLE {item.id}
                  </span>
                  <h3 className="mt-1 text-[20px] font-bold leading-snug text-[#111827]">
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

        {/* Bottom Security / Notice Banner */}
        <div className="mt-8 flex items-center gap-3 rounded-[12px] bg-[#FEF9E7] px-5 py-3.5 border border-[#F3E8C6] text-[#7A5510]">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F3E8C6]/50">
            <Lock className="h-3.5 w-3.5 text-[#926016]" />
          </div>
          <p className="text-[12px] font-medium leading-relaxed sm:text-[13px]">
            An inquiry alone gives no one operational seller data, binding
            acceptance, collection rights or inventory. Permissions are checked
            on the server at the point of action.
          </p>
        </div>
      </div>
    </section>
  );
}
