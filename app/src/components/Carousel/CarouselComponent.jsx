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
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";

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
        navigation
        allowTouchMove
        // initialSlide={0}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {/* <div>
          <LeftNavigation />
          <RightNavigation />
        </div> */}
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
      </Swiper>

      {/* Custom navigation buttons */}
    </div>
  );
}
