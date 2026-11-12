import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DarkSplit, ppImg } from "./shared";

export default function PermittedFirst() {
  return (
    <DarkSplit
      id="permitted-first"
      num="08"
      label="Permitted first"
      title={
        <>
          Only permitted routes,
          <br className="hidden md:block" /> only with approval.
        </>
      }
      image={ppImg("permitted-first.webp")}
      alt="Footwear and apparel display wall in a store"
      tag="Apparel & Footwear"
    >
      <p className="text-base leading-7 text-[#d5dceb] md:text-lg">
        Policy, safety and seller authorization come before any pathway runs — and partners perform the work, not Zoiko.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          href="#"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
        >
          Request Enterprise Demo
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
        </Link>
        <Link
          href="/solution-surplus-network"
          className="inline-flex min-h-12 items-center rounded-full border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
        >
          Surplus Network
        </Link>
      </div>
    </DarkSplit>
  );
}
