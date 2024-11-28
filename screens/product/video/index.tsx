"use client";

import React from "react";
import styles from "./video.module.css";
import cn from "classnames";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Video = () => {
  const titleRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const container = React.useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "top+=3000px top",
          pin: true,
          scrub: true,
          // markers: true,
          onEnter: () => {
            if (videoRef.current) {
              videoRef.current.play();
            }
          },
          onLeave: () => {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          },
        },
      });

      titleRefs.current.forEach((title) => {
        tl.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.75,
          ease: "power2.out",
        });
        tl.to(title, {
          opacity: 0,
          y: -90,
          duration: 0.75,
          ease: "power2.in",
        });
      });

      return () => {
        tl.kill();
      };
    },
    {
      scope: container,
    },
  );

  return (
    <section ref={container} className={cn("section", styles.section)}>
      <video
        ref={videoRef}
        loop
        muted
        className={cn(styles.video)}
        src="https://www.dropbox.com/scl/fi/c5uqx4xp7lcvhs63mkud9/preview.mp4?rlkey=goyy78plei55w0y7gpi1z26ea&st=9vlc3czk&raw=1"
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay} />

      <div className={cn("container", styles.container)}>
        {["HD Quality.", "Customizable.", "Easy to Use.", "Affordable."].map(
          (text, index) => (
            <h2
              key={index}
              className={cn("hero-2", styles.title)}
              ref={(el) => {
                titleRefs.current[index] = el;
              }}
            >
              {text}
            </h2>
          ),
        )}
      </div>
    </section>
  );
};

export default Video;
