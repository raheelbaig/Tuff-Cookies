"use client";

import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";
import dots from "@/assets/buttonDot.png";
import logo from "@/assets/Logo.png";
import HeroImage from "@/assets/project-hero-Image.png";
import detailsImage from "@/assets/project-details-image.png";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide, SwiperRef, useSwiper } from "swiper/react";
import projectData from "@/data.json";
import Link from "next/link";
function Page() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [detailsData, setDetailsData] = useState<{
    name: string;
    desc: string;
    images: string[];
    quotes: string[];
  }>(projectData[0]);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div className="container flex items-center justify-between px-10 tablet:px-4">
        <Link href="/contact">
          <button className="bg-[#C28840] tablet:hidden w-[235px] h-[57px] py-2 px-4 text-white text-[22px] font-bold rounded-lg">
            Start a Project
          </button>
        </Link>
        <div className="flex flex-col items-center justify-center gap-y-8 py-6">
          <Image src={logo} alt="logo" width={150} height={65} />
          <div className="flex gap-x-5 text-primary  text-lg tablet:hidden">
            <Link href="/home">
              <button className="hover:font-bold">Home</button>
            </Link>
            <Link href="/about">
              <button className="hover:font-bold">About</button>
            </Link>
            <Link href="/contact">
              <button className="hover:font-bold">Contact</button>
            </Link>
          </div>
        </div>
        <Link href="/contact">
          <button className="bg-[#C28840] tablet:hidden w-[235px] h-[57px] py-2 px-4 text-white text-[22px] font-bold rounded-lg">
            Workshops
          </button>
        </Link>
        <button
          onClick={toggleNav}
          className=" md:hidden focus:outline-none space-y-10"
          aria-label="Toggle navigation"
        >
          {isNavOpen ? (
            <RxCross1 size={25} color="#C28840" />
          ) : (
            <RxHamburgerMenu size={25} color="#C28840" />
          )}
        </button>
        {isNavOpen && (
          <div className="absolute  flex flex-col items-start z-10 right-10 top-3 mt-16 p-4 gap-y-6 bg-[#C28840] text-white w-56 rounded-lg transition-all duration-200 shadow-md">
            <Link href="/home">
              <button className="  text-white text-[20px] font-semibold rounded-lg">
                Home
              </button>
            </Link>
            <Link href="/about">
              <button className="  text-white text-[20px] font-semibold rounded-lg">
                About
              </button>
            </Link>
            <Link href="/contact">
              <button className="  text-white text-[20px] font-semibold rounded-lg">
                Contact
              </button>
            </Link>
            <Link href="/contact">
              <button className="  text-white text-[20px] font-semibold rounded-lg">
                Start a Project
              </button>
            </Link>
            <Link href="/contact">
              <button className="  text-white text-[20px] font-semibold rounded-lg">
                Workshops
              </button>
            </Link>
          </div>
        )}
      </div>
      <Swiper
        spaceBetween={20}
        onSlideChange={(swiper) => {
          if (isExpanded) {
            setDetailsData(projectData[swiper.snapIndex]);
            console.log("Fainza");

            // if (swiper.snapIndex < 1) {
            //   // setDisabledArrow("left");
            // } else if (swiper.isEnd) {
            //   // setDisabledArrow("right");
            // } else {
            //   // setDisabledArrow("none");
            // }
          }
        }}
      >
        {projectData.map((data, index) => {
          return (
            <SwiperSlide>
              <div className="relative h-[calc(100vh-174px)] bg-black">
                <Image
                  className="object-cover"
                  src={data.images[0]}
                  fill
                  alt="heroImage "
                />

                <span className="bg-gradient-to-b from-transparent to-black/50 absolute inset-0 " />
                <div className="absolute inset-x-0 bottom-20 z-50">
                  <h1 className="text-[48px] text-[#FFC680] text-center font-semibold text-secondary">
                    {data.name}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        onClick={handleClick}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex items-center justify-between box-content px-1 h-[45px] w-[160px] bg-secondary rounded-[60px] cursor-pointer ">
          <div></div>
          <p className="text-lg font-semibold">
            {isExpanded ? "See Less" : "See More"}
          </p>
          <div className="w-[22px] h-[36px]">
            <Image src={dots} alt="dots" />
          </div>
        </div>
      </button>

      {/* Details */}
      {isExpanded && detailsData !== null && (
        <div
          className={`container flex flex-col   px-10 mt-40 tablet:px-3 tablet:mt-9`}
        >
          <div className="container flex lg-mob:flex-wrap gap-y-4 items-center tablet:justify-center justify-between tablet:gap-x-3 gap-x-10 ">
            <div className="w-full max-w-96 lg-mob:max-w-72 aspect-square relative">
              <Image
                className="object-cover rounded-[10.5px]"
                src={detailsData.images[1]}
                fill
                alt="image"
              />
            </div>
            <div className="w-full max-w-96 lg-mob:max-w-72 aspect-square relative">
              <Image
                className="object-cover rounded-[10.5px]"
                src={detailsData.images[2]}
                fill
                alt="image"
              />
            </div>
            <div className="w-full max-w-96 lg-mob:max-w-72 aspect-square relative">
              <Image
                className="object-cover rounded-[10.5px]"
                src={detailsData.images[3]}
                fill
                alt="image"
              />
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center mb-44">
            <h1 className="mt-14 text-5xl font-bold md-mob:text-4xl">
              {detailsData.name}
            </h1>
            <p className="text-xl text-[#818181] text-center mt-9 md-mob:text-lgs">
              {detailsData.desc}
            </p>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Page;
