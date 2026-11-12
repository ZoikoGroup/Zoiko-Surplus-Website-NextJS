import Image from "next/image";
import Link from "next/link";
import { ArrowRight, EyeOff, Package, Scale } from "lucide-react";
import { Section, SectionHeading, SandTile, PhotoBadge, hanken, img } from "./shared";

const sellerPoints = [
  { icon: Package, title: "Stock qualification", body: "Condition, quantity and documentation each lot must meet." },
  { icon: EyeOff, title: "Permitted audiences", body: "Approve which verified buyers can see an opportunity." },
  { icon: Scale, title: "Category rules", body: "Safety and handling requirements for each category." },
];

const buyerSteps = [
  { title: "Apply", body: "Tell us about your organization. This begins a review, not an account." },
  { title: "Verify", body: "We check identity, role and eligibility for the categories and markets you ask about." },
  { title: "Receive approved invitations", body: "Sellers approve your profile for specific private markets." },
];

function PrimaryLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#926016] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
    </Link>
  );
}

function CardImage({ src, alt, badge, dot }: { src: string; alt: string; badge: string; dot: string }) {
  return (
    <div className="relative aspect-[608/260] w-full bg-[#16263f]">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 608px, 100vw" className="object-cover" />
      <span className="absolute top-4 left-4">
        <PhotoBadge dot={dot}>{badge}</PhotoBadge>
      </span>
    </div>
  );
}

export default function SellerBuyerResources() {
  return (
    <Section labelledBy="kc-sides-heading">
      <SectionHeading
        id="kc-sides-heading"
        num="05"
        label="Seller and buyer resources"
        title="Prepare on both sides of the transaction."
        lead="Every format starts with a short factual answer, then links to its source."
        titleClassName="max-w-none"
      />
      <div className={`${hanken} grid gap-6 md:grid-cols-2`}>
        <article
          aria-labelledby="kc-seller-readiness"
          className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white shadow-[0_10px_30px_-18px_rgba(12,33,64,0.25)]"
        >
          <CardImage
            src={img("seller-readiness.webp")}
            alt="Gloved hand inspecting goods in a tote at a shelving unit"
            badge="For enterprise sellers"
            dot="bg-[#3b5998]"
          />
          <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
            <div className="flex flex-col gap-2">
              <h3 id="kc-seller-readiness" className="text-2xl font-semibold text-[#0f1f3a]">
                Seller readiness
              </h3>
              <p className="text-base leading-6 text-[#556987]">
                Qualify inventory and understand the brand and channel controls you can set.
              </p>
            </div>
            <ul className="flex flex-col gap-4 pb-6">
              {sellerPoints.map((p) => (
                <li key={p.title} className="flex items-start gap-4">
                  <SandTile icon={p.icon} size="sm" />
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-base font-semibold text-[#0f1f3a]">{p.title}</h4>
                    <p className="text-sm leading-5 text-[#556987]">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <PrimaryLink href="#">Request Enterprise Demo</PrimaryLink>
          </div>
        </article>

        <article
          aria-labelledby="kc-buyer-qualification"
          className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white shadow-[0_10px_30px_-18px_rgba(12,33,64,0.25)]"
        >
          <CardImage
            src={img("buyer-qualification.webp")}
            alt="Professional checking stock on a tablet in a long warehouse aisle"
            badge="For verified buyers"
            dot="bg-[#16a37a]"
          />
          <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
            <div className="flex flex-col gap-2">
              <h3 id="kc-buyer-qualification" className="text-2xl font-semibold text-[#0f1f3a]">
                Buyer qualification
              </h3>
              <p className="text-base leading-6 text-[#556987]">
                Access is granted in stages, never by visiting a public page.
              </p>
            </div>
            <ol className="flex flex-col gap-3 pb-2">
              {buyerSteps.map((s) => (
                <li key={s.title} className="rounded-xl border border-[#e6e9ef] px-4 py-3">
                  <h4 className="text-base font-semibold text-[#0f1f3a]">{s.title}</h4>
                  <p className="text-sm leading-6 text-[#556987]">{s.body}</p>
                </li>
              ))}
            </ol>
            <PrimaryLink href="/become-a-verified-buyer">Become a Verified Buyer</PrimaryLink>
          </div>
        </article>
      </div>
    </Section>
  );
}
