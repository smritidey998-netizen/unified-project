"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";

import styles from "./Header.module.scss";
import { useWindowScroll } from "@/utilities/hooks/useWindowScroll";

type DesktopNavSubItem = {
  label: string;
  description: string;
  href: string;
};

type DesktopNavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  submenu?: readonly DesktopNavSubItem[];
};

const desktopNavItems: readonly DesktopNavItem[] = [
  {
    label: "Product",
    href: "/product",
    hasDropdown: true,
    submenu: [
      {
        label: "Platform Overview",
        description: "See the full product suite in one place.",
        href: "/product/overview",
      },
      {
        label: "Automation",
        description: "Streamline repetitive workflows with smart tools.",
        href: "/product/automation",
      },
      {
        label: "Analytics",
        description: "Track performance with actionable reporting.",
        href: "/product/analytics",
      },
      {
        label: "Integrations",
        description: "Connect your existing tools and services.",
        href: "/product/integrations",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    hasDropdown: true,
  },
  {
    label: "Customers",
    href: "/customers",
  },
  {
    label: "Resource Hub",
    href: "/resource-hub",
    hasDropdown: true,
  },
  {
    label: "Company",
    href: "/company",
    hasDropdown: true,
  },
] as const;

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavItemActive(pathname: string, item: DesktopNavItem) {
  if (isPathActive(pathname, item.href)) {
    return true;
  }

  return (
    item.submenu?.some((subItem) => isPathActive(pathname, subItem.href)) ??
    false
  );
}

function getActiveExpandableItemLabel(pathname: string) {
  return (
    desktopNavItems.find(
      (item) => item.submenu && isNavItemActive(pathname, item),
    )?.label ?? null
  );
}

export default function Header() {
  const pathname = usePathname();
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | false | null>(null);
  const open = openPathname === pathname;
  const activeExpandableItemLabel = getActiveExpandableItemLabel(pathname);
  const resolvedExpandedItem =
    expandedItem === null ? activeExpandableItemLabel : expandedItem || null;

  const { y: scrollY } = useWindowScroll();
  const isScrolled = scrollY > 50;

  const closeMenu = () => {
    setOpenPathname(null);
    setExpandedItem(null);
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previousOverflow || "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPathname(null);
        setExpandedItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 1024px)");
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpenPathname(null);
        setExpandedItem(null);
      }
    };

    desktopBreakpoint.addEventListener("change", handleBreakpointChange);

    return () => {
      desktopBreakpoint.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <header
      className={cn(
        styles.header,
        isScrolled && styles.Scrolled,
        "sticky top-0 left-0 z-[99] w-full bg-white",
      )}
    >
      <div
        className={cn(
          "bg-linear-[var(--linearGradient)] text-center text-black text-white",
        )}
      >
        <div className={cn(global.custom_container)}>
          <div className="items-center justify-center gap-2 p-3 font-medium">
            <span className="mr-2 rounded-sm bg-skyBlue px-2 py-0.5 text-black md:text-base text-xs">
              Webinar
            </span>
            The Experience Revolution: Mastering Customer Engagement in the Age
            of AI
            <Link
              className="ms-2 text-redText transition-all hover:underline"
              href=""
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className={cn(styles.custom_container, "pl-5 md:pl-8")}>
        <div className="flex h-[70px] w-full items-center justify-between gap-4">
          <Link
            href="/"
            className="relative flex h-[27px] w-[125px] items-center"
            aria-label="Go to homepage"
          >
            <Image
              src="/assests/images/logo.svg"
              alt="Premier Schools Exhibition Logo"
              width={125}
              height={27}
              className="h-full w-full"
            />
          </Link>

          <div className="flex items-center gap-3">
            <nav
              aria-label="Primary navigation"
              className="hidden flex-1 items-center justify-center lg:flex"
            >
              <div className="flex h-[70px] items-stretch bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
                {desktopNavItems.map((item) => {
                  const itemActive = isNavItemActive(pathname, item);

                  return (
                    <div
                      key={item.label}
                      className="group relative flex items-stretch"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-flex items-center gap-2 px-3 text-[15px] font-semibold transition-colors duration-200",
                          itemActive
                            ? "text-[#f26531]"
                            : "text-[#121212] hover:text-[#f26531]",
                        )}
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown ? (
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 10 6"
                            className="h-[6px] w-[10px] fill-current transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                          >
                            <path d="M1 1L5 5L9 1" />
                          </svg>
                        ) : null}
                      </Link>

                      {item.submenu ? (
                        <div className="pointer-events-none absolute left-0 top-full z-20 w-[320px] pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white p-3 shadow-[0_18px_60px_rgba(0,0,0,0.14)]">
                            <div className="mb-2 px-3 pt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f26531]">
                              Product Menu
                            </div>
                            <div className="space-y-1">
                              {item.submenu.map((subItem) => {
                                const submenuItemActive = isPathActive(
                                  pathname,
                                  subItem.href,
                                );

                                return (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    className={cn(
                                      "block rounded-xl px-3 py-3 transition-colors duration-200",
                                      submenuItemActive
                                        ? "bg-[#fff3ee]"
                                        : "hover:bg-[#fff3ee]",
                                    )}
                                  >
                                    <div className="text-[14px] font-semibold text-[#121212]">
                                      {subItem.label}
                                    </div>
                                    <div className="mt-1 text-[12px] leading-5 text-black/60">
                                      {subItem.description}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}

                <Link
                  href="/contact"
                  className="inline-flex min-w-[100px] items-center justify-center gap-3 bg-buttonColorOrange px-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#dd5726]"
                >
                  <span>Contact</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 10 16"
                    className="h-4 w-[10px] stroke-current"
                    fill="none"
                  >
                    <path
                      d="M1.5 1.5L8 8L1.5 14.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </nav>

            <button
              type="button"
              onClick={() => {
                if (open) {
                  closeMenu();
                  return;
                }

                setOpenPathname(pathname);
                setExpandedItem(null);
              }}
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="site-menu"
              className={cn(
                styles.hum_btn,
                "group relative z-[100] inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#121212] shadow-[0_12px_35px_rgba(15,23,42,0.1)] transition-colors duration-300 hover:bg-[#fff4ee] lg:hidden",
              )}
            >
              <span aria-hidden="true" className="relative block h-5 w-6">
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out",
                    open ? "translate-y-0 rotate-45" : "-translate-y-[8px]",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out",
                    open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-out",
                    open ? "translate-y-0 -rotate-45" : "translate-y-[8px]",
                  )}
                />
              </span>
              <span className="sr-only">
                {open ? "Close navigation menu" : "Open navigation menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-labelledby="mobile-menu-title"
        className={cn(
          "fixed inset-0 z-[98] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          onClick={() => closeMenu()}
          aria-label="Close mobile menu"
          className={cn(
            "absolute inset-0 bg-[#08111f]/35 backdrop-blur-[6px] transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        <div className="absolute inset-0 px-3 pb-3 pt-[112px] sm:px-5 sm:pt-[120px]">
          <div
            className={cn(
              "ml-auto flex h-full w-full max-w-[26rem] flex-col overflow-hidden rounded-[32px] border border-white/70 bg-[radial-gradient(circle_at_top,#ffffff_0%,#fff6f0_52%,#ffffff_100%)] shadow-[-20px_26px_80px_rgba(8,17,31,0.18)] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
            )}
          >
            <div className="border-b border-black/8 px-5 pb-5 pt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    id="mobile-menu-title"
                    className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f26531]"
                  >
                    Navigation
                  </p>
                </div>

                {/* <button
                  type="button"
                  onClick={() => closeMenu()}
                  aria-label="Close navigation menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#101828] transition-colors duration-300 hover:bg-[#fff1ea]"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                    <path
                      d="M6 6L18 18M18 6L6 18"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button> */}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-5 pt-4">
              <nav aria-label="Mobile navigation" className="space-y-3">
                {desktopNavItems.map((item, index) => {
                  const itemActive = isNavItemActive(pathname, item);
                  const hasSubmenu = Boolean(item.submenu);
                  const isExpanded = resolvedExpandedItem === item.label;

                  return (
                    <div
                      key={item.label}
                      className={cn(
                        "transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        open
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0",
                      )}
                      style={{
                        transitionDelay: open ? `${120 + index * 70}ms` : "0ms",
                      }}
                    >
                      {hasSubmenu ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedItem((current) =>
                                (current === null
                                  ? activeExpandableItemLabel
                                  : current) === item.label
                                  ? false
                                  : item.label,
                              )
                            }
                            aria-expanded={isExpanded}
                            aria-controls={`${item.label.toLowerCase().replace(/\s+/g, "-")}-panel`}
                            className={cn(
                              "group flex w-full items-center gap-4 rounded-[26px] border px-4 py-4 text-left transition-all duration-300",
                              itemActive || isExpanded
                                ? "border-[#f26531]/25 bg-[#fff2eb] shadow-[0_18px_40px_rgba(242,101,49,0.12)]"
                                : "border-black/8 bg-white/85 hover:-translate-y-0.5 hover:border-[#f26531]/20 hover:bg-white",
                            )}
                          >
                            <span className=" text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f26531]">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-lg font-semibold text-[#101828]">
                                {item.label}
                              </span>
                            </span>
                            <span
                              className={cn(
                                "mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-white text-[#101828] transition-transform duration-300",
                                isExpanded && "rotate-180",
                              )}
                              aria-hidden="true"
                            >
                              <svg
                                viewBox="0 0 10 6"
                                className="h-[6px] w-[10px] fill-current"
                              >
                                <path d="M1 1L5 5L9 1" />
                              </svg>
                            </span>
                          </button>

                          <div
                            id={`${item.label.toLowerCase().replace(/\s+/g, "-")}-panel`}
                            className={cn(
                              "grid overflow-hidden transition-[grid-template-rows,opacity,margin-top] duration-300 ease-out",
                              isExpanded
                                ? "mt-3 grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <div className="min-h-0">
                              <div className="space-y-2 rounded-[24px] bg-white/80 p-3 shadow-[0_14px_34px_rgba(15,23,42,0.07)]">
                                {item.submenu?.map((subItem, subIndex) => {
                                  const subItemActive = isPathActive(
                                    pathname,
                                    subItem.href,
                                  );

                                  return (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      onClick={() => closeMenu()}
                                      className={cn(
                                        "flex items-start gap-3 rounded-[20px] px-3 py-3 transition-colors duration-200",
                                        subItemActive
                                          ? "bg-[#fff3ee]"
                                          : "hover:bg-[#fff7f3]",
                                      )}
                                      style={{
                                        transitionDelay:
                                          open && isExpanded
                                            ? `${200 + subIndex * 45}ms`
                                            : "0ms",
                                      }}
                                    >
                                      <span className="mt-1 h-2 w-2 rounded-full bg-[#f26531]" />
                                      <span>
                                        <span className="block text-sm font-semibold text-[#101828]">
                                          {subItem.label}
                                        </span>
                                        <span className="mt-1 block text-xs leading-5 text-black/60">
                                          {subItem.description}
                                        </span>
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => closeMenu()}
                          className={cn(
                            "group flex items-center gap-4 rounded-[26px] border px-4 py-4 transition-all duration-300",
                            itemActive
                              ? "border-[#f26531]/25 bg-[#fff2eb] shadow-[0_18px_40px_rgba(242,101,49,0.12)]"
                              : "border-black/8 bg-white/85 hover:-translate-y-0.5 hover:border-[#f26531]/20 hover:bg-white ",
                          )}
                        >
                          <span className="pt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f26531]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-lg font-semibold text-[#101828]">
                              {item.label}
                            </span>
                          </span>
                          <span
                            className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/8 bg-white text-[#101828] transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 10 16"
                              className="h-4 w-[10px] stroke-current"
                              fill="none"
                            >
                              <path
                                d="M1.5 1.5L8 8L1.5 14.5"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div
                className={cn(
                  "mt-6 rounded-[28px] bg-[#101828] p-5 text-white transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0",
                )}
                style={{ transitionDelay: open ? "420ms" : "0ms" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f9b39a]">
                  Ready To Connect
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    onClick={() => closeMenu()}
                    className="inline-flex items-center justify-center rounded-full bg-[#f26531] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#dd5726]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
