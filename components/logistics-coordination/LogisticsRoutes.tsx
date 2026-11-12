import Image from "next/image";
import { ArrowLeftRight, ArrowUpRight, Package, RotateCcw, Truck, Users, type LucideIcon } from "lucide-react";
import { GuideSection, lcImg, sora } from "./shared";

type Route = { icon: LucideIcon; title: string; body: string; image: string; alt: string };

const wide: Route[] = [
  {
    icon: Package,
    title: "Collection",
    body: "A permitted provider collects approved goods from an authorized site.",
    image: lcImg("route-collection.webp"),
    alt: "Workers handing boxes between a truck and a loading bay",
  },
  {
    icon: ArrowLeftRight,
    title: "Transfer",
    body: "Goods pass between approved parties with a recorded handoff.",
    image: lcImg("route-transfer.webp"),
    alt: "Person labelling a parcel at a desk",
  },
];

const narrow: Route[] = [
  {
    icon: Truck,
    title: "Delivery",
    body: "Delivery to an approved destination.",
    image: lcImg("route-delivery.webp"),
    alt: "Logistics worker with a tablet at the back of a van",
  },
  {
    icon: Users,
    title: "Redistribution",
    body: "Movement to a permitted organization.",
    image: lcImg("route-redistribution.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
  {
    icon: RotateCcw,
    title: "Return",
    body: "Goods sent back under agreed terms.",
    image: lcImg("route-return.webp"),
    alt: "Retail staff and a customer at a clothing rack",
  },
];

// Photo card with the label and arrow on top and the route name over a navy fade. Not a link: no route is live.
function RouteCard({ route, aspect, sizes }: { route: Route; aspect: string; sizes: string }) {
  const Icon = route.icon;
  return (
    <li className={`relative ${aspect} w-full overflow-hidden rounded-2xl bg-[#16263f]`}>
      <Image src={route.image} alt={route.alt} fill sizes={sizes} className="object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,58,0)_40%,rgba(15,31,58,0.88)_100%)]"
      />
      <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-[#0f1f3a]">
        Illustrative
      </span>
      <span
        aria-hidden="true"
        className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white text-[#0f1f3a]"
      >
        <ArrowUpRight className="size-4" strokeWidth={1.75} />
      </span>
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 md:p-5">
        <h3 className={`${sora} flex items-center gap-2 text-xl font-semibold text-white`}>
          <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
          {route.title}
        </h3>
        <p className="text-sm leading-5 text-[#e3e8f1]">{route.body}</p>
      </div>
    </li>
  );
}

export default function LogisticsRoutes() {
  return (
    <GuideSection
      id="routes"
      num="03"
      label="Permitted logistics pathways"
      title="Five illustrative routes."
      lead="Examples of how goods could move. None is a service offer or a coverage claim."
    >
      <div className="flex flex-col gap-4">
        <ul className="grid gap-4 md:grid-cols-2">
          {wide.map((r) => (
            <RouteCard key={r.title} route={r} aspect="aspect-[612/300]" sizes="(min-width: 768px) 612px, 100vw" />
          ))}
        </ul>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {narrow.map((r) => (
            <RouteCard
              key={r.title}
              route={r}
              aspect="aspect-[403/230]"
              sizes="(min-width: 1024px) 403px, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
