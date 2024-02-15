"use client";

import Image from "next/image";
import React, { useState } from "react";
import dots from "@/assets/buttonDot.png";

function Button() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <button onClick={handleClick}>
        <div className="flex items-center justify-between px-1 h-[45px] w-[160px] bg-secondary rounded-[60px] cursor-pointer">
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
  );
}

export default Button;
