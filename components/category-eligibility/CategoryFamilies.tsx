import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GuideSection, ceImg, sora } from "./shared";

type Family = {
  title: string;
  body: string;
  status: string;
  tone: "sand" | "slate";
  image: string;
  alt: string;
  /** Only families with a published overview page link out. */
  href?: string;
};

const featured: Family = {
  title: "Apparel & Footwear",
  body: "UK-focused B2B apparel and footwear resale marketplace.",
  status: "Proposed first pilot",
  tone: "sand",
  image: ceImg("family-apparel.webp"),
  alt: "Trainers on store shelving beside a mannequin in a hooded jacket",
  href: "/categories-apparel-footwear",
};

const others: Family[] = [
  {
    title: "Consumer Goods",
    body: "Household and lifestyle goods with verified resale compliance.",
    status: "Not yet activated",
    tone: "slate",
    image: ceImg("family-consumer-goods.webp"),
    alt: "Shopper and shop worker beside shelves of homeware",
    href: "/home-lifestyle",
  },
  {
    title: "Food & Grocery",
    body: "Ensure food safety, shelf-life, and traceability compliance.",
    status: "Separate approval",
    tone: "slate",
    image: ceImg("family-food.webp"),
    alt: "Shopper reading a packaged food label in a grocery aisle",
  },
  {
    title: "Further Categories",
    body: "Expand into industrial and business goods upon approval.",
    status: "Planned, if approved",
    tone: "slate",
    image: ceImg("family-further.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
    href: "/industries-served",
  },
];

const pill = {
  sand: "bg-[#fbe9cc] text-[#7a4d0f] [&>span]:bg-[#926016]",
  slate: "bg-[#eef1f6] text-[#3d4a60] [&>span]:bg-[#3d4a60]",
};

function FamilyCard({ family, featured = false }: { family: Family; featured?: boolean }) {
  const { title, body, status, tone, image, alt, href } = family;
  const body_ = (
    <>
      <Image
        src={image}
        alt={alt}
        fill
        sizes={featured ? "(min-width: 1440px) 1250px, 100vw" : "(min-width: 1024px) 397px, (min-width: 640px) 50vw, 100vw"}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span
        className={`absolute top-3 left-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${pill[tone]}`}
      >
        <span aria-hidden="true" className="size-1.5 rounded-full" />
        {status}
      </span>
      {href && (
        <span className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-[#0f1f3a] shadow-sm">
          <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
        </span>
      )}
      {/* Frosted caption bar over the lower part of the photo. */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 border-t border-white/25 bg-[#1c2a40]/35 px-5 py-4 backdrop-blur-md md:px-6 md:py-5">
        <h3 className={`${sora} font-semibold text-white ${featured ? "text-xl md:text-2xl" : "text-xl md:text-[22px]"}`}>
          {title}
        </h3>
        <p className="text-sm leading-6 text-[#e3e8f1]">{body}</p>
      </div>
    </>
  );
  const frame = `group relative block w-full overflow-hidden rounded-2xl border border-[#e6e9ef] bg-[#16263f] ${
    featured ? "aspect-[4/3] sm:aspect-[1250/318]" : "aspect-[397/278]"
  }`;

  return (
    <li>
      {href ? (
        <Link
          href={href}
          className={`${frame} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#926016]`}
        >
          {body_}
        </Link>
      ) : (
        <div className={frame}>{body_}</div>
      )}
    </li>
  );
}

type HeadingProps = { id?: string; num?: string; label?: string; title?: ReactNode; lead?: ReactNode };

// The Seller Readiness Guide reuses these cards under its own heading.
export default function CategoryFamilies({
  id = "families",
  num = "01",
  label = "Five category families",
  title = "What each family needs reviewed.",
  lead = "Editorial cards only. No products, prices or live inventory.",
}: HeadingProps) {
  return (
    <GuideSection id={id} num={num} label={label} title={title} lead={lead}>
      <div className="flex flex-col gap-6 md:gap-8">
        <ul>
          <FamilyCard family={featured} featured />
        </ul>
        <ul className="grid gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {others.map((f) => (
            <FamilyCard key={f.title} family={f} />
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
