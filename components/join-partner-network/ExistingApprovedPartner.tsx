import React from "react";
import { Lock, Users, EyeOff, FileText } from "lucide-react";

export default function ExistingApprovedPartner() {
  const supportItems = [
    {
      title: "Secure partner support",
      description: "Sign in to reach the protected partner area.",
      icon: Lock,
      bgColor: "bg-[#E2F5F0]",
      iconColor: "text-[#1FA88A]",
    },
    {
      title: "General help",
      description: "A public help route is available if you cannot sign in.",
      icon: Users,
      bgColor: "bg-[#FEF6EE]",
      iconColor: "text-[#926016]",
    },
    {
      title: "No case details here",
      description: "Never post account or contract details publicly.",
      icon: EyeOff,
      bgColor: "bg-[#E2F5F0]",
      iconColor: "text-[#1FA88A]",
    },
    {
      title: "No uploads",
      description: "Sensitive documents are not accepted on public forms.",
      icon: FileText,
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
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#111827]">
              09
            </span>
            <div className="h-[1px] w-12 bg-[#E5E7EB]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              EXISTING APPROVED PARTNER
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#111827] sm:text-[44px]">
            Already a partner? Use secure support.
          </h2>

          <p className="mt-3 max-w-[650px] text-[16px] leading-relaxed text-[#4B5563]">
            Case and account matters are handled after secure sign-in, not
            through this public page.
          </p>
        </div>

        {/* Main Content Layout: Left 2x2 Cards Grid + Right Image */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Left 2x2 Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {supportItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${item.bgColor} ${item.iconColor}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-[17px] font-bold text-[#111827]">
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

          {/* Right Large Image Card */}
          <div className="group relative flex h-[360px] w-full flex-col justify-end overflow-hidden rounded-[24px] bg-[#111827] p-5 shadow-sm sm:h-[400px]">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/join/23.png"
                alt="Illustrative imagery"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Bottom Left Badge */}
            <div className="relative z-10 self-start rounded-full bg-white/95 px-4 py-1.5 text-[12px] font-medium text-[#111827] shadow-sm backdrop-blur-sm">
              Illustrative imagery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
