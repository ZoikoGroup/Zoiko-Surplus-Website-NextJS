import Image from "next/image";
import { EyeOff, Flag, Lock, Users } from "lucide-react";
import { GuideSection, ImageTag, TileCard, fpImg, type TileCardItem } from "./shared";

const routes: TileCardItem[] = [
  { icon: Lock, tone: "mint", title: "Secure sign-in", body: "Reach private partner help after signing in." },
  { icon: Flag, title: "Incident channel", body: "Reported through your agreement." },
  { icon: EyeOff, tone: "mint", title: "No details here", body: "Never post account or contract details publicly." },
  { icon: Users, title: "General help", body: "A public route exists if you cannot sign in." },
];

export default function PartnerSupport() {
  return (
    <GuideSection
      id="partner-support"
      num="08"
      label="Existing partner support"
      title={
        <>
          Already a partner? Use
          <br className="hidden md:block" /> your secure channel.
        </>
      }
      lead="Account and incident help is private. No public ticket or status is shown."
    >
      <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,555px)] lg:gap-7">
        <ul className="grid gap-4 sm:grid-cols-2">
          {routes.map((r) => (
            <TileCard key={r.title} item={r} />
          ))}
        </ul>
        <div className="relative aspect-[555/370] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image
            src={fpImg("existing-support.webp")}
            alt="Two colleagues working together at a laptop"
            fill
            sizes="(min-width: 1024px) 555px, 100vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3">
            <ImageTag>Illustrative imagery</ImageTag>
          </span>
        </div>
      </div>
    </GuideSection>
  );
}
