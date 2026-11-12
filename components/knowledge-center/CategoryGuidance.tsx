import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Factory, House, Shirt, Utensils, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, PhotoBadge, hanken, img } from "./shared";

type Category = {
  title: string;
  body: string;
  status: string;
  dot: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  href: string;
};

const featured: Category[] = [
  {
    title: "Apparel & Footwear",
    body: "UK-focused B2B apparel and footwear resale marketplace.",
    status: "Proposed first pilot",
    dot: "bg-[#926016]",
    icon: Shirt,
    image: img("category-apparel.webp"),
    alt: "Shelves of trainers beside a mannequin in a jacket",
    href: "/categories-apparel-footwear",
  },
  {
    title: "Food & Grocery",
    body: "Food-specific participation requires separate safety and market approval.",
    status: "Separate approval",
    dot: "bg-[#926016]",
    icon: Utensils,
    image: img("category-food.webp"),
    alt: "Shopper reading a label in a grocery aisle",
    href: "#",
  },
];

const others: Category[] = [
  {
    title: "Electronics",
    body: "Condition, provenance and handling.",
    status: "Editorial guidance",
    dot: "bg-[#3b5998]",
    icon: Cpu,
    image: img("category-electronics.webp"),
    alt: "Wireless headphones on a grey surface",
    href: "/categories-consumer-electronics",
  },
  {
    title: "Home & Lifestyle",
    body: "Household goods with verified resale compliance.",
    status: "Not yet activated",
    dot: "bg-[#3b5998]",
    icon: House,
    image: img("category-home.webp"),
    alt: "Shopper and shopkeeper among home goods shelves",
    href: "/home-lifestyle",
  },
  {
    title: "Industrial",
    body: "Industrial and business goods upon approval.",
    status: "Planned, if approved",
    dot: "bg-[#3b5998]",
    icon: Factory,
    image: img("category-industrial.webp"),
    alt: "Yellow industrial robot arm",
    href: "#",
  },
];

function CategoryCard({ c, aspect, sizes }: { c: Category; aspect: string; sizes: string }) {
  const Icon = c.icon;
  return (
    <li>
      <Link href={c.href} className={`group relative block overflow-hidden rounded-[20px] bg-[#16263f] ${aspect}`}>
        <Image
          src={c.image}
          alt={c.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0f1f3a]/90 via-[#0f1f3a]/25 to-transparent"
        />
        <span className="absolute top-4 left-4">
          <PhotoBadge dot={c.dot}>{c.status}</PhotoBadge>
        </span>
        <span className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white text-[#0f1f3a]">
          <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
        </span>
        <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
          <span className="flex items-center gap-2.5 text-xl font-semibold text-white">
            <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
            {c.title}
          </span>
          <span className="text-sm leading-5 text-white/80">{c.body}</span>
        </span>
      </Link>
    </li>
  );
}

export default function CategoryGuidance() {
  return (
    <Section labelledBy="kc-categories-heading">
      <SectionHeading
        id="kc-categories-heading"
        num="06"
        label="Category guidance"
        title="Different categories, different rules."
        lead="Guidance here is editorial. A category shown is not automatically live in your market."
        titleClassName="max-w-none"
      />
      <div className={`${hanken} flex flex-col gap-4`}>
        <ul className="grid gap-4 md:grid-cols-2">
          {featured.map((c) => (
            <CategoryCard key={c.title} c={c} aspect="aspect-[612/300]" sizes="(min-width: 768px) 612px, 100vw" />
          ))}
        </ul>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((c) => (
            <CategoryCard
              key={c.title}
              c={c}
              aspect="aspect-[403/230]"
              sizes="(min-width: 1024px) 403px, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}
