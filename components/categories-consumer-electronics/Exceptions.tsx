import Image from "next/image";
import { Band, SectionHeading, img } from "./shared";
import AlertPanel from "./AlertPanel";

export default function Exceptions() {
  return (
    <Band id="exceptions" labelledBy="ce-exceptions-heading" className="flex flex-col gap-10 md:gap-12">
      <SectionHeading
        id="ce-exceptions-heading"
        num="09"
        label="Exceptions & commercial boundaries"
        title="Holds, rejections and recalls."
        lead="Electronics has strict exception handling, and clear commercial limits."
        titleClassName="max-w-[520px]"
      />

      <div className="flex flex-col gap-4">
        <div className="relative aspect-[1248/587] w-full overflow-hidden rounded-[20px] bg-[#0c1f3f]">
          <Image
            src={img("ce-exceptions.webp")}
            alt="Engineer with a laptop walking beside server racks in a data centre"
            fill
            sizes="(min-width: 1440px) 1248px, 100vw"
            className="object-cover"
          />
        </div>
        <AlertPanel title="Hold, reject, recall">
          Data-exposure risk, battery or electrical hazards, recalls, counterfeits or unclear title trigger a hold,
          rejection or escalation before any exposure. Warranties are not transferred by default, payments run through
          authorized providers where enabled, and no guaranteed outcome, price or data-erasure is implied.
        </AlertPanel>
      </div>
    </Band>
  );
}
