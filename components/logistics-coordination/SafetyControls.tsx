import { Ban, Clock, Globe, Scale, TriangleAlert, Utensils, type LucideIcon } from "lucide-react";
import { Container, SectionHeading, hanken, sora } from "./shared";

const controls: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Ban, title: "Recalled goods", body: "Excluded and escalated for review." },
  { icon: TriangleAlert, title: "Hazardous goods", body: "Specialist handling by authorized providers only." },
  { icon: Utensils, title: "Food", body: "Separate safety gate. No food route is assumed active." },
  { icon: Clock, title: "Expiry-sensitive goods", body: "Reviewed apart from general goods." },
  { icon: Scale, title: "Controlled or prohibited", body: "Not moved without clearance." },
  { icon: Globe, title: "Market and corridor", body: "Only approved lanes, per market." },
];

export default function SafetyControls() {
  return (
    <section
      id="safety-controls"
      aria-labelledby="lc-safety-heading"
      className={`${hanken} my-8 scroll-mt-28 bg-[#0d2040] py-16 md:my-12 md:py-24`}
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading
          id="lc-safety-heading"
          tone="dark"
          label="Category and market safety controls"
          title={
            <>
              Some goods never take
              <br className="hidden md:block" /> the standard route.
            </>
          }
          lead="These exceptions stop or reroute a movement."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </Container>
    </section>
  );
}
