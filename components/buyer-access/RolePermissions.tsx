import { ArrowLeftRight, EyeOff, type LucideIcon } from "lucide-react";
import { GuideSection, sora } from "./shared";

const rights: { icon: LucideIcon; title: string; body: string; tile: string }[] = [
  {
    icon: EyeOff,
    title: "Right to view",
    body: "Whether a person can see a private opportunity at all.",
    tile: "bg-[#f5e3c3] text-[#8a5a14]",
  },
  {
    icon: ArrowLeftRight,
    title: "Right to act",
    body: "Whether that person can make an offer or buy. Governed separately from viewing.",
    tile: "bg-[#e3f4ee] text-[#16a37a]",
  },
];

export default function RolePermissions() {
  return (
    <GuideSection
      id="role-permissions"
      num="04"
      label="User role permissions"
      title={
        <>
          Seeing and acting are
          <br className="hidden md:block" /> different rights.
        </>
      }
      lead="Specific roles and permissions are not published here."
    >
      <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:px-5">
        {rights.map(({ icon: Icon, title, body, tile }, i) => (
          <div key={title} className="contents">
            {i === 1 && (
              <span aria-label="is not the same as" className={`${sora} text-center text-xl text-[#8a5a14]`}>
                ≠
              </span>
            )}
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-6">
              <span className={`flex size-11 items-center justify-center rounded-xl ${tile}`}>
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className={`${sora} pt-1.5 text-lg font-semibold text-[#0f1f3a]`}>{title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </GuideSection>
  );
}
