import Image from "next/image";
import { Clock, EyeOff, Lock } from "lucide-react";
import { Container, SandTile, SectionHeading, baImg, hanken } from "./shared";

const traits = [
  { icon: Lock, title: "Scoped", body: "An invitation covers a specific seller audience." },
  { icon: Clock, title: "Time-bound and revocable", body: "It can expire or be withdrawn." },
  { icon: EyeOff, title: "Never listed publicly", body: "Invited organizations are not named on this page." },
];

export default function SellerInvitations() {
  return (
    <section
      id="seller-invitations"
      aria-labelledby="seller-invitations-heading"
      className={`${hanken} scroll-mt-28 py-8 md:py-12`}
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,596px)_minmax(0,1fr)] lg:gap-14">
        <div className="relative aspect-[596/461] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image
            src={baImg("seller-invitations.webp")}
            alt="Workers handing boxes between a truck and a loading bay"
            fill
            sizes="(min-width: 1024px) 596px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-8">
          <SectionHeading
            id="seller-invitations-heading"
            num="05"
            label="Seller invitations"
            title="Sellers decide who sees what."
            lead="Membership in a marketplace does not expose a seller's stock. Visibility depends on that seller's policy and an active market."
          />
          <ul className="flex flex-col gap-5">
            {traits.map(({ icon, title, body }) => (
              <li key={title} className="flex items-start gap-3">
                <SandTile icon={icon} size="sm" />
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-[#0f1f3a]">{title}</h3>
                  <p className="text-sm leading-6 text-[#556987]">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
