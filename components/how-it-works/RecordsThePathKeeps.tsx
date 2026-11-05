import React from "react";
import {
  Receipt,
  FolderCheck,
  AlertCircle,
  FileText,
  Info,
} from "lucide-react";

interface RecordCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RECORD_CARDS: readonly RecordCard[] = [
  {
    id: "transaction-records",
    icon: <Receipt className="w-5 h-5 text-[#926016]" />,
    title: "Transaction records",
    description: "Status and governed order history.",
  },
  {
    id: "disposition-evidence",
    icon: <FolderCheck className="w-5 h-5 text-[#926016]" />,
    title: "Disposition evidence",
    description: "What happened to a lot, and where.",
  },
  {
    id: "exception-log",
    icon: <AlertCircle className="w-5 h-5 text-[#926016]" />,
    title: "Exception log",
    description: "Holds, cancellations and disputes.",
  },
  {
    id: "audit-trail",
    icon: <FileText className="w-5 h-5 text-[#926016]" />,
    title: "Audit trail",
    description: "Who did what, and when.",
  },
] as const;

export default function RecordsThePathKeeps() {
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
              RECORDS THE PATH KEEPS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Evidence that supports decisions — not a highlight reel.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            The categories a governed path can report. These describe what can
            be recorded; they are not live figures.
          </p>
        </div>

        {/* 4 Columns Record Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {RECORD_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 flex flex-col space-y-4 transition-all duration-200 hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FDF6ED] flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div className="flex flex-col space-y-2 pt-1">
                <h3 className="text-base md:text-lg font-bold text-[#1E2126]">
                  {card.title}
                </h3>
                <p className="text-[#4F647A] text-xs md:text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Disclaimer Banner */}
        <div className="flex items-center gap-2 text-xs text-[#94A3B8] pt-2">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <p>
            Record categories only — no live transaction data, prices or
            identities appear on this page.
          </p>
        </div>
      </div>
    </section>
  );
}
