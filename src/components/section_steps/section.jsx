import React from "react";
import stepImg from "@/assets/steps_bg.png";
import { Img } from "..";
import styles from "./section.module.css";

function StepSection() {
  return (
    <div className={styles.step_wrapper}>
      <h2 className={styles.step_header}>Step to Multisite Management</h2>
      <p className={styles.step_title}>
        This is a step by step guide to manage your multisite.
      </p>
      <div className={styles.step_content_container}>
        <div className={styles.step_content_left}>
          <Img src={stepImg.src} />
        </div>
        <div className={styles.step_content_right}>
          {[1, 2, 3].map((item) => (
            <div className={styles.step}>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                quo laudantium minima recusandae. Obcaecati, mollitia.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StepSection;
