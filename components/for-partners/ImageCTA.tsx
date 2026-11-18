import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { hanken, sora } from "./shared";

type CTALink = { label: string; href: string };

// Rounded photo banner with a centred heading and two buttons.
// Used by For Partners, Category Eligibility and the Seller Readiness Guide.
export default function ImageCTA({
  id,
  image,
  title,
  primary,
  secondary,
}: {
  id: string;
  /** Background photo; it already carries its dark overlay. */
  image: string;
  title: ReactNode;
  primary: CTALink;
  secondary?: CTALink;
}) {
  return (
    <section aria-labelledby={id} className={`${hanken} bg-white px-5 pt-8 pb-16 md:px-6 md:pt-12 md:pb-24`}>
      <div className="relative mx-auto flex min-h-[420px] w-full max-w-[1392px] items-center justify-center overflow-hidden rounded-[28px] bg-[#1c2a40] md:min-h-[605px] md:rounded-[40px]">
        <Image src={image} alt="" fill sizes="(min-width: 1440px) 1392px, 100vw" className="object-cover" />
        <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
          <h2
            id={id}
            className={`${sora} text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl md:text-[64px]`}
          >
            {title}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primary.href}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              {primary.label}
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex min-h-12 items-center rounded-full border border-white/60 px-7 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
