import Image from "next/image";
import { ClipboardList, ReceiptText, Users } from "lucide-react";
import { CornerIcon, GuideSection, cardShadow, fvbImg, sora, type PhotoCardItem } from "./shared";

const requirements: PhotoCardItem[] = [
  {
    icon: Users,
    title: "Business representative",
    body: "A person acting for a company, not a consumer.",
    image: fvbImg("requirement-business-representative.webp"),
    alt: "Shop worker labelling boxes while a colleague smiles at a desk",
  },
  {
    icon: ClipboardList,
    title: "Legitimate purpose",
    body: "A real business reason to buy surplus goods.",
    image: fvbImg("requirement-legitimate-purpose.webp"),
    alt: "Two people checking goods on shop shelving",
  },
  {
    icon: ReceiptText,
    title: "Legal organization",
    body: "A registered entity that can be identified and checked.",
    image: fvbImg("requirement-legal-organization.webp"),
    alt: "Steel stock stacked in an industrial warehouse",
  },
];

export default function WhoMayExplore() {
  return (
    <GuideSection
      id="who-may-explore"
      num="01"
      label="Who may explore qualification"
      title="Business buyers only."
      lead="Anyone can read this page. Applying is for organizations that fit. No minimum size or turnover is stated, because none is approved."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {requirements.map((r, i) => (
          <li
            key={r.title}
            className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
          >
            <div className="relative aspect-[401/180] w-full bg-[#16263f]">
              <Image src={r.image} alt={r.alt} fill sizes="(min-width: 768px) 401px, 100vw" className="object-cover" />
              <CornerIcon icon={r.icon} />
            </div>
            <div className="flex flex-col gap-2 p-6 pb-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#16a37a]">
                Requirement {i + 1}
              </span>
              <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{r.title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{r.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
