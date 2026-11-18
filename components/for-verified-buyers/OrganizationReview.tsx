import Image from "next/image";
import { Clock, ReceiptText, Search, Users } from "lucide-react";
import { GuideSection, ImageTag, TileCard, fvbImg, type TileCardItem } from "./shared";

const checks: TileCardItem[] = [
  { icon: ReceiptText, tone: "mint", title: "Business identity", body: "The legal entity and how it is registered." },
  { icon: Users, title: "Authorized representative", body: "That the person applying can act for the company." },
  { icon: Search, tone: "mint", title: "Screening", body: "Checks required by law or policy. Reasons are not public." },
  { icon: Clock, title: "Renewal", body: "Verification can expire and be reviewed again." },
];

export default function OrganizationReview() {
  return (
    <GuideSection
      id="organization-review"
      num="03"
      label="Organization review"
      title={
        <>
          What business verification may
          <br className="hidden md:block" /> involve.
        </>
      }
      lead="A primer only. Review happens in a protected process. Never send documents through this page."
    >
      <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,555px)_minmax(0,1fr)] lg:gap-7">
        <div className="relative aspect-[555/347] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image
            src={fvbImg("organization-review.webp")}
            alt="Large warehouse hall with racking"
            fill
            sizes="(min-width: 1024px) 555px, 100vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3">
            <ImageTag>Illustrative imagery</ImageTag>
          </span>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {checks.map((c) => (
            <TileCard key={c.title} item={c} />
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
