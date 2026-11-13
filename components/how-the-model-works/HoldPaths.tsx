import { ArrowRight, Ban, FileCheck, Globe, RotateCcw, TriangleAlert, type LucideIcon } from "lucide-react";
import { GuideSection, sora } from "./shared";

const paths: { icon: LucideIcon; title: string; body: string; route: string; routeIcon: LucideIcon }[] = [
  {
    icon: Ban,
    title: "Rejection",
    body: "Stock or a party that does not meet the rules does not proceed.",
    route: "Returns to the seller",
    routeIcon: ArrowRight,
  },
  {
    icon: FileCheck,
    title: "Missing evidence",
    body: "Records are incomplete, so the stage pauses until they are supplied.",
    route: "Back to Qualify",
    routeIcon: RotateCcw,
  },
  {
    icon: Globe,
    title: "Restricted jurisdiction",
    body: "A market or corridor is not enabled. Locale selection does not change that.",
    route: "Stops at Govern",
    routeIcon: ArrowRight,
  },
  {
    icon: TriangleAlert,
    title: "Recall or exception",
    body: "Unsafe or recalled goods are excluded and escalated, and may be reversed.",
    route: "Moves to Resolve",
    routeIcon: ArrowRight,
  },
];

export default function HoldPaths() {
  return (
    <GuideSection
      id="hold-paths"
      num="03"
      label="Hold and return paths"
      title={
        <>
          When something stops
          <br className="hidden md:block" /> the process.
        </>
      }
      lead="These routes are part of the model, not exceptions to it."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {paths.map(({ icon: Icon, title, body, route, routeIcon: RouteIcon }) => (
          <li
            key={title}
            className="flex flex-col gap-2 rounded-2xl border border-t-[3px] border-[#b9732a] bg-white p-5"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-[#fdecd6] text-[#a35d14]">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className={`${sora} pt-1.5 text-lg font-semibold text-[#0f1f3a]`}>{title}</h3>
            <p className="text-sm leading-6 text-[#556987]">{body}</p>
            <p className="mt-auto flex items-center gap-1.5 pt-2 text-xs font-semibold text-[#8a5a14]">
              <RouteIcon aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
              {route}
            </p>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
