import React from "react";
import {
  ShieldCheck,
  FileCheck,
  FolderCheck,
  AlertCircle,
  Scale,
  EyeOff,
} from "lucide-react";

interface EvidenceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EVIDENCE_CARDS: readonly EvidenceCard[] = [
  {
    id: "verification-evidence",
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    title: "Verification evidence",
    description:
      "Identity, licensing and insurance records checked at onboarding.",
  },
  {
    id: "capability-assurance",
    icon: <FileCheck className="w-5 h-5 text-white" />,
    title: "Capability assurance",
    description:
      "Evidence that the partner can perform the scoped service safely.",
  },
  {
    id: "route-evidence",
    icon: <FolderCheck className="w-5 h-5 text-white" />,
    title: "Route evidence",
    description:
      "The condition, authorization, transfer and closure records a route produces.",
  },
  {
    id: "exception-handling",
    icon: <AlertCircle className="w-5 h-5 text-white" />,
    title: "Exception handling",
    description: "How holds, issues and deviations are recorded and resolved.",
  },
  {
    id: "compliance-review",
    icon: <Scale className="w-5 h-5 text-white" />,
    title: "Compliance review",
    description: "Ongoing checks that the partner continues to meet standards.",
  },
  {
    id: "confidentiality",
    icon: <EyeOff className="w-5 h-5 text-white" />,
    title: "Confidentiality",
    description:
      "Need-to-know access, with partner data kept scoped and protected.",
  },
] as const;

export default function EvidenceAndAssurance() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              06
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              EVIDENCE & ASSURANCE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            What a governed partnership documents.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Definitions only — the categories of evidence and assurance a
            partnership relies on, not real records.
          </p>
        </div>

        {/* Feature Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {EVIDENCE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 flex flex-col space-y-4 transition-all duration-200 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0C2140] flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div className="flex flex-col space-y-2 pt-1">
                <h3 className="text-lg font-bold text-[#1E2126]">
                  {card.title}
                </h3>
                <p className="text-[#4F647A] text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
