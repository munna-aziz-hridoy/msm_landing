import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { LuTimer } from "react-icons/lu";
import { MdOutlineSpeed } from "react-icons/md";

import styles from "./section.module.css";

function OverviewSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p>It feels like ever easy ever was</p>
        <h2>
          CleanShot X provides over <br />{" "}
          <span className="highlight">50 changes</span> making the ultimate
          secreen capturing tool
        </h2>
        <div className={styles.btn_container}>
          <button>
            <span>Upgrade license</span>
            <IoIosArrowForward />
          </button>
          <button>
            <span>Learn more</span>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className={styles.icon_container}>
        <div className={styles.icon_left}>
          <div className={styles.empty} />
          <div className={styles.shadow}>
            <RiCheckboxMultipleBlankLine />
          </div>
          <div />
          <div className={styles.empty} />
          <div className={styles.empty} />
          <div className={styles.shadow}>
            <MdOutlineSpeed />
          </div>
        </div>
        <div className={styles.icon_right}>
          <div className={styles.shadow}>
            <HiOutlineRectangleGroup />
          </div>
          <div />
          <div className={styles.shadow}>
            <LuTimer />
          </div>
          <div />
          <div className={styles.empty} />
          <div />
        </div>
      </div>
    </div>
  );
}

export default OverviewSection;
