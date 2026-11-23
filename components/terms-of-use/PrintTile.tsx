"use client";

// Tile content for "Print this page". Header and footer are hidden by the print rule in globals.css.
export default function PrintTile() {
  return (
    <>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex min-h-11 w-full items-center rounded-full border border-[#dfe5ed] bg-white px-6 text-left text-sm font-medium text-[#0f1f3a] transition-colors hover:border-[#0f1f3a]"
      >
        Print this page
      </button>
      <p className="pt-3 text-sm leading-6 text-[#556987]">Prints all sections. Navigation is hidden.</p>
    </>
  );
}
