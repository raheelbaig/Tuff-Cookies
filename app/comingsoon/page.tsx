import Image from "next/image";
import React from "react";
import image from "@/assets/comingsoon.webp";

function page() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[100vh] ">
      <Image src={image} priority quality={90} alt="background" fill className="object-cover" />
      <div className="flex  items-center justify-center w-[60%] h-[100vh] my-8 px-16 py-10 bg-Transparent  rounded-xl  shadow-gray-900 xs-desktop:px-8 xs-desktop:py-6 xs-desktop:w-[80%] lg-mob:w-[90%] lg-mob:px-4 lg-mob:py-3">
        <div className="">
          <h1 className="mb-20 bg-secondary   opacity-85 font-bold text-center text-[4rem] ml-1 text-white  shadow-lg rounded-lg p-10 tablet:text-2xl tablet:mb-10 tablet:mt-4">
            <span className="animate-pulse">Coming Soon...</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page;
