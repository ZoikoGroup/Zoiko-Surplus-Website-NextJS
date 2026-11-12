import Image from "next/image";
import { EyeOff, KeyRound, Layers, Lock, X, type LucideIcon } from "lucide-react";
import { Container, SectionHeading, hanken, img, sora } from "./shared";

const controls: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Layers, title: "Private markets", body: "Each seller sets its own audience." },
  { icon: KeyRound, title: "Invitation", body: "Access can depend on a seller invitation." },
  { icon: EyeOff, title: "Tiered visibility", body: "Different buyers may see different things." },
  { icon: X, title: "Withdrawal", body: "A seller can withdraw an entitlement." },
  { icon: Lock, title: "Non-disclosure", body: "Names, prices and lots stay private." },
];

export default function SellerControlled() {
  return (
    <section
      id="seller-controlled"
      aria-labelledby="seller-controlled-heading"
      className={`${hanken} my-8 scroll-mt-28 bg-[#0d2040] py-16 md:my-12 md:py-24`}
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading
          id="seller-controlled-heading"
          tone="dark"
          label="Seller-controlled market eligibility"
          title={
            <>
              A verified buyer does
              <br className="hidden md:block" /> not see every seller.
            </>
          }
          lead="Sellers decide who sees their opportunities. Confidentiality is part of the design."
        />
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#16263f] md:aspect-[1248/416]">
          <Image
            src={img("seller-controlled.webp")}
            alt="Two colleagues reviewing stock on a laptop in a warehouse"
            fill
            sizes="(min-width: 1440px) 1248px, 100vw"
            className="object-cover"
          />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {controls.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-2 rounded-2xl bg-[#132a4f] p-5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-[#134a46] text-[#5fd0ad]">
                <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
              </span>
              <h3 className={`${sora} pt-2 text-lg font-semibold text-white`}>{title}</h3>
              <p className="text-sm leading-6 text-[#c3cde0]">{body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
