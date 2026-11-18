import { GuideSection, LedgerTable } from "./shared";

const rows = [
  ["Apparel and footwear", "Grade definition, brand permission note", "Condition and brand rights"],
  ["Food and grocery", "Batch record, usable-life note", "Traceability and safety gate"],
  ["Electronics", "Data-wipe statement, recall check date", "Safety and provenance"],
  ["Home and lifestyle", "Safety mark note, packaging record", "Condition and child-use safety"],
  ["Industrial", "Technical description, export note", "Specialist classification"],
];

export default function EvidenceExamples() {
  return (
    <GuideSection
      id="evidence"
      num="06"
      label="Evidence illustrations"
      title="Generic examples. Not real stock."
      lead="Illustrative record fields only. Never submit real manifests, serials, buyer IDs, prices or brand contracts here."
    >
      <LedgerTable
        headings={["Category", "Example evidence (illustrative)", "What it supports"]}
        rows={rows}
        colWidths={["w-[25%]", "w-[42%]", ""]}
      />
    </GuideSection>
  );
}
