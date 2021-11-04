import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Submit from "./Submit";
import VideoBackground from "./VideoBackground";
import ReactPlayer from "react-player";
function App() {
  return (
    <Router className="body">
      <VideoBackground></VideoBackground>
      <article className="content-container">
        <Nav></Nav>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/submit">
            <Submit></Submit>
          </Route>
        </Switch>
        <section className="background-banner tr ">
          <ReactPlayer
            url="https://www.youtube.com/embed/e7BqiREIIso"
            playing={true}
            muted={true}
            loop={true}
            // height="100%"
            className="video-background"
          ></ReactPlayer>
        </section>
      </article>
    </Router>
  );
}

export default App;
