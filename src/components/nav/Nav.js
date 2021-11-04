import React from "react";
import Link from "next/link";
import s from "./nav.module.scss";
export default function Nav() {
  return (
    <section className={`${s["nav-container"]} flex-container nav-max`}>
      <article className={`${s["banner"]} flex-container`}>
        <img src="/assets/images/logo.jpg" alt="Logo" className={s.logo} />
        <div className={`${s["navsub1-container"]} flex-container`}>
          <div className={`${s["website-name"]}`}>DotaWatafak</div>
          <div className={s.slogan}>Subscribe Or Feed</div>
        </div>
      </article>
      <article
        className={`${s["nav-items-container"]} flex-container `}
      >
        <ul className={`${s["nav-items"]} flex-container `}>
          <li className={`${s["nav-item"]}  flex-container font-max`}>
            <Link href="/submit">Submit Your Clip</Link>
          </li>
          <li className={`${s["nav-item"]} flex-container font-max`}>
            <Link href="/">Latest Videos</Link>
          </li>
          <li className={`${s["nav-item"]} flex-container font-max`}>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </article>
    </section>
  );
}
