import { Container, hanken, sora } from "./shared";

const boundaries = [
  "Submission is not verification",
  "Verification is not seller permission",
  "Permission is not the right to transact",
];

export default function Intro() {
  return (
    <section aria-label="Summary" className={`${hanken} py-12 md:py-20`}>
      <Container className="flex flex-col gap-6">
        <p
          className={`${sora} max-w-[960px] text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#4b5b75] md:text-[44px]`}
        >
          <span className="text-[#1a1d24]">Qualified participation is controlled.</span> An application starts a
          review. It does not confirm verification, guarantee approval, or open seller-private inventory.
        </p>
        <ul className="flex flex-wrap gap-2">
          {boundaries.map((b) => (
            <li key={b} className="rounded-full border border-[#dfe5ed] bg-white px-4 py-2 text-sm text-[#4b5b75]">
              {b}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
