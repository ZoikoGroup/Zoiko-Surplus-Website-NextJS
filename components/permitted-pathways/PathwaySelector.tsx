import Image from "next/image";
import { pathways } from "./pathways";
import { GuideSection, cardShadow, sora } from "./shared";

// Each card jumps to its detail row in section 03.
export default function PathwaySelector() {
  return (
    <GuideSection
      id="selector"
      num="02"
      label="Pathway selector"
      title={
        <>
          Five route classes a seller
          <br className="hidden md:block" /> may consider.
        </>
      }
      lead="Jump to any pathway. Each is a conceptual, permitted route — not a confirmation that it's available to you."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {pathways.map(({ id, icon: Icon, name, short, selectorImage, selectorAlt }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white transition-colors hover:border-[#c9d2de] ${cardShadow}`}
            >
              <div className="relative aspect-[235/176] w-full bg-[#16263f]">
                <Image
                  src={selectorImage}
                  alt={selectorAlt}
                  fill
                  sizes="(min-width: 1024px) 235px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-lg bg-white text-[#0f1f3a] shadow-sm">
                  <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
                </span>
              </div>
              <div className="flex flex-col gap-1 px-4 pt-4 pb-6">
                <h3 className={`${sora} text-base font-semibold text-[#0f1f3a] group-hover:underline`}>{name}</h3>
                <p className="text-sm leading-6 text-[#556987]">{short}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
