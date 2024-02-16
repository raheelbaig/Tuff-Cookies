import Link from "next/link";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <div className="mb-[42px]">
      <div className="flex justify-between items-center tablet:flex-col tablet:gap-y-2 px-4">
        <p className="text-primary text-base">© All Copyrights Reserved 2024</p>
        <div className="flex items-center justify-center gap-x-1">
          <FaRegEnvelope size={19} color="#C28840" />
          <Link href="mailto:tuffcookietmby@gmail.com">
          <p className="text-primary">tuffcookietmby@gmail.com</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-secondary "></div>
    </div>
  );
}

export default Footer;
