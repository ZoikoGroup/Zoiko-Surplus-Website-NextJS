"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Props = {
  /** Question text; "|" marks the line break used by the narrow (mobile) layout. */
  question: string;
  answer: string;
};

export default function AboutFaqItem({ question, answer }: Props) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const parts = question.split("|");
  const iconClass = `shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`;

  return (
    <div className="self-start overflow-clip rounded-xl border border-[#e6e8ec] bg-white md:border-[#d3dde8] md:p-px">
      <h3 className="m-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-4 px-5 py-[18px] text-left text-[15px] leading-[27.9px] font-semibold text-[#0c2140] md:min-h-[63.19px] md:py-[17.5px] md:text-[15px] md:leading-[27.2px]"
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
            src="/images/about/faq/plus-icon-mobile.svg"
            alt=""
            width={18}
            height={18}
            className={`${iconClass} md:hidden`}
          />
          <Image
            src="/images/about/faq/plus-icon-desktop.svg"
            alt=""
            width={20}
            height={20}
            className={`${iconClass} hidden md:block`}
          />
        </button>
      </h3>
      <div id={id} className={`grid transition-[grid-template-rows] duration-200 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-[24px] text-[#4f647a]">{answer}</p>
        </div>
      </div>
    </div>
  );
}
