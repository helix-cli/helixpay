"use client";

import React from "react";
import Image from "next/image";
import styles from "./video.module.css";
import cn from "classnames";
import Play from "@/components/Icons/Play";
import Modal from "@/components/Modal";
import VideoPlayer from "@/components/VideoPlayer";

const Video = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.video_container}>
          <Image
            src="/images/video.jpg"
            alt="video"
            layout="fill"
            objectFit="cover"
          />

          <div className={styles.content}>
            <p className={cn("subheading-medium", styles.text)}>Intro</p>
            <p className={cn("paragraph-large", styles.subtitle)}>
              {
                "We're passionate about helping creators bring their ideas to reality."
              }
            </p>
            <button className={styles.button} onClick={() => setOpen(true)}>
              <span className={cn("label-medium")}>View video</span>
              <div className={styles.icon}>
                <Play />
              </div>
            </button>
          </div>
        </div>
      </div>

      <Modal open={open} handleClose={() => setOpen(false)}>
        <VideoPlayer />
      </Modal>
    </section>
  );
};

export default Video;
