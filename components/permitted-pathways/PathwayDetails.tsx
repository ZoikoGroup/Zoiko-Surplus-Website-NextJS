import Image from "next/image";
import { Check, Info } from "lucide-react";
import { pathways } from "./pathways";
import { GuideSection, sora } from "./shared";

export default function PathwayDetails() {
  return (
    <GuideSection
      id="pathways"
      num="03"
      label="The pathway"
      title={
        <>
          What each pathway
          <br className="hidden md:block" /> involves.
        </>
      }
      lead="Collection, logistics, redistribution, donation and other disposal — each permitted, market-dependent and evidenced."
    >
      <ol className="flex flex-col border-t border-[#e6e9ef]">
        {pathways.map((p, i) => {
          const Icon = p.icon;
          return (
            <li
              key={p.id}
              id={p.id}
              aria-labelledby={`${p.id}-heading`}
              className="grid scroll-mt-28 items-center gap-8 border-b border-[#e6e9ef] py-8 lg:grid-cols-[minmax(0,598px)_minmax(0,500px)] lg:gap-11"
            >
              <div className="relative">
                <div className="relative aspect-[598/449] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
                  <Image src={p.image} alt={p.alt} fill sizes="(min-width: 1024px) 598px, 100vw" className="object-cover" />
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -top-2 -left-2 flex size-10 items-center justify-center rounded-full border-[3px] border-white bg-[#0f1f3a] text-sm font-semibold text-white"
                >
                  {i + 1}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#16a37a]">
                  <Icon aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
                  {p.name}
                </p>
                <h3 id={`${p.id}-heading`} className={`${sora} text-2xl font-semibold text-[#0f1f3a] md:text-[28px]`}>
                  {p.title}
                </h3>
                <p className="text-base leading-7 text-[#556987]">{p.body}</p>
                <ul className="flex flex-col gap-2 pt-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm leading-5 text-[#3d4a60]">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#fbe9cc] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8a5a14]">
                  <Info aria-hidden="true" className="size-3" strokeWidth={2} />
                  {p.badge}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </GuideSection>
  );
}
