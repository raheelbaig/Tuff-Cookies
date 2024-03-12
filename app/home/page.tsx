import Image from "next/image";
import React from "react";
import heroImage1 from "@/assets/contact-hero-image.png";
import logo from "@/assets/Logo.png";
import HomeButton from "@/components/HomeButton";
import grass from "@/assets/grass.png";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";
import InfiniteRotationCookie from "@/components/Infinite-Cookie-Rotation";
import bgImage from "@/assets/homepage_hero.jpg";
function Page() {
  return (
    <div>
      <div className="flex relative isolate flex-col w-full h-screen">
         <Image
          src={bgImage}
          quality={90}
          alt="Homepage Background"
          fill
          className="object-cover -z-[1]"
          priority
        />
        <div className="px-10 container pt-4">
          <Image src={logo} alt="logo" width={180} height={80} className="" />
        </div>

        <InfiniteRotationCookie />

        <div className="flex flex-1 flex-col px-10 container gap-y-5 justify-end items-end pb-20">
          <Link href="/about">
            <HomeButton text="ABOUT" />
          </Link>
          <Link href="/projects">
            <HomeButton text="PROJECTS" />
          </Link>
          <Link href="/contact">
            <HomeButton text="CONTACT" />
          </Link>
        </div>
      </div>

      <div className="h-2 bg-black w-full mt-10 "></div>
      <div className="relative w-full overflow-hidden">
        <div className="w-full !leading-tight whitespace-nowrap animate-marqueee font-bold text-5xl mt-[18px] tablet:text-4xl semiLg-mob:text-3xl">
          Life can be tough, but “A Tuff Cookie never crumbles” &nbsp;&nbsp;&nbsp;&nbsp; TUFF COOKIES &nbsp;&nbsp;&nbsp;&nbsp; Life can be tough, but “A Tuff Cookie never crumbles”
        </div>
      </div>
      <div className="h-2 bg-black w-full mt-6 "></div>

      <div className=" container  flex px-10 lg-mob:px-4  gap-x-2 items-start justify-center  my-[110px] mb-16 tablet:flex-col-reverse tablet:items-center tablet:justify-center tablet:my-[65px]">
        <div className="w-2/3 lg-mob:w-full">
          <div className="w-2/3 lg-mob:w-full">
            <h1 className="font-medium tablet:text-center text-3xl underline underline-offset-4 mb-10 mt-10">
              Tuff Cookie
            </h1>
            <p className="text-[#4B4B4B] text-lg tablet:text-center">
              Tuff Cookie is a youth arts education company. We focus on aiding
              mental, social and emotional wellbeing in young people from
              economically challenging or disadvantaged environments. Through
              creativity we support young people to explore their identities and
              build positive relationships in order to develop resilience,
              confidence, and a sense of purpose.
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
        <h1 className="text-[72px] font-bold text-primary mb-10 tracking-wider tablet:text-[40px] semiLg-mob:text-[24px]">WORKS</h1>
        <VideoPlayer />
      </div>

      {/* Footer */}
      <div className="w-full max-h-[100px] mt-0">
        <Image src={grass} alt="footer" />
      </div>
    </div>
  );
}

export default Page;
