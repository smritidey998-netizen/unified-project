import type { ReactNode } from "react";
import global from "@/theme/global/global.module.scss";
import styles from "./ExpandSection.module.scss";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  APPLICATIONS,
  CONNECT,
  INDUSTRIAL_DATA,
  INDUSTRIAL_INTELLIGENCE,
} from "@/utilities/svgConstant";

type ExpandItem = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  linkText?: string;
  image?: string;
};

const expandLists: ExpandItem[] = [
  {
    icon: <CONNECT />,
    title: "Connect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    icon: <INDUSTRIAL_DATA />,
    title: "Industrial DataOps iLuminator",
    subtitle: "iLuminator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorem ipsum dolor sit.",
    link: "#",
    linkText: "Learn more",
    image: "/assests/images/expandimg.png",
  },
  {
    icon: <INDUSTRIAL_INTELLIGENCE />,
    title: "Industrial Intelligence eXponence",
    subtitle: "eXponence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorem ipsum dolor sit.",
    link: "#",
    linkText: "Learn more",
    image: "/assests/images/cropped.png",
  },
  {
    icon: <APPLICATIONS />,
    title: "Applications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "#",
    linkText: "View All Applications",
  },
];

const ExpandSection = () => {
  return (
    <section className={cn(styles.expandSection, "w-full")}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5 ">
        {expandLists.map((item) => (
          <article
            key={item.title}
            className={cn(
              styles.expandCard,
              "flex h-full flex-col gap-4 bg-white p-6 justify-between items-stretch",
            )}
          >
            <div className={cn(styles.expandIcon, "shrink-0")}>{item.icon}</div>

            <div className={cn(styles.expandContent, 'flex flex-col gap-4 h-full relative')}>
              <div className="space-y-2">
                <h4
                  className={cn(
                    global.details_big2,
                    "font-semibold text-black",
                  )}
                >
                  {item.title}
                  {item.subtitle ? (
                    <span
                      className={cn(
                        global.head5, styles.subtitle,
                        "block font-medium text-black/80",
                      )}
                    >
                      {item.subtitle}
                    </span>
                  ) : null}
                </h4>
              </div>

              <p className={cn(global.body1, styles.des, "text-ordinarytext")}>
                {item.description}
              </p>

              {item.link && item.linkText ? (
                <Link
                  href={item.link}
                  className={cn(
                    global.body1,
                    styles.link,
                    "inline-flex w-fit font-semibold text-redText border-b border-redText hover:border-transparent transition-colors duration-300 hover:text-[#dd5726]",
                  )}
                >
                  {item.linkText}
                </Link>
              ) : null}

              {item.image ? (
                <div className={cn(styles.expandImageHolder, "relative aspect-[16/16] overflow-hidden")}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={cn(styles.expandImage, "object-cover object-top-left rounded-tl-lg")}
                  />
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExpandSection;
