import { GuideSection, LedgerTable } from "./shared";

const rows: { decision: string; who: string; see: string; notInfer: string }[] = [
  {
    decision: "01 Inquiry / application",
    who: "Applicant and approved intake",
    see: "Confirmation of receipt, or a safe error",
    notInfer: "Organization is verified",
  },
  {
    decision: "02 Organization verification",
    who: "Approved reviewer, configured KYB controls",
    see: "A specific status and next step",
    notInfer: "Access to any seller inventory",
  },
  {
    decision: "03 Market and category eligibility",
    who: "Market and category policy, seller limits",
    see: "Eligible, pending, unavailable, restricted or needs review",
    notInfer: "Legal permission to transact",
  },
  {
    decision: "04 Seller-specific entitlement",
    who: "Seller rules, invitation, role, corridor",
    see: "Scoped access, if independently approved",
    notInfer: "Access across all private markets",
  },
  {
    decision: "05 Transaction-level control",
    who: "Policies, stock eligibility, authorized account",
    see: "Permitted actions in current scope",
    notInfer: "Payment, title transfer or fulfillment guarantee",
  },
];

const headings = ["Decision", "Who decides", "What you see", "Do not infer"];

export default function DecisionLedger() {
  return (
    <GuideSection
      id="ledger"
      num="11"
      label="Decision ledger"
      title={
        <>
          Who decides what, and
          <br className="hidden md:block" /> what you must not assume.
        </>
      }
      lead="Each decision has its own owner. Passing one never implies the next."
    >
      <LedgerTable
        headings={headings}
        rows={rows.map((r) => [r.decision, r.who, r.see, r.notInfer])}
        colWidths={["w-[24%]", "w-[25%]", "w-[26%]"]}
      />
    </GuideSection>
  );
}
