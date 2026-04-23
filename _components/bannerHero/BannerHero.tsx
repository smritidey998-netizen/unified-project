"use client";

import Image, { type StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { cn } from "@/lib/utils";
import global from "@/theme/global/global.module.scss";
import styles from "./BannerHero.module.scss";
import Button from "../common/button/Button";
import { PLAY_SVG } from "@/utilities/svgConstant";

const slides = [
  {
    image: "/assests/images/banner.jpg",
    imageAlt: "Industrial software dashboard overview",
    imagePosition: "center top",
  },
  {
    image: "/assests/images/banner.png",
    imageAlt: "Project builder interface for industrial operations",
    imagePosition: "center center",
  },
  {
    image: "/assests/images/banner.jpg",
    imageAlt: "Industrial software dashboard overview",
    imagePosition: "center top",
  },
  {
    image: "/assests/images/banner.png",
    imageAlt: "Project builder interface for industrial operations",
    imagePosition: "center center",
  },
];

const BannerHero = () => {
  return (
    <section
      className={cn(styles.bannerHero, "relative overflow-hidden bg-white max-w-[1500px] m-auto")}
    >
      <div className={cn(styles.banner_left)}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation = {false}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          loop
          effect="fade"
          speed={900}
          className={styles.slider}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slide}>
                <div className={styles.imageWrap}>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className={cn(styles.tile)}
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "400% 300%",
                        backgroundPosition: `${(index % 4) * (100 / 3)}% ${Math.floor(index / 4) * (100 / 2)}%`,
                      }}
                    />
                  ))}
                  
                </div>

                <div className={styles.overlay} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cn(styles.banner_right)}>
        <div className={cn(styles.banner_content)}>
          <h1
            className={cn(global.head1_1, styles.banner_title, "font-semibold")}
          >
            Decision Intelligence for manufacturing Operations{" "}
          </h1>
          <p className={styles.banner_description}>
            Build an intelligent MOM with your existing systems using Quartic’s
            event-driven DataOps, advanced analytics, and industrial AI.
          </p>

          <div className="flex gap-5">
            <Button link="/contact" text="Request a Demo" />
            <Button
            className={cn(styles.white_btn)}
              link="/contact"
              text="Watch Video"
              icon={<PLAY_SVG />}
              white
              LeftIcon
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHero;
