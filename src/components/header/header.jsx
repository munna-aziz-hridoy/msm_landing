import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <section className={styles.header_wrapper}>
      <div className={styles.header_container}>
        <div className={styles.header_content_wrapper}>
          <div className={styles.header_left}>
            <h1>
              Bulk update
              <br /> <span className={`highlight`}> woo-commerce</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque deleniti sequi consectetur vero nihil, aspernatur sit
              voluptate nulla adipisicing elit. Doloremque deleniti sequi
              consectetur vero nihil, aspernatur sit voluptate nulla
            </p>
            <div className={styles.header_btn_container}>
              <button>Try now</button>
              <button>Contact us</button>
            </div>
          </div>
          <div className={styles.header_right}>
            <div className={styles.header_right_option}>
              <h2>Lorem, ipsum dolor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className={styles.header_right_option}>
              <h2>Lorem, ipsum dolor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>{" "}
            <div className={styles.header_right_option}>
              <h2>Lorem, ipsum dolor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
