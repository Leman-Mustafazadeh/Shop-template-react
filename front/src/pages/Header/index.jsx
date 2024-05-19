import React from "react";
import styles from "./index.module.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.head_ul}>
          <ul>
            <li>+12312-3-1209</li>
            <li>SUPPORT@COLORLIB.COM</li>
          </ul>
          <p>LOGIN</p>
        </div>

        <div className={styles.head_wrap}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/logo.png.webp"
            alt=""
          />

          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">CATEGORY</a>
            </li>
            <li>
              <a href="">MEN</a>
            </li>
            <li>
              <a href="">WOMEN</a>
            </li>
            <li>
              <a href="">LATEST</a>
            </li>
            <li>
              <a href="" className={styles.pages}>
                PAGES <i className="fa-solid fa-caret-down"></i>
              </a>
              <div className={styles.head_page}>
                <li>
                  <a href="">Category</a>
                </li>
                <li>
                  <a href="">Single</a>
                </li>
                <li>
                  <a href="">Card</a>
                </li>
                <li>
                  <a href="">Checkout</a>
                </li>
                <li>
                  <a href="">Confirmation</a>
                </li>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
