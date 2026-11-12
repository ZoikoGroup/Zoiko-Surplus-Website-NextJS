import React from "react";

export default function QualificationExpectations() {
  const expectations = [
    {
      title: "Organization",
      description: "Legal entity, registration and operating details.",
    },
    {
      title: "Lawful authority",
      description:
        "Proof the applicant can act for the organization and perform the service.",
    },
    {
      title: "Capabilities",
      description: "What you do, where, and with what facilities.",
    },
    {
      title: "References",
      description: "Verifiable references, where requested.",
    },
    {
      title: "Documentation",
      description:
        "Insurance, licences and category evidence, shared only through the approved process.",
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#FFFFFF] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#111827]">
              07
            </span>
            <div className="h-[1px] w-12 bg-[#E5E7EB]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              QUALIFICATION EXPECTATIONS
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#111827] sm:text-[44px]">
            What a reviewer may ask for later.
          </h2>

          <p className="mt-3 max-w-[650px] text-[16px] leading-relaxed text-[#4B5563]">
            Illustrative. No document is collected on this page, and no
            requirement here is a legal threshold.
          </p>
        </div>

        {/* Main Content Layout: Left Checklist + Right Image */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Left Items List */}
          <div className="flex flex-col gap-6">
            {expectations.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-[#F5E6C8]" />
                <div className="flex flex-col">
                  <h3 className="text-[15px] font-bold leading-snug text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#4B5563]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Large Image Card */}
          <div className="group relative flex h-[360px] w-full flex-col justify-end overflow-hidden rounded-[24px] bg-[#111827] p-5 shadow-sm sm:h-[400px]">
            <div className="absolute inset-0 z-0">
              <img
                src="/images/join/21.png"
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
