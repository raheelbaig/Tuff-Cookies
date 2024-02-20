import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mb-[42px]">
      <div className="w-full h-[1px] bg-secondary "></div>
      <div className="flex justify-between items-center tablet:flex-col mt-3 tablet:gap-y-2 px-4">
        <div className="flex items-center justify-center gap-x-1">
          <FaRegEnvelope size={19} color="#C28840" />
          <Link href="mailto:tuffcookietmby@gmail.com">
            <p className="text-primary">tuffcookietmby@gmail.com</p>
          </Link>
        </div>
        <p className="text-primary text-base">© All Copyrights Reserved 2024</p>
        <div className="flex items-center justify-center gap-x-3">
          <FaFacebook
            size={26}
            color="#4F2816"
            className="tablet:w-[25px] tablet:h-[25px]"
          />
          <FaInstagram
            size={26}
            color="#4F2816"
            className="tablet:w-[25px] tablet:h-[25px]"
          />
          <FaWhatsapp
            size={26}
            color="#4F2816"
            className="tablet:w-[25px] tablet:h-[25px]"
          />
          <FaXTwitter
            size={26}
            color="#4F2816"
            className="tablet:w-[25px] tablet:h-[25px]"
          />
          <IoLogoYoutube
            size={26}
            color="#4F2816"
            className="tablet:w-[25px] tablet:h-[25px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
