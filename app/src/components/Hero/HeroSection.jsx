import React from "react";
import HeroSectionIcon from "../Icons/HeroSectionIcon";
import styles from "./Hero.module.css";

export default function HeroSection() {
  return (
    <div
      className={styles.heropage}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.text}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <HeroSectionIcon />
    </div>
  );
}
