import { Container, hanken, sora } from "./shared";

export default function Intro() {
  return (
    <section aria-label="Summary" className={`${hanken} py-12 md:py-20`}>
      <Container>
        <p
          className={`${sora} max-w-[1100px] text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#4b5b75] md:text-[44px]`}
        >
          <span className="text-[#1a1d24]">A controlled exchange, not an open storefront.</span> It lets qualified
          business demand take part in seller-governed surplus markets. It works alongside Surplus Enterprise and
          Surplus Network, and public pages only explain the model.
        </p>
      </Container>
    </section>
  );
}
