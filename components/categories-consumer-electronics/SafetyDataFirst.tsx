import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, hanken, img } from "./shared";

export default function SafetyDataFirst() {
  return (
    <section aria-labelledby="ce-safety-first-heading" className={`${hanken} bg-[#0c1f3f] py-16 md:py-24`}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 md:flex-row md:gap-14 md:px-10 lg:px-[196px]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] md:max-w-[496px] md:flex-1">
          <Image
            src={img("ce-safety-band.webp")}
            alt="Card being tapped on a contactless payment reader"
            fill
            sizes="(min-width: 768px) 496px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-1">
          <Eyebrow label="Safety & data first" tone="dark" />
          <h2
            id="ce-safety-first-heading"
            className="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[40px]"
          >
            Data cleared, batteries safe, recalls screened — then a route.
          </h2>
          <p className="max-w-[500px] text-base leading-6 text-[#d5dceb]">
            Information security and physical safety are assessed before an electronics lot can move. Any unresolved
            risk stops it.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="#"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#a16207] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#b4700c]"
            >
              Request Enterprise Demo
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="#"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:bg-[#eef1f5]"
            >
              Trust &amp; Safety
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
