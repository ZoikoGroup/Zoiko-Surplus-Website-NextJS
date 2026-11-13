import Image from "next/image";
import {
  Coins,
  FileCheck,
  Globe,
  Lock,
  Package,
  Scale,
  TriangleAlert,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Container, SectionHeading, baImg, hanken, sora } from "./shared";

const rules: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: TriangleAlert, title: "Product and category", body: "Safety and category rules apply to every lot." },
  { icon: Globe, title: "Market and legal", body: "Local rules and approved corridors." },
  { icon: Lock, title: "Privacy", body: "Personal and confidential data stays protected." },
  { icon: Scale, title: "Screening", body: "Restrictions can limit participation." },
  { icon: Package, title: "No guarantee of condition", body: "Access does not warrant any goods." },
  { icon: Coins, title: "No settlement promise", body: "Payment terms are set in agreements." },
  { icon: Truck, title: "No default shipping role", body: "Zoiko Surplus is not a carrier." },
  { icon: FileCheck, title: "Terms apply", body: "The applicable agreement governs." },
];

export default function SafetyBoundaries() {
  return (
    <section
      id="safety-boundaries"
      aria-labelledby="safety-boundaries-heading"
      className={`${hanken} scroll-mt-28 my-8 bg-[#0c1f40] py-16 md:my-12 md:py-24`}
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading
          id="safety-boundaries-heading"
          label="Safety, compliance and trust boundaries"
          tone="dark"
          title={
            <>
              Rules that apply before
              <br className="hidden md:block" /> any purchase.
            </>
          }
          lead="Access never overrides these."
        />
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[1240/384] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={baImg("safety-documents.webp")}
              alt="Two people signing a document on a clipboard"
              fill
              sizes="(min-width: 1440px) 1240px, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rules.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex flex-col gap-2 rounded-2xl bg-[#183262] p-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-[#12464f] text-[#5fd0ad]">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className={`${sora} pt-2 text-base font-semibold text-white`}>{title}</h3>
                <p className="text-sm leading-6 text-[#c3cde0]">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
