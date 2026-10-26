"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";

const markets = [
  "North America",
  "Europe",
  "United Kingdom",
  "Middle East & Africa",
  "Asia-Pacific",
  "Latin America",
];
const roles = ["Enterprise seller", "Verified buyer", "Recovery or logistics partner", "Other inquiry"];

type Errors = Partial<Record<"company" | "email" | "market" | "role" | "consent", string>>;

const labelClass = "text-[13px] leading-[20.8px] font-semibold text-[#0c2140]";
const fieldClass =
  "block min-h-[50px] w-full rounded-lg border border-[#d3dde8] bg-white px-[14px] text-base text-[#14263e] outline-none focus:border-[#926016] md:text-lg";

function Required() {
  return <span className="text-[#926016]">*</span>;
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-xs leading-[19.2px] text-[#b3261e]">
      {message}
    </p>
  );
}

export default function ConversionFormCard() {
  const [errors, setErrors] = useState<Errors>({});
  const [validated, setValidated] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    if (!String(data.get("company") ?? "").trim()) next.company = "Enter your company name.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") ?? "").trim())) next.email = "Enter a valid work email.";
    if (!data.get("market")) next.market = "Select a market.";
    if (!data.get("role")) next.role = "Select an option.";
    if (!data.get("consent")) next.consent = "Please confirm to continue.";
    setErrors(next);
    setValidated(Object.keys(next).length === 0);
  };

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="flex w-full flex-col rounded-2xl bg-white px-[22.4px] pt-[21.57px] pb-[22.39px] md:flex-1 md:px-8 md:pt-[31px] md:pb-8"
    >
      <h3 className="pb-[0.54px] text-[20.8px] leading-[25.38px] font-semibold tracking-[-0.208px] text-[#0c2140] md:p-0">
        Request an enterprise
        <br className="md:hidden" /> demo
      </h3>
      <p className="pt-[6.3px] pb-1.5 text-[16.1px] leading-[25.7px] text-[#14263e] md:pt-[7px] md:pb-[5.99px] md:text-lg md:leading-[28.72px]">
        All fields are required unless
        <br className="md:hidden" /> noted.
      </p>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-company" className={labelClass}>
          Company name <Required />
        </label>
        <input
          id="cf-company"
          name="company"
          type="text"
          autoComplete="organization"
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "cf-company-err" : undefined}
          className={`${fieldClass} h-[50px]`}
        />
        <ErrorText id="cf-company-err" message={errors.company} />
      </div>

      <div className="flex flex-col gap-1.5 pt-4">
        <label htmlFor="cf-email" className={labelClass}>
          Work email <Required />
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "cf-email-err" : undefined}
          className={`${fieldClass} h-[50px]`}
        />
        <ErrorText id="cf-email-err" message={errors.email} />
      </div>

      {(
        [
          { id: "market", label: "Country or market of interest", placeholder: "Select a market…", options: markets },
          { id: "role", label: "Role or inquiry type", placeholder: "Select one…", options: roles },
        ] as const
      ).map((f) => (
        <div key={f.id} className="flex flex-col gap-1.5 pt-4">
          <label htmlFor={`cf-${f.id}`} className={labelClass}>
            {f.label} <Required />
          </label>
          <div className="relative">
            <select
              id={`cf-${f.id}`}
              name={f.id}
              defaultValue=""
              aria-invalid={!!errors[f.id]}
              aria-describedby={errors[f.id] ? `cf-${f.id}-err` : undefined}
              className={`${fieldClass} appearance-none pr-10`}
            >
              <option value="" disabled>
                {f.placeholder}
              </option>
              {f.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <Image
              src="/images/home/conversion-form/icon-chevron-down.svg"
              alt=""
              width={16}
              height={16}
              className="pointer-events-none absolute top-1/2 right-[15px] -translate-y-1/2"
            />
          </div>
          <ErrorText id={`cf-${f.id}-err`} message={errors[f.id]} />
        </div>
      ))}

      <div className="pt-[17px] pb-[9px]">
        <div className="flex items-start gap-[11px]">
          <span className="h-[26px] w-[29px] shrink-0 pt-px pr-[3px] pb-[3px] pl-1">
            <input
              id="cf-consent"
              name="consent"
              type="checkbox"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "cf-consent-err" : undefined}
              className="m-0 block size-[22px] cursor-pointer appearance-none rounded-[2.5px] border border-[#767676] bg-white checked:border-[#926016] checked:bg-[#926016] checked:bg-[url(/images/home/conversion-form/icon-checkbox-tick.svg)]"
            />
          </span>
          <label htmlFor="cf-consent" className="text-[13px] leading-[20.8px] text-[#4f647a]">
            I agree to be contacted about
            <br className="md:hidden" /> my inquiry and understand
            <br className="hidden md:block" />
            <br className="md:hidden" /> how my information will be
            <br className="md:hidden" /> handled. <Required />
          </label>
        </div>
        <div className="pl-10">
          <ErrorText id="cf-consent-err" message={errors.consent} />
        </div>
      </div>

      <button
        type="submit"
        className="min-h-12 w-full cursor-pointer rounded-full border border-transparent bg-[#0c2140] px-[26px] py-1 text-[15px] leading-[18px] font-semibold text-white transition-colors hover:bg-[#14263e] md:bg-[#926016] md:py-[13.5px] md:hover:bg-[#7d5112]"
      >
        Request Enterprise
        <br className="md:hidden" /> Demo
      </button>

      <p role="status" className="pt-[17px] text-center text-xs leading-[19.2px] text-[#4f647a]">
        {validated ? (
          "Thank you. Your entries look complete. This demonstration form does not send or store anything."
        ) : (
          <>
            This is a demonstration form.
            <br className="md:hidden" /> Submitting validates your entries but
            <br className="hidden md:block" />
            <br className="md:hidden" /> does not send or store anything.
          </>
        )}
      </p>
    </form>
  );
}
