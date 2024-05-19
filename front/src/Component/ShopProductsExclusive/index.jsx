import React from "react";
import  styles from "./index.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
const ShopProductsExclusive = () => {
  return (
    <section  className={styles.shop_exc}>
      <div className="container">
        <h2>Exclusive Hot Deal Ends in:</h2>
        <p>Who are in extremely love with eco friendly system.</p>

        <div className={styles.shop_exc_head}>
          <div className={styles.shop_exc_img}>
            <img
              src="https://preview.colorlib.com/theme/shop/img/cd.png.webp"
              alt=""
            />
          </div>
          <div className={styles.shop_exc_right}>
         
            <div className={styles.shop_exc_title}>
              <h3>-2041</h3>
              <h6>Days</h6>
            </div>


            <div className={styles.shop_exc_title}>
              <h3>14</h3>
              <h6>Hours</h6>
            </div>


            <div className={styles.shop_exc_title}>
              <h3>-9</h3>
              <h6>Minutes</h6>
            </div>

            <div className={styles.shop_exc_title}>
              <h3>-21</h3>
              <h6>Seconds</h6>
            </div>

            <button><a href="">SHOP NOW</a></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProductsExclusive;
