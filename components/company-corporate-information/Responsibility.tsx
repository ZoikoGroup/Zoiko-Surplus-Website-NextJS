import { SplitFeature, img } from "./shared";

export default function Responsibility() {
  return (
    <SplitFeature
      id="responsibility-heading"
      num="10"
      label="Responsibility"
      title="Responsible disposition, by design."
      lead="A governed model is intended to help usable goods reach a safe, lawful outcome instead of waste — described qualitatively, with no performance or impact claims."
      image={img("responsibility.webp")}
      alt="Warehouse worker scanning a parcel at a packing station"
      points={[
        { title: "Keep goods in use", body: "Support reuse, redistribution and recovery where permitted." },
        { title: "Lawful outcomes", body: "Routes follow category rules and local law." },
        { title: "No impact claims", body: "No environmental figures are asserted here." },
      ]}
    />
  );
}
