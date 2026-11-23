import Image from "next/image";
import { CircleCheck, Clock, X, type LucideIcon } from "lucide-react";
import { CornerIcon, GuideSection, cardShadow, racImg, sora } from "./shared";

const outcomes: { icon: LucideIcon; label: string; title: string; body: string; image: string; alt: string }[] = [
  {
    icon: CircleCheck,
    label: "Received",
    title: "Your concern has been received",
    body: "Keep your reference. This is receipt only.",
    image: racImg("outcome-received.webp"),
    alt: "Person signing for a parcel on a clipboard",
  },
  {
    icon: Clock,
    label: "Uncertain",
    title: "We could not confirm receipt",
    body: "Retry the same concern unchanged, or use an approved alternative.",
    image: racImg("outcome-uncertain.webp"),
    alt: "Hand holding a delivery slip beside a small box",
  },
  {
    icon: X,
    label: "Unavailable",
    title: "Reporting is currently unavailable",
    body: "Show an approved alternative only if confirmed.",
    image: racImg("outcome-unavailable.webp"),
    alt: "Woman looking thoughtfully at a laptop in an office",
  },
];

export default function Outcomes() {
  return (
    <GuideSection
      id="outcomes"
      num="06"
      label="Submission and receipt"
      title="Three outcomes, stated plainly."
      lead="Receipt is not investigation, liability, corrective action or resolution."
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {outcomes.map(({ icon, label, title, body, image, alt }) => (
          <li
            key={label}
            className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
          >
            <div className="relative aspect-[401/180] w-full bg-[#16263f]">
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 401px, (min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <CornerIcon icon={icon} />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#16a37a]">{label}</span>
              <h3 className={`${sora} max-w-[300px] text-[22px] font-semibold leading-7 text-[#0f1f3a]`}>{title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
