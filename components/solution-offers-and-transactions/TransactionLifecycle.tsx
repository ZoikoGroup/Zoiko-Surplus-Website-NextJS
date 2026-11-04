const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type Stage = {
  num: number;
  name: string;
  active?: boolean;
};

const stages: Stage[] = [
  { num: 1, name: "Qualify" },
  { num: 2, name: "Govern" },
  { num: 3, name: "Match" },
  { num: 4, name: "Optimize" },
  { num: 5, name: "Transact", active: true },
  { num: 6, name: "Prove", active: true },
  { num: 7, name: "Resolve" },
];

export default function TransactionLifecycle() {
  return (
    <section aria-labelledby="transaction-lifecycle-heading" className={`${hanken} w-full bg-white`}>
      {/* Mobile only - desktop is kept untouched */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            TRANSACTION LIFECYCLE
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Offers live in Transact — proof follows.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          The same seven-stage model runs site-wide. Offers &amp; Transactions is where a governed transaction happens, and where evidence is captured.
        </p>

        {/* 7 Vertical Cards */}
        <div className="mt-6 flex flex-col gap-2.5">
          {stages.map((st) => (
            <div
              key={st.num}
              className={`flex flex-col items-center justify-center rounded-[14px] bg-white py-3.5 px-4 text-center shadow-xs ${
                st.active
                  ? "border-2 border-[#009b72]"
                  : "border border-[#e8edf2]"
              }`}
            >
              <span className="text-[10px] font-medium text-[#8c9ba5]">
                Stage {st.num}
              </span>
              <span
                className={`mt-0.5 text-[14px] font-bold ${
                  st.active ? "text-[#009b72]" : "text-[#0f172a]"
                }`}
              >
                {st.name}
              </span>
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
          <span>An educational model — not a live, always-on runtime status.</span>
        </div>
      </div>
    </section>
  );
}
