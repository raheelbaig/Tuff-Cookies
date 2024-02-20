"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import style from "./style.module.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ProjectSlider() {
  const [currentSlideIndex,setCurrentSlideIndex] = useState(0)
  return (
    <div className="my-20">
      <Swiper

       onSlideChange={(swiper)=>{
        setCurrentSlideIndex((swiper.realIndex))

       }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 12,
          depth: 40,
          modifier: 12,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
      >
        {Array.from({ length: 12 }).map((data, index) => {
          return (
            <SwiperSlide
            key={index}
            className={style.swiperSlider}
            style={{ width: "300px", height: "300px" }}
            >
              <img className={currentSlideIndex === index ? style.activeSlide : style.defaultSlide} src={`/Projects/All/sample-${index+1}.jpg`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
