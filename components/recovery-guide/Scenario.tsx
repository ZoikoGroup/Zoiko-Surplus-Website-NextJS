import Image from "next/image";
import {
  Clock,
  FileCheck,
  Globe,
  Scale,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  User,
  type LucideIcon,
} from "lucide-react";
import { Container, SectionHeading, SandTile, hanken, img } from "./shared";

const steps: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Search, title: "Assess", body: "Grade condition, count units and check brand limits." },
  { icon: SlidersHorizontal, title: "Compare", body: "Weigh resale against redistribution using the eight factors." },
  { icon: ShieldCheck, title: "Confirm", body: "Check market status and buyer eligibility before any offer." },
  { icon: FileCheck, title: "Record", body: "Keep approvals, custody and outcome records." },
];

const meta: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: User, label: "Editor", value: "Named at approval" },
  { icon: Scale, label: "Reviewer", value: "Legal and category safety" },
  { icon: Clock, label: "Revision and review", value: "Dates set at approval" },
  { icon: Globe, label: "Market applicability", value: "Informational, per market" },
];

export default function Scenario() {
  return (
    <section id="scenario" aria-labelledby="scenario-heading" className={`${hanken} scroll-mt-28 py-8 md:py-12`}>
      <Container className="flex flex-col gap-12">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Two staggered photos on desktop; stacked on mobile. */}
          <div className="grid grid-cols-2 gap-4 lg:block lg:pt-6">
            <div className="relative aspect-[473/334] overflow-hidden rounded-[20px] bg-[#16263f] lg:ml-auto lg:w-[80%]">
              <Image
                src={img("scenario-planning.webp")}
                alt="Two colleagues planning at a desk with parcels"
                fill
                sizes="(min-width: 1024px) 473px, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[357/268] overflow-hidden rounded-[20px] bg-[#16263f] lg:mt-8 lg:w-[60%]">
              <Image
                src={img("scenario-team.webp")}
                alt="Colleagues checking goods together at a workbench"
                fill
                sizes="(min-width: 1024px) 357px, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <SectionHeading
              id="scenario-heading"
              num="11"
              label="Illustrative scenario"
              title="A home-goods distributor with surplus seasonal stock."
              lead="This scenario is invented. It contains no real company, price or impact figure."
            />
            <ol className="flex flex-col gap-6">
              {steps.map((s) => (
                <li key={s.title} className="flex items-start gap-4">
                  <SandTile icon={s.icon} size="sm" />
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-base font-semibold text-[#0f1f3a]">{s.title}</h3>
                    <p className="text-sm leading-6 text-[#556987]">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <dl className="grid gap-5 rounded-2xl border border-[#e6e9ef] bg-white p-5 shadow-[0_10px_30px_-20px_rgba(12,33,64,0.3)] sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="flex items-center gap-3">
              <SandTile icon={m.icon} size="sm" />
              <div className="flex flex-col gap-0.5">
                <dt className="text-xs font-medium uppercase tracking-[0.14em] text-[#556987]">{m.label}</dt>
                <dd className="text-sm text-[#0f1f3a]">{m.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
