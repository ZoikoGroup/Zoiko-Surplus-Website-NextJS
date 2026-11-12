import { EyeOff, KeyRound, Layers, Lock, X, type LucideIcon } from "lucide-react";
import { Container, SectionHeading, hanken, sora } from "./shared";

const controls: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Layers, title: "Private market selection", body: "Choose which private market holds an opportunity." },
  { icon: KeyRound, title: "Invitation", body: "Invite specific qualified audiences." },
  { icon: EyeOff, title: "Tiered visibility", body: "Different audiences can see different things." },
  { icon: X, title: "Withdrawn entitlements", body: "Remove access when circumstances change." },
  { icon: Lock, title: "Non-disclosure", body: "Names, pricing and lots stay private." },
];

export default function SellerControlledModel() {
  return (
    <section
      id="seller-controlled"
      aria-labelledby="ex-seller-controlled-heading"
      className={`${hanken} my-8 scroll-mt-28 bg-[#0d2040] py-16 md:my-12 md:py-24`}
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading
          id="ex-seller-controlled-heading"
          tone="dark"
          label="Seller-controlled market model"
          title={
            <>
              The seller sets the
              <br className="hidden md:block" /> audience. The platform
              <br className="hidden md:block" /> enforces it.
            </>
          }
          lead="Control settings are described as proposed. The precise control set depends on production configuration and contractual approval."
        />
        <div className="flex flex-col gap-6">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {controls.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex flex-col gap-2 rounded-2xl bg-[#132a4f] p-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-[#134a46] text-[#5fd0ad]">
                  <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
                </span>
                <h3 className={`${sora} pt-2 text-base font-semibold text-white`}>{title}</h3>
                <p className="text-sm leading-6 text-[#c3cde0]">{body}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-6 text-[#a9b6cc]">
            Seller-controlled audience eligibility is visible to the seller and cannot be overridden by a language or
            region setting.
          </p>
        </div>
      </Container>
    </section>
  );
}
