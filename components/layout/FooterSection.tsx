"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FooterSection as Section } from "@/lib/footer";

// Mobile: collapsible row. Desktop (md+): heading plus an always-visible link list.
export default function FooterSection({ section, id }: { section: Section; id: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-(--f-line) md:border-b-0">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-11 w-full items-center justify-between gap-4 py-[12.5px] text-left text-[15.2px] font-semibold text-(--f-head) md:pointer-events-none md:pt-[6.5px] md:pb-[18.5px]"
        >
          {section.title}
          <Image
            src="/images/footer/mobile/chevron-down.svg"
            alt=""
            width={18}
            height={18}
            className={`shrink-0 transition-transform md:hidden ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      <ul id={id} className={`${open ? "flex" : "hidden"} flex-col gap-0.5 pb-2 md:flex md:pb-0`}>
        {section.links.map((link) => {
          const [first, ...rest] = link.label.split("\n");
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex min-h-9 items-center rounded py-2 text-[14.4px] leading-[22.32px] text-(--f-text) transition-colors hover:text-(--f-head)"
              >
                <span>
                  {first}
                  {rest.map((part) => (
                    <span key={part}>
                      {" "}
                      <br className="hidden md:block" />
                      {part}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
