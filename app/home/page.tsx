import Image from "next/image";
import React from "react";
import heroImage from "@/assets/homepage_hero.png";
import logo from "@/assets/Logo.png";
import HomeButton from "@/components/HomeButton";
import cookie from "@/assets/CookieImage.png";

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
      <div className="h-2 bg-black w-full mt-10"></div>
      <div className="whitespace-nowrap animate-marquee font-bold text-5xl mt-[18px]">STREET ARTIST  NATURE  FRESHNESS  CREATIVITY  </div>
      <div className="h-2 bg-black w-full mt-6 "></div>

    </>
  );
}

export default Page;
