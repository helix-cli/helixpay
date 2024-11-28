"use client";

import React from "react";
import Image from "next/image";
import styles from "./demo.module.css";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";
import ChevronRight from "@/components/Icons/ChevronLeft";
import ChevronLeft from "@/components/Icons/ChevronRight";

const demos = [
  "/images/demo-1.jpg",
  "/images/demo-2.jpg",
  "/images/demo-3.jpg",
  "/images/demo-4.jpg",
];

const Demo = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className={styles.swiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {demos.map((demo, index) => (
            <SwiperSlide key={index} className={styles.swiper_slide}>
              <Image
                src={demo}
                alt="iPhone 16 Pro Mockups"
                layout="fill"
                objectFit="cover"
                className={styles.image}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.indicators_content}>
          <button
            className={cn("swiper-button-prev", styles.indicator_btn, {
              [styles.active]: activeIndex === 0,
            })}
          >
            <ChevronRight />
          </button>

          <div className={styles.indicators}>
            {demos.map((_, index) => (
              <div
                key={index}
                className={cn(styles.indicator, {
                  [styles.active]: index === activeIndex,
                })}
              />
            ))}
          </div>

          <button
            className={cn("swiper-button-next", styles.indicator_btn, {
              [styles.active]: activeIndex === demos.length - 1,
            })}
          >
            <ChevronLeft />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Demo;
