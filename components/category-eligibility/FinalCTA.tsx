import ImageCTA from "@/components/for-partners/ImageCTA";
import { ceImg } from "./shared";

export default function FinalCTA() {
  return (
    <ImageCTA
      id="ce-cta-heading"
      image={ceImg("cta-bg.webp")}
      title={
        <>
          Read the category article.
          <br className="hidden sm:block" /> Then talk to us if it fits.
        </>
      }
      primary={{ label: "Explore Category Overviews", href: "#families" }}
      secondary={{ label: "Request Enterprise Demo", href: "/request-enterprise-demo" }}
    />
  );
}
