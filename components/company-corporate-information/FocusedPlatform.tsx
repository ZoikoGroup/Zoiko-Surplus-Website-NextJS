import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, hanken, img } from "./shared";

// Unnumbered band between "Market activation" and "Governance".
export default function FocusedPlatform() {
  return (
    <section aria-labelledby="focused-heading" className={`${hanken} py-8 md:py-12`}>
      <Container className="lg:px-[115px]">
        <div className="grid overflow-hidden rounded-[20px] md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 bg-[#0f1f3a] px-6 py-12 md:px-10 lg:px-[40px]">
            <h2 id="focused-heading" className="text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[40px]">
              A focused platform within a wider group.
            </h2>
            <p className="max-w-[460px] text-base leading-6 text-white/85">
              Zoiko Surplus is operated by Zoiko Supply Group Inc., a Zoiko Group company — one platform with a clear,
              governed remit.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
              >
                About Zoiko Surplus
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="relative min-h-[280px] md:min-h-[446px]">
            <Image
              src={img("focused-platform.webp")}
              alt="Two colleagues reviewing a tablet in a warehouse aisle of labelled crates"
              fill
              sizes="(min-width: 768px) 620px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
