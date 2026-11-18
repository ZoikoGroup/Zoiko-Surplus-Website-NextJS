import React from "react";
import {
  Share2,
  ArrowLeftRight,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function RelatedRoutes() {
  const routes = [
    {
      title: "Surplus Network",
      description: "What the Surplus Network covers.",
      image: "/images/join/24.png",
      icon: Share2,
      href: "#",
    },
    {
      title: "How It Works",
      description: "The governed seven-stage model.",
      image: "/images/join/25.png",
      icon: ArrowLeftRight,
      href: "#",
    },
    {
      title: "Contact Support",
      description: "Help for existing partners.",
      image: "/images/join/26.png",
      icon: Users,
      href: "#",
    },
    {
      title: "Request Enterprise Demo",
      description: "For sellers, a separate route.",
      image: "/images/join/27.png",
      icon: Building2,
      href: "#",
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#FFFFFF] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#0B1F3F]">
              11
            </span>
            <div className="h-[1px] w-12 bg-[#E5E7EB]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              RELATED ROUTES
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#0B1F3F] sm:text-[44px]">
            Where to go next.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div>
                  {/* Top Image with Floating Icon Badge */}
                  <div className="relative h-[135px] w-full overflow-hidden bg-[#111827]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

                    {/* Top Right Icon Badge */}
                    <div className="absolute right-3.5 top-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-[#926016] shadow-sm">
                      <IconComponent className="h-4 w-4 stroke-[2]" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-5 pt-5">
                    <h3 className="text-[17px] font-bold leading-snug text-[#0B1F3F]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#4B5563]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Pending Link */}
                <div className="px-5 pb-5 pt-6">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#926016] transition-transform duration-200 group-hover:translate-x-0.5">
                    <span>Pending</span>
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.25]" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
