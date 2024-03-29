"use client";

import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import React, { Fragment, useEffect, useRef, useState } from "react";
import dots from "@/assets/buttonDot.svg";
import logo from "@/assets/Logo.png";
import Footer from "@/components/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

import { Swiper, SwiperSlide, SwiperRef, useSwiper } from "swiper/react";
import { EffectFade } from "swiper/modules";
import projectData from "@/data.json";
import Link from "next/link";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
function Page() {
  const swiperRef = useRef<SwiperRef>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [detailsData, setDetailsData] = useState<{
    name: string;
    desc: string;
    images: string[];
    quotes: { quote: string; quoteBy: string }[];
  }>(projectData[0]);

  useEffect(() => {
    if (isExpanded && !isNavOpen) {
      window.scrollTo({
        top: window.innerHeight,
      });
    }
  }, [isExpanded]);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
    }
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleprojects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

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
          swiper.slideToLoop(projectData.length - 1);
        }
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div className="container flex items-center justify-between  px-10 tablet:px-8">
        <div className="flex items-center justify-between w-full tablet:justify-start">
          <Link href="/contact">
            <button className="bg-gradient-to-l from-[#C28840] to-[#985400] tablet:hidden w-[235px] h-[57px] py-2 px-4 text-white text-[22px] font-bold rounded-lg">
              Start a Project
            </button>
          </Link>
          <div className="flex flex-col items-center justify-center gap-y-8 py-6">
            <Link href="/">
              <Image src={logo} alt="logo" width={150} height={65} />
            </Link>
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
              <Link href="/projects">
                <button className="hover:font-bold">Projects</button>
              </Link>
            </div>
          </div>
          <Link href="/contact">
            <button className="bg-gradient-to-r from-[#C28840] to-[#985400] tablet:hidden w-[235px] h-[57px] py-2 px-4 text-white text-[22px] font-bold rounded-lg">
              Workshops
            </button>
          </Link>{" "}
        </div>
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
          <div className="absolute flex flex-col items-center justify-center z-20 right-0 top-0 p-4 gap-y-6 bg-[#C28840] text-white w-72 h-full md:hidden transition-all duration-200 shadow-md">
            <div className="absolute top-4 right-4">
              <button onClick={toggleNav}>
                <RxCross1 size={25} color="white" />
              </button>
            </div>
            <div className="w-[75%] flex flex-col items-start justify-center gap-y-4">
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
              <button
                className="flex items-center justify-center text-white text-[20px] font-semibold rounded-lg mt-4 gap-x-8"
                onClick={toggleprojects}
              >
                Projects
                <FaAngleDown
                  className={` transition-transform duration-300 mt-1 ${
                    isProjectsOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isProjectsOpen && (
                <div className="flex flex-col gap-y-2 px-3">
                  <div>
                    <Link href="/contact">
                      <button className="  text-white text-[20px] font-semibold rounded-lg">
                        Start a Project
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/contact">
                      <button className="  text-white text-[20px] font-semibold rounded-lg">
                        Workshops
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        onSlideChange={(swiper) => {
          if (isExpanded) {
            setDetailsData(projectData[swiper.snapIndex]);
          }
        }}
        effect={"fade"}
        modules={[EffectFade]}
        className="relative mySwiper"
      >
        {/* Left Arrow Button */}

        <button
          onClick={() => {
            sliderHandler("left");
          }}
          className={`cursor-pointer w-16 aspect-square rounded-full flex justify-center items-center z-20  top-1/2 -translate-y-1/2 left-10 bg-[#4f2816cb] absolute`}
        >
          <TfiAngleLeft color="#fff" size={32} />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => {
            sliderHandler("right");
          }}
          className={`cursor-pointer w-16 aspect-square rounded-full flex justify-center items-center z-20 top-1/2 -translate-y-1/2 right-10 bg-[#4f2816cb] absolute`}
        >
          <TfiAngleRight color="#fff" size={32} />
        </button>

        {projectData.map((data, index) => {
          return (
            <SwiperSlide key={data.name + index}>
              <div className="relative h-[calc(100vh-174px)] bg-black">
                <Image
                  className="object-cover"
                  src={data.images[0]}
                  fill
                  alt="heroImage "
                />

                <span className="bg-gradient-to-b from-transparent to-black/50 absolute inset-0 " />
                <div className="absolute inset-x-0 bottom-20 z-50">
                  <h1 className="text-[48px] text-[#FFC680] text-center font-semibold">
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
        <div className={`container  px-10 mt-20 tablet:px-3 tablet:mt-9`}>
          {detailsData.quotes.length !== 0 && (
            <div>
              <h1 className="text-center text-[72px] font-bold text-primary mb-10 tracking-wider tablet:text-[40px] semiLg-mob:text-[24px]">
                QUOTES
              </h1>
              {detailsData.quotes.map((data, index) => (
                <div
                  key={data.quoteBy + index}
                  className="bg-[#ffdcb1] px-4 py-3 mb-4 rounded-lg"
                >
                  <blockquote className="w-4/5 tablet:text-sm tablet:mb-4 border-l-4 border-secondary pl-3">
                    &#8223;{data.quote}&#8221;
                  </blockquote>
                  <p className="w-fit italic font-bold ml-auto mr-4 tablet:text-sm text-primary">
                    &#8213; {data.quoteBy}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="container flex items-center justify-between tablet:gap-x-3 gap-x-10 mt-10">
            <div className="w-full max-w-96 aspect-square relative">
              <Image
                className="object-cover rounded-[10.5px] bg-[#ffdcb1] "
                src={detailsData.images[1]}
                fill
                alt="Project Image 1"
              />
            </div>
            <div className="w-full max-w-96 aspect-square relative">
              <Image
                className="object-cover rounded-[10.5px] bg-[#ffdcb1]"
                src={detailsData.images[2]}
                fill
                alt="Project Image 2"
              />
            </div>
            <div className="w-full max-w-96 aspect-square relative">
              <Image
                className="object-cover rounded-[10.5px] bg-[#ffdcb1]"
                src={detailsData.images[3]}
                fill
                alt="Project Image 3"
              />
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center mb-44">
            <h1 className="mt-14 text-5xl font-bold">{detailsData.name}</h1>
            <p className="text-xl text-[#818181] text-center mt-9">
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
