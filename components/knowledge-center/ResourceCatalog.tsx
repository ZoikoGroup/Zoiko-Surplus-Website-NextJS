"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronDown, RotateCcw, Search } from "lucide-react";
import { Container, SectionHeading, PhotoBadge, SandTile, hanken } from "./shared";
import {
  CATALOG_ID,
  formats,
  onCatalogFilter,
  resources,
  topics,
  type Format,
  type Resource,
  type Topic,
} from "./catalog";

type Sort = "relevance" | "title";

function matches(r: Resource, q: string) {
  if (!q) return true;
  const hay = `${r.title} ${r.body}`.toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .every((word) => hay.includes(word));
}

// Native <select> dressed as a pill so it stays keyboard- and screen-reader-friendly.
function PillSelect<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <label className="relative inline-flex">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="min-h-12 w-full cursor-pointer appearance-none rounded-full border border-[#e6e9ef] bg-white pr-10 pl-5 text-sm text-[#0f1f3a] outline-none focus-visible:ring-2 focus-visible:ring-[#926016]/40 sm:w-auto"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#556987]"
        strokeWidth={1.75}
      />
    </label>
  );
}

function ResourceCard({ r }: { r: Resource }) {
  const format = formats.find((f) => f.id === r.format)!;
  return (
    <li>
      <a
        href="#"
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-[#fafbfd] shadow-[0_10px_30px_-20px_rgba(12,33,64,0.3)] transition-shadow hover:shadow-[0_14px_34px_-18px_rgba(12,33,64,0.35)]"
      >
        <div className="relative aspect-[397/170] w-full bg-[#16263f]">
          <Image
            src={r.image}
            alt={r.alt}
            fill
            sizes="(min-width: 1024px) 397px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute top-3 left-3">
            <PhotoBadge>Pending approval</PhotoBadge>
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <span className="flex items-center gap-3">
            <SandTile icon={r.icon} size="sm" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a5a14]">{format.label}</span>
          </span>
          <h3 className="pt-2 text-xl font-semibold text-[#0f1f3a]">{r.title}</h3>
          <p className="text-sm leading-6 text-[#556987]">{r.body}</p>
          <span className="mt-auto flex items-center justify-between pt-4 text-xs text-[#556987]">
            Published only after sign-off
            <ArrowRight
              aria-hidden="true"
              className="size-4 text-[#0f1f3a] transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </span>
        </div>
      </a>
    </li>
  );
}

export default function ResourceCatalog() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<Topic | "all">("all");
  const [format, setFormat] = useState<Format | "all">("all");
  const [sort, setSort] = useState<Sort>("relevance");

  // Other sections (hero search, role paths, format cards) push filters in here.
  useEffect(
    () =>
      onCatalogFilter((f) => {
        if (f.query !== undefined) setQuery(f.query);
        if (f.topic) setTopic(f.topic);
        if (f.format) setFormat(f.format);
      }),
    [],
  );

  const shown = useMemo(() => {
    const list = resources.filter(
      (r) => (topic === "all" || r.topics.includes(topic)) && (format === "all" || r.format === format) && matches(r, query),
    );
    return sort === "title" ? [...list].sort((a, b) => a.title.localeCompare(b.title)) : list;
  }, [query, topic, format, sort]);

  const filtered = query !== "" || topic !== "all" || format !== "all" || sort !== "relevance";

  function reset() {
    setQuery("");
    setTopic("all");
    setFormat("all");
    setSort("relevance");
  }

  const chips: { id: Topic | "all"; label: string; count: number }[] = [
    { id: "all", label: "All topics", count: resources.length },
    ...topics.map((t) => ({ ...t, count: resources.filter((r) => r.topics.includes(t.id)).length })),
  ];

  return (
    <section id={CATALOG_ID} aria-labelledby="kc-catalog-heading" className={`${hanken} scroll-mt-28 py-8 md:py-12`}>
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading
          id="kc-catalog-heading"
          titleClassName="max-w-none"
          num="08"
          label="Resource catalog"
          title="Search public guidance."
          lead="Public documents only. Nothing here searches seller, buyer or account data."
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex min-h-12 flex-1 items-center gap-3 rounded-full border border-[#e6e9ef] bg-white px-5 focus-within:ring-2 focus-within:ring-[#926016]/40">
              <Search aria-hidden="true" className="size-5 shrink-0 text-[#556987]" strokeWidth={1.75} />
              <label htmlFor="kc-catalog-search" className="sr-only">
                Search public guidance
              </label>
              <input
                id="kc-catalog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search public guidance"
                className="min-w-0 flex-1 bg-transparent text-base text-[#0f1f3a] outline-none placeholder:text-[#7b8aa3]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:flex">
              <PillSelect
                label="Format"
                value={format}
                onChange={setFormat}
                options={[{ value: "all", label: "All formats" }, ...formats.map((f) => ({ value: f.id, label: f.plural }))]}
              />
              <PillSelect
                label="Sort"
                value={sort}
                onChange={setSort}
                options={[
                  { value: "relevance", label: "Sort: Relevance" },
                  { value: "title", label: "Sort: Title A–Z" },
                ]}
              />
            </div>
          </div>

          <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2.5">
            {chips.map((c) => {
              const active = topic === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTopic(c.id)}
                  className={`inline-flex min-h-11 items-center gap-2.5 rounded-full border px-4 text-sm transition-colors ${
                    active
                      ? "border-[#0f1f3a] bg-[#0f1f3a] text-white"
                      : "border-[#e6e9ef] bg-white text-[#0f1f3a] hover:border-[#0f1f3a]/40"
                  }`}
                >
                  {c.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      active ? "bg-[#1f3a63] text-white" : "bg-[#fbf0e0] text-[#8a5a14]"
                    }`}
                  >
                    {c.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-4 text-sm">
            <p aria-live="polite" className="text-[#556987]">
              {shown.length} of {resources.length} resources shown
            </p>
            <button
              type="button"
              onClick={reset}
              disabled={!filtered}
              className="inline-flex items-center gap-1.5 font-semibold text-[#8a5a14] transition-opacity hover:underline disabled:cursor-default disabled:opacity-60 disabled:hover:no-underline"
            >
              <RotateCcw aria-hidden="true" className="size-4" strokeWidth={1.75} />
              Reset filters
            </button>
          </div>

          {shown.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((r) => (
                <ResourceCard key={r.title} r={r} />
              ))}
            </ul>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#dfe5ed] bg-white px-6 py-14 text-center">
              <p className="text-base font-semibold text-[#0f1f3a]">No public guidance matches those filters.</p>
              <p className="mt-1 text-sm text-[#556987]">Try a different word, or reset the filters.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
