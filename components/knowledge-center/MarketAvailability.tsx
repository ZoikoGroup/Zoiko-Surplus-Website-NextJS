import Image from "next/image";
import { Globe, MapPin, Users, Utensils, type LucideIcon } from "lucide-react";
import { Container, SectionHeading, hanken, img } from "./shared";

const rules: { icon: LucideIcon; title: string; body: string; kind: "Rule" | "Gate" }[] = [
  { icon: Globe, title: "Locale is language only", body: "Selecting a market never unlocks a category.", kind: "Rule" },
  { icon: MapPin, title: "Market status is sourced", body: "Shown only after registry verification.", kind: "Rule" },
  { icon: Utensils, title: "Food stays informational", body: "Separate safety, shelf-life and local-law review.", kind: "Gate" },
  { icon: Users, title: "Eligibility is checked", body: "Qualified professional organizations only.", kind: "Gate" },
];

const photos = [
  { src: img("market-vehicles.webp"), alt: "Vehicles parked in a showroom" },
  { src: img("market-energy.webp"), alt: "Wind turbines over a field" },
  { src: img("market-materials.webp"), alt: "Steel stock in a large construction materials hall" },
];

export default function MarketAvailability() {
  return (
    <section aria-labelledby="kc-market-heading" className={`${hanken} bg-[#0c2140] py-14 md:py-16`}>
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="kc-market-heading"
            label="Market and category availability"
            tone="dark"
            title={
              <>
                Reading about it
                <br />
                is not access to it.
              </>
            }
            lead="Choosing a language or region changes the wording you see. It does not grant authorization. Availability is confirmed against a separate market registry, market by market."
          />
          <ul className="grid grid-cols-3 gap-3">
            {photos.map((p) => (
              <li key={p.src} className="relative aspect-[175/110] overflow-hidden rounded-xl bg-[#16263f]">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 175px, 33vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-col gap-3">
          {rules.map(({ icon: Icon, title, body, kind }) => (
            <li key={title} className="flex items-center gap-4 rounded-xl bg-[#13305a] px-4 py-3.5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#134e4a]/70 text-[#5fd0ad]">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="text-sm text-[#b8c4da]">{body}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-1 text-xs font-medium text-[#d5dceb]">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-[#d08a2c]" />
                {kind}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
