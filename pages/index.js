import Video from "../src/components/video/Video";
import dummyData from "../src/components/data/data";

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDlroSVtQOqgMgAVM5kM8d7q5TRKPHggcU&channelId=UC18NaGQLruOEw65eQE3bNbg&part=snippet,id&order=date&maxResults=3"
    );
    const data = await res.json();
    if (data.error) {
      return {
        props: { data: { items: dummyData } },
        revalidate: 3600,
      };
    }
    return {
      props: { data: data },
      revalidate: 3600,
    };
  } catch (error) {
    console.log(error);
  }
}
function latestVideo(props) {
  return (
    <section>
      <Video videos={props.data.items}></Video>
    </section>
  );
}

export default latestVideo;
