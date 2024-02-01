import React from "react";
import Image from "next/image";

function Img({ src, w = "100%", h = "100%" }) {
  return (
    <div
      style={{
        position: "relative",
        width: w,
        height: h,
      }}
    >
      <Image src={src} alt="image" layout="fill" />
    </div>
  );
}

export default Img;
