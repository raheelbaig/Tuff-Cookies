import React from "react";
import dots from "@/assets/buttonDot.png";
import Image from "next/image";

const HomeButton = ({ text }: { text: string }) => {
  return (
    <>
      <button >
        <div className="flex items-center justify-between px-1 h-[45px] w-[200px] py-5 bg-secondary rounded-[60px] cursor-pointer hover:border-4 hover:border-white">
          <div></div>
          <p className="text-lg font-semibold">{text}</p>
          <div className="w-[22px] h-[36px]">
            <Image src={dots} alt="dots" />
          </div>
        </div>
      </button>
    </>
  );
};

export default HomeButton;
