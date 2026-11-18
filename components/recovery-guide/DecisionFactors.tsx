import { Clock, Coins, Lock, MapPin, Scale, Search, Truck, Users, type LucideIcon } from "lucide-react";
import { Container, SectionHeading, hanken } from "./shared";

const factors: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Search, title: "Quality", body: "Grade, defects and fitness for the route." },
  { icon: Scale, title: "Legality", body: "Rules for the goods, corridor and parties." },
  { icon: Lock, title: "Brand control", body: "Channel limits and confidentiality." },
  { icon: MapPin, title: "Market", body: "Approved country and activation status." },
  { icon: Users, title: "Demand", body: "Permitted audiences who might want it." },
  { icon: Truck, title: "Logistics", body: "Handling, packaging and movement." },
  { icon: Clock, title: "Timing", body: "Shelf life, season and storage cost." },
  { icon: Coins, title: "Economics", body: "Net result after costs and uncertainty." },
];

export default function DecisionFactors() {
  return (
    <section
      id="decision-factors"
      aria-labelledby="decision-factors-heading"
      className={`${hanken} scroll-mt-28 bg-[#0c2140] py-14 md:py-20`}
    >
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading
          id="decision-factors-heading"
          label="Decision factors"
          tone="dark"
          title="Weigh eight things before choosing a route."
          lead="Use them as a matrix, in this order, before looking at any example."
          titleClassName="max-w-none"
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {factors.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-2 rounded-2xl bg-[#13305a] p-5">
              <span className="flex size-11 items-center justify-center rounded-lg bg-[#134e4a]/70 text-[#5fd0ad]">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="pt-1 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-5 text-[#b8c4da]">{body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
