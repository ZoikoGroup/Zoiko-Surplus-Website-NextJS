"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { hanken, img, tocItems } from "./shared";

// Sticky sidebar: category photo, "Proposed pilot" badge and a table of contents that highlights the section in view.
export default function OnThisPage() {
  const [active, setActive] = useState<string>(tocItems[0].id);

  useEffect(() => {
    const els = tocItems
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        // Pick the visible section nearest the top of the viewport.
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -55% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className={`${hanken} hidden w-[298px] shrink-0 lg:block`}>
      <div className="sticky top-28 overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white">
        <div className="relative h-56 w-full bg-gradient-to-tr from-[#24344f] to-[#1c2a40]">
          <Image
            src={img("af-hero.webp")}
            alt="Rail of folded and hanging t-shirts in assorted colours"
            fill
            sizes="298px"
            className="object-cover"
            priority
          />
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#e3f4ee] px-2.5 py-[5px] text-xs font-semibold tracking-tight text-[#0b7a5c]">
            <span aria-hidden="true" className="size-1.5 rounded-sm bg-[#0b7a5c]" />
            Proposed pilot
          </span>
        </div>

        <nav aria-label="On this page" className="flex flex-col gap-2.5 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[#7d8aa1]">On this page</p>
          <ol className="flex flex-col gap-0.5">
            {tocItems.map((item, i) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex h-10 items-center gap-3 rounded-lg px-2.5 text-sm font-semibold transition-colors ${
                      isActive ? "bg-[#f3f6fa] text-[#0f172a]" : "text-[#556987] hover:bg-[#f7f9fb] hover:text-[#0f172a]"
                    }`}
                  >
                    <span
                      className={`flex size-5 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                        isActive ? "bg-[#0f1f3a] text-white" : "bg-[#f1f4f8] text-[#7d8aa1]"
                      }`}
                    >
                      {i + 1}
                    </span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
