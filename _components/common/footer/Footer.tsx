import global from "@/theme/global/global.module.scss";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { cn } from "@/lib/utils";

const productColumns = [
  {
    title: "Applications",
    links: [
      "Process Optimiser",
      "Reliability",
      "MVDA",
      "Process Development",
      "Automated PAT",
    ],
    secondaryTitle: "Platform",
    secondaryLinks: ["Overview", "Why Intelligent MOM"],
  },
  {
    title: "Industrial DataOps",
    links: ["iLuminator"],
    secondaryTitle: "Industrial Intelligence",
    secondaryLinks: ["eXponence"],
  },
] as const;

const quickLinks = [
  ["Partner", "Industry", "Customer", "About us"],
  ["Resource Hub", "Blog", "Careers", "Contact"],
] as const;

const officeLocations = [
  {
    name: "Delhi",
    address: "Okhla INDL Estate, New Delhi, Delhi 110020",
  },
  {
    name: "Canada",
    address: "San Jose, California, 95112, United States",
  },
  {
    name: "San Jose",
    address: "San Jose, California, 95112, United States",
  },
] as const;

const legalLinks = [
  "Terms of Service",
  "Acceptable Use Policy",
  "Privacy Policy",
  "Cookie Preferences",
] as const;

const Footer = () => {
  return (
    <footer className={styles.footerSec}>
      <div className={cn(global.custom_container)}>
        <div
          className={cn(
            styles.ctaCard,
            "flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between",
          )}
        >
          <h4
            className={cn(
              global.head3_1,
              styles.ctaTitle,
              "max-w-[52rem] font-semibold text-white",
            )}
          >
            Get a personalized demo and see how Quartic.ai can revolutionize
            your manufacturing processes.
          </h4>

          <Link
            href="/contact"
            className={cn(
              styles.primaryButton,
              "inline-flex w-fit items-center justify-center gap-3 bg-redText whitespace-nowrap px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#ff6a35]",
            )}
          >
            <span>Request a Demo</span>
            <ArrowIcon />
          </Link>
        </div>

        <div className={styles.footerGrid}>
          <div className={styles.brandColumn}>
            <div className="space-y-8">
              <Link
                href="/"
                aria-label="Quartic homepage"
                className="inline-flex items-center gap-3 text-white"
              >
                <QuarticMark />
                <span className={styles.logoWordmark}>Quartic</span>
              </Link>

              <p
                className={cn(
                  global.body1,
                  styles.mutedText,
                  "max-w-[18rem] text-white/80",
                )}
              >
                Empowering industrial intelligence by integrating MES, LIMS,
                automation, and enterprise data with AI-driven insights through
                Quartic DataOps.
              </p>

              <Link
                href="#"
                className="inline-flex text-sm font-semibold text-[#f15a29] transition-colors duration-300 hover:text-[#ff7b4d]"
              >
                More about us
              </Link>
            </div>

            <div className="space-y-5">
              <h5 className={cn(global.head5, "font-semibold text-white")}>
                Get connect with us
              </h5>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      styles.socialLink,
                      "inline-flex h-6 w-6 items-center justify-center transition-transform duration-300 hover:-translate-y-0.5",
                    )}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <div className={styles.productsGrid}>
              {productColumns.map((column) => (
                <div key={column.title} className="space-y-8">
                  <div className="space-y-3">
                    <h5 className={cn(global.head5, "font-semibold text-white")}>
                      {column.title}
                    </h5>
                    <ul className="space-y-2.5">
                      {column.links.map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className={cn(
                              global.body1,
                              styles.footerLink,
                              "text-white/70 transition-colors duration-300 hover:text-[#f15a29]",
                            )}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className={cn(global.head5, "font-semibold text-white")}>
                      {column.secondaryTitle}
                    </h5>
                    <ul className="space-y-2.5">
                      {column.secondaryLinks.map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className={cn(
                              global.body1,
                              styles.footerLink,
                              "text-white/70 transition-colors duration-300 hover:text-[#f15a29]",
                            )}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.officeColumn}>
            <div className="mb-8 flex items-center gap-3">
              <LocationIcon />
              <h5 className={cn(global.head5, "font-semibold text-white")}>
                Office Location
              </h5>
            </div>

            <div className="space-y-7">
              {officeLocations.map((location) => (
                <div key={location.name} className="space-y-1.5">
                  <p className={cn(global.body1, "font-semibold text-white")}>
                    {location.name}:
                  </p>
                  <p className={cn(global.body1, styles.mutedText, "text-white/70")}>
                    {location.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.quickLinksColumn}>
            <div className="space-y-6">
              <h5 className={cn(global.head5, "font-semibold text-white")}>
                Quick Links
              </h5>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-x-12">
                {quickLinks.map((column, index) => (
                  <ul key={index} className="space-y-2.5">
                    {column.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className={cn(
                            global.body1,
                            styles.footerLink,
                            "text-white/70 transition-colors duration-300 hover:text-[#f15a29]",
                          )}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.newsletterColumn}>
            <div className="mb-5 flex items-center gap-3">
              <MailIcon />
              <h5 className={cn(global.head5, "font-semibold text-white")}>
                Subscribe to Newsletter
              </h5>
            </div>

            <p
              className={cn(
                global.body1,
                styles.mutedText,
                "mb-6 max-w-[26rem] text-white/70",
              )}
            >
              Get the latest news, updates and special offers straight to your
              inbox
            </p>

            <form className={styles.newsletterForm}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email address..."
                className={cn(
                  styles.newsletterInput,
                  global.body1,
                  "min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/45",
                )}
              />
              <button
                type="button"
                className={cn(
                  styles.primaryButton,
                  "inline-flex items-center bg-redText justify-center gap-3 px-5 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-[#ff6a35]",
                )}
              >
                <span>Subscribe</span>
                <ArrowIcon />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopy}>
            <p className={cn(global.body1, "text-white/70")}>
              © 2025 – Copyright All Rights reserved
            </p>
          </div>

          <div className={styles.footerLegal}>
            {legalLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className={cn(
                  global.body1,
                  styles.footerLink,
                  "text-white/70 transition-colors duration-300 hover:text-[#f15a29]",
                )}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className="h-[18px] w-[18px]"
      fill="none"
    >
      <path
        d="M6.75 4.5L11.25 9L6.75 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const LocationIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
    >
      <path
        d="M12 21C15.2 17.2 18 14.1 18 10.5C18 7.18629 15.3137 4.5 12 4.5C8.68629 4.5 6 7.18629 6 10.5C6 14.1 8.8 17.2 12 21Z"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <circle cx="12" cy="10.5" r="2.3" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
};

const MailIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-white"
      fill="none"
    >
      <path
        d="M4 7.5C4 6.67157 4.67157 6 5.5 6H18.5C19.3284 6 20 6.67157 20 7.5V16.5C20 17.3284 19.3284 18 18.5 18H5.5C4.67157 18 4 17.3284 4 16.5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 7L12 12.25L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const QuarticMark = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 34 34"
      className="h-8 w-8 shrink-0"
      fill="none"
    >
      <rect x="2" y="2" width="10" height="10" fill="white" />
      <rect x="22" y="2" width="10" height="10" fill="#F15A29" />
      <rect x="2" y="22" width="10" height="10" fill="white" />
      <rect x="22" y="22" width="10" height="10" fill="white" />
      <path d="M12 12L22 2V12H12Z" fill="#4B1B10" opacity="0.55" />
    </svg>
  );
};

const XIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
    >
      <path
        d="M6 5.5L18 18.5M18 5.5L6 18.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const LinkedInIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="white"
    >
      <path d="M6.6 8.2A1.6 1.6 0 1 0 6.6 5a1.6 1.6 0 0 0 0 3.2ZM5.2 9.6h2.8V19H5.2V9.6ZM10 9.6h2.7v1.3h.04c.38-.72 1.3-1.5 2.68-1.5c2.86 0 3.39 1.88 3.39 4.32V19h-2.8v-4.67c0-1.12-.02-2.55-1.55-2.55c-1.56 0-1.8 1.22-1.8 2.47V19H10V9.6Z" />
    </svg>
  );
};

const YouTubeIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="white"
    >
      <path d="M19.35 7.82a2.41 2.41 0 0 0-1.7-1.7C16.15 5.7 12 5.7 12 5.7s-4.15 0-5.65.42a2.41 2.41 0 0 0-1.7 1.7c-.42 1.5-.42 4.18-.42 4.18s0 2.68.42 4.18a2.41 2.41 0 0 0 1.7 1.7c1.5.42 5.65.42 5.65.42s4.15 0 5.65-.42a2.41 2.41 0 0 0 1.7-1.7c.42-1.5.42-4.18.42-4.18s0-2.68-.42-4.18ZM10.35 15.1V8.9l5.15 3.1-5.15 3.1Z" />
    </svg>
  );
};

const socialLinks = [
  { label: "X", href: "#", icon: <XIcon /> },
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  { label: "YouTube", href: "#", icon: <YouTubeIcon /> },
] as const;

export default Footer;
