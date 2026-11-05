import Image from "next/image";
import { CheckItem, SectionHeading, Section, img } from "./shared";

export default function ChannelControls() {
  return (
    <Section id="channels" labelledBy="channels-heading">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
        <div className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[20px] bg-[#1c2a40] md:flex-1">
          <Image
            src={img("af-channel-controls.webp")}
            alt="Hand holding up a rust-coloured bomber jacket on a hanger"
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-9 md:flex-1">
          <SectionHeading
            id="channels-heading"
            num="08"
            label="Channel controls"
            title="Sellers decide where goods may go."
            lead="Brand-protection rules limit distribution, co-mingling and presentation. Restricted resale channels are excluded before a route is ever offered."
          />
          <ul className="flex max-w-[260px] flex-col gap-4">
            <CheckItem>Permitted channels defined per audience</CheckItem>
            <CheckItem>Restricted channels excluded automatically</CheckItem>
            <CheckItem>Brand presentation rules enforced</CheckItem>
          </ul>
        </div>
      </div>
    </Section>
  );
}
