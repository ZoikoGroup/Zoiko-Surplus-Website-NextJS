import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageTag, hanken, sora, srImg } from "./shared";

export default function Hero() {
  return (
    <section
      aria-labelledby="sr-hero-heading"
      className={`${hanken} bg-[linear-gradient(180deg,#fffaf6_0%,#fafbfd_100%)]`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,620px)_minmax(0,540px)] lg:justify-between lg:px-24 lg:py-24 xl:px-28">
        <div className="flex flex-col gap-6">
          <h1
            id="sr-hero-heading"
            className={`${sora} text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#0f1f3a] sm:text-[48px] md:text-[56px] lg:text-[44px] xl:text-[56px] min-[1400px]:text-[64px] sm:[&>span]:block sm:[&>span]:whitespace-nowrap`}
          >
            {/* Three fixed lines from sm, as in the design. */}
            <span>Know what needs </span>
            <span>review before </span>
            <span>
              you <span className="text-[#1f9a7f]">sell surplus.</span>
            </span>
          </h1>
          <p className="max-w-[620px] text-base leading-7 text-[#4b5b75] md:text-lg">
            Prepare the facts that help an enterprise assess a legitimate surplus use case: who may authorize the goods,
            what the stock is and where it is, how condition and safety are evidenced, and whether brand, category and
            market requirements allow a proposed route.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 [&>a]:whitespace-nowrap">
            <Link
              href="#pillar-details"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
            >
              Open Full Readiness Checklist
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/request-enterprise-demo"
              className="inline-flex min-h-12 items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-sm font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
            >
              Request Enterprise Demo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-[317fr_211fr] grid-rows-2 gap-3">
          <div className="relative row-span-2 aspect-[317/464] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={srImg("hero-warehouse.webp")}
              alt="Warehouse racking stacked with cardboard boxes"
              fill
              priority
              sizes="(min-width: 1024px) 317px, 60vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3">
              <ImageTag>Five educational categories</ImageTag>
            </span>
          </div>
          <div className="relative w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={srImg("hero-phone.webp")}
              alt="Shop owner taking notes during a phone call"
              fill
              priority
              sizes="(min-width: 1024px) 211px, 40vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden rounded-[20px] bg-[#16263f]">
            <Image
              src={srImg("hero-clipboard.webp")}
              alt="Person checking a clipboard in a stockroom"
              fill
              priority
              sizes="(min-width: 1024px) 211px, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
