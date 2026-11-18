import Image from "next/image";
import { Info, ShieldCheck } from "lucide-react";
import { GuideSection, cardShadow, gates, sora } from "./shared";

export default function FourLayerAccess() {
  return (
    <GuideSection
      id="four-layer-access"
      num="01"
      label="Four-layer access"
      title={
        <>
          Four separate checks, not
          <br className="hidden md:block" /> one badge.
        </>
      }
      lead="Each protected action is checked against all four, every time."
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 rounded-2xl bg-[#0f2347] px-5 py-6 md:px-8">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#14524f] text-[#5fd0ad]">
            <ShieldCheck aria-hidden="true" className="size-6" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5fd0ad]">Controlling rule</p>
            <p className={`${sora} text-lg font-semibold text-white md:text-2xl`}>
              &ldquo;Verified buyer&rdquo; does not mean &ldquo;can view every market.&rdquo;
            </p>
          </div>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gates.map(({ code, icon: Icon, title, question, note, image, alt }, i) => (
            <li
              key={code}
              className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
            >
              <div className="relative aspect-[297/140] w-full bg-[#16263f]">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 297px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex flex-1 flex-col gap-2 px-5 pt-10 pb-6">
                <span className="absolute -top-6 left-5 flex size-12 items-center justify-center rounded-xl border-2 border-white bg-[#f5e3c3] text-[#8a5a14] shadow-[0_4px_12px_-4px_rgba(12,33,64,0.25)]">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a5a14]">Gate {i + 1}</span>
                <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
                <p className="text-sm leading-6 text-[#0f1f3a]">{question}</p>
                <p className="pt-1 text-sm leading-6 text-[#556987]">{note}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="flex items-start gap-3 rounded-2xl border border-[#e6e9ef] bg-white px-5 py-4 text-sm leading-6 text-[#556987]">
          <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#a35d14]" strokeWidth={1.75} />
          The system denies protected access unless the request is signed in and every required check passes. A label on
          this page, a locale choice or an application receipt never grants access.
        </p>
      </div>
    </GuideSection>
  );
}
