"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CategoriesMenu from "./CategoriesMenu";
import CompanyMenu from "./CompanyMenu";
import ResourcesMenu from "./ResourcesMenu";
import SolutionsMenu from "./SolutionsMenu";
import { headerCta, navItems, siteConfig, utilityLinks } from "@/lib/site";

type DropdownName = "solutions" | "categories" | "resources" | "company";

// Nav items that open a dropdown panel.
const dropdowns: Record<string, DropdownName> = { Solutions: "solutions", Categories: "categories", Resources: "resources", Company: "company" };

const navText = "text-[15px] font-medium text-[#1e2126]";

export default function Header() {
  const [open, setOpen] = useState(false);
  // Which header dropdown is open; only one at a time.
  const [menu, setMenu] = useState<DropdownName | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // The dropdown closes on Escape or a click outside the header.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menu]);

  const toggleMenu = (name: DropdownName) => {
    setOpen(false);
    setMenu((current) => (current === name ? null : name));
  };

  return (
    <>
      {/* Utility bar: mobile design only */}
      <div className="bg-[#0c2140] md:hidden">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-center gap-4 px-[22px]">
          <p className="flex h-[20.8px] items-center gap-2 text-[13px] leading-[20.8px] text-[#a7bad0]">
            <span className="flex size-[15px] shrink-0 items-center justify-center">
              <Image src="/images/header/info.svg" alt="" width={13.75} height={13.75} />
            </span>
            Availability varies by market and category.
          </p>
          <div className="flex items-center gap-1">
            {utilityLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-2.5 py-2 text-[13px] leading-[20.8px] font-medium text-[#eaf1f8]"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="flex min-h-9 items-center gap-2 rounded-md border border-[rgba(243,238,240,0.28)] px-3 py-[8.5px] text-[13px] font-medium text-[#eaf1f8]"
            >
              <span className="flex size-[15px] items-center justify-center">
                <Image src="/images/header/globe.svg" alt="" width={13.75} height={13.75} />
              </span>
              Global · EN
              <Image src="/images/header/chevron-down-light.svg" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

      <header ref={headerRef} className="sticky top-0 z-50 pt-2.5 pb-1 md:p-0">
        <div className="relative mx-auto flex min-h-16 w-full max-w-[1280px] items-center gap-5 rounded-[18px] border border-[#d3dde8] bg-[rgba(247,243,238,0.92)] py-2 pr-3 pl-4 shadow-[0_10px_30px_-20px_rgba(52,33,63,0.45)] backdrop-blur-[6px] md:max-w-none md:justify-between md:gap-0 md:rounded-none md:bg-[rgba(255,255,255,0.92)] md:px-16 md:py-6 md:shadow-none">
          <Link href="/" aria-label={`${siteConfig.name} home`} className="shrink-0">
            <Image
              src="/images/header/logo.png"
              alt={siteConfig.name}
              width={132}
              height={47}
              priority
              className="h-8 w-[89.66px] md:h-[47px] md:w-[132px]"
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const dropdown = dropdowns[item.label];
              return item.menu ? (
                <button
                  key={item.label}
                  type="button"
                  aria-haspopup={dropdown ? "true" : "menu"}
                  aria-expanded={dropdown ? menu === dropdown : undefined}
                  aria-controls={dropdown ? `${dropdown}-menu` : undefined}
                  onClick={dropdown ? () => toggleMenu(dropdown) : undefined}
                  className={`${navText} flex items-center gap-[5px] rounded-[7px] px-3 py-2.5 ${
                    dropdown && menu === dropdown ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                  {dropdown && menu === dropdown ? (
                    <Image
                      src="/images/header/dropdown/chevron-active-desktop.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="-scale-y-100"
                    />
                  ) : (
                    <Image src="/images/header/chevron-down.svg" alt="" width={14} height={14} />
                  )}
                </button>
              ) : (
                <Link key={item.label} href={item.href} className={`${navText} rounded-[7px] px-3 py-2.5 leading-6`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href={headerCta.href}
            className="hidden min-h-12 items-center justify-center rounded-full border border-transparent bg-[#926016] px-[26px] text-[15px] leading-[18px] font-semibold whitespace-nowrap text-white md:flex"
          >
            {headerCta.label}
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => {
              setMenu(null);
              setOpen((v) => !v);
            }}
            className="ml-auto flex size-[46px] shrink-0 items-center justify-center rounded-lg border border-[#d3dde8] bg-white md:hidden"
          >
            <Image src="/images/header/menu.svg" alt="" width={24} height={24} />
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="mx-auto mt-1 flex max-w-[1280px] flex-col rounded-[18px] border border-[#d3dde8] bg-white p-2 shadow-[0_10px_30px_-20px_rgba(52,33,63,0.45)] md:hidden"
          >
            {navItems.map((item) =>
              dropdowns[item.label] ? (
                <button
                  key={item.label}
                  type="button"
                  aria-haspopup="true"
                  aria-controls={`${dropdowns[item.label]}-menu`}
                  onClick={() => toggleMenu(dropdowns[item.label])}
                  className={`${navText} flex items-center justify-between rounded-[7px] px-3 py-3`}
                >
                  {item.label}
                  <Image src="/images/header/chevron-down.svg" alt="" width={14} height={14} />
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${navText} flex items-center justify-between rounded-[7px] px-3 py-3`}
                >
                  {item.label}
                  {item.menu && <Image src="/images/header/chevron-down.svg" alt="" width={14} height={14} />}
                </Link>
              ),
            )}
            <Link
              href={headerCta.href}
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-[#926016] px-[26px] text-[15px] font-semibold text-white"
            >
              {headerCta.label}
            </Link>
          </nav>
        )}

        {menu === "solutions" && <SolutionsMenu onNavigate={() => setMenu(null)} />}
        {menu === "categories" && <CategoriesMenu onNavigate={() => setMenu(null)} />}
        {menu === "resources" && <ResourcesMenu onNavigate={() => setMenu(null)} />}
        {menu === "company" && <CompanyMenu onNavigate={() => setMenu(null)} />}
      </header>
    </>
  );
}
