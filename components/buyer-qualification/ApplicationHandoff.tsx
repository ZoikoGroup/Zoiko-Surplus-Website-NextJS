import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/categories/shared";
import { Container, ImageTag, hanken, img, sora } from "./shared";

export default function ApplicationHandoff() {
  return (
    <section aria-labelledby="handoff-heading" className={`${hanken} py-8 md:py-12`}>
      <Container>
        <div className="grid overflow-hidden rounded-[20px] lg:mx-auto lg:max-w-[1212px] lg:grid-cols-2">
          <div className="flex flex-col gap-5 bg-[#0c1f3f] px-6 py-12 md:px-10 md:py-16">
            <Eyebrow label="Application handoff" tone="dark" />
            <h2
              id="handoff-heading"
              className={`${sora} text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-white md:text-[40px]`}
            >
              Ready to start a review?
            </h2>
            <p className="text-base leading-7 text-[#d5dceb] md:text-lg">
              Applying does not guarantee approval or access. The application opens only where it is live and approved.
              If it is not, use the help options below.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/become-a-verified-buyer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
              >
                Apply to Become a Buyer
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-full border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Get help first
              </Link>
            </div>
            <p className="text-sm leading-6 text-[#a9b6cc]">
              Do not include IDs, documents or sensitive data in any public form.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full bg-[#16263f] lg:aspect-auto">
            <Image
              src={img("handoff-apparel.webp")}
              alt="Footwear and apparel display wall in a store"
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
            <span className="absolute right-4 bottom-4">
              <ImageTag>Apparel &amp; Footwear</ImageTag>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
