import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css";
import AlbumCard from "../Card/AlbumCard";

export default function CarouselComponent({ albumsData }) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={7}
        navigation
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {albumsData.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
