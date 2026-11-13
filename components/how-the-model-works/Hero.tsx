import Image from "next/image";
import Link from "next/link";
import { ArrowLeftRight, ArrowRight, ClipboardCheck, FileCheck, Link as LinkIcon, type LucideIcon } from "lucide-react";
import { hanken, sora, hmwImg } from "./shared";

// Mosaic tiles: a tall photo, two stacked beside it, and a wide one underneath.
const tiles: { icon: LucideIcon; label: string; image: string; alt: string; className: string; sizes: string }[] = [
  {
    icon: FileCheck,
    label: "Qualify",
    image: hmwImg("hero-qualify.webp"),
    alt: "Two colleagues reviewing stock on a laptop in a warehouse aisle",
    // Height comes from the two stacked tiles beside it.
    className: "row-span-2",
    sizes: "(min-width: 1024px) 292px, 50vw",
  },
  {
    icon: LinkIcon,
    label: "Match",
    image: hmwImg("hero-match.webp"),
    alt: "Two colleagues planning at a desk with parcels",
    className: "aspect-[292/170]",
    sizes: "(min-width: 1024px) 292px, 50vw",
  },
  {
    icon: ClipboardCheck,
    label: "Prove",
    image: hmwImg("hero-prove.webp"),
    alt: "Worker checking goods against a clipboard",
    className: "aspect-[292/130]",
    sizes: "(min-width: 1024px) 292px, 50vw",
  },
  {
    icon: ArrowLeftRight,
    label: "Transact",
    image: hmwImg("hero-transact.webp"),
    alt: "Logistics worker with a tablet at a delivery van",
    className: "col-span-2 aspect-[596/170]",
    sizes: "(min-width: 1024px) 596px, 100vw",
  },
];

export default function Hero() {
  return (
    <section aria-labelledby="hmw-hero-heading" className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}>
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,600px)_minmax(0,596px)] lg:justify-between lg:px-24 lg:py-28">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a5a14]">Resources / Buyer guidance</p>
          <h1
            id="hmw-hero-heading"
            className={`${sora} text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] md:text-[72px]`}
          >
            How the
            <br />
            Model <span className="text-[#1f9a7f]">Works</span>
          </h1>
          <p className="text-base leading-7 text-[#4b5b75] md:text-lg">
            From inventory qualification to evidence and resolution, Zoiko Surplus connects seven governed stages. Each
            action depends on eligibility, seller instructions and activated market capabilities.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/become-a-verified-buyer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Apply to Become a Buyer
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <a
              href="#stages"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Explore the Seven Stages
            </a>
          </div>
        </div>

        <ul aria-label="Four of the seven stages" className="grid grid-cols-2 gap-3">
          {tiles.map(({ icon: Icon, label, image, alt, className, sizes }, i) => (
            <li
              key={label}
              className={`relative w-full overflow-hidden rounded-2xl bg-[#16263f] shadow-[0_16px_40px_-20px_rgba(12,33,64,0.35)] ${className}`}
            >
              <Image src={image} alt={alt} fill priority={i === 0} sizes={sizes} className="object-cover" />
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#0f1f3a] shadow-sm">
                <Icon aria-hidden="true" className="size-3.5 text-[#8a5a14]" strokeWidth={1.75} />
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
