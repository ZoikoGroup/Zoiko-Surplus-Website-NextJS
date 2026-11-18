import Image from "next/image";
import { Route, ShieldCheck, UserCheck, type LucideIcon } from "lucide-react";
import { GuideSection, SandTile, baImg, cardShadow, sora } from "./shared";
import { PhotoBadge } from "@/components/knowledge-center/shared";

// Not linked yet: per the design, each article stays unlinked until it is approved for publication.
const related: { icon: LucideIcon; kind: string; title: string; body: string; image: string; alt: string }[] = [
  {
    icon: UserCheck,
    kind: "Guide",
    title: "Buyer Qualification Guide",
    body: "How applying, verification and invitations work.",
    image: baImg("related-buyer-qualification.webp"),
    alt: "Colleagues with a clipboard and a pallet truck in a stockroom",
  },
  {
    icon: Route,
    kind: "Explainer",
    title: "How the Model Works",
    body: "The seven governed stages in plain English.",
    image: baImg("related-how-the-model-works.webp"),
    alt: "Engineer in a hard hat inspecting machinery in a workshop",
  },
  {
    icon: ShieldCheck,
    kind: "Explainer",
    title: "Trust & Safety Controls",
    body: "The controls the platform applies. Not a certification.",
    image: baImg("related-trust-safety.webp"),
    alt: "Workers in high-visibility vests joining hands",
  },
];

export default function RelatedResources() {
  return (
    <GuideSection
      id="related"
      num="10"
      label="Related resources"
      title="Keep learning."
      lead="Links appear only once the article is published."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {related.map(({ icon, kind, title, body, image, alt }) => (
          <li
            key={title}
            className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-[#fafbfd] ${cardShadow}`}
          >
            <div className="relative aspect-[400/170] w-full bg-[#16263f]">
              <Image src={image} alt={alt} fill sizes="(min-width: 768px) 401px, 100vw" className="object-cover" />
              <span className="absolute top-3 left-3">
                <PhotoBadge>Pending approval</PhotoBadge>
              </span>
            </div>
            <div className="flex flex-col gap-2 p-6">
              <div className="flex items-center gap-3">
                <SandTile icon={icon} size="sm" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a5a14]">{kind}</span>
              </div>
              <h3 className={`${sora} pt-2 text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
