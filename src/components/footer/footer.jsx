import React from "react";
import styles from "./footer.module.css";

import logo from "@/assets/logo.png";
import { Img } from "..";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}></div>
        <div className={styles.footer_content}>
          <div className={styles.footer_logo}>
            <Img src={logo.src} w="50px" h="50px" />
            <div>
              <p>MSM</p>
              <span>Product from Mirailit</span>
            </div>
          </div>
          <p>info@msm.com</p>
          <p>+998 91 123 45 67</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
