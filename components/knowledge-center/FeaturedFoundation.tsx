import Image from "next/image";
import { FileCheck, ListChecks, Lock, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, SandTile, PillLinks, hanken, img } from "./shared";

const points = [
  { icon: Lock, title: "Seller-controlled visibility", body: "Sellers decide which verified buyers ever see an opportunity." },
  { icon: ListChecks, title: "Rules before routing", body: "Policy and safety checks run before a route is offered or ranked." },
  { icon: FileCheck, title: "Records and resolution", body: "Outcomes are recorded, and disputes follow defined processes." },
];

export default function FeaturedFoundation() {
  return (
    <Section
      labelledBy="kc-featured-heading"
      className="border-y border-[#eceef4] bg-white"
      innerClassName="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
    >
      <div className="relative aspect-[576/461] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
        <Image
          src={img("featured-foundation.webp")}
          alt="Hands typing on a laptop with notes and a pen beside it"
          fill
          sizes="(min-width: 1024px) 576px, 100vw"
          className="object-cover"
        />
        <div
          className={`${hanken} absolute right-4 bottom-4 flex max-w-[250px] items-start gap-3 rounded-xl bg-white p-3.5 shadow-lg`}
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#e3f4ee] text-[#16a37a]">
            <ShieldCheck aria-hidden="true" className="size-5" strokeWidth={1.75} />
          </span>
          <p className="text-sm leading-5 text-[#0f1f3a]">Designed to operate this way. Not a certification or endorsement.</p>
        </div>
      </div>

      <div className="flex flex-col gap-9">
        <SectionHeading
          id="kc-featured-heading"
          num="02"
          label="Featured foundation"
          title="What is governed surplus disposition?"
        />
        <ul className={`${hanken} flex flex-col gap-6`}>
          {points.map((p) => (
            <li key={p.title} className="flex items-start gap-4">
              <SandTile icon={p.icon} size="sm" />
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base font-semibold leading-6 text-[#0f1f3a]">{p.title}</h3>
                <p className="text-base leading-6 text-[#556987]">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={hanken}>
          <PillLinks
            label="Sources:"
            links={[
              { label: "How It Works", href: "/how-it-works" },
              { label: "Trust & Safety", href: "/trust-and-safety" },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
