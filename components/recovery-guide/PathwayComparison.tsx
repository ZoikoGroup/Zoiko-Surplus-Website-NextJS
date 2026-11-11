import { ArrowLeftRight, Heart, Recycle, Trash2, Users, type LucideIcon } from "lucide-react";
import { GuideSection, MintTile, SandTile, cardShadow } from "./shared";

const pathways: { icon: LucideIcon; mint?: boolean; name: string; purpose: string; boundaries: string }[] = [
  {
    icon: ArrowLeftRight,
    name: "Authorized B2B resale",
    purpose: "Potential value recovery through approved, verified counterparties and channels.",
    boundaries: "Brand permissions, qualified buyers, seller consent, allowable country and category.",
  },
  {
    icon: Users,
    name: "Redistribution / transfer",
    purpose: "Move items through a permitted organizational arrangement and safety checks.",
    boundaries: "Recipient qualification, title and custody, contractual arrangement.",
  },
  {
    icon: Heart,
    mint: true,
    name: "Donation",
    purpose: "Evaluate eligible contributions under approved programs.",
    boundaries: "Not automatic charitable status, tax deduction or partner availability.",
  },
  {
    icon: Recycle,
    name: "Recycling / material recovery",
    purpose: "Consider routes for goods that cannot be sold or reused lawfully.",
    boundaries: "Approved recyclers, material handling, evidence and verified environmental claims.",
  },
  {
    icon: Trash2,
    name: "Secure disposal",
    purpose: "Where safety, recall, brand or legal controls prohibit other routes.",
    boundaries: "Authorized provider, chain of custody, proofs and jurisdictional requirements.",
  },
];

function Tile({ p }: { p: (typeof pathways)[number] }) {
  return p.mint ? <MintTile icon={p.icon} /> : <SandTile icon={p.icon} />;
}

export default function PathwayComparison() {
  return (
    <GuideSection
      id="pathways"
      num="03"
      label="Recovery pathway comparison"
      title="Five permitted routes, five sets of limits."
      lead="Choose by decision criteria first. Each route has boundaries that do not move."
    >
      <div className={`overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}>
        {/* Desktop: a real table. */}
        <table className="hidden w-full text-left md:table">
          <thead className="bg-[#fdf6ec]">
            <tr className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4b5b75]">
              <th scope="col" className="w-[26%] px-5 py-4">Pathway</th>
              <th scope="col" className="w-[37%] px-5 py-4">Purpose and decision factors</th>
              <th scope="col" className="px-5 py-4">Non-negotiable boundaries</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eceef4]">
            {pathways.map((p) => (
              <tr key={p.name} className="align-middle">
                <th scope="row" className="px-5 py-4">
                  <span className="flex items-center gap-3 text-base font-semibold text-[#0f1f3a]">
                    <Tile p={p} />
                    {p.name}
                  </span>
                </th>
                <td className="px-5 py-4 text-sm leading-6 text-[#556987]">{p.purpose}</td>
                <td className="px-5 py-4 text-sm leading-6 text-[#556987]">{p.boundaries}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile: one card per pathway. */}
        <ul className="divide-y divide-[#eceef4] md:hidden">
          {pathways.map((p) => (
            <li key={p.name} className="flex flex-col gap-3 p-5">
              <h3 className="flex items-center gap-3 text-base font-semibold text-[#0f1f3a]">
                <Tile p={p} />
                {p.name}
              </h3>
              <dl className="flex flex-col gap-2 text-sm leading-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4b5b75]">Purpose and decision factors</dt>
                <dd className="text-[#556987]">{p.purpose}</dd>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4b5b75]">Non-negotiable boundaries</dt>
                <dd className="text-[#556987]">{p.boundaries}</dd>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
