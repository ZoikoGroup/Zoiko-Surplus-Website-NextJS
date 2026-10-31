import Image from "next/image";

const IMG = "/images/enterprise-overview/roles-permissions";

// Each role carries its own line breaks per viewport, matching the Figma frames.
const roles = [
  {
    title: "Seller roles",
    icon: "role-1-icon",
    desktop: ["Define, approve and change", "what is offered, to whom and", "under which rules."],
    mobile: ["Define, approve and change what is offered,", "to whom and under which rules."],
  },
  {
    title: "Reviewer controls",
    icon: "role-2-icon",
    desktop: [
      "A named reviewer approves",
      "route changes at defined",
      "checkpoints — nothing is one-",
      "click irreversible.",
    ],
    mobile: ["A named reviewer approves route changes", "at defined checkpoints — nothing is one-", "click irreversible."],
  },
  {
    title: "Approved buyer separation",
    icon: "role-3-icon",
    desktop: [
      "Verified buyers are a distinct",
      "audience; verification,",
      "invitation, category and",
      "transaction permission are",
      "separate checks.",
    ],
    mobile: [
      "Verified buyers are a distinct audience;",
      "verification, invitation, category and",
      "transaction permission are separate checks.",
    ],
  },
  {
    title: "Partner separation",
    icon: "role-4-icon",
    desktop: [
      "Partners operate only where",
      "separately contracted and",
      "activated — a distinct role",
      "from buyers.",
    ],
    mobile: [
      "Partners operate only where separately",
      "contracted and activated — a distinct role",
      "from buyers.",
    ],
  },
];

function Lines({ lines, brClass }: { lines: string[]; brClass: string }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={line}>
          {i > 0 && <br className={brClass} />}
          {i > 0 && <span className={brClass === "hidden min-[1440px]:block" ? "min-[1440px]:hidden" : ""}> </span>}
          {line}
        </span>
      ))}
    </>
  );
}

export default function RolesPermissions() {
  return (
    <section
      id="roles-permissions"
      className="bg-[#fbf6ef] py-14 font-[family-name:var(--font-hanken)] md:bg-[#0c2140] md:p-24"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-4 md:gap-[48.01px] md:px-0">
        {/* Header */}
        <div className="flex w-full max-w-[625px] flex-col gap-4 pt-1.5">
          <div className="relative h-[20.14px] w-[236.77px] text-[13px] leading-[20.15px] tracking-[1.82px] uppercase">
            <span className="absolute top-1/2 left-0 w-[18.2px] -translate-y-1/2 font-semibold text-[#0c2140] opacity-50 md:font-extrabold md:text-[#eaf1f8]">
              <span className="md:hidden">09</span>
              <span className="hidden md:inline">11</span>
            </span>
            <span className="absolute top-1/2 left-[28.2px] h-px w-[28px] -translate-y-1/2 bg-[#0f7a60] opacity-50 md:bg-[#1cad8f]" />
            <span className="absolute top-[calc(50%-0.57px)] left-[66.2px] -translate-y-1/2 font-semibold whitespace-nowrap text-[#0f7a60] md:text-[#1cad8f]">
              Roles &amp; permissions
            </span>
          </div>
          <div className="flex flex-col">
            <h2 className="pt-[30.8px] pb-0 text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:pt-[31.2px] md:pb-[0.585px] md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px] md:text-white">
              Separation of duties, by
              <br />
              design.
            </h2>
            <p className="mt-4 text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[26px] md:text-white/88">
              <span className="md:hidden">
                Seller roles, reviewer controls and approved
                <br />
                buyer/partner separation keep authority
                <br />
                explicit and auditable.
              </span>
              <span className="hidden md:inline">
                Seller roles, reviewer controls and approved buyer/partner
                <br />
                separation keep authority explicit and auditable.
              </span>
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="flex flex-col rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_1px_1px_rgba(12,33,64,0.06),0_1px_1.5px_rgba(12,33,64,0.08)] md:bg-[#1c3356]"
            >
              <div className="flex flex-col gap-[6.8px] p-[18px] md:gap-[7px] md:p-[26px]">
                <div className="flex w-10 items-center justify-center rounded-[11px] bg-[#dcf3ed] py-2.5 md:bg-[#1b455d]">
                  <Image
                    src={`${IMG}/${role.icon}-mobile.svg`}
                    alt=""
                    width={20}
                    height={20}
                    className="md:hidden"
                  />
                  <Image
                    src={`${IMG}/${role.icon}-desktop.svg`}
                    alt=""
                    width={20}
                    height={20}
                    className="hidden md:block"
                  />
                </div>
                <h3 className="pt-[5.2px] text-[16.3px] leading-[17.95px] font-semibold tracking-[-0.326px] text-[#0c2140] md:text-white">
                  {role.title}
                </h3>
                <p className="pb-[0.6px] text-[16px] leading-[24.8px] text-[#5a6b7b] md:text-white/88">
                  <span className="md:hidden">
                    <Lines lines={role.mobile} brClass="" />
                  </span>
                  <span className="hidden md:inline">
                    <Lines lines={role.desktop} brClass="hidden min-[1440px]:block" />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
