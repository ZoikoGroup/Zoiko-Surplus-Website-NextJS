import { GuideSection, LedgerTable } from "./shared";

const rows = [
  ["Seller permission", "Which audiences may see an opportunity", "Set by the seller within approved rules"],
  ["Category conditions", "Safety, brand and legal requirements per category", "Food is gated separately"],
  ["Buyer KYB", "Organization identity, role and eligibility", "Not a guarantee of product safety, title or outcome"],
  ["Corridor and currency", "Approved routes and currencies between markets", "Varies by market"],
  ["Payment provider", "How funds move in a given market", "No custody, merchant-of-record, escrow or lender role by default"],
  ["Exceptions", "Withdrawals, disputes and recalls", "Defined processes, no guaranteed remedy"],
];

export default function ControlLedger() {
  return (
    <GuideSection
      id="controls"
      num="12"
      label="Control ledger"
      title={
        <>
          Six controls that must
          <br className="hidden md:block" /> line up.
        </>
      }
      lead="Each control has an owner and a limit. Nothing here is a guarantee."
    >
      <LedgerTable headings={["Control", "What it governs", "Limit"]} rows={rows} colWidths={["w-[18%]", "w-[36%]"]} />
    </GuideSection>
  );
}
