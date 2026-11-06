import Image from "next/image";
import { Check } from "lucide-react";
import { Band, SectionHeading, SplitPhoto, hanken, img } from "./shared";

const points = [
  { title: "Hazard-compliant transport", body: "Battery and dangerous-goods rules observed." },
  { title: "Chain of custody", body: "Handover and receipt are evidenced." },
  { title: "Separately contracted", body: "Partners perform these functions, not Zoiko." },
];

export default function LogisticsCustody() {
  return (
    <Band id="logistics" labelledBy="ce-logistics-heading">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
        <SplitPhoto>
          <Image
            src={img("ce-logistics.webp")}
            alt="Warehouse worker in a hi-vis vest checking a tablet beside a laptop"
            fill
            sizes="(min-width: 768px) 596px, 100vw"
            className="object-cover"
          />
        </SplitPhoto>

        <div className="flex flex-col gap-9 md:flex-1">
          <SectionHeading
            id="ce-logistics-heading"
            num="08"
            label="Logistics & custody"
            title="Safe movement by licensed partners."
            lead="Where devices move, hazard-class packing and transport rules apply, and licensed partners handle custody. Zoiko isn’t a refurbisher, transporter, warranty provider or waste handler by default."
          />
          <ul className={`${hanken} flex flex-col gap-5`}>
            {points.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] font-semibold text-[#0f1f3a]">{p.title}</h3>
                  <p className="text-sm leading-5 text-[#556987]">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Band>
  );
}
