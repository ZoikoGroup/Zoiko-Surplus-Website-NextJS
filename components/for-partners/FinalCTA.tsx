import ImageCTA from "./ImageCTA";
import { fpImg } from "./shared";

export default function FinalCTA() {
  return (
    <ImageCTA
      id="fp-cta-heading"
      image={fpImg("cta-bg.webp")}
      title={
        <>
          Learn how the
          <br /> network may work.
        </>
      }
      primary={{ label: "Explore Surplus Network", href: "/solution-surplus-network" }}
      secondary={{ label: "Join Partner Network", href: "/join-partner-network" }}
    />
  );
}
