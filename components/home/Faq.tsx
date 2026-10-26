import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "What is Zoiko Surplus?",
    answer:
      "Zoiko Surplus is a global, asset-light B2B platform being developed to help organizations qualify, market and responsibly dispose of eligible surplus goods through governed commercial and recovery pathways. It is a platform within Zoiko Supply Group Inc., a Zoiko Group company.",
  },
  {
    question: "Who can use the platform?",
    answer:
      "Enterprise sellers with eligible surplus, verified business buyers and approved recovery or logistics partners can use the platform once they have been qualified.",
  },
  {
    question: "Does Zoiko Surplus own the|goods?",
    answer:
      "No. Zoiko Surplus provides orchestration, governance and exchange infrastructure. It is not the owner of listed goods or the default contracting seller.",
  },
  {
    question: "Is Zoiko Surplus available|globally?",
    answer:
      "Market availability, product eligibility and trading rights vary by jurisdiction, category, parties and approved transaction corridor.",
  },
  {
    question: "How do buyers qualify?",
    answer:
      "Buyers apply as verified business buyers. We confirm the organization and the markets and categories it is approved to trade in before access is granted.",
  },
  {
    question: "How is Food & Grocery|handled?",
    answer:
      "Food and grocery surplus is handled through category-specific eligibility, compliance checks and approved recovery pathways, and is only available in markets where it is permitted.",
  },
  {
    question: "Can the public browse|inventory and prices?",
    answer:
      "No. Inventory and pricing are visible only to verified participants within their approved markets and categories.",
  },
  {
    question: "What happens when a market|or category is unavailable?",
    answer:
      "We will tell you plainly and, where possible, route you to an approved alternative pathway or let you know when the market or category becomes available.",
  },
];

export default function Faq() {
  return (
    <section className="bg-[#fcfcff] px-[22px] pt-[72px] font-[family-name:var(--font-sora)] max-md:bg-transparent md:p-24">
      <div className="mx-auto max-w-[1248px]">
        <div className="flex max-w-[853px] flex-col gap-[12.965px] pt-[3.5px] md:gap-4 md:pt-[5.5px]">
          <div className="flex items-center md:gap-[10px]">
            <span className="hidden text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140] md:block md:w-[22.3px]">
              15
            </span>
            <span aria-hidden="true" className="hidden h-[2px] w-[46px] bg-[#d3dde8] md:block" />
            <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">FAQ</p>
          </div>
          <h2 className="text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px]">
            Questions, answered
            <br className="md:hidden" /> plainly.
          </h2>
        </div>

        <div className="mt-12 flex max-w-[860px] flex-col gap-3 md:mt-14 md:grid md:max-w-none md:grid-cols-2 md:gap-6">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.question} {...faq} defaultOpenOnMobile={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
