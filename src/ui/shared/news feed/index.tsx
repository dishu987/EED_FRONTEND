import React, { useEffect, useState } from "react";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  delay,
  loop,
  navigation,
  spaceBetween,
} from "../../../constants/slides.config";
import { BACKEND_URL } from "../../../utils/api.constants";

const NewsFeed: React.FC<any> = ({ loading, news }) => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [SlidesView, setSlidesView] = useState(2.3);
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  useEffect(() => {
    if (windowDimenion?.winWidth > 1500) {
      setSlidesView(2.3);
    } else if (windowDimenion.winWidth > 1250) {
      setSlidesView(1.8);
    } else {
      setSlidesView(1);
    }
  }, [windowDimenion]);

  return (
    <>
      <Swiper
        rewind={true}
        navigation={navigation}
        className="mySwiper swiper1"
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
        slidesPerView={SlidesView}
        modules={[Autoplay, Navigation]}
      >
        {!loading &&
          news &&
          news?.map((n: any, index: any) => {
            return (
              <SwiperSlide
                className="swiper-slide1 hover-scale-down"
                key={index}
              >
                <div className="media media-news" key={index}>
                  <div className="media-img overflow-hidden">
                    <img
                      src={BACKEND_URL + "/news/" + n?.image}
                      alt={n.title}
                    />
                  </div>
                  <div
                    className="media-body bg2"
                    style={{
                      backgroundColor: "var(--dark)",
                      color: "var(--light)",
                    }}
                  >
                    {/* <span className="media-date">25 july 2017</span> */}
                    <h5 className="mt-0 sep">{n?.title}</h5>
                    <p className="text-white">{n?.description}</p>
                    {/* <Button title="Read More" onClick={() => {}} /> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default NewsFeed;
