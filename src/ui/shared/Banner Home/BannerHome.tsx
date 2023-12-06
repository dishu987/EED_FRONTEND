import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./style.css";
import SlideCard from "./slideCard";
import { bannerSlides } from "../../../constants/bannerSlides";
import {
  delay,
  loop,
  navigation,
  spaceBetween,
} from "../../../constants/slides.config";

const BannerHome: React.FC = () => {
  return (
    <>
      <Swiper
        rewind={true}
        navigation={navigation}
        className="mySwiper"
        spaceBetween={spaceBetween}
        centeredSlides={true}
        loop={loop}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {bannerSlides.map((item: any, index) => {
          return (
            <SwiperSlide key={index} className="overlay_black">
              <SlideCard data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BannerHome;
