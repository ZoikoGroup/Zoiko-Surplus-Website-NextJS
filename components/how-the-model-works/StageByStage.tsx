import Image from "next/image";
import { Ban, Check } from "lucide-react";
import { GuideSection, SandTile, cardShadow, sora, stages } from "./shared";

// One card per stage; the photo alternates sides on desktop.
export default function StageByStage() {
  return (
    <GuideSection
      id="stages"
      num="02"
      label="Stage by stage"
      title={
        <>
          What happens, and what is
          <br className="hidden md:block" /> not promised.
        </>
      }
      lead="Each stage names its gate and the claim it does not make."
    >
      <ol className="flex flex-col gap-6">
        {stages.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <li
              key={s.id}
              id={`stage-${s.id}`}
              className={`grid scroll-mt-28 overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white lg:grid-cols-2 ${cardShadow}`}
            >
              <div className={`relative aspect-[580/400] w-full bg-[#16263f] lg:aspect-auto lg:min-h-[400px] ${flip ? "lg:order-2" : ""}`}>
                <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
                <span
                  aria-hidden="true"
                  className={`${sora} absolute top-4 left-4 flex size-10 items-center justify-center rounded-full bg-white text-base font-semibold text-[#8a5a14] shadow-sm`}
                >
                  {i + 1}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a5a14]">
                  Stage {i + 1} of {stages.length}
                </p>
                <h3 className={`${sora} flex items-center gap-3 text-[28px] font-semibold text-[#0f1f3a]`}>
                  <SandTile icon={s.icon} size="sm" />
                  {s.name}
                </h3>
                <p className="text-base font-semibold text-[#3d4a60]">{s.tagline}</p>
                <p className="text-sm leading-6 text-[#556987]">{s.body}</p>
                <ul className="flex flex-col gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm leading-5 text-[#556987]">
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="flex items-center gap-3 pt-1 text-sm font-semibold text-[#0f1f3a]">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dfe5ed] px-2.5 py-1 text-xs text-[#3d4a60]">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-[#16a37a]" />
                    Gate
                  </span>
                  {s.gate}
                </p>
                <p className="mt-1 flex items-start gap-2 rounded-xl bg-[#fdf1df] px-4 py-3 text-sm leading-5 text-[#556987]">
                  <Ban aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#8a5a14]" strokeWidth={1.75} />
                  <span>
                    <strong className="font-semibold text-[#0f1f3a]">Not promised:</strong> {s.notPromised}
                  </span>
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </GuideSection>
  );
}
