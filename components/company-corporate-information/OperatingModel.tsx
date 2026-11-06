import { SplitFeature, img } from "./shared";

export default function OperatingModel() {
  return (
    <SplitFeature
      id="operating-model-heading"
      num="02"
      label="Operating model"
      title="Asset-light by design."
      lead="Zoiko Surplus provides the governance, matching and evidence layer — it doesn’t own the goods or the infrastructure that moves them."
      image={img("operating-model.webp")}
      alt="Manager and warehouse worker in a hi-vis vest reviewing paperwork on boxed stock"
      points={[
        { title: "No owned inventory", body: "Goods stay with the accountable parties." },
        { title: "No warehouses or fleets", body: "Logistics via separately contracted partners." },
        { title: "Governance, matching, evidence", body: "What the platform actually provides." },
      ]}
    />
  );
}
