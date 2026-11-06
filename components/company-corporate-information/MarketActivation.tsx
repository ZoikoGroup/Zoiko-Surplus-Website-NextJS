import { SplitFeature, img } from "./shared";

export default function MarketActivation() {
  return (
    <SplitFeature
      id="market-activation-heading"
      num="08"
      label="Market activation"
      title="Global architecture, local activation."
      lead="The platform is designed to operate globally, but category, market and participant access are enabled market-by-market, subject to local law, approval and eligibility."
      image={img("market-activation.webp")}
      alt="Green globe between stacks of cardboard boxes on a blue wooden surface"
      points={[
        { title: "Architecture is global", body: "One model, many potential markets." },
        { title: "Access is activated", body: "Enabled per market, category and participant." },
        { title: "Selector is informational", body: "Locale sets content only; it grants nothing." },
      ]}
    />
  );
}
