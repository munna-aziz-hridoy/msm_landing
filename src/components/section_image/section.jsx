import React from "react";
import styles from "./section.module.css";

import siteImage from "@/assets/msm_ss.png";
import { Img } from "..";

function ImageSection() {
  return (
    <div className={styles.image_section_wrapper}>
      <div className={styles.image_section_img}>
        <Img src={siteImage.src} />
      </div>
      <div className={styles.image_section_text}>
        <h2>Annotation</h2>
        <p>
          The annotation tool is a simple and intuitive way to annotate images
          and videos. It allows users to draw rectangles, circles, polygons, and
          other shapes on the image or video. The annotation tool also supports
          text annotations, allowing users to add text to the image or video.
        </p>
      </div>
    </div>
  );
}

export default ImageSection;
