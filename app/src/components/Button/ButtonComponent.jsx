import React from "react";
import styles from "./Button.module.css";

export default function ButtonComponent({ text }) {
  return (
    <div>
      <button className={styles.btn}>
        <p>{text}</p>
      </button>
    </div>
  );
}
