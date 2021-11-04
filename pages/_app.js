import LBanner from "../src/components/leftBanner/LBanner";
import RBanner from "../src/components/rightBanner/RBanner";
import Nav from "../src/components/nav/Nav";
import useWindowSize from "../src/customHooks/useWindowSize";
import Footer from "../src/components/footer/Footer";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  const windowSize = useWindowSize();
  return (
    <section className="body-container">
      {windowSize.width > 600 ? <LBanner /> : null}
      <section className="content-container">
        <Nav />
        <article className="main-content-container">
          <Component {...pageProps}></Component>
        </article>
        <Footer></Footer>
      </section>
      {windowSize.width > 600 ? <RBanner /> : null}
    </section>
  );
}

export default MyApp;
