import { NavLink } from "react-router-dom";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h1 className={styles.title}>Learn Something New Today</h1>
            <p className={styles.sub}>
              Explore our wide range of courses and start learning today!
            </p>
            <NavLink to="courses" className={styles.btn}>
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
