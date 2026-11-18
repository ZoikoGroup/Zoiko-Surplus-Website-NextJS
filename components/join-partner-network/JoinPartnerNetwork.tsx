import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Network, Package, TriangleAlert } from "lucide-react";

const ACTIONS = [
  {
    label: "Explore Partner Inquiry",
    href: "/surplus/partner-inquiry",
    primary: true,
  },
  {
    label: "Explore Surplus Network",
    href: "/surplus/network",
    primary: false,
  },
] as const;

const IMAGES = {
  main: {
    src: "/images/join/1.png",
    alt: "Two workers in safety vests carrying boxes beside a loading dock",
  },
  top: {
    src: "/images/join/2.png",
    alt: "Worker handling packed boxes inside a warehouse",
  },
  bottom: {
    src: "/images/join/3.png",
    alt: "Row of cars parked inside a vehicle storage facility",
  },
} as const;

export default function JoinPartnerNetwork() {
  return (
    <section className="w-full overflow-x-hidden bg-gradient-to-b from-[#FEFAF7] to-[#FCFCFF] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1300px] items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        {/* Left */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#8a5a12]">
            Surplus Network / Third-party Participation
          </p>

          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Join <span className="text-[#1fa37a]">Partner Network</span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-7 text-[#4b5563]">
            Zoiko Surplus may consider qualified third-party organizations for
            seller-authorized logistics, redistribution, reuse and other
            permitted surplus disposition activities. Participation depends on
            capability review, legal and category requirements, contractual
            terms and local program availability.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.primary
                    ? "inline-flex items-center gap-2 rounded-full bg-[#8a5a12] px-6 py-3 text-sm font-semibold text-white"
                    : "inline-flex items-center gap-2 rounded-full border border-[#e3ddd0] bg-white px-6 py-3 text-sm font-semibold text-[#1f2a37]"
                }
              >
                {action.label}
                {action.primary && (
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                )}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex max-w-[560px] items-start gap-3 rounded-xl bg-[#fdf1d6] px-4 py-3 text-sm leading-5 text-[#4b5563]">
            <TriangleAlert
              className="mt-0.5 h-4 w-4 shrink-0 text-[#b7791f]"
              aria-hidden="true"
            />
            <p>
              <strong className="font-bold text-[#1f2a37]">Status:</strong>{" "}
              Partner inquiry is not open in this preview. An inquiry starts a
              review. It does not approve a partnership or grant access to
              inventory, sellers, markets or assignments.
            </p>
          </div>
        </div>

        {/* Right: image collage */}
        <div className="mx-auto grid h-[420px] w-full max-w-[520px] grid-cols-[1.35fr_1fr] gap-3 sm:h-[480px] lg:mx-0 lg:ml-auto lg:h-[500px]">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.main.src}
              alt={IMAGES.main.alt}
              fill
              sizes="(min-width: 1024px) 300px, 55vw"
              className="object-cover"
              priority
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-[#1f2a37] shadow">
              Third-party execution
            </span>
          </div>

          <div className="grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.top.src}
                alt={IMAGES.top.alt}
                fill
                sizes="(min-width: 1024px) 200px, 40vw"
                className="object-cover"
              />
              <span className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#8a5a12] shadow">
                <Package className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.bottom.src}
                alt={IMAGES.bottom.alt}
                fill
                sizes="(min-width: 1024px) 200px, 40vw"
                className="object-cover"
              />
              <span className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#8a5a12] shadow">
                <Network className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
