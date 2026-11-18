import { Shield, TriangleAlert, Users } from "lucide-react";
import { GuideSection, TileCard, type TileCardItem } from "./shared";

const routes: TileCardItem[] = [
  { icon: Users, tone: "mint", title: "Contact support", body: "Ask a person. Existing case matters use the secure support path." },
  { icon: Shield, title: "Accessibility help", body: "An accessible alternative is offered if a form or step does not work for you." },
  { icon: TriangleAlert, title: "Application unavailable", body: "If the route is down, you are told plainly and shown another published channel." },
];

export default function Assistance() {
  return (
    <GuideSection
      id="assistance"
      num="09"
      label="Assistance and recovery"
      title={
        <>
          If something blocks you,
          <br className="hidden md:block" /> there is another way.
        </>
      }
      lead="Support and accessibility routes are available, and a blocked application route never leaves you at a dead end."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {routes.map((r) => (
          <TileCard key={r.title} item={r} large />
        ))}
      </ul>
    </GuideSection>
  );
}
