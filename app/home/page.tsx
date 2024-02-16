import Image from "next/image";
import React from "react";
import heroImage from "@/assets/homepage_hero.png";
import heroImage1 from "@/assets/contact-hero-image.png";
import logo from "@/assets/Logo.png";
import HomeButton from "@/components/HomeButton";
import cookie from "@/assets/CookieImage.png";
import grass from "@/assets/grass.png";
import style from "./style.module.css"
import VideoPlayer from "@/components/VideoPlayer";

function Page() {
  return (
    <>
      <div>
        <Image src={heroImage} alt="hero image" width={1536} height={400} />
      </div>
      <div className="container">
        <div className="absolute top-10 w-[180px] h-[80px]">
          <Image src={logo} alt="logo" />
        </div>
        <div className="absolute top-0 right-0">
          <Image src={cookie} alt="cookie" />
        </div>
        <div className="absolute right-32 bottom-60">
          <HomeButton text="ABOUT" />
        </div>
        <div className="absolute right-32 bottom-40">
          <HomeButton text="PROJECTS" />
        </div>
        <div className="absolute right-32 bottom-20">
          <HomeButton text="CONTACT" />
        </div>
      </div>

      <div className="h-2 bg-black w-full mt-10 "></div>
      <div className="relative w-full overflow-hidden">
        <div className="w-full whitespace-nowrap animate-marquee font-bold text-5xl mt-[18px]">
          STREET ARTIST NATURE FRESHNESS CREATIVITY{" "}
        </div>
      </div>
      {/* <div className="relative w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="inline-block mr-4">
            Your moving text here. &nbsp;
          </span>
          <span className="inline-block">Your moving text here. &nbsp;</span>
        </div>
      </div> */}
      <div className="h-2 bg-black w-full mt-6 "></div>

      <div className=" container  flex px-10  gap-x-2 items-start justify-center  my-[110px] mb-16 tablet:flex-col-reverse tablet:items-center tablet:justify-center tablet:my-[65px]">
        <div className="w-2/3">
          <div className="w-2/3">
            <h1 className="font-medium text-3xl underline underline-offset-4 mb-10 mt-10">
              LOREM IPSUM TEXT
            </h1>
            <p className="text-[#4B4B4B] text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
          </div>
        </div>
        <div>
          <Image
            src={heroImage1}
            alt="heroImage"
            width={450}
            height={420}
            className="tablet:w-[250px] aspect-[275/269] object-contain tablet:mb-5"
          />
        </div>
      </div>

      <div className="px-10 container flex flex-col justify-center items-center ">
        <h1 className="text-[72px] font-bold text-primary mb-16">Video</h1>
        <VideoPlayer />
      </div>

      {/* Footer */}
      <div className="w-full h-[100px] mt-32">
        <Image src={grass} alt="footer" />
      </div>
    </>
  );
}

export default Page;
