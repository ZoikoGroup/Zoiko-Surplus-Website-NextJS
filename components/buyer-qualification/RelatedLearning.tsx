import Image from "next/image";
import { ArrowLeftRight, KeyRound, Shield } from "lucide-react";
import { CornerIcon, GuideSection, cardShadow, img, sora, type PhotoCardItem } from "./shared";

// Not linked yet: each article is still pending publication.
const related: PhotoCardItem[] = [
  {
    icon: ArrowLeftRight,
    title: "How It Works",
    body: "The governed seven-stage model.",
    image: img("related-how-it-works.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    body: "Verification, safety and evidence.",
    image: img("related-trust-safety.webp"),
    alt: "Worker checking goods against a clipboard",
  },
  {
    icon: KeyRound,
    title: "Surplus Exchange",
    body: "How seller-controlled markets work.",
    image: img("related-surplus-exchange.webp"),
    alt: "Two professionals reviewing a laptop and folder",
  },
];

export default function RelatedLearning() {
  return (
    <GuideSection id="related" num="12" label="Related learning" title="Keep reading.">
      <ul className="grid gap-6 md:grid-cols-3">
        {related.map((r) => (
          <li
            key={r.title}
            className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
          >
            <div className="relative aspect-[401/190] w-full bg-[#16263f]">
              <Image src={r.image} alt={r.alt} fill sizes="(min-width: 768px) 401px, 100vw" className="object-cover" />
              <CornerIcon icon={r.icon} />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{r.title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{r.body}</p>
              <p className="pt-3 text-sm font-medium text-[#8a5a14]">Pending publication →</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
