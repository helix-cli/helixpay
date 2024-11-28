import styles from "./video-player.module.css";

const VideoPlayer = () => {
  return (
    <div className={styles.video_wrapper}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/K4YkY1EsqWM?si=uIS2tWSXgJdZ-o1j"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
