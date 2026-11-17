import Image from "next/image";
import { ArrowLeftRight, FileCheck, Network, Shield } from "lucide-react";
import { CornerIcon, GuideSection, cardShadow, fvbImg, sora, type PhotoCardItem } from "./shared";

// Not linked yet: per the design, each link goes live only once its destination is approved.
const related: PhotoCardItem[] = [
  {
    icon: FileCheck,
    title: "Buyer Qualification Guide",
    body: "What to prepare before you apply.",
    image: fvbImg("related-buyer-qualification.webp"),
    alt: "Hands holding a pen over a laptop keyboard",
  },
  {
    icon: ArrowLeftRight,
    title: "Surplus Exchange",
    body: "How seller-private markets work.",
    image: fvbImg("related-surplus-exchange.webp"),
    alt: "Shop worker sorting clothes at a busy store counter",
  },
  {
    icon: Network,
    title: "How the Platform Works",
    body: "The seven governed stages.",
    image: fvbImg("related-how-it-works.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    body: "Controls and limits.",
    image: fvbImg("related-trust-safety.webp"),
    alt: "Worker checking stock on a tablet in a warehouse aisle",
  },
];

export default function RelatedResources() {
  return (
    <GuideSection
      id="related"
      num="11"
      label="Related resources"
      title="Where to go next."
      lead="These links go live only when each destination is approved."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((r) => (
          <li
            key={r.title}
            className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
          >
            <div className="relative aspect-[295/130] w-full bg-[#16263f]">
              <Image
                src={r.image}
                alt={r.alt}
                fill
                sizes="(min-width: 1024px) 295px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <CornerIcon icon={r.icon} />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <h3 className={`${sora} text-lg font-semibold text-[#0f1f3a]`}>{r.title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{r.body}</p>
              <p className="mt-auto pt-3 text-sm font-medium text-[#8a5a14]">Pending →</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
