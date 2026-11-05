import Image from "next/image";
import { CircleAlert, ShieldAlert, X } from "lucide-react";
import { Band, SectionHeading, hanken, img } from "./shared";
import AlertPanel from "./AlertPanel";

const hazards = [
  {
    icon: ShieldAlert,
    title: "Battery hazards",
    body: "Lithium and other cells are hazard-classified, with packing and transport rules and specialist processing for damaged units.",
  },
  {
    icon: CircleAlert,
    title: "Electrical safety",
    body: "Electrical state, plug and voltage compatibility and fire-hazard review apply before any route.",
  },
  {
    icon: X,
    title: "Recall & counterfeit",
    body: "Recalled or suspected-counterfeit devices are hard-stopped and escalated — never routed to resale.",
  },
];

export default function BatteryElectrical() {
  return (
    <Band id="battery-electrical" labelledBy="ce-battery-heading" className="flex flex-col gap-10 md:gap-12">
      <SectionHeading
        id="ce-battery-heading"
        num="05"
        label="Battery, electrical & recall"
        title="Hazard-class items get special handling."
        titleClassName="max-w-[700px]"
        lead="Batteries, electrical faults and recalls introduce hard safety rules — some of which stop a lot outright."
      />

      <div className="flex flex-col gap-5">
        <div className="relative aspect-[1248/535] w-full overflow-hidden rounded-[20px] bg-[#1c2a40] shadow-[0_24px_60px_-24px_rgba(12,33,64,0.35)]">
          <Image
            src={img("ce-battery.webp")}
            alt="Technician testing battery terminals with a multimeter"
            fill
            sizes="(min-width: 1440px) 1248px, 100vw"
            className="object-cover"
          />
        </div>

        <ul className={`${hanken} grid gap-4 sm:grid-cols-3`}>
          {hazards.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col gap-2 rounded-2xl border border-t-2 border-[#d9b98a] border-t-[#a0661c] bg-white p-5"
            >
              <span className="mb-2 flex size-11 items-center justify-center rounded-xl bg-[#f5e7d6]">
                <Icon aria-hidden="true" className="size-5 text-[#7a4d0f]" strokeWidth={1.75} />
              </span>
              <h3 className="text-base font-semibold text-[#0f1f3a]">{title}</h3>
              <p className="text-sm leading-[21px] text-[#556987]">{body}</p>
            </li>
          ))}
        </ul>

        <AlertPanel title="Hard stops">
          Damaged battery-containing units, recalled models and suspected counterfeits are blocked from sale routes and
          handled through specialist, licensed processing. Hazard, transport and waste rules remain the accountable
          parties’ responsibility.
        </AlertPanel>
      </div>
    </Band>
  );
}
