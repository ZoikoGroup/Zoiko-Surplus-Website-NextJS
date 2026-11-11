import { Check, Clock, Globe } from "lucide-react";
import { GuideSection, MintTile, SandTile } from "./shared";

const statuses = [
  {
    tile: <SandTile icon={Globe} />,
    title: "Described in the guide",
    body: "The model is explained in general terms. This says nothing about your market or category.",
  },
  {
    tile: <SandTile icon={Clock} />,
    title: "Safety and legal checks pending",
    body: "The category or market is being assessed. No offer to transact is made, and regulated workflows stay closed.",
  },
  {
    tile: <MintTile icon={Check} />,
    title: "Confirmed by the market registry",
    body: "Shown only when approved in the separate registry. Eligibility checks still apply to every participant.",
  },
];

export default function MarketActivation() {
  return (
    <GuideSection
      id="availability"
      num="06"
      label="Market and category activation"
      title="Status is informational until operations confirms it."
      lead="No live flags are shown here. Locale selection never activates rights."
    >
      <ol className="grid gap-4 md:grid-cols-3">
        {statuses.map((s) => (
          <li key={s.title} className="flex flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-6">
            {s.tile}
            <h3 className="pt-2 text-lg font-semibold text-[#0f1f3a]">{s.title}</h3>
            <p className="text-sm leading-6 text-[#556987]">{s.body}</p>
          </li>
        ))}
      </ol>
    </GuideSection>
  );
}
