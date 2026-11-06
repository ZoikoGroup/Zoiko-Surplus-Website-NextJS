import Image from "next/image";
import { Note, SectionHeading, Section, img } from "./shared";

export default function CategoryDefinition() {
  return (
    <Section id="definition" labelledBy="definition-heading">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-gradient-to-tr from-[#24344f] to-[#1c2a40] md:flex-1">
          <Image
            src={img("af-definition.webp")}
            alt="Shopper in a burgundy coat carrying several shopping bags"
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-9 md:flex-1">
          <SectionHeading
            id="definition-heading"
            num="01"
            label="Category definition"
            title={<>What “apparel &amp; footwear surplus” means here.</>}
            lead="Surplus apparel and footwear is business inventory that is no longer destined for its original sales channel — overstock, customer returns, end-of-line ranges and imperfect goods — offered for controlled, seller-approved disposition rather than open resale."
          />
          <Note>
            A definition of scope — not a claim of authenticity, legal entitlement or guaranteed acceptance. Every lot is
            qualified individually.
          </Note>
        </div>
      </div>
    </Section>
  );
}
