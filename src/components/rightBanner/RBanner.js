import ReactPlayer from "react-player";
import React from "react";
import styles from "./rbanner.module.scss";
function RBanner() {
  return (
    <section className={`${styles["banner-container"]}`}>
      <ReactPlayer
        url="https://www.youtube.com/embed/e7BqiREIIso?start=890"
        playing={true}
        muted={true}
        loop={true}
        height="100%"
        className={`${styles["video-background-right"]}`}
      ></ReactPlayer>
      <div className={styles.block}></div>
    </section>
  );
}

export default RBanner;
