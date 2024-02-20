"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="container flex flex-col items-center justify-center gap-y-10 py-6 tablet:gap-5 tablet:py-3 tablet:flex-row tablet:justify-between px-8">
      <Image
        src={logo}
        alt="logo"
        width={150}
        height={65}
        className="tablet:w-[90px] aspect-[70/30] object-contain "
      />
      <div className="flex gap-x-5 tablet:gap-x-4 text-primary  text-lg tablet:hidden">
        <Link href="home tablet:hidden">
          <button className="hover:font-bold tablet:text-base">Home</button>
        </Link>
        <Link href="about">
          <button className="hover:font-bold tablet:text-base">About</button>
        </Link>
        <Link href="contact">
          <button className="hover:font-bold tablet:text-base">Contact</button>
        </Link>
      </div>
      <div>
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
      </div>
      {isNavOpen && (
        <div className="absolute flex flex-col items-center justify-start transition-transform duration-300 z-20 right-0 top-0 p-4 gap-y-6 bg-[#C28840] text-white w-[40%] h-full md:hidden  shadow-md">
          <div className="absolute top-4 right-4">
            <button onClick={toggleNav}>
              <RxCross1 size={25} color="white" />
            </button>
          </div>
          <div className="w-[75%] flex flex-col items-start justify-center gap-y-4 mt-20">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
