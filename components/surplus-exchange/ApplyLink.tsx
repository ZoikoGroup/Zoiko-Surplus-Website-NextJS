import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ApplyLink() {
  return (
    <Link
      href="/become-a-verified-buyer"
      className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[#926016] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#a66e1b]"
    >
      Apply to Become a Buyer
      <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
    </Link>
  );
}
