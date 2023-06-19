import React from "react";
import styles from "./bodyFrame_footer.module.css";

export interface BodyFrameFooter {}
export default function BodyFrameFooter({ src, children }: any) {
  return (
    <>
      <div
        style={{
          float: "left",
          width: "100%",
          margin: "35px 0",
          textAlign: "center",
          borderRadius: "20px",
          display:"flex",
         
        }}
      >
        <iframe
          className={`${styles.video}`}
          width="800"
          height="420"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
}
