import { CircleCheck, Clock, Flag, type LucideIcon } from "lucide-react";
import { GuideSection, sora } from "./shared";

const statuses: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: CircleCheck, title: "Current", body: "The version in force, once approved." },
  { icon: Clock, title: "Superseded", body: "Replaced by a newer version. Kept as a record." },
  { icon: Flag, title: "Upcoming", body: "Shown only if authorized. Not yet in force." },
];

export default function Statuses() {
  return (
    <GuideSection
      id="versions"
      num="03"
      label="Versions and status"
      title="Three statuses. Each is explicit."
      lead="Previous versions appear only when approved."
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {statuses.map(({ icon: Icon, title, body }) => (
          <li key={title} className="flex flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-6 md:p-7">
            <span className="flex size-10 items-center justify-center rounded-lg bg-[#f6efe4] text-[#8a5a14]">
              <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </span>
            <div className="flex items-center justify-between gap-3 pt-3">
              <h3 className={`${sora} text-xl font-semibold text-[#0f1f3a]`}>{title}</h3>
              <span className="rounded-full bg-[#e3f4ee] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#16a37a]">
                Status
              </span>
            </div>
            <p className="text-sm leading-6 text-[#556987]">{body}</p>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
