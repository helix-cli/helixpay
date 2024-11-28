"use client";

import React from "react";
import styles from "./marquee.module.css";
import cn from "classnames";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";

const Marquee = () => {
  const marqueeRef = React.useRef<HTMLDivElement | null>(null);
  const marqueeTextRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const marquee = marqueeRef.current;
      const marqueeText = marqueeTextRef.current;

      if (!marquee || !marqueeText) return;

      marqueeText.innerHTML += marqueeText.innerHTML;

      const marqueeTextWidth = marqueeText.offsetWidth;

      const duration = marqueeTextWidth / 80;

      gsap.to(marqueeText, {
        xPercent: -100,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    },
    {
      scope: marqueeRef,
    },
  );

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <h6 className={cn("heading-6", styles.title)}>Ideal for</h6>
      </div>
      <div ref={marqueeRef} className={styles.marquee}>
        <div
          ref={marqueeTextRef}
          className={cn("heading-3", styles.marquee_text)}
        >
          Digital Artwork <span>⊹</span> App Mockups <span>⊹</span> Advertising
          <span>⊹</span> Presentations <span>⊹</span> Social Media
          <span>⊹</span> Branding <span>⊹</span> Web Design <span>⊹</span>
          E-commerce <span>⊹</span> UI/UX Design <span>⊹</span> Illustrations
          <span>⊹</span> Print Design <span>⊹</span>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
