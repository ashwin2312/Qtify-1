// import React from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import AlbumCard from "../Card/AlbumCard";
import Left from "../Icons/Left";
import Right from "../Icons/Right";
import { useRef } from "react";
import styles from "./Swiper.module.css";

export default function CarouselComponent({ albumsData }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const swiper = useSwiper();
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={7}
        // navigation
        navigation={{
          prevEl: leftRef.current,
          nextEl: rightRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = leftRef.current;
          swiper.params.navigation.nextEl = rightRef.current;
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {albumsData.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard
              image={album.image}
              follows={album.follows}
              title={album.title}
              likes={album.likes}
            />
          </SwiperSlide>
        ))}
        <button ref={leftRef} className={styles.leftSwiperButton}>
          <Left onClick={() => swiper.slidePrev()} />
        </button>
        <button ref={rightRef} className={styles.rightSwiperButton}>
          <Right onClick={() => swiper.slideNext()} />
        </button>
      </Swiper>

      {/* Custom navigation buttons */}
    </div>
  );
}
