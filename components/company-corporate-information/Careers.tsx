import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Note, SplitFeature, hanken, img } from "./shared";

export default function Careers() {
  return (
    <SplitFeature
      id="careers-heading"
      num="15"
      label="Careers"
      title="Build governed surplus commerce."
      lead="We’re a team focused on governance, trust and responsible disposition. Role openings are published on the careers page as they become available."
      image={img("careers.webp")}
      alt="Hand placing a small cardboard box on top of a stack of boxes"
      points={[
        { title: "Mission-led", body: "Governed, responsible B2B surplus commerce." },
        { title: "Trust & safety first", body: "Clear controls and honest limits." },
      ]}
    >
      <div className="-mt-3 flex flex-col gap-4">
        <Link
          href="#"
          className={`${hanken} inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-[#d3dbe6] bg-white px-6 text-base font-semibold text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]`}
        >
          View careers
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
        </Link>
        <Note>No specific roles, locations or counts are listed here until published.</Note>
      </div>
    </SplitFeature>
  );
}
