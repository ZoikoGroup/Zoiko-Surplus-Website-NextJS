const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type AuditRecord = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const records: AuditRecord[] = [
  {
    id: "offer",
    title: "Offer record",
    description: "The offer, its terms and the audience it was made within.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "acceptance",
    title: "Acceptance record",
    description: "Who accepted, when, and the agreed terms and conditions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: "settlement",
    title: "Settlement reference",
    description: "The settlement status and provider reference, where applicable.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    id: "exception",
    title: "Exception log",
    description: "Holds, disputes, adjustments and their history.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
];

export default function EvidenceAuditability() {
  return (
    <section aria-labelledby="evidence-auditability-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              EVIDENCE &amp; AUDITABILITY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="evidence-auditability-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Every transaction leaves a record.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            The categories of evidence a governed transaction can retain — supporting records, not public data.
          </p>

          {/* 4-Column Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {records.map((rec) => (
              <div
                key={rec.id}
                className="flex flex-col rounded-[20px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#d5f5eb]">
                  {rec.icon}
                </div>

                <h3 className="mt-5 text-[15.5px] font-bold text-[#0f172a]">
                  {rec.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.6] text-[#556987]">
                  {rec.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-6 flex items-center gap-2 text-[12px] text-[#7e8f9f]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-gray-400"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>Record categories only — no live transaction data, prices or identities are shown on this page.</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>08</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            EVIDENCE &amp; AUDITABILITY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Every transaction leaves a record.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          The categories of evidence a governed transaction can retain — supporting records, not public data.
        </p>

        {/* 4 Single-Column Cards */}
        <div className="mt-6 flex flex-col gap-3">
          {records.map((rec) => (
            <div
              key={rec.id}
              className="flex flex-col rounded-[16px] border border-[#e8edf2] bg-white p-4 shadow-sm"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#d5f5eb]">
                {rec.icon}
              </div>

              <h3 className="mt-3 text-[14px] font-bold text-[#0f172a]">
                {rec.title}
              </h3>

              <p className="mt-1 text-[11.5px] leading-[1.5] text-[#556987]">
                {rec.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-4 flex items-start gap-1.5 text-[10px] leading-snug text-[#7e8f9f]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0 text-gray-400"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>Record categories only — no live transaction data, prices or identities are shown on this page.</span>
        </div>
      </div>
    </section>
  );
}
