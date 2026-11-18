import SevenStagesTabs from "@/components/about/SevenStagesTabs";
import { GuideSection, Note, exImg } from "./shared";

// Tabs are the About page's component, with this page's stage photo.
export default function OperatingContext() {
  return (
    <GuideSection
      id="operating-context"
      num="10"
      label="Operating context"
      title="Qualify → Govern → Match → Optimize → Transact → Prove → Resolve."
      lead="Select a stage to see what it does in plain English. On a keyboard, use the arrow keys."
    >
      <div className="flex flex-col gap-5">
        <SevenStagesTabs
          image={{ src: exImg("stage-qualify.webp"), alt: "Gloved hand holding a packaged tray of berries in a store aisle" }}
        />
        <Note>Evidence records what happened in the process; it does not by itself guarantee the truth of underlying claims.</Note>
      </div>
    </GuideSection>
  );
}
