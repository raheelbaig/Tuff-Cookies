"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import style from "./style.module.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";




export default function ProjectSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);


  const sliderHandler = (swipeType: "left" | "right") => {
    if (swiperRef.current !== null) {
      const { swiper } = swiperRef.current;

      if (swipeType === "right") {
        if (swiper.isEnd === false) {
          swiper.slideNext();
        } else {
          swiper.slideToLoop(0);
        }
      } else {
        if (swiper.snapIndex > 0) {
          swiper.slidePrev();
        } else {
          swiper.slideToLoop(11);
        }
      }
    }
  };

  return (
    <div className="my-20">
      <h1 className="text-center text-[72px] font-bold text-primary mb-10 tracking-wider tablet:text-[40px] semiLg-mob:text-[24px]">
        GALLERY
      </h1>
      <Swiper
        onSlideChange={(swiper) => {
          setCurrentSlideIndex(swiper.realIndex);
        }}
        ref={swiperRef}
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
        <button
          onClick={() => {
            sliderHandler("left");
          }}
          className={`md-mob:hidden cursor-pointer w-14 aspect-square rounded-full flex justify-center items-center z-20  top-1/2 -translate-y-1/2 right-[80%] xs-desktop:top-[85%] lg-mob:w-12 lg-mob:right-[85%]  bg-[#E7CFB3] absolute`}
        >
          <TfiAngleLeft color="#4F2816" size={26} />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => {
            sliderHandler("right");
          }}
          className={`md-mob:hidden cursor-pointer w-14 aspect-square rounded-full flex justify-center items-center z-20 top-1/2 -translate-y-1/2 left-[80%]  xs-desktop:top-[85%]  lg-mob:w-12 lg-mob:left-[85%] bg-[#E7CFB3]  absolute`}
        >
          <TfiAngleRight color="#4F2816" size={26} />
        </button>

        {Array.from({ length: 12 }).map((data, index) => {
          return (
            <SwiperSlide
              key={index + "key"}
              className={style.swiperSlider}
              style={{ width: "300px", height: "300px" }}
            >
              <img
                className={
                  currentSlideIndex === index
                    ? style.activeSlide
                    : style.defaultSlide
                }
                src={`/Projects/All/sample-${index + 1}.jpg`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
