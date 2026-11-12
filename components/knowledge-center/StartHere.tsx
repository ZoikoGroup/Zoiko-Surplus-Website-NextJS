"use client";

import Image from "next/image";
import { ArrowRight, Building2, Check, Truck, UserCheck, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, SandTile, hanken, img } from "./shared";
import { CATALOG_ID, filterCatalog, type Topic } from "./catalog";

const paths: {
  topic: Topic;
  image: string;
  alt: string;
  icon: LucideIcon;
  audience: string;
  title: string;
  body: string;
  points: string[];
  cta: string;
}[] = [
  {
    topic: "sellers",
    image: img("path-seller.webp"),
    alt: "Seller team reviewing inventory with a laptop",
    icon: Building2,
    audience: "Enterprise seller",
    title: "Recover value, keep control.",
    body: "Preparation, disposition options and commercial governance for retailers, distributors and manufacturers.",
    points: ["Qualify lots and documentation", "Set permitted audiences", "Apply category rules"],
    cta: "Seller guidance",
  },
  {
    topic: "buyers",
    image: img("path-buyer.webp"),
    alt: "Professional reviewing documents at a laptop in a stockroom",
    icon: UserCheck,
    audience: "Prospective business buyer",
    title: "Understand qualification first.",
    body: "How applying, verification and seller-approved invitations work, and why none of them is an account.",
    points: ["Application and KYB basics", "Eligibility by category and market", "Private market principles"],
    cta: "Buyer guidance",
  },
  {
    topic: "partners",
    image: img("path-partner.webp"),
    alt: "Logistics worker with a tablet at the back of a delivery van",
    icon: Truck,
    audience: "Logistics and disposition partner",
    title: "See the network roles.",
    body: "Possible partner roles and evidence duties across collection, logistics, redistribution and donation.",
    points: ["Role and evidence expectations", "Permitted-route principles", "Where to send an inquiry"],
    cta: "Partner information",
  },
];

export default function StartHere() {
  return (
    <Section labelledBy="kc-start-heading">
      <SectionHeading
        id="kc-start-heading"
        num="01"
        label="Start here"
        title="Choose the path that fits your role."
        lead="Each path filters the catalog below to guidance for that audience."
        titleClassName="max-w-none"
      />
      <ul className={`${hanken} grid gap-6 md:grid-cols-2 lg:grid-cols-3`}>
        {paths.map((p) => (
          <li
            key={p.topic}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white shadow-[0_10px_30px_-18px_rgba(12,33,64,0.25)]"
          >
            <div className="relative aspect-[398/210] w-full bg-[#16263f]">
              <Image src={p.image} alt={p.alt} fill sizes="(min-width: 1024px) 398px, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="relative flex flex-1 flex-col gap-3 px-6 pt-10 pb-7">
              <span className="absolute -top-7 left-5 rounded-2xl border-4 border-white">
                <SandTile icon={p.icon} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a5a14]">{p.audience}</p>
              <h3 className="text-[22px] font-semibold leading-7 text-[#0f1f3a]">{p.title}</h3>
              <p className="text-base leading-6 text-[#556987]">{p.body}</p>
              <ul className="flex flex-col gap-2 pt-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm leading-5 text-[#556987]">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href={`#${CATALOG_ID}`}
                onClick={(e) => {
                  e.preventDefault();
                  filterCatalog({ topic: p.topic, format: "all", query: "" });
                }}
                className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-base font-semibold text-[#8a5a14] hover:underline"
              >
                {p.cta}
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
