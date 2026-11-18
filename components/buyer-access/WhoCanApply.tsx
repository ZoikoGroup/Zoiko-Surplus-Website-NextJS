import Image from "next/image";
import { Check, User, UserCheck, Users, type LucideIcon } from "lucide-react";
import { GuideSection, baImg, cardShadow, sora } from "./shared";

const applicants: {
  icon: LucideIcon;
  title: string;
  points: string[];
  footnote: string;
  image: string;
  alt: string;
}[] = [
  {
    icon: Users,
    title: "Prospective business buyer",
    points: ["A registered business, not an individual", "Starts with an application", "Reads the qualification guide first"],
    footnote: "Applying does not guarantee approval.",
    image: baImg("audience-prospective-buyer.webp"),
    alt: "Business people meeting in a bright office",
  },
  {
    icon: UserCheck,
    title: "Organization administrator",
    points: ["Speaks for the organization", "Manages who joins", "Resolves access questions"],
    footnote: "Admin status does not unlock any market.",
    image: baImg("audience-org-admin.webp"),
    alt: "Three colleagues talking in an office with shelving",
  },
  {
    icon: User,
    title: "Invited company user",
    points: ["Joins through the organization", "Has a role of their own", "May see less than a colleague"],
    footnote: "Rights belong to the person, not the company.",
    image: baImg("audience-invited-user.webp"),
    alt: "Workers in overalls reviewing notes on a workshop floor",
  },
];

export default function WhoCanApply() {
  return (
    <GuideSection
      id="who-can-apply"
      num="03"
      label="Who can apply"
      title="Business buyers only."
      lead={
        <>
          Applications are reviewed by people. Nothing is decided
          <br className="hidden md:block" /> automatically.
        </>
      }
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {applicants.map(({ icon: Icon, title, points, footnote, image, alt }) => (
          <li
            key={title}
            className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
          >
            <div className="relative aspect-[402/130] w-full bg-[#16263f]">
              <Image src={image} alt={alt} fill sizes="(min-width: 768px) 402px, 100vw" className="object-cover" />
            </div>
            <div className="relative flex flex-1 flex-col gap-3 px-5 pt-10 pb-5">
              <span className="absolute -top-6 left-5 flex size-12 items-center justify-center rounded-xl border-2 border-white bg-[#f5e3c3] text-[#8a5a14] shadow-[0_4px_12px_-4px_rgba(12,33,64,0.25)]">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
              <ul className="flex flex-col gap-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-5 text-[#3d4a60]">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#8a5a14]" strokeWidth={1.75} />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-dashed border-[#e6e9ef] pt-3 text-xs text-[#4b5b75]">{footnote}</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
