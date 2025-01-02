import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./RightNavigation.module.css";
import Right from "../Icons/Right";

export default function RightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  swiper.on("slideChange", function () {
    setIsEnd(swiper.isEnd);
  });

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <Right onClick={() => swiper.slideNext()} />}
    </div>
  );
}
