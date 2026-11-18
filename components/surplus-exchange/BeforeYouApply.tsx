import Image from "next/image";
import { ApplyLink } from "./ApplyLink";
import { GuideSection, ImageTag, exImg } from "./shared";

const items = [
  { title: "Organization details", body: "Legal name, role and the categories and markets you buy in." },
  { title: "Business verification documents", body: "What the review will ask for. Share only through the approved application." },
  { title: "Category fit", body: "The categories you are qualified to handle." },
  { title: "Market and corridor", body: "Where you operate and receive goods. A language setting is not eligibility." },
  { title: "Handling capability", body: "Storage, transport and compliance for the goods you want." },
];

export default function BeforeYouApply() {
  return (
    <GuideSection
      id="before-you-apply"
      num="18"
      label="Before you apply"
      title={
        <>
          What a buyer should
          <br className="hidden md:block" /> have ready.
        </>
      }
      lead="Applying starts a review. It does not guarantee approval or access."
    >
      <div className="flex flex-col gap-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,560px)_minmax(0,596px)] lg:justify-between">
          <dl className="flex flex-col gap-6">
            {items.map((it) => (
              <div key={it.title} className="flex flex-col gap-1">
                <dt className="text-base font-semibold text-[#0f1f3a]">{it.title}</dt>
                <dd className="text-base leading-6 text-[#556987]">{it.body}</dd>
              </div>
            ))}
          </dl>
          <div className="relative aspect-[596/370] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={exImg("before-you-apply.webp")}
              alt="Two business owners reviewing paperwork at a desk"
              fill
              sizes="(min-width: 1024px) 596px, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3">
              <ImageTag>Illustrative imagery</ImageTag>
            </span>
          </div>
        </div>
        <ApplyLink />
      </div>
    </GuideSection>
  );
}
