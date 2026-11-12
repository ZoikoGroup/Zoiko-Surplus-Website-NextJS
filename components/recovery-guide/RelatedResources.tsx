import Image from "next/image";
import { ClipboardCheck, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react";
import { GuideSection, PhotoBadge, SandTile, img } from "./shared";

// Not linked yet: each article is still pending approval.
const related: { icon: LucideIcon; format: string; title: string; body: string; image: string; alt: string }[] = [
  {
    icon: ClipboardCheck,
    format: "Checklist",
    title: "Seller Readiness Checklist",
    body: "Prepare inventory attributes and evidence before a discussion.",
    image: img("related-seller-checklist.webp"),
    alt: "Gloved hand inspecting packaged goods",
  },
  {
    icon: UserCheck,
    format: "Guide",
    title: "Buyer Qualification Guide",
    body: "How applying, verification and invitations work.",
    image: img("related-buyer-guide.webp"),
    alt: "Professional with a tablet in a warehouse aisle",
  },
  {
    icon: ShieldCheck,
    format: "Explainer",
    title: "Trust & Safety Controls",
    body: "The controls the platform applies. Not a certification.",
    image: img("related-trust-safety.webp"),
    alt: "Storage shelving in a warehouse",
  },
];

export default function RelatedResources() {
  return (
    <GuideSection
      id="related"
      num="14"
      label="Related resources"
      title="Keep learning."
      lead="Links appear only once the article is published."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {related.map((r) => (
          <li
            key={r.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-[#fafbfd] shadow-[0_10px_30px_-20px_rgba(12,33,64,0.3)]"
          >
            <div className="relative aspect-[400/170] w-full bg-[#16263f]">
              <Image src={r.image} alt={r.alt} fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover" />
              <span className="absolute top-3 left-3">
                <PhotoBadge>Pending approval</PhotoBadge>
              </span>
            </div>
            <div className="flex flex-col gap-2 p-5">
              <span className="flex items-center gap-3">
                <SandTile icon={r.icon} size="sm" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a5a14]">{r.format}</span>
              </span>
              <h3 className="pt-2 text-xl font-semibold text-[#0f1f3a]">{r.title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{r.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
