"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import ChevronRight from "@/components/Icons/ChevronRight";
import ChevronLeft from "@/components/Icons/ChevronLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Slider from "@/components/Slider";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const totalSlides = 3;

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex + 1);
  };

  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative, Pagination, Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        clickable: true,
      }}
      onSlideChange={handleSlideChange}
      className={styles.swiper}
    >
      <SwiperSlide className={cn(styles.slide)}>
        <Slider
          image="/images/slide-1.jpg"
          title="iPhone 16 Pro"
          subtitle="23 Unique, high-quality multi-device mockups for designers."
          slug="iphones"
        />
      </SwiperSlide>

      <SwiperSlide className={cn(styles.slide)}>
        <Slider
          image="/images/slide-2.jpg"
          title="MacBooks"
          subtitle="iMac mockups to present your work with clarity and elegance."
          slug="macbooks"
          type="macbooks"
        />
      </SwiperSlide>

      <SwiperSlide className={cn(styles.slide)}>
        <Slider
          image="/images/slide-3.jpg"
          title="iPads"
          subtitle="Present your digital designs in a sleek and professional way with our iPad mockups."
          slug="ipads"
          type="ipads"
        />
      </SwiperSlide>

      <div className={styles.slider}>
        <div className={styles.slider_content}>
          <button className={cn("swiper-button-prev", styles.slider_btn)}>
            <ChevronLeft />
          </button>
          <div className={cn("paragraph-small")}>
            {currentSlide} / {totalSlides}
          </div>

          <button className={cn("swiper-button-next", styles.slider_btn)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </Swiper>
  );
};

export default Hero;
