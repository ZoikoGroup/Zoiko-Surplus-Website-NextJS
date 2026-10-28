import AboutFaqItem from "./AboutFaqItem";

// "|" = line break in the mobile layout. Answers are neutral placeholders (not in the Figma design).
const left = [
  {
    question: "What is Zoiko Surplus?",
    answer:
      "Zoiko Surplus is a global, asset-light B2B platform being developed to help organizations qualify, market and responsibly dispose of eligible surplus goods through governed commercial and recovery pathways.",
  },
  {
    question: "Who is Zoiko Surplus for?",
    answer:
      "Enterprise sellers with eligible surplus, verified business buyers and approved recovery or logistics partners can use the platform once they have been qualified.",
  },
  {
    question: "Does Zoiko Surplus own the|inventory?",
    answer:
      "No. Zoiko Surplus provides orchestration, governance and exchange infrastructure. It is not the owner of listed goods or the default contracting seller.",
  },
  {
    question: "How is this different from a|liquidation or classifieds site?",
    answer:
      "Participants are qualified, listings are governed by category and market rules, and visibility is limited to verified parties rather than open to the public.",
  },
  {
    question: "Can anyone browse private|surplus listings?",
    answer:
      "No. Inventory and pricing are visible only to verified participants within their approved markets and categories.",
  },
];

const right = [
  {
    question: "Is Zoiko Surplus available in every|country?",
    answer:
      "Market availability, product eligibility and trading rights vary by jurisdiction, category, parties and approved transaction corridor.",
  },
  {
    question: "How does food surplus fit in?",
    answer:
      "Food and grocery surplus is handled through category-specific eligibility, compliance checks and approved recovery pathways, where permitted.",
  },
  {
    question: "Does Zoiko Surplus process|money or handle delivery itself?",
    answer:
      "Payments, logistics and fulfilment are carried out through approved partners and governed transaction pathways rather than by Zoiko Surplus directly.",
  },
  {
    question: "Does it guarantee buyers, resale|prices or sustainability outcomes?",
    answer:
      "No. The platform provides governed pathways and tools; commercial and sustainability outcomes depend on the goods, markets and parties involved.",
  },
  {
    question: "Who operates Zoiko Surplus and|where is it based?",
    answer:
      "Zoiko Surplus is a platform within Zoiko Supply Group Inc., a Zoiko Group company. Contact our team for details on the operating entity in your market.",
  },
];

export default function AboutFaq() {
  return (
    <section className="bg-[#fcfcff] px-4 pt-[55.99px] pb-12 font-[family-name:var(--font-sora)] max-md:bg-transparent md:p-24">
      <div className="mx-auto max-w-[1248px]">
        <div className="flex max-w-[852.96px] flex-col items-center gap-[46.8px] pt-[6px] md:items-start md:gap-4 md:pt-[5.5px]">
          <div className="flex items-center">
            <span className="w-[18.2px] text-center text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140]/50 md:hidden">
              14
            </span>
            <span aria-hidden="true" className="ml-[10px] h-px w-[28px] bg-[#0f7a60]/50 md:hidden" />
            <span className="ml-[10px] text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0f7a60] uppercase md:hidden">
              Questions
            </span>
            <span className="hidden w-[22.3px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140] md:block">
              13
            </span>
            <span aria-hidden="true" className="ml-[10px] hidden h-[2px] w-[46px] bg-[#d3dde8] md:block" />
            <span className="ml-[10px] hidden text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase md:block">
              FAQ
            </span>
          </div>
          <h2 className="text-center text-[28.2px] leading-[33.63px] font-semibold tracking-[-0.608px] text-[#0c2140] md:text-left md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px]">
            Questions, answered
            <br className="md:hidden" /> plainly.
          </h2>
        </div>

        <div className="mt-12 flex max-w-[860px] flex-col gap-[10px] md:mt-14 md:grid md:max-w-none md:grid-cols-2 md:gap-6">
          {[left, right].map((col, c) => (
            <div key={c} className="flex flex-col gap-[10px] md:gap-6">
              {col.map((faq) => (
                <AboutFaqItem key={faq.question} {...faq} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
