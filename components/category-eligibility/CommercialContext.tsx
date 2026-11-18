import { Clock, FileText, Flag, Shield, Truck } from "lucide-react";
import DarkRulesSection, { type Rule } from "@/components/for-partners/DarkRulesSection";
import { ceImg } from "./shared";

const questions: Rule[] = [
  { icon: Truck, title: "Transport", body: "Who moves goods, under what mandate." },
  { icon: Clock, title: "Time", body: "How long a route could take." },
  { icon: FileText, title: "Fees", body: "What is charged, by contract." },
  { icon: Flag, title: "Failure risk", body: "What happens if a route fails." },
  { icon: Shield, title: "No guarantee", body: "No recovery or sale is promised." },
];

export default function CommercialContext() {
  return (
    <DarkRulesSection
      id="commercial-context"
      label="Commercial and handling context"
      title={
        <>
          Questions to prepare,
          <br className="hidden md:block" /> not outcomes to expect.
        </>
      }
      lead="Transport, time, fees and risk vary by category and market."
      rules={questions}
      image={ceImg("commercial-context.webp")}
      alt="Person at a desk reviewing paperwork on a clipboard"
    />
  );
}
