import { Check, CircleCheck, Heart, Package, Recycle, Share2, Truck, type LucideIcon } from "lucide-react";
import { GuideSection, StripedTable } from "./shared";

type Performs = "owns" | "performs" | "none";

const roles: { icon: LucideIcon; role: string; responsibility: string; performs: Performs }[] = [
  { icon: Package, role: "Seller", responsibility: "Owns goods; authorizes routes", performs: "owns" },
  { icon: Share2, role: "Zoiko platform", responsibility: "Coordinates & records", performs: "none" },
  { icon: Truck, role: "Carrier", responsibility: "Transport, where a route needs movement", performs: "performs" },
  { icon: Recycle, role: "Recovery provider", responsibility: "Recycling or material recovery", performs: "performs" },
  { icon: Heart, role: "Recipient", responsibility: "Receives donated goods", performs: "performs" },
];

function PerformsMark({ value }: { value: Performs }) {
  if (value === "owns")
    return (
      <>
        <CircleCheck aria-hidden="true" className="mx-auto size-4 text-[#16a37a]" strokeWidth={1.75} />
        <span className="sr-only">Owns the goods</span>
      </>
    );
  if (value === "performs")
    return (
      <>
        <Check aria-hidden="true" className="mx-auto size-4 text-[#8d9ab3]" strokeWidth={1.75} />
        <span className="sr-only">Performs the work</span>
      </>
    );
  return (
    <>
      <span aria-hidden="true" className="text-[#c3cad6]">—</span>
      <span className="sr-only">Neither owns nor performs</span>
    </>
  );
}

export default function RoleMatrix() {
  return (
    <GuideSection
      id="roles"
      num="06"
      label="Partner role matrix"
      title={
        <>
          Who does what — and
          <br className="hidden md:block" /> who doesn&rsquo;t.
        </>
      }
      lead="Zoiko coordinates and records; separately contracted partners perform the work. Title and custody stay with accountable parties."
    >
      <StripedTable
        caption="Partner roles, responsibilities and who owns or performs the work"
        headings={["Role", "Responsibility", "Owns / performs"]}
        align={["w-[34%]", "", "w-[18%] text-center"]}
        rows={roles.map(({ icon: Icon, role, responsibility, performs }) => ({
          key: role,
          cells: [
            <span key="r" className="flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e3f4ee] text-[#16a37a]">
                <Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
              </span>
              {role}
            </span>,
            responsibility,
            <PerformsMark key="p" value={performs} />,
          ],
        }))}
      />
    </GuideSection>
  );
}
