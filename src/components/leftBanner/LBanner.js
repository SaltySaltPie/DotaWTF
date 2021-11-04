import React from "react";
import ReactPlayer from "react-player";
import styles from "./lbanner.module.scss";
function LBanner() {
  return (
    <section className={`${styles["banner-container"]}`}>
      <ReactPlayer
        url="https://www.youtube.com/embed/e7BqiREIIso?start=703"
        playing={true}
        muted={true}
        loop={true}
        height="100%"
        className={`${styles["video-background-left"]}`}
      ></ReactPlayer>
      <div className={styles.block}></div>



    </section>
  );
}

export default LBanner;
