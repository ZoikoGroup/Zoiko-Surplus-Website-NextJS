import { ShieldAlert } from "lucide-react";
import { GuideSection, SandTile } from "./shared";

export default function Exceptions() {
  return (
    <GuideSection
      id="exceptions"
      num="09"
      label="Exceptions"
      title={
        <>
          When a pathway must
          <br className="hidden md:block" /> stop.
        </>
      }
      lead="Some signals halt a route outright."
    >
      <div className="flex items-start gap-4 rounded-2xl border border-l-4 border-[#b9874a] bg-white p-6">
        <SandTile icon={ShieldAlert} />
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-[#0f1f3a]">Hold, reject, escalate</h3>
          <p className="max-w-[940px] text-sm leading-6 text-[#556987]">
            A recall, safety, title, sanctions or restricted-goods signal holds or stops the pathway and escalates to a
            named accountable role before any movement. Food is gated independently, and no finality is stated before
            resolution.
          </p>
        </div>
      </div>
    </GuideSection>
  );
}
