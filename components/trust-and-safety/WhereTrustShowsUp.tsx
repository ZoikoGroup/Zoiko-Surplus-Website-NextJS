import CategoryCards, { type CategoryCard } from "@/components/categories/CategoryCards";
import { Section, img, sora } from "./shared";

// Pages that don't exist yet link to "#".
const cards: CategoryCard[] = [
  {
    title: "Consumer Electronics",
    body: "Data security, battery safety and recall screening.",
    badge: "Conditional overview",
    badgeTone: "muted",
    image: img("cat-electronics.webp"),
    alt: "Headphones, smartwatch and phone on a desk beside a laptop",
    href: "/categories-consumer-electronics",
  },
  {
    title: "Home & Lifestyle",
    body: "Furnishings, textiles, seasonal and housewares.",
    badge: "Conditional overview",
    badgeTone: "muted",
    image: img("cat-home-lifestyle.webp"),
    alt: "Bright living room with plants and a chest of drawers",
    href: "#",
  },
  {
    title: "All categories",
    body: "Browse every surplus category.",
    badge: "Overview",
    badgeTone: "live",
    image: img("cat-all.webp"),
    alt: "Two workers in hard hats checking stacked cardboard boxes",
    href: "#",
  },
];

// The design has no numbered eyebrow on this section.
export default function WhereTrustShowsUp() {
  return (
    <Section labelledBy="shows-up-heading">
      <div className="flex flex-col gap-4">
        <h2
          id="shows-up-heading"
          className={`${sora} text-[32px] font-semibold leading-[1.17] tracking-[-0.02em] text-[#1a1d24] md:text-5xl`}
        >
          Where trust shows up.
        </h2>
        <p className={`${sora} max-w-[700px] text-base leading-7 text-[#4b5b75] md:text-xl md:leading-8`}>
          Trust &amp; Safety runs through the whole model — explore how.
        </p>
      </div>
      <CategoryCards cards={cards} sizes="(min-width: 640px) 401px, 100vw" />
    </Section>
  );
}
