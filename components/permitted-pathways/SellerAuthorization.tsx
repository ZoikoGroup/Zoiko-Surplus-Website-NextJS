import { Check } from "lucide-react";
import { DarkSplit, ppImg } from "./shared";

const principles = [
  { title: "Explicit approval", body: "A named authority approves the route." },
  { title: "Revocable", body: "Approval can be withdrawn at any time." },
  { title: "Recorded", body: "Decisions and reasons are evidenced." },
];

export default function SellerAuthorization() {
  return (
    <DarkSplit
      id="seller-authorization"
      num="05"
      label="Seller authorization"
      title="Ready to start a review?"
      image={ppImg("seller-authorization.webp")}
      alt="Two colleagues scanning and checking parcels with a tablet"
      tag="Apparel & Footwear"
    >
      <p className="text-base leading-7 text-[#d5dceb] md:text-lg">
        Every pathway is gated by explicit seller authorization. Audiences, routes and terms are seller-defined,
        revocable, and recorded.
      </p>
      <ul className="flex flex-col gap-4 pt-2">
        {principles.map((p) => (
          <li key={p.title} className="flex items-start gap-3">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#5fd0ad]" strokeWidth={2} />
            <div>
              <p className="text-base font-semibold text-white">{p.title}</p>
              <p className="text-sm leading-6 text-[#c3cde0]">{p.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </DarkSplit>
  );
}
