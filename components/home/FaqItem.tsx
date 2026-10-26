"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Props = {
  /** Question text; "|" marks the line break used by the narrow (mobile) layout. */
  question: string;
  answer: string;
  /** Rendered expanded on mobile (and collapsed on desktop) until the visitor toggles it. */
  defaultOpenOnMobile?: boolean;
};

export default function FaqItem({ question, answer, defaultOpenOnMobile = false }: Props) {
  const id = useId();
  // null = untouched, so the CSS default (open on mobile only for the first item) applies.
  const [open, setOpen] = useState<boolean | null>(null);

  const toggle = () => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    setOpen((prev) => (prev === null ? !(defaultOpenOnMobile && isMobile) : !prev));
  };

  const expandedClass =
    open === null
      ? defaultOpenOnMobile
        ? "grid-rows-[1fr] md:grid-rows-[0fr]"
        : "grid-rows-[0fr]"
      : open
        ? "grid-rows-[1fr]"
        : "grid-rows-[0fr]";
  const rotateClass =
    open === null
      ? defaultOpenOnMobile
        ? "rotate-45 md:rotate-0"
        : ""
      : open
        ? "rotate-45"
        : "";

  const parts = question.split("|");

  return (
    <div className="self-start overflow-clip rounded-xl border border-[#d3dde8] bg-white">
      <h3 className="m-0">
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open ?? (defaultOpenOnMobile ? undefined : false)}
          aria-controls={id}
          className="flex w-full cursor-pointer items-center justify-between gap-6 px-5 py-[17.5px] text-left text-[17px] leading-[27.2px] font-semibold text-[#0c2140]"
        >
          <span>
            {parts.map((part, i) => (
              <span key={i}>
                {i > 0 && (
                  <>
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> </span>
                  </>
                )}
                {part}
              </span>
            ))}
          </span>
          <Image
            src="/images/home/faq/icon-plus.svg"
            alt=""
            width={20}
            height={20}
            className={`shrink-0 transition-transform duration-200 ${rotateClass}`}
          />
        </button>
      </h3>
      <div id={id} className={`grid transition-[grid-template-rows] duration-200 ${expandedClass}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[16.1px] leading-[25.7px] text-[#4f647a]">{answer}</p>
        </div>
      </div>
    </div>
  );
}
