import { BadgeCheck, Share2, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { Container, SectionHeading, hanken } from "./shared";

const roles = [
  { icon: SlidersHorizontal, title: "Seller", body: "Owns the goods and the obligation to disclose, qualify and approve routes." },
  { icon: BadgeCheck, title: "Buyer", body: "Verified for role and eligibility; responsible for lawful, capable use." },
  { icon: ShieldCheck, title: "Platform", body: "Governs, matches and records — it doesn’t own, inspect or certify goods." },
  {
    icon: Share2,
    title: "Partners",
    body: "Licensed providers perform logistics, recovery and payment, separately contracted.",
  },
];

export default function Roles() {
  return (
    <section aria-labelledby="roles-heading" className="bg-[#0f2140] py-16 md:py-24">
      <Container className="flex flex-col gap-12 md:gap-14">
        <SectionHeading
          id="roles-heading"
          num="02"
          label="Roles & accountability"
          title="Who is responsible for what."
          lead="Four roles, kept distinct and accountable. The platform governs and records; it never takes the seller’s or buyer’s legal responsibilities."
          tone="dark"
          titleClassName="max-w-[500px]"
        />
        <ul className={`${hanken} grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {roles.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-1.5 rounded-2xl border border-white/15 bg-[#1e3352] p-6 pb-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#e3f4ee]">
                <Icon aria-hidden="true" className="size-5 text-[#0b7a5c]" strokeWidth={1.75} />
              </span>
              <h3 className="pt-1.5 text-base font-semibold text-white">{title}</h3>
              <p className="max-w-[220px] text-base leading-6 text-[#cbd5e4]">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
