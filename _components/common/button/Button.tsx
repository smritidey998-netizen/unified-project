import React from 'react'
import Link from "next/link";
import styles from "./Button.module.scss";
import { cn } from "@/lib/utils";
import { RIGHT_ARROW } from "@/utilities/svgConstant";
import { Url } from 'next/dist/shared/lib/router/router';

interface Props {
    link: Url,
    text: string,
    white? : boolean,
    className?: string,
    icon?: React.ReactNode,
    LeftIcon? : boolean,
}
const Button = ({link, text, className, white,icon, LeftIcon} : Props) => {
  return (
    <Link
            href={link}
            className={cn( 
              styles.primaryButton, className, 
              "inline-flex w-fit items-center justify-center gap-3 bg-redText whitespace-nowrap px-3 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#ff6a35]",  white && styles.white, LeftIcon && 'flex-row-reverse'
            )}
          >
            <span>{text}</span>
            {icon ? icon : <RIGHT_ARROW />}
          </Link>
  )
}

export default Button