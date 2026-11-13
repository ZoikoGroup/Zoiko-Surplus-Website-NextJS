import Link from "next/link";
import { ArrowRight, Building2, Clock, Lock, RotateCcw, type LucideIcon } from "lucide-react";
import { GuideSection, sora } from "./shared";

// Only "Secure support" has a public destination; the other actions happen outside this site.
const issues: { icon: LucideIcon; title: string; body: string; action: string; href?: string }[] = [
  { icon: Lock, title: "Cannot sign in", body: "Use the secure sign-in help for your account.", action: "Secure support", href: "/contact" },
  {
    icon: Building2,
    title: "Wrong organization",
    body: "Ask your administrator to confirm which organization you belong to.",
    action: "Ask your administrator",
  },
  {
    icon: Clock,
    title: "Expired invitation",
    body: "Seller invitations can end. Contact the seller who sent it.",
    action: "Contact the seller",
  },
  {
    icon: RotateCcw,
    title: "Stale session",
    body: "Sign out and back in. Rules may have changed since you last signed in.",
    action: "Sign in again",
  },
];

export default function Troubleshooting() {
  return (
    <GuideSection
      id="troubleshooting"
      num="08"
      label="Troubleshooting"
      title="If access is not working."
      lead="Use support routes. Do not post account details publicly."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {issues.map(({ icon: Icon, title, body, action, href }) => {
          const label = (
            <>
              <ArrowRight aria-hidden="true" className="size-3.5" strokeWidth={2} />
              {action}
            </>
          );
          return (
            <li
              key={title}
              className="flex flex-col gap-2 rounded-2xl border border-t-[3px] border-[#a35d14] bg-white p-5"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#fdecd6] text-[#a35d14]">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className={`${sora} pt-2 text-lg font-semibold text-[#0f1f3a]`}>{title}</h3>
              <p className="text-sm leading-6 text-[#556987]">{body}</p>
              {href ? (
                <Link
                  href={href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[#8a5a14] hover:underline"
                >
                  {label}
                </Link>
              ) : (
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[#8a5a14]">
                  {label}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </GuideSection>
  );
}
