import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <section className={`${styles["footer-container"]} flex-container `}>
      <article className={`${styles["footer-item"]}`}>
        <div>Join Our Community</div>
        <div>
          <a href="https://www.youtube.com/c/DotaWatafak" target="_blank">
            <img
              src="./assets/icons/you-tube-2017-icon-seeklogo.com-4.svg"
              alt="Youtube"
              className={`${styles["icons"]} `}
            />
          </a>
          <a href="https://discord.gg/eawbGKvbwX" target="_blank">
            <img
              src="./assets/icons/discord-seeklogo.com.svg"
              alt="Discord"
              className={`${styles["icons"]} `}
            />
          </a>
          <a href="https://www.facebook.com/DotaWatafak/" target="_blank">
            <img
              src="./assets/icons/facebook-seeklogo.com.svg"
              alt="Facebook"
              className={`${styles["icons"]} `}
            />
          </a>
        </div>
      </article>
    </section>
  );
}

export default Footer;
