import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, hanken, img } from "./shared";

// Unnumbered band between "Claims" and "Coverage".
export default function HonestByDesign() {
  return (
    <section aria-labelledby="honest-heading" className={`${hanken} py-8 md:py-12`}>
      <Container className="lg:px-[115px]">
        <div className="grid overflow-hidden rounded-[20px] md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 bg-[#0f1f3a] px-6 py-12 md:px-10">
            <Eyebrow label="Honest by design" tone="dark" />
            <h2
              id="honest-heading"
              className="pt-2 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-[40px]"
            >
              Controls reduce risk.
              <br />
              Nothing removes it.
            </h2>
            <p className="max-w-[440px] pt-2 text-base leading-[26px] text-white/85 md:text-lg">
              We state what each control does and where it stops — so participation is informed, not assumed.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="#"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
              >
                Request Enterprise Demo
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
              src={img("honest-by-design.webp")}
              alt="Grey sofa with patterned cushions beside a copper floor lamp"
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
