import Image from "next/image";
import { Info, Route, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { PhotoBadge } from "@/components/knowledge-center/shared";
import { GuideSection, SandTile, cardShadow, lcImg, sora } from "./shared";

// Not linked yet: each article is still pending approval.
const related: { icon: LucideIcon; format: string; title: string; body: string; image: string; alt: string }[] = [
  {
    icon: Users,
    format: "Overview",
    title: "Surplus Network",
    body: "The permitted pathways and partner roles.",
    image: lcImg("related-surplus-network.webp"),
    alt: "Two business owners reviewing paperwork at a desk",
  },
  {
    icon: Route,
    format: "Explainer",
    title: "How the Model Works",
    body: "The seven governed stages in plain English.",
    image: lcImg("related-how-it-works.webp"),
    alt: "Hands typing on a laptop",
  },
  {
    icon: ShieldCheck,
    format: "Explainer",
    title: "Trust & Safety Controls",
    body: "The controls the platform applies. Not a certification.",
    image: lcImg("related-trust-safety.webp"),
    alt: "Worker checking goods against a clipboard",
  },
];

export default function RelatedGuidance() {
  return (
    <GuideSection id="related" num="13" label="Related guidance" title="Keep learning.">
      <div className="flex flex-col gap-6">
        <ul className="grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <li
              key={r.title}
              className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-[#fafbfd] ${cardShadow}`}
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
                <h3 className={`${sora} pt-2 text-xl font-semibold text-[#0f1f3a]`}>{r.title}</h3>
                <p className="text-sm leading-6 text-[#556987]">{r.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="flex items-start gap-3 rounded-xl border border-[#e6e9ef] bg-white px-5 py-4 text-sm leading-6 text-[#556987]">
          <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#8a5a14]" strokeWidth={1.75} />
          Final scope reminder: no ownership, custody, coverage or delivery guarantee is made. Contact the team through
          approved routes only. Photography on this preview is illustrative.
        </p>
      </div>
    </GuideSection>
  );
}
