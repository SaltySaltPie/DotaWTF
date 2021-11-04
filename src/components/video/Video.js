import styles from "./video.module.scss";
import ReactPlayer from "react-player";

function Video(props) {
  const { videos } = props;
  return (
    <section className={`${styles["video-container"]}`}>
      {videos?.map((video) => {
        return (
          <article
            key={video.snippet.title}
            className={`${styles["video-item"]}`}
          >
            <div className={`${styles["video-title"]}`}>
              {video.snippet.title}
            </div>
            <ReactPlayer
              url={`https://www.youtube.com/embed/${video.id.videoId}`}
              width="60%"
            ></ReactPlayer>
            {/* <img src={video.snippet.thumbnails.medium.url} alt="" /> */}
          </article>
        );
      })}
    </section>
  );
}

export default Video;
