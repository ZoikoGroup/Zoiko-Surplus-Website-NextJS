import Image from "next/image";
import { ShieldAlert } from "lucide-react";
import { Band, SectionHeading, SplitPhoto, hanken, img } from "./shared";

export default function CategoryAvailability() {
  return (
    <Band id="availability" labelledBy="ce-availability-heading">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
        <SplitPhoto>
          <Image
            src={img("ce-availability.webp")}
            alt="Headphones resting on a keyboard beside a wireless mouse"
            fill
            sizes="(min-width: 768px) 596px, 100vw"
            className="object-cover"
          />
        </SplitPhoto>

        <div className="flex flex-col gap-9 md:flex-1">
          <SectionHeading
            id="ce-availability-heading"
            num="01"
            label="Category availability"
            title="A conditional overview not a live market."
            titleClassName="max-w-[606px]"
            lead="Electronics is a conditional public educational category. Its presence here explains the model; it does not confirm active stock, pricing or trading."
          />
          <div className={`${hanken} flex items-start gap-2.5 rounded-xl border border-dashed border-[#d3dbe6] bg-white px-4 py-4`}>
            <ShieldAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#926016]" strokeWidth={1.75} />
            <p className="text-sm leading-[22px] text-[#556987]">
              <strong className="font-bold text-[#0f1f3a]">Prepared for explicit approval.</strong> Data-bearing
              devices, batteries, electrical safety and recalls add controls on top of standard qualification.
              Availability is activated by market, product and legal arrangement — a region selection never activates
              trading.
            </p>
          </div>
        </div>
      </div>
    </Band>
  );
}
