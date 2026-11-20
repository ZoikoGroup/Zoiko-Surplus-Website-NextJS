"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { Check, Info, Lock, Shield, TriangleAlert } from "lucide-react";
import { GuideSection, markets, racImg, sora } from "./shared";

const relationships = ["Buyer", "Seller", "Partner", "Member of the public", "Other"];

const field =
  "min-h-12 w-full rounded-lg border border-[#d5dbe6] bg-white px-4 text-base text-[#0f1f3a] focus:border-[#926016] focus:outline-none focus:ring-1 focus:ring-[#926016]";
const labelCls = "text-sm font-semibold text-[#0f1f3a]";
const checkbox = "size-5 shrink-0 cursor-pointer rounded border-[#c3ccd9] accent-[#926016]";

export default function FormPreview() {
  const id = useId();
  const f = (name: string) => `${id}-${name}`;
  const [wantsReply, setWantsReply] = useState(false);
  const [reviewed, setReviewed] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Preview only: no intake is connected, so nothing leaves the browser and no reference is issued.
    setReviewed(true);
  }

  return (
    <GuideSection
      id="form-preview"
      num="04"
      label="Conditional intake"
      title="Raise a concern, shown as a preview."
      lead="Reporting is currently unavailable. This form appears only when intake is verified and operational."
    >
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,776px)_minmax(0,1fr)]">
        <form
          onSubmit={onSubmit}
          onChange={() => setReviewed(false)}
          onReset={() => {
            setWantsReply(false);
            setReviewed(false);
          }}
          aria-describedby={f("preview-note")}
          className="flex flex-col gap-6 rounded-2xl border border-[#e6e9ef] bg-white p-5 md:p-7"
        >
          <p id={f("preview-note")} className="sr-only">
            Preview only. No intake is connected and nothing you enter is sent.
          </p>
          <div className="flex flex-col gap-4">
            <p className="flex items-start gap-2.5 rounded-xl bg-[#fde8e8] px-4 py-3 text-sm leading-6 text-[#5c1f1f]">
              <TriangleAlert aria-hidden="true" className="mt-1 size-4 shrink-0" strokeWidth={1.75} />
              Immediate danger? Contact local emergency services. Do not use this form.
            </p>
            <p className="flex items-start gap-2.5 rounded-xl bg-[#fdf3dc] px-4 py-3 text-sm leading-6 text-[#3d2a0c]">
              <Lock aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#8a5a14]" strokeWidth={1.75} />
              Do not enter passwords, payment details, identity files or confidential inventory.
            </p>
          </div>

          <fieldset className="flex flex-col gap-5">
            <legend className={`${sora} mb-3 text-xl font-semibold text-[#0f1f3a] md:text-[22px]`}>
              About the concern
            </legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id={f("relationship")}
                label={
                  <>
                    Your relationship <Optional />
                  </>
                }
              >
                <select id={f("relationship")} name="relationship" defaultValue="" className={field}>
                  <option value="">Not specified</option>
                  {relationships.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </Field>
              <Field
                id={f("market")}
                label={
                  <>
                    Country or market <Optional />
                  </>
                }
              >
                <select id={f("market")} name="market" defaultValue="" className={field}>
                  <option value="">Not specified</option>
                  {markets.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field id={f("summary")} label="Brief summary" required>
              <input id={f("summary")} name="summary" type="text" maxLength={120} required className={field} />
            </Field>
            <Field id={f("description")} label="Describe what happened and why you are concerned" required>
              <textarea
                id={f("description")}
                name="description"
                rows={5}
                maxLength={2000}
                required
                className={`${field} min-h-[140px] resize-y py-3`}
              />
            </Field>
          </fieldset>

          <fieldset className="flex flex-col gap-5">
            <legend className={`${sora} mb-3 text-xl font-semibold text-[#0f1f3a] md:text-[22px]`}>
              Would you like a reply?
            </legend>
            <div className="flex flex-col gap-2">
              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#0f1f3a]">
                <input
                  type="checkbox"
                  name="wantsReply"
                  checked={wantsReply}
                  onChange={(e) => setWantsReply(e.target.checked)}
                  className={checkbox}
                />
                Yes, I would like a reply.
              </label>
              <p className="text-xs text-[#556987]">No anonymity or response time is promised.</p>
            </div>
            <Field
              id={f("email")}
              label={
                <>
                  Email address <Optional>(if reply requested)</Optional>
                </>
              }
            >
              <input
                id={f("email")}
                name="email"
                type="email"
                autoComplete="email"
                required={wantsReply}
                className={field}
              />
            </Field>
          </fieldset>

          <label className="flex cursor-pointer items-start gap-3 text-sm text-[#0f1f3a]">
            <input type="checkbox" name="privacy" required className={`${checkbox} mt-px`} />
            I have read the privacy notice and I am not including sensitive details.
          </label>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                type="submit"
                className="inline-flex min-h-12 cursor-pointer items-center rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
              >
                Review concern
              </button>
              <button
                type="reset"
                className="inline-flex min-h-12 cursor-pointer items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
              >
                Cancel
              </button>
            </div>
            <p
              role="status"
              className={
                reviewed
                  ? "flex items-start gap-2.5 rounded-xl bg-[#eef1f6] px-4 py-3 text-sm leading-6 text-[#3d4a60]"
                  : "sr-only"
              }
            >
              {reviewed && (
                <>
                  <Info aria-hidden="true" className="mt-1 size-4 shrink-0" strokeWidth={1.75} />
                  This is a preview. Your entries are complete, but intake is not connected, so nothing has been sent
                  and no reference has been issued.
                </>
              )}
            </p>
          </div>
        </form>

        <aside className="flex flex-col gap-8">
          <section className="flex flex-col gap-3 rounded-2xl border border-[#e6e9ef] bg-white p-6">
            <h3 className={`${sora} flex items-center gap-2.5 text-lg font-semibold text-[#0f1f3a]`}>
              <Shield aria-hidden="true" className="size-5" strokeWidth={1.75} />
              Preview only
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "No intake is connected. Nothing is sent and no reference is issued.",
                "Fields and states need owner approval.",
                "Not for emergencies or routine support.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] leading-6 text-[#4b5b75]">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <div className="relative aspect-[444/333] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={racImg("form-preview.webp")}
              alt="Hands tying string around a cardboard parcel beside a laptop"
              fill
              sizes="(min-width: 1024px) 444px, 100vw"
              className="object-cover"
            />
          </div>
        </aside>
      </div>
    </GuideSection>
  );
}

function Optional({ children = "(optional)" }: { children?: string }) {
  return <span className="font-normal text-[#556987]">{children}</span>;
}

function Field({
  id,
  label,
  required = false,
  children,
}: {
  id: string;
  label: ReactNode;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelCls}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
    </div>
  );
}
