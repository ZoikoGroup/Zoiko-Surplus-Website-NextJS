import Image from "next/image";
import { Building2, Check, ShieldCheck, Truck, UserCheck, type LucideIcon } from "lucide-react";
import { Container, SectionHeading, cardShadow, hanken, hmwImg, sora } from "./shared";

const roles: { icon: LucideIcon; title: string; points: string[]; note: string; image: string; alt: string }[] = [
  {
    icon: Building2,
    title: "Seller",
    points: ["Authorizes the stock and sets policies", "Chooses audiences and approves offers", "Supplies evidence and records"],
    note: "Seller authorization is an explicit control.",
    image: hmwImg("role-seller.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse",
  },
  {
    icon: UserCheck,
    title: "Buyer",
    points: ["Applies and is verified", "Acts on seller-approved invitations", "Meets category and market eligibility"],
    note: "Verification is distinct from private market access.",
    image: hmwImg("role-buyer.webp"),
    alt: "Professional working on a laptop in a warehouse",
  },
  {
    icon: Truck,
    title: "Partner",
    points: ["Works to a specific mandate", "Keeps evidence for its part", "Follows approved rules"],
    note: "No partnership or contract is assumed.",
    image: hmwImg("role-partner.webp"),
    alt: "Logistics worker with a clipboard at a delivery van",
  },
  {
    icon: ShieldCheck,
    title: "Zoiko Surplus",
    points: ["Orchestration and governance", "Exchange infrastructure", "Evidence and escalation processes"],
    note: "Not the owner of goods, a warehouse, a carrier or a payment intermediary.",
    image: hmwImg("role-platform.webp"),
    alt: "Colleagues checking goods together on a workshop floor",
  },
];

export default function RoleMap() {
  return (
    <section id="roles" aria-labelledby="roles-heading" className={`${hanken} scroll-mt-28 bg-[#0c1f3f] py-16 md:py-24`}>
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading
          id="roles-heading"
          tone="dark"
          label="Role map"
          title={
            <>
              Four parties, four sets
              <br className="hidden md:block" /> of responsibilities.
            </>
          }
          lead="Permissions are not shared. Each role is limited to what it may do."
          titleClassName="max-w-none"
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ icon: Icon, title, points, note, image, alt }) => (
            <li key={title} className={`flex flex-col overflow-hidden rounded-2xl bg-white ${cardShadow}`}>
              <div className="relative aspect-[295/130] w-full bg-[#16263f]">
                <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 295px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="relative flex flex-1 flex-col gap-3 px-5 pt-10 pb-6">
                <span className="absolute -top-6 left-4 flex size-12 items-center justify-center rounded-xl border-4 border-white bg-[#f5e3c3] text-[#8a5a14]">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
                <ul className="flex flex-col gap-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm leading-5 text-[#3d4a60]">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#8a5a14]" strokeWidth={2} />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-dashed border-[#dfe5ed] pt-3 text-xs leading-5 text-[#556987]">{note}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
