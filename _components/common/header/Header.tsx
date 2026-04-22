"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";

import global from "@/theme/global/global.module.scss";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const desktopNavItems = [
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
  { label: "Solutions", href: "/solutions", hasDropdown: true },
  { label: "Customers", href: "/customers" },
  { label: "Resource Hub", href: "/resource-hub", hasDropdown: true },
  { label: "Company", href: "/company", hasDropdown: true },
] as const;

const emptySubscribe = () => () => {};

export default function Header() {
  const [open, setOpen] = useState(false);
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  // Lock body scroll when open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const itemBase =
    "transform transition duration-500 ease-out will-change-transform";

  const menuContentClasses = cn(
    "mx-auto max-w-6xl px-6",
    isHydrated
      ? "mt-[150px] pb-12 overflow-auto max-h-[calc(100%-150px)]"
      : "py-12",
  );

  return (
    <header className="w-full sticky top-0 left-0 z-[99] bg-white ">
      <div
        className={cn(
          styles.announcementBar,
          "text-black bg-linear-[var(--linearGradient)] text-white",
        )}
      >
        <div className={cn(global.custom_container)}>
          <div className="flex font-medium p-3 justify-center gap-2 items-center">
            <span className="bg-skyBlue text-black rounded-sm py-0.5 px-2">Webinar</span>
            The Experience Revolution: Mastering Customer Engagement in the Age
            of AI
            <Link className="text-redText transition-all hover:underline" href="">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className={cn(styles.custom_container, 'md:pl-8 pl-5')}>
        <div className="flex items-center justify-between w-full gap-4 h-[70px]">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              styles.logo,
              "flex items-center w-[125px] h-[27px] relative",
            )}
            aria-label="Go to homepage"
          >
            <Image
              src={"/assests/images/logo.svg"}
              alt="Premier Schools Exhibition Logo"
              width={125}
              height={27}
              className="w-full h-full"
            />
          </Link>
            <div>
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex flex-1 items-center justify-center"
          >
            <div className="flex h-[70px] items-stretch  bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
              {desktopNavItems.map((item) => (
                <div key={item.label} className="group relative flex items-stretch">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 px-3 text-[15px] font-semibold text-[#121212] transition-colors duration-200 hover:text-[#f26531]"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown ? (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 10 6"
                        className="h-[6px] w-[10px] fill-[#f26531] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
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
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block rounded-xl px-3 py-3 transition-colors duration-200 hover:bg-[#fff3ee]"
                            >
                              <div className="text-[14px] font-semibold text-[#121212]">
                                {subItem.label}
                              </div>
                              <div className="mt-1 text-[12px] leading-5 text-black/60">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}

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

          <button className={cn(global.registerBtn, "!hidden md:!flex lg:!hidden")}>
            <span className={global.icon}>
              {/* <BsArrowUpRight className="w-6 h-6" /> */}
            </span>
            <span className={global.label}>REGISTER NOW</span>
            <span className={global.shine}></span>
          </button>

          {/* Hamburger (ONLY control) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="site-menu"
            className={cn(
              styles.hum_btn,
              "group relative z-[100] inline-flex items-center justify-center h-12 w-12 rounded-full border border-white/30 bg-white/70 backdrop-blur hover:bg-white transition cursor-pointer text-clr_text_primary hover:text-clr_text_primary_yellow dark:text-white md:hidden",
            )}
          >
            {/* 3 bars (Tailwind-only) */}
            <span aria-hidden className="relative block h-5 w-6">
              {/* Top bar */}
              <span
                className="
        absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 -mt-2 rounded bg-current
        transition-all duration-300 ease-out
        group-aria-expanded:mt-0 group-aria-expanded:rotate-45
      "
              />
              {/* Middle bar */}
              <span
                className="
        absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 rounded bg-current
        transition-all duration-300 ease-out
        group-aria-expanded:opacity-0 group-aria-expanded:scale-x-0
      "
              />
              {/* Bottom bar */}
              <span
                className="
        absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 mt-2 rounded bg-current
        transition-all duration-300 ease-out
        group-aria-expanded:mt-0 group-aria-expanded:-rotate-45
      "
              />
            </span>

            <span className="sr-only">
              {open ? "Close navigation menu" : "Open navigation menu"}
            </span>
          </button>
          </div>
        </div>
      </div>

      {/* ===== Full-screen overlay menu ===== */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed inset-0 z-[98] pointer-events-none",
          open && "pointer-events-auto",
        )}
        /* removed onClick close on container */
      >
        {/* Dim backdrop (visual only now) */}
        <div
          className={cn(
            "absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 transition-opacity duration-300",
            open && "opacity-100",
          )}
          /* no click handler here */
        />

        {/* Full-screen panel with clipPath reveal */}
        <div
          className={cn(
            "absolute inset-0 bg_texture text-neutral-900",
            "transition-[clipPath] duration-500 ease-out",
            "[clipPath:circle(0%_at_100%_0)]",
            open && "[clipPath:circle(150%_at_100%_0)]",
          )}
          /* keep clicks inside without closing */
          onClick={(e) => e.stopPropagation()}
        >
          {/* Removed Close (X) button */}

          {/* Menu content */}
          <div className={menuContentClasses}>
            {/* Footer row */}
            <div
              className={cn(
                "mt-10 flex flex-wrap items-center justify-between gap-4",
                itemBase,
                !open ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
              )}
            >
              <button
                className={global.registerBtn}
                aria-label="Register for the exhibition"
              >
                <span className={global.icon} aria-hidden="true">
                  {/* <BsArrowUpRight /> */}
                </span>
                <span className={global.label}>REGISTER NOW</span>
                <span className={global.shine} aria-hidden="true"></span>
              </button>
              {/* You can keep a CTA here if you like; it won't close the menu now */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
