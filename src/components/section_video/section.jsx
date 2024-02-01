import React from "react";

import styles from "./section.module.css";
import { IoPlay } from "react-icons/io5";

import profile from "@/assets/profile_default.svg";

function VideoSection() {
  return (
    <div className={styles.video_wrapper}>
      <div className={styles.text_content}>
        <h2>Quick Overview </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          sit vitae ipsa enim molestiae deserunt. Nam, odit? Odit necessitatibus
          itaque esse veritatis blanditiis corporis fugit maiores consequatur,
          minima, tempore facilis reiciendis? Nobis soluta id, sit aperiam omnis
          libero impedit inventore magni veritatis! Maxime, iure atque totam
          ducimus amet est veritatis.
        </p>
        <button>
          <p>Watch the video</p>
          <IoPlay />
        </button>
        <div className={styles.reviewer_box}>
          <img src={profile.src} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad est
            cupiditate velit corporis iusto, necessitatibus ut quos perferendis.
            <br /> <strong>Molestias, quis.</strong>
          </p>
        </div>
      </div>
      <div className={styles.video_container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7PIji8OubXU?si=-7eToAkDGEIdLJ5Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoSection;
