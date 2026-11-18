import { Globe, Scale, SlidersHorizontal } from "lucide-react";
import { GuideSection, ImageTopGrid, redImg, type PhotoCardItem } from "./shared";

const reasons: PhotoCardItem[] = [
  {
    icon: Scale,
    title: "Seller governance",
    body: "You decide the audience, route and terms for your own goods.",
    image: redImg("reason-governance.webp"),
    alt: "Business colleagues in a meeting around a desk of files",
  },
  {
    icon: Globe,
    title: "Market fit",
    body: "Review whether your market and category are open for discussion.",
    image: redImg("reason-market-fit.webp"),
    alt: "Hands pointing at marketing documents and charts on a table",
  },
  {
    icon: SlidersHorizontal,
    title: "Disposition pathways",
    body: "Compare permitted routes, without any promised recovery.",
    image: redImg("reason-pathways.webp"),
    alt: "Container truck at a port beside cranes",
  },
];

export default function Reasons() {
  return (
    <GuideSection
      id="reasons"
      num="01"
      label="Three reasons to speak"
      title={
        <>
          What a conversation
          <br className="hidden md:block" /> can cover.
        </>
      }
      lead="A conversation is a first step. It is not an application, an offer or an approval."
    >
      <ImageTopGrid
        eyebrow="Reason"
        items={reasons}
        aspect="aspect-[401/180]"
        cols="md:grid-cols-3"
        sizes="(min-width: 1024px) 401px, (min-width: 768px) 33vw, 100vw"
      />
    </GuideSection>
  );
}
