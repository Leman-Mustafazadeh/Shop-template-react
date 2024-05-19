import React from "react";
import styles from "./index.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
const Season = () => {
  return (
    <section className={styles.season} >
      <div >
      <div className={`${styles.sec_head} '`}>
          <div className={styles.sec_img}>
            <img
              src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp"
              alt=""
            />
          </div>

          <div className={styles.sec_right}>
            <div className={styles.sec_title}>
              <span>Flat</span>
              <h2>75%Off</h2>
            </div>
            <h1>IT’S HAPPENING THIS SEASON!</h1>
            <button><a href="">PURCHASE NOW</a></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Season;
