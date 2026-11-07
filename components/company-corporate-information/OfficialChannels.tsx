import Image from "next/image";
import { footerSocials } from "@/lib/footer";
import { Container, Eyebrow, Note, hanken } from "./shared";

// Channels aren't verified yet, so they render as non-interactive pills rather than links.
export default function OfficialChannels() {
  return (
    <section aria-labelledby="channels-heading" className={`${hanken} bg-[#15263f] py-16 md:py-24`}>
      <Container className="flex flex-col items-center gap-4 text-center">
        <Eyebrow num="17" label="Official channels" tone="dark" />
        <h2 id="channels-heading" className="pt-4 text-[32px] font-bold tracking-[-0.02em] text-white md:text-[40px]">
          Verified channels only.
        </h2>
        <p className="max-w-[640px] text-base leading-[26px] text-white/85 md:text-lg">
          Follow official Zoiko Surplus channels. These appear as live links only once the official account, URL and
          brand ownership are verified.
        </p>
        <ul className="flex flex-wrap justify-center gap-3 pt-6">
          {footerSocials.map((s) => (
            <li key={s.name}>
              <span
                aria-disabled="true"
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white/20 px-4 text-sm font-semibold text-white"
              >
                <Image src={`/images/footer/desktop/${s.icon}.svg`} alt="" width={18} height={18} />
                {s.name}
              </span>
            </li>
          ))}
        </ul>
        <Note tone="dark">
          <span className="text-white/85">
            Channel links are placeholders until the official accounts are verified — treat unverified profiles with
            caution.
          </span>
        </Note>
      </Container>
    </section>
  );
}
