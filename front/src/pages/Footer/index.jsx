import React from 'react'
import styles from "./index.module.scss"
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className={styles.footer_head}>
                <div className={styles.footer_title}>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                </div>

                <div className={styles.footer_title}>
                    <h3>Newsletter</h3>
                    <p>Stay update with our latest</p>
                    <div>
                        <input type="email" placeholder='Enter email...' />
                    </div>
                </div>


                <div className={styles.footer_feed}>
                    <h3>Instragram Feed</h3>
                    <ul>
                        <li><img src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp" alt="" /></li>
                        <li><img src="https://preview.colorlib.com/theme/shop/img/i2.jpg.webp" alt="" /></li>
                        <li><img src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp" alt="" /></li>
                        <li><img src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp" alt="" /></li>
                      
                    </ul>

                    <ul>  <li><img src="https://preview.colorlib.com/theme/shop/img/i5.jpg.webp" alt="" /></li>
                        <li><img src="https://preview.colorlib.com/theme/shop/img/i6.jpg.webp" alt="" /></li>
                        <li><img src="https://preview.colorlib.com/theme/shop/img/i7.jpg.webp" alt="" /></li>
                        <li><img src="https://preview.colorlib.com/theme/shop/img/i8.jpg.webp" alt="" /></li></ul>
                </div>

                <div className={styles.footer_title}>
                    <h3>Follow Us</h3>
                    <p>Let us be social</p>
                    <div className={styles.footer_icon}>
                        <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                        <a href=""><i className="fa-brands fa-dribbble"></i></a>
                        <a href=""><i className="fa-brands fa-behance"></i></a>

                    </div>
                </div>
            </div>

            <p className={styles.foot}>Copyright ©2024 All rights reserved | This template is made with <i className="fa-regular fa-heart"></i> by <span>Colorlib</span></p>
        </div>
    </footer>
  )
}

export default Footer
