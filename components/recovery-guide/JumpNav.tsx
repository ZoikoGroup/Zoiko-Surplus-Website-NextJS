"use client";

import { useEffect, useState } from "react";
import { hanken, navItems } from "./shared";

// Horizontally scrolling "jump to" pills; highlights the section currently in view.
export default function JumpNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -55% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="On this page" className={`${hanken} border-y border-[#eceef4] bg-white`}>
      <ul className="mx-auto flex w-full max-w-[1440px] gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] md:px-10 lg:px-24">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-[#0f1f3a] bg-[#0f1f3a] text-white"
                    : "border-[#e6e9ef] bg-white text-[#0f1f3a] hover:border-[#0f1f3a]/40"
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className={`size-4 ${isActive ? "text-[#f5e3c3]" : "text-[#8a5a14]"}`}
                  strokeWidth={1.75}
                />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
