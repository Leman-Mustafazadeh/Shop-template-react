import React from "react";
import styles from "./index.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
const ShopDeal = () => {
  return (
    <section className={styles.shop_deal}>
  <div className="container">
  <h3>New realeased Products for Men</h3>
      <p>Who are in extremely love with eco friendly system.</p>

      <div className={styles.shop_deal_img}>
        <div className={styles.shop_box}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp"
            alt=""
          />
          <div></div>
          <h5>Long Sleeve shirt</h5>
          <h2>$150.00</h2>
        </div>

        <div className={styles.shop_box}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/l2.jpg.webp"
            alt=""
          /> <div></div>
          <h5>Long Sleeve shirt</h5>
          <h2>$150.00</h2>
        </div>

        <div className={styles.shop_box}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/l3.jpg.webp"
            alt=""
          /> <div></div>
          <h5>Long Sleeve shirt</h5>
          <h2>$150.00</h2>
        </div>

        <div className={styles.shop_box}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/l4.jpg.webp"
            alt=""
          /> <div></div>
          <h5>Long Sleeve shirt</h5>
          <h2>$150.00</h2>
        </div>
      </div>
  </div>
    </section>
  );
};

export default ShopDeal;
