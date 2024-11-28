"use client";

import React from "react";
import Share from "@/components/Icons/Share";
import styles from "./hero.module.css";
import cn from "classnames";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import ChevronRight from "@/components/Icons/ChevronRight";
import ChevronLeft from "@/components/Icons/ChevronLeft";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CheckoutButton from "@/components/CheckoutButton";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type HeroProps = {
  product: {
    id: number;
    title: string;
    description: string;
    price: string;
    images: string[];
    category_id: number;
  };
};

const Hero = ({ product }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const totalSlides = 3;
  const heroRef = React.useRef<HTMLDivElement | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex + 1);
  };

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: heroRef.current,
        pin: true,
      },
    });
  });

  return (
    <section ref={heroRef} className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.title_wrapper}>
          <div className={cn("heading-3", styles.title)}>{product.title}</div>
          <div className={cn("paragraph-medium", styles.description)}>
            {product.description}
          </div>

          <CheckoutButton product={product} className={styles.button} />

          <button className={cn("label-medium", styles.share_btn)}>
            <Share />
            Share
          </button>
        </div>

        <div className={styles.image_container}>
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
            {product.images.map((image, index) => (
              <SwiperSlide key={index} className={cn(styles.slide)}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={styles.thumbnail_wrapper}>
            <button
              className={cn("swiper-button-prev", styles.swiper_btn, {
                [styles.disabled]: currentSlide === 1,
              })}
            >
              <ChevronLeft />
            </button>

            {product.images.map((image, index) => (
              <div
                key={index}
                className={cn(styles.thumbnail, {
                  [styles.active]: index === currentSlide - 1,
                })}
              >
                <Image
                  src={image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}

            <button
              className={cn("swiper-button-next", styles.swiper_btn, {
                [styles.disabled]: currentSlide === totalSlides,
              })}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
