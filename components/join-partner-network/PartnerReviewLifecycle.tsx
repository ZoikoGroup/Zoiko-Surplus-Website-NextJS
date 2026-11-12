import React from "react";
import {
  FileText,
  Search,
  ClipboardList,
  Scale,
  CheckCircle2,
  Truck,
} from "lucide-react";

export default function PartnerReviewLifecycle() {
  const stages = [
    {
      id: "1",
      title: "Interest",
      description: "You send an expression of interest.",
      image: "/images/join/16.png",
      icon: FileText,
    },
    {
      id: "2",
      title: "Fit screen",
      description: "Partnerships checks basic fit.",
      image: "/images/join/29.png",
      icon: Search,
    },
    {
      id: "3",
      title: "Due diligence",
      description: "Capability, legal and category checks.",
      image: "/images/join/17.png",
      icon: ClipboardList,
    },
    {
      id: "4",
      title: "Terms",
      description: "A contract sets roles and duties.",
      image: "/images/join/18.png",
      icon: Scale,
    },
    {
      id: "5",
      title: "Activation",
      description: "A region or category is opened for you.",
      image: "/images/join/19.png",
      icon: CheckCircle2,
    },
    {
      id: "6",
      title: "Assignment",
      description: "A seller authorizes a specific task.",
      image: "/images/join/20.png",
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
              06
            </span>
            <div className="h-[1px] w-12 bg-[#E5D5C5]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              PARTNER REVIEW LIFECYCLE
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#111827] sm:text-[44px]">
            Six separate stages. Interest is only the first.
          </h2>

          <p className="mt-3 max-w-[650px] text-[16px] leading-relaxed text-[#4B5563]">
            Each stage is its own decision. Seller-specific assignments need
            further authorization. No review time is promised.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((item) => {
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
                    STAGE {item.id}
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
