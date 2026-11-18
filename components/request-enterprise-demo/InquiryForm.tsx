"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { Check, EyeOff, Info, Lock, Shield, type LucideIcon } from "lucide-react";
import { GuideSection, markets, sora } from "./shared";

const challenges = [
  "Excess or overstock",
  "Customer returns",
  "Imperfect or damaged packaging",
  "End-of-line or discontinued goods",
  "Other",
];

const categories = [
  "Apparel and footwear",
  "Electronics",
  "Home and household",
  "Industrial",
  "Food (separately gated)",
  "Other / not sure",
];

const MAX_CONTEXT = 750;

const field =
  "min-h-12 w-full rounded-lg border border-[#d5dbe6] bg-white px-4 text-base text-[#0f1f3a] focus:border-[#926016] focus:outline-none focus:ring-1 focus:ring-[#926016]";
const labelCls = "text-sm font-semibold text-[#0f1f3a]";
const hint = "text-xs text-[#556987]";
const checkbox = "size-5 shrink-0 cursor-pointer rounded border-[#c3ccd9] accent-[#926016]";

export default function InquiryForm() {
  const id = useId();
  const [context, setContext] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send to the enterprise inquiry endpoint once it exists. Until then nothing leaves the browser,
    // and per the design ("only if the inquiry is really received") no receipt is shown.
    setSubmitted(true);
  }

  const f = (name: string) => `${id}-${name}`;

  return (
    <GuideSection
      id="inquiry"
      num="05"
      label="Enterprise inquiry"
      title="Tell us about your organization."
      lead="Required fields are marked. The server will make the final decision on any submission."
    >
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,776px)_minmax(0,1fr)]">
        <form
          onSubmit={onSubmit}
          onChange={() => setSubmitted(false)}
          className="flex flex-col gap-6 rounded-2xl border border-[#e6e9ef] bg-white p-5 md:p-7"
        >
          <p className="flex items-start gap-2.5 rounded-xl bg-[#fdf3dc] px-4 py-3 text-sm leading-6 text-[#3d2a0c]">
            <Lock aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#8a5a14]" strokeWidth={1.75} />
            Do not include pricing, customer lists, personal identifiers, sensitive product details or confidential
            contracts.
          </p>

          <fieldset className="flex flex-col gap-5">
            <legend className={`${sora} mb-5 text-xl font-semibold text-[#0f1f3a] md:text-[22px]`}>Your details</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={f("name")} label="Full name">
                <input id={f("name")} name="fullName" type="text" autoComplete="name" required className={field} />
              </Field>
              <Field id={f("email")} label="Work email">
                <input id={f("email")} name="workEmail" type="email" autoComplete="email" required className={field} />
              </Field>
              <Field id={f("org")} label="Organization name">
                <input id={f("org")} name="organization" type="text" autoComplete="organization" required className={field} />
              </Field>
              <Field id={f("role")} label="Role or title">
                <input id={f("role")} name="role" type="text" autoComplete="organization-title" required className={field} />
              </Field>
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-5">
            <legend className={`${sora} mb-5 text-xl font-semibold text-[#0f1f3a] md:text-[22px]`}>Your business</legend>
            <div className="grid items-start gap-5 sm:grid-cols-2">
              <Field id={f("market")} label="Primary market" help="Informational. Locale is not entitlement.">
                <select id={f("market")} name="market" required defaultValue="" className={field}>
                  <option value="" disabled>
                    Select a market
                  </option>
                  {markets.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </Field>
              <Field id={f("challenge")} label="Main business challenge">
                <select id={f("challenge")} name="challenge" required defaultValue="" className={field}>
                  <option value="" disabled>
                    Select a challenge
                  </option>
                  {challenges.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
            </div>

            <fieldset className="flex flex-col gap-3" aria-describedby={f("cat-help")}>
              <legend className={`${labelCls} mb-3`}>
                Inventory category <Optional />
              </legend>
              <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
                {categories.map((c) => (
                  <label key={c} className="flex cursor-pointer items-center gap-3 text-sm text-[#0f1f3a]">
                    <input type="checkbox" name="categories" value={c} className={checkbox} />
                    {c}
                  </label>
                ))}
              </div>
              <p id={f("cat-help")} className={hint}>
                Categories are not presented as active markets.
              </p>
            </fieldset>

            <Field
              id={f("context")}
              label={
                <>
                  Brief context <Optional />
                </>
              }
              help={`${context.length} / ${MAX_CONTEXT} characters. High-level goals only.`}
            >
              <textarea
                id={f("context")}
                name="context"
                rows={5}
                maxLength={MAX_CONTEXT}
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className={`${field} min-h-[140px] resize-y py-3`}
              />
            </Field>

            <Field
              id={f("contact")}
              label={
                <>
                  Contact preference <Optional />
                </>
              }
              help="Email is the default. Phone is offered only where supported."
            >
              <select id={f("contact")} name="contactPreference" defaultValue="email" className={field}>
                <option value="email">Email</option>
              </select>
            </Field>
          </fieldset>

          <div className="flex flex-col gap-4">
            <label className="flex cursor-pointer items-start gap-3 text-sm text-[#0f1f3a]">
              <input type="checkbox" name="privacy" required className={`${checkbox} mt-px`} />
              I have read the privacy notice and understand how my details will be used to respond to this inquiry.
            </label>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-[#0f1f3a]">
              <input type="checkbox" name="updates" className={`${checkbox} mt-px`} />
              Optional: send me updates. This is separate from my inquiry.
            </label>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="inline-flex min-h-12 w-fit cursor-pointer items-center rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Submit Enterprise Inquiry
            </button>
            <p role="status" className={submitted ? "flex items-start gap-2.5 rounded-xl bg-[#eef1f6] px-4 py-3 text-sm leading-6 text-[#3d4a60]" : "sr-only"}>
              {submitted && (
                <>
                  <Info aria-hidden="true" className="mt-1 size-4 shrink-0" strokeWidth={1.75} />
                  Your entries are complete, but this form is not connected yet, so nothing has been sent or stored.
                </>
              )}
            </p>
          </div>
        </form>

        <aside className="flex flex-col gap-4">
          <NoticeCard
            icon={Shield}
            title="Eligibility notice"
            items={[
              "Market and category availability are subject to review and activation.",
              "Submitting is not an offer, approval or account creation.",
            ]}
          />
          <NoticeCard
            icon={EyeOff}
            title="Not collected here"
            items={["Attachments or documents", "IDs, tax or payment details", "SKU lists, quantities or prices"]}
          />
        </aside>
      </div>
    </GuideSection>
  );
}

function Optional() {
  return <span className="font-normal text-[#556987]">(optional)</span>;
}

function Field({ id, label, help, children }: { id: string; label: ReactNode; help?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
      {help && <p className={hint}>{help}</p>}
    </div>
  );
}

function NoticeCard({ icon: Icon, title, items }: { icon: LucideIcon; title: string; items: string[] }) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-[#e6e9ef] bg-white p-6">
      <h3 className={`${sora} flex items-center gap-3 text-lg font-semibold text-[#0f1f3a]`}>
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[15px] leading-6 text-[#4b5b75]">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
