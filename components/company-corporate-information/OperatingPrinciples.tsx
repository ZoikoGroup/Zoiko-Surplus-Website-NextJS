import { BadgeCheck, Eye, FolderCheck, Lock, Recycle, ShieldCheck } from "lucide-react";
import { Container, SectionHeading, hanken } from "./shared";

const principles = [
  { icon: ShieldCheck, title: "Governance first", body: "Policy, eligibility and category rules shape every step." },
  { icon: Eye, title: "Transparency", body: "Clear roles, limits and documented decisions." },
  { icon: Recycle, title: "Responsibility", body: "Supporting responsible, lawful disposition outcomes." },
  { icon: BadgeCheck, title: "Accountability", body: "Distinct roles with recorded authority." },
  { icon: Lock, title: "Privacy by design", body: "Need-to-know access; confidential data protected." },
  { icon: FolderCheck, title: "Evidence & audit", body: "Decisions and outcomes are documented." },
];

export default function OperatingPrinciples() {
  return (
    <section aria-labelledby="principles-heading" className="bg-[#15263f] py-16 md:py-24">
      <Container className="flex flex-col gap-12 md:gap-14">
        <SectionHeading
          id="principles-heading"
          num="07"
          label="Operating principles"
          title="The principles behind the platform."
          lead="How Zoiko Surplus is designed to operate — described qualitatively, not as certifications or endorsements."
          tone="dark"
        />
        <ul className={`${hanken} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}>
          {principles.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-2 rounded-2xl border border-[#2c4466] bg-[#1e3352] p-6 pb-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-white/10">
                <Icon aria-hidden="true" className="size-5 text-[#5fd0ad]" strokeWidth={1.75} />
              </span>
              <h3 className="pt-1.5 text-base font-semibold text-white">{title}</h3>
              <p className="max-w-[260px] text-base leading-[25px] text-[#d5dceb]">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
