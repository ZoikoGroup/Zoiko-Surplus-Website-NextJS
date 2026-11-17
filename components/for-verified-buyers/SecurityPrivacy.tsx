import Image from "next/image";
import { EyeOff, Lock, Shield, TriangleAlert, Users, type LucideIcon } from "lucide-react";
import { Container, SectionHeading, fvbImg, hanken, sora } from "./shared";

const rules: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Lock, title: "Protected review", body: "KYB runs in a secure process." },
  { icon: EyeOff, title: "Minimal public data", body: "No status or records on this page." },
  { icon: Shield, title: "Safe sign-in", body: "Use only the official sign-in." },
  { icon: TriangleAlert, title: "Anti-phishing", body: "We never ask for passwords by email." },
  { icon: Users, title: "Right person", body: "Only authorized users act." },
];

export default function SecurityPrivacy() {
  return (
    <section
      id="security-privacy"
      aria-labelledby="security-privacy-heading"
      className={`${hanken} my-8 scroll-mt-28 bg-[#0d2040] py-16 md:my-12 md:py-24`}
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading
          id="security-privacy-heading"
          tone="dark"
          label="Security and privacy"
          title={
            <>
              Keep sensitive details
              <br className="hidden md:block" /> out of public forms.
            </>
          }
          lead="Do not share passwords, bank information or confidential documents through public marketing or general contact forms."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {rules.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-2 rounded-2xl bg-[#132a4f] p-5">
              <span className="flex size-10 items-center justify-center rounded-lg bg-[#134a46] text-[#5fd0ad]">
                <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
              </span>
              <h3 className={`${sora} pt-2 text-lg font-semibold text-white`}>{title}</h3>
              <p className="text-sm leading-6 text-[#c3cde0]">{body}</p>
            </li>
          ))}
        </ul>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#16263f] md:aspect-[1248/416]">
          <Image
            src={fvbImg("security-review.webp")}
            alt="Two colleagues reviewing figures on a calculator and clipboard"
            fill
            sizes="(min-width: 1440px) 1248px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
