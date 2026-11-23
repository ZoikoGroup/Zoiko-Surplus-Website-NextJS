"use client";

import Image from "next/image";
import { useId, useState, type FormEvent } from "react";
import { Clock, FileText, ListChecks, Lock, Shield, Users, type LucideIcon } from "lucide-react";
import { GuideSection, cardShadow, lcImg, sora } from "./shared";

type Doc = {
  key: string;
  type: string;
  icon: LucideIcon;
  title: string;
  body: string;
  image: string;
  alt: string;
};

// Slots only: no document text is published here. Metadata stays "Pending" until approved records exist.
const docs: Doc[] = [
  {
    key: "privacy",
    type: "Privacy",
    icon: Lock,
    title: "Privacy Notice",
    body: "How personal information is handled.",
    image: lcImg("doc-privacy-notice.webp"),
    alt: "Clipboard labelled Policies and Procedures beside a pair of glasses",
  },
  {
    key: "terms",
    type: "Terms",
    icon: FileText,
    title: "Terms of Use",
    body: "Rules for using the website.",
    image: lcImg("doc-terms-of-use.webp"),
    alt: "Hand holding a pen over a printed document",
  },
  {
    key: "cookies",
    type: "Cookies",
    icon: ListChecks,
    title: "Cookie Policy",
    body: "How cookies and similar tools are used.",
    image: lcImg("doc-cookie-policy.webp"),
    alt: "Hand pointing at a printed page in front of a laptop",
  },
  {
    key: "accessibility",
    type: "Accessibility",
    icon: Users,
    title: "Accessibility Statement",
    body: "Accessibility target and assistance.",
    image: lcImg("doc-accessibility-statement.webp"),
    alt: "Person signing a document beside a laptop and a gavel",
  },
  {
    key: "security",
    type: "Security",
    icon: Shield,
    title: "Security & Trust",
    body: "Public security and trust information.",
    image: lcImg("doc-security-trust.webp"),
    alt: "Person in a suit holding a document envelope beside a gavel",
  },
  {
    key: "status",
    type: "Service status",
    icon: Clock,
    title: "Service Status",
    body: "Public service status information.",
    image: lcImg("doc-service-status.webp"),
    alt: "Man reviewing printed pages at a desk with a laptop",
  },
];

const META = ["Applies to", "Version", "Effective", "Reviewed"] as const;
const metaValue = (label: (typeof META)[number]) => (label === "Applies to" ? "Pending approved scope" : "Pending");

const fieldBase =
  "h-[52px] w-full rounded-lg border border-[#dfe5ed] px-4 text-base text-[#0f1f3a] outline-none focus-visible:border-[#1f9a7f] focus-visible:ring-2 focus-visible:ring-[#1f9a7f]/30";

export default function DocumentIndex() {
  const uid = useId();
  const [type, setType] = useState("all");
  const [query, setQuery] = useState("");
  const [applied, setApplied] = useState({ type: "all", query: "" });

  const q = applied.query.trim().toLowerCase();
  const results = docs.filter(
    (d) =>
      (applied.type === "all" || d.key === applied.type) &&
      (!q || `${d.title} ${d.body} ${d.type}`.toLowerCase().includes(q)),
  );
  const filtered = applied.type !== "all" || q !== "";

  function apply(e: FormEvent) {
    e.preventDefault();
    setApplied({ type, query });
  }

  function clear() {
    setType("all");
    setQuery("");
    setApplied({ type: "all", query: "" });
  }

  return (
    <GuideSection
      id="documents"
      num="01"
      label="Published legal documents"
      title="Browse the document index."
      leadClassName="max-w-[880px]"
      lead={
        <>
          No document text is published on this page. Each card is a slot that fills only
          <br className="hidden lg:block" /> from approved records.
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <form onSubmit={apply} role="search" aria-label="Filter legal documents" className="flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <label htmlFor={`${uid}-jurisdiction`} className="text-sm font-semibold text-[#0f1f3a]">
                Jurisdiction
              </label>
              <select
                id={`${uid}-jurisdiction`}
                disabled
                aria-describedby={`${uid}-note`}
                className={`${fieldBase} cursor-not-allowed bg-[#f3f4f7] text-[#556987]`}
              >
                <option>All published scopes</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor={`${uid}-type`} className="text-sm font-semibold text-[#0f1f3a]">
                Document type
              </label>
              <select
                id={`${uid}-type`}
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`${fieldBase} bg-white`}
              >
                <option value="all">All types</option>
                {docs.map((d) => (
                  <option key={d.key} value={d.key}>
                    {d.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor={`${uid}-search`} className="text-sm font-semibold text-[#0f1f3a]">
                Search legal documents
              </label>
              <input
                id={`${uid}-search`}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`${fieldBase} bg-white`}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className="inline-flex min-h-11 items-center rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Apply filters
            </button>
            <button
              type="button"
              onClick={clear}
              className="inline-flex min-h-11 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Clear filters
            </button>
          </div>
          <p id={`${uid}-note`} className="text-sm leading-6 text-[#556987]">
            The jurisdiction filter is off until approved scope records exist. A filter never sets rights, governing
            law or permission to trade.
          </p>
        </form>

        <p
          aria-live="polite"
          className="flex w-fit items-center gap-2 rounded-lg bg-[#fdf3dc] px-4 py-3 text-sm text-[#3d2a0c]"
        >
          <ListChecks aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.75} />
          {results.length === 0
            ? "No document slots match these filters."
            : filtered
              ? `Showing ${results.length} of ${docs.length} document slots.`
              : `Showing all ${docs.length} document slots.`}
        </p>

        {results.length > 0 && (
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {results.map(({ key, icon: Icon, title, body, image, alt }) => (
              <li
                key={key}
                className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
              >
                <div className="relative aspect-[402/164] w-full bg-[#16263f]">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 1024px) 402px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#e3f4ee] text-[#16a37a]">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className={`${sora} mt-4 text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
                  <p className="mt-1 text-base text-[#3d4a60]">{body}</p>
                  <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm">
                    {META.map((label) => (
                      <div key={label} className="contents">
                        <dt className="font-semibold text-[#0f1f3a]">{label}</dt>
                        <dd className="text-[#556987]">{metaValue(label)}</dd>
                      </div>
                    ))}
                  </dl>
                  {/* Disabled until an approved document is published for this slot. */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    <button
                      type="button"
                      disabled
                      className="inline-flex min-h-11 cursor-not-allowed items-center rounded-lg border border-[#e6e9ef] bg-[#f3f4f7] px-4 text-sm text-[#556987]"
                    >
                      Read {title}
                    </button>
                    <button
                      type="button"
                      disabled
                      aria-label={`Download ${title} (PDF)`}
                      className="inline-flex min-h-11 cursor-not-allowed items-center rounded-lg border border-[#e6e9ef] bg-[#f3f4f7] px-4 text-sm text-[#556987]"
                    >
                      Download (PDF)
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </GuideSection>
  );
}
