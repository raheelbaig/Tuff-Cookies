"use client";

import Image from "next/image";

import React, { useState } from "react";
import dots from "@/assets/buttonDot.png";
import logo from "@/assets/Logo.png";
import HeroImage from "@/assets/project-hero-Image.png";
import detailsImage from "@/assets/project-details-image.png";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

function Page() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div className="container flex items-center justify-between">
        <button className="bg-[#C28840] w-[235px] h-[57px] py-2 px-4 text-white text-[22px] font-bold rounded-lg">
          Start a Project
        </button>
        <div className="flex flex-col items-center justify-center gap-y-8 py-6">
          <Image src={logo} alt="logo" width={150} height={65} />
          <div className="flex gap-x-5 text-primary  text-lg">
            <button className="hover:font-bold">Home</button>
            <button className="hover:font-bold">About</button>
            <button className="hover:font-bold">Contact</button>
          </div>
        </div>
        <button className="bg-[#C28840] w-[235px] h-[57px] py-2 px-4 text-white text-[22px] font-bold rounded-lg">
          Workshops
        </button>
      </div>
      <div className="relative">
        <div className="w-full h-[90%]">
          <Image src={HeroImage} alt="heroImage" />
        </div>
        <div className="flex flex-col items-center justify-center absolute bottom-10 left-[40%]">
          <h1 className="text-[48px] font-semibold text-secondary">
            Project Name
          </h1>
          <>
            <button onClick={handleClick} className="">
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
          </>
        </div>
      </div>
      {/* Details */}
      <div className={`${!isExpanded && "hidden"} container`}>
        <div className="container flex items-center justify-between gap-x-3 mt-52">
          <div className="w-[345px] h-[345px] rounded-[10.5px]">
            <Image src={detailsImage} alt="image" />
          </div>
          <div className="w-[345px] h-[345px] rounded-[10.5px]">
            <Image src={detailsImage} alt="image" />
          </div>
          <div className="w-[345px] h-[345px] rounded-[10.5px]">
            <Image src={detailsImage} alt="image" />
          </div>
        </div>
        <div className="container flex flex-col items-center justify-center mb-44">
          <h1 className="mt-14 text-5xl font-bold">Project Name</h1>
          <p className="text-xl text-[#818181] text-center mt-9">
            Dummy text Worem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
            velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Praesent
            auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
            Donec ut rhoncus ex. Suspendisse ac rhoncus nisl,{" "}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
