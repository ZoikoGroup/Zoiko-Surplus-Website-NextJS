import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { Container, SectionHeading, hanken } from "./shared";

// Navy "Contact and escalation" band: no notice or contact details are published until approved.
// Used by the Terms of Use and Privacy Notice pages.
export default function Escalation({
  title,
  lead,
  primary,
  image,
  alt,
}: {
  title: ReactNode;
  lead: string;
  /** Gold button; the white "Contact Support" button is fixed. */
  primary: { label: string; href: string };
  image: string;
  alt: string;
}) {
  return (
    <section id="escalation" aria-labelledby="escalation-heading" className={`${hanken} scroll-mt-28 bg-[#0c1f3f] py-16 md:py-24`}>
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,608px)] lg:gap-8">
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="escalation-heading"
            tone="dark"
            label="Contact and escalation"
            title={title}
            titleClassName="max-w-none"
            leadClassName="max-w-[620px] !text-base md:!text-lg"
            lead={lead}
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <Link
                href={primary.href}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
              >
                {primary.label}
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:bg-[#eef1f6]"
              >
                Contact Support
              </Link>
            </div>
            <p className="flex max-w-[608px] items-start gap-2.5 rounded-lg bg-[#fdf6dd] px-4 py-3 text-sm leading-6 text-[#3d2a0c]">
              <TriangleAlert aria-hidden="true" className="mt-1 size-4 shrink-0" strokeWidth={1.75} />
              Preview build. Both routes are placeholders. No email address or postal address is shown.
            </p>
          </div>
        </div>
        <div className="relative aspect-[608/370] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 608px, 100vw" className="object-cover" />
        </div>
      </Container>
    </section>
  );
}
