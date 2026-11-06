import Image from "next/image";
import { Band, SectionHeading, hanken, img } from "./shared";

const rows = [
  { cls: "Identity & provenance", covers: "Source, ownership and right to dispose", status: "Documented" },
  { cls: "Condition & function", covers: "Declared grade and functional status", status: "Seller-declared" },
  { cls: "Data status", covers: "Sanitization and lock status for data-bearing units", status: "Owner-led" },
  { cls: "Safety & recall", covers: "Battery class, electrical check, recall screen", status: "Reviewed" },
  { cls: "Authenticity", covers: "Counterfeit and IP checks where relevant", status: "Reviewed" },
  { cls: "Export & legal", covers: "Export-control and category compliance", status: "Where applicable" },
];

export default function EvidenceMatrix() {
  return (
    <Band id="evidence-matrix" labelledBy="ce-evidence-heading" className="flex flex-col gap-10 md:gap-12">
      <SectionHeading
        id="ce-evidence-heading"
        num="06"
        label="Evidence matrix"
        title="What a qualified electronics lot documents."
        titleClassName="max-w-[700px]"
        lead="The evidence classes a lot would carry. These describe what can be recorded — not live data, serials or identities."
      />

      <div className="flex flex-col gap-5">
        <div className="relative aspect-[1240/532] w-full overflow-hidden rounded-[20px] bg-[#0c1f3f]">
          <Image
            src={img("ce-evidence.webp")}
            alt="Developer reviewing code reflected on a screen"
            fill
            sizes="(min-width: 1440px) 1240px, 100vw"
            className="object-cover"
          />
        </div>

        <div className={`${hanken} overflow-x-auto rounded-2xl border border-[#e6e9ef] bg-white`}>
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-[#0c1f3f] text-xs font-semibold text-white">
              <tr>
                <th scope="col" className="px-4 py-4 font-semibold">Evidence class</th>
                <th scope="col" className="px-4 py-4 font-semibold">What it covers</th>
                <th scope="col" className="px-4 py-4 font-semibold">Status type</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.cls} className={`border-t border-[#eef1f5] ${i % 2 === 1 ? "bg-[#faf6ef]" : ""}`}>
                  <th scope="row" className="px-4 py-4 font-semibold text-[#0f1f3a]">{r.cls}</th>
                  <td className="px-4 py-4 text-[#556987]">{r.covers}</td>
                  <td className="px-4 py-4 text-[#556987]">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Band>
  );
}
