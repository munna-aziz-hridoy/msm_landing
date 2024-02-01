import React from "react";
import styles from "./navbar.module.css";
import logo from "@/assets/logo.png";
import { Img } from "..";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_container}>
        <div className={styles.logo}>
          <Img src={logo.src} w="55px" h="48px" />
          <h2>MSM</h2>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
