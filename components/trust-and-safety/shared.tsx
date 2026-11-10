import Image from "next/image";

// Layout and card blocks are shared with the Corporate Information page.
export {
  hanken,
  sora,
  Eyebrow,
  SectionHeading,
  Note,
  Container,
  Section,
  IconTile,
  CardGrid,
  type CardItem,
} from "@/components/company-corporate-information/shared";

export const img = (name: string) => `/images/trust-and-safety/${name}`;

// Full-width rounded photo used above the card rows in several sections.
export function WideImage({ src, alt, ratio = "sm:aspect-[1248/535]" }: { src: string; alt: string; ratio?: string }) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-[20px] shadow-[0_10px_30px_-14px_rgba(12,33,64,0.22)] ${ratio}`}
    >
      <Image src={src} alt={alt} fill sizes="(min-width: 1440px) 1248px, 100vw" className="object-cover" />
    </div>
  );
}
