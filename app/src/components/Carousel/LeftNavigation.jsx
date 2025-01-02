import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./LeftNavigation.module.css";
import Left from "../Icons/Left";

export default function LeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  swiper.on("slideChange", function () {
    setIsBeginning(swiper.isBeginning);
  });

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <Left onClick={() => swiper.slidePrev()} />}
    </div>
  );
}
