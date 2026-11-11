import Image from "next/image";
import { EyeOff } from "lucide-react";
import { Container, SectionHeading, hanken, img } from "./shared";

const hidden = [
  "Seller or brand names tied to stock",
  "Pricing, volumes and lot identifiers",
  "Photos of real lots and sites",
  "Partner names without permission",
];

export default function Privacy() {
  return (
    <section id="privacy" aria-labelledby="privacy-heading" className={`${hanken} scroll-mt-28 py-8 md:py-12`}>
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[596/461] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image
            src={img("privacy.webp")}
            alt="Two colleagues reviewing stock on a laptop in a warehouse aisle"
            fill
            sizes="(min-width: 1024px) 596px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="privacy-heading"
            num="09"
            label="Privacy and brand confidentiality"
            title="What this page will never show."
            lead="Seller-private details stay behind server-side authorization. A public guide has no inventory."
          />
          <ul className="flex flex-col gap-3">
            {hidden.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#e6e9ef] bg-white px-4 py-3 text-sm text-[#0f1f3a]"
              >
                <EyeOff aria-hidden="true" className="size-4 shrink-0 text-[#b5651d]" strokeWidth={1.75} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
