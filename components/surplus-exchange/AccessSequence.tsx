import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ApplyLink } from "./ApplyLink";
import { GuideSection, cardShadow, exImg, sora } from "./shared";

const steps: { title: string; body: string; limit: string; image: string; alt: string }[] = [
  {
    title: "Apply",
    body: "Start a review for your organization.",
    limit: "Receipt is not verification or an invitation.",
    image: exImg("sequence-apply.webp"),
    alt: "Colleagues organizing boxes on stockroom shelves",
  },
  {
    title: "Verify organization",
    body: "Identity, role and eligibility are checked.",
    limit: "May be declined.",
    image: exImg("sequence-verify.webp"),
    alt: "Worker checking stock on a tablet in a warehouse aisle",
  },
  {
    title: "Policy review",
    body: "Category, country and corridor rules are applied.",
    limit: "Rules vary by market.",
    image: exImg("sequence-policy.webp"),
    alt: "Worker checking goods against a clipboard",
  },
  {
    title: "Seller or audience entitlement",
    body: "A seller authorizes you for specific opportunities.",
    limit: "Can be withdrawn.",
    image: exImg("sequence-entitlement.webp"),
    alt: "Warehouse staff walking between stacks of boxes",
  },
  {
    title: "Market access",
    body: "Access follows, where the market is active.",
    limit: "Not available in every market.",
    image: exImg("sequence-market-access.webp"),
    alt: "Warehouse workers in safety vests moving boxes",
  },
];

export default function AccessSequence() {
  return (
    <GuideSection
      id="sequence"
      num="04"
      label="Access eligibility sequence"
      title={
        <>
          Apply → Verify → Review →
          <br className="hidden md:block" /> Entitlement → Market access.
        </>
      }
      lead="Five separate steps. Passing one never opens the next, and market access exists only when a market is active."
    >
      <div className="flex flex-col gap-8">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`relative flex flex-col rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
            >
              <div className="relative aspect-[236/114] w-full overflow-hidden rounded-t-2xl bg-[#16263f]">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 236px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute top-[18%] -right-3.5 z-10 hidden size-3.5 text-[#926016] lg:block"
                  strokeWidth={2}
                />
              )}
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className={`${sora} min-h-12 text-lg font-semibold leading-6 text-[#0f1f3a]`}>{s.title}</h3>
                <p className="text-sm leading-6 text-[#556987]">{s.body}</p>
                <p className="mt-auto rounded-lg bg-[#fdf5e1] px-2.5 py-2 text-sm leading-5 text-[#5a3d0c]">{s.limit}</p>
              </div>
            </li>
          ))}
        </ol>
        <ApplyLink />
      </div>
    </GuideSection>
  );
}
