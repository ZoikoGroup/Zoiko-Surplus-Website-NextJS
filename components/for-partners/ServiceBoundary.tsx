import { Lock, Package, ReceiptText, ShoppingCart, Truck } from "lucide-react";
import { GuideSection, ImageTopGrid, fpImg, type PhotoCardItem } from "./shared";

const steps: PhotoCardItem[] = [
  {
    icon: Package,
    title: "Information",
    body: "You read about the network.",
    image: fpImg("boundary-information.webp"),
    alt: "Laptop showing a report with charts",
  },
  {
    icon: ShoppingCart,
    title: "Enquiry",
    body: "You tell us what you do.",
    image: fpImg("boundary-enquiry.webp"),
    alt: "Colleagues pointing at a laptop screen",
  },
  {
    icon: Lock,
    title: "Agreement",
    body: "A contract sets roles and duties.",
    image: fpImg("boundary-agreement.webp"),
    alt: "Two people shaking hands over a desk",
  },
  {
    icon: ReceiptText,
    title: "Mandate",
    body: "A seller authorizes a specific task.",
    image: fpImg("boundary-mandate.webp"),
    alt: "Colleagues working on a laptop and tablet",
  },
  {
    icon: Truck,
    title: "Execution",
    body: "The task is performed and recorded.",
    image: fpImg("boundary-execution.webp"),
    alt: "Hand holding a pen beside a laptop",
  },
];

export default function ServiceBoundary() {
  return (
    <GuideSection
      id="service-boundary"
      num="02"
      label="Service boundary"
      title={
        <>
          Five separate steps.
          <br className="hidden md:block" /> None implies the next.
        </>
      }
      lead="Information, enquiry, agreement, mandate and execution are different things."
    >
      <ImageTopGrid
        items={steps}
        aspect="aspect-[402/215]"
        cols="sm:grid-cols-2 lg:grid-cols-3"
        sizes="(min-width: 1024px) 402px, (min-width: 640px) 50vw, 100vw"
      />
    </GuideSection>
  );
}
