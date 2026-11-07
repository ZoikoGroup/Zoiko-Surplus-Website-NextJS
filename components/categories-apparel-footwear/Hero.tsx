import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, ShieldCheck, Info } from "lucide-react";
import { hanken, img } from "./shared";

const highlights = [
  {
    icon: Boxes,
    title: "Potential supply classes",
    body: "Overstock, returns, end-of-line and imperfect items — acceptance depends on evidence.",
  },
  {
    icon: ShieldCheck,
    title: "Governed throughout",
    body: "Brand rights, authenticity and condition are assessed before any route.",
  },
];

export default function Hero() {
  return (
    <header className={`${hanken} flex flex-col gap-6 pt-1.5`}>
      {/* Category photo — the sidebar shows it on desktop, so only render it here on smaller screens. */}
      <div className="relative h-52 w-full overflow-hidden rounded-2xl sm:h-64 lg:hidden">
        <Image
          src={img("af-hero.webp")}
          alt="Rail of folded and hanging t-shirts in assorted colours"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#e3f4ee] px-2.5 py-[5px] text-xs font-semibold text-[#0b7a5c]">
          <span aria-hidden="true" className="size-1.5 rounded-sm bg-[#0b7a5c]" />
          Proposed pilot
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="pt-2 text-[40px] font-bold leading-[1.09] tracking-[-0.02em] text-[#0f1f3a] sm:text-5xl md:text-6xl">
          Apparel &amp; Footwear
          <br />
          <span className="text-[#10b981]">surplus</span>.
        </h1>
        <p className="max-w-[627px] text-lg leading-6 text-[#556987] md:text-xl">
          Explore how eligible businesses may qualify apparel and footwear surplus for controlled, seller-approved
          disposition pathways.
        </p>

        <div className="flex flex-wrap gap-3 pt-2.5">
          <Link
            href="#"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#926016] bg-[#926016] px-6 text-base font-semibold text-white transition-colors hover:bg-[#a66e1b]"
          >
            Request Enterprise Demo
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
          </Link>
          <Link
            href="/become-a-verified-buyer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d3dbe6] bg-white px-6 text-base font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
          >
            Become a Verified Buyer
          </Link>
        </div>

        <p className="flex max-w-[681px] items-start gap-2 text-xs leading-5 text-[#556987]">
          <Info aria-hidden="true" className="mt-[3px] size-3.5 shrink-0" strokeWidth={1.75} />
          A proposed seller-private domestic B2B pilot category — not a confirmed general launch. Market and category
          access are subject to eligibility, approvals and local availability; a buyer application does not grant
          trading access.
        </p>
      </div>

      <div className="grid gap-4 pt-3.5 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex flex-col gap-1 rounded-2xl border border-[#ece6da] bg-[#faf6ef] px-4 pt-5 pb-4">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#e3f4ee]">
              <Icon aria-hidden="true" className="size-5 text-[#0b7a5c]" strokeWidth={1.67} />
            </span>
            <h2 className="pt-1.5 text-base font-bold leading-6 text-[#0f1f3a]">{title}</h2>
            <p className="text-sm leading-5 text-[#556987]">{body}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
