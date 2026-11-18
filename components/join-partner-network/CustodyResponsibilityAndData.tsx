import React from "react";
import { Scale, Truck, DollarSign, EyeOff, Lock } from "lucide-react";

export default function CustodyResponsibilityAndData() {
  const cards = [
    {
      title: "No default title",
      description: "Ownership does not move by assumption.",
      icon: Scale,
    },
    {
      title: "No default custody",
      description: "Who holds goods is set by contract.",
      icon: Truck,
    },
    {
      title: "No payment role",
      description: "No financial service is implied.",
      icon: DollarSign,
    },
    {
      title: "Minimum data",
      description: "Only what a task needs.",
      icon: EyeOff,
    },
    {
      title: "Seller-scoped access",
      description: "Authorized by each seller, per task.",
      icon: Lock,
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#0B1F3F] px-6 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#A67C52]">
              CUSTODY, RESPONSIBILITY AND DATA
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold max-w-2xl tracking-tight text-white sm:text-[44px]">
            Nothing is assumed. Parties and transfers are set by contract.
          </h2>

          <p className="mt-3 max-w-[650px] text-[16px] leading-relaxed text-[#9CA3AF]">
            Partners see the minimum data needed, scoped to a seller and a task.
          </p>
        </div>

        {/* Top Cards Grid (5 cards) */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col justify-between rounded-[20px] border border-[#1E3A6E] bg-[#112952] p-5 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#1A365D] text-[#8FE6CF]">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-[16px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#9CA3AF]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Large Image Card */}
        <div className="mt-8 group relative flex h-[420px] w-full flex-col justify-end overflow-hidden rounded-[24px] bg-[#111827] shadow-sm">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/join/22.png"
              alt="Custody and responsibility imagery"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
