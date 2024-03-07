"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { FormEventHandler, useState } from "react";
import heroImage from "@/assets/contact-hero-image.png";
import dots from "@/assets/buttonDot.svg";

// Logos
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";
import { FiX } from "react-icons/fi";

function Page() {
  const [displayModal, setModalDisplay] = useState(false);

  const handleModalDisplay = () => {
    setModalDisplay((state) => !state);
  };
  return (
    <>
      <div className="container gap-y-28">
        <Header />
        <div className="flex gap-x-2 items-start justify-center  my-[110px] tablet:flex-col-reverse tablet:items-center tablet:justify-center tablet:my-[65px]">
          <div className=" tablet:px-4 px-10">
            <div className="w-2/3 flex flex-col tablet:w-full">
              <p className="text-[#818181] text-xl mb-20 tablet:text-lg">
                For any questions or concerns please feel free to contact us via
                phone or email, we had love to hear from you!
              </p>
              <p className="text-primary font-semibold text-xl mb-12 tablet:text-lg lg-mob:text-center">
                We appreciate your interest and look forward to hearing from
                you.
              </p>
              <p className="text-primary font-semibold text-xl mb-11 tablet:text-lg tablet:text-center">
                Email:{" "}
                <button>
                  <span className="text-[#818181] border-b-2 border-[#818181] py-0.5">
                    Heyteam@tuffcookiearts.com
                  </span>
                </button>
              </p>

              <div className="flex gap-x-4 tablet:items-center tablet:justify-center tablet:gap-x-3 ">
                <button className="flex items-center justify-center w-[60px] h-[60px] tablet:w-[50px] tablet:h-[50px] bg-[#FFC680] rounded-2xl">
                  <FaFacebook
                    size={30}
                    color="#4F2816"
                    className="tablet:w-[25px] tablet:h-[25px]"
                  />
                </button>
                <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl tablet:w-[50px] tablet:h-[50px]">
                  <FaInstagram
                    size={30}
                    color="#4F2816"
                    className="tablet:w-[25px] tablet:h-[25px]"
                  />
                </button>
                <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl tablet:w-[50px] tablet:h-[50px]">
                  <FaWhatsapp
                    size={30}
                    color="#4F2816"
                    className="tablet:w-[25px] tablet:h-[25px]"
                  />
                </button>
                <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl tablet:w-[50px] tablet:h-[50px]">
                  <FaXTwitter
                    size={30}
                    color="#4F2816"
                    className="tablet:w-[25px] tablet:h-[25px]"
                  />
                </button>
                <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl tablet:w-[50px] tablet:h-[50px]">
                  <IoLogoYoutube
                    size={30}
                    color="#4F2816"
                    className="tablet:w-[25px] tablet:h-[25px]"
                  />
                </button>
              </div>
              <div className="flex w-full tablet:items-center tablet:justify-center">
                <button className="mt-11" onClick={handleModalDisplay}>
                  <div className="flex items-center justify-between   px-1 h-[45px] w-[200px] py-5 bg-[#FFC680] rounded-[60px] cursor-pointer hover:border-4 hover:border-secondary xs-desktop:h-[40px] xs-desktop:w-[190px]">
                    <div></div>
                    <p className="text-lg font-semibold">Contact Us</p>
                    <div className="w-[22px] h-[36px]">
                      <Image src={dots} alt="dots" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={heroImage}
              alt="heroImage"
              width={450}
              height={420}
              className="tablet:w-[250px] aspect-[275/269] object-contain tablet:mb-5"
            />
          </div>
        </div>
        <Footer />
      </div>
      <Modal.Container
        displayModal={displayModal}
        hideOnBlur={handleModalDisplay}
      >
        <Modal.Header>
          <h2>Connect Us with Email</h2>
          <button
            title="Close"
            onClick={handleModalDisplay}
            className={`opacity-80 ml-auto right-4 top-5 w-10 h-10 flex items-center justify-center`}
          >
            <FiX size="26" color="#000" />
          </button>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleModalDisplay();
              }}
            >
              <input
                required
                placeholder="Subject"
                type="text"
                className="mb-4 border-2 bg-white border-primary rounded-md w-full py-2 pl-4 pr-2 outline-none"
              />
              <input
                required
                placeholder="Name"
                type="text"
                className="mb-4 border-2 bg-white border-primary rounded-md w-full py-2 pl-4 pr-2 outline-none"
              />
              <input
                required
                placeholder="Email"
                type="email"
                className="mb-4 border-2 bg-white border-primary rounded-md w-full py-2 pl-4 pr-2 outline-none"
              />
              <textarea
                required
                className="mb-4 resize-none block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border-2 border-primary rounded-md outline-none"
                rows={4}
                placeholder="Message"
              ></textarea>
              <button className="" type="submit">
                <div className="flex items-center justify-between px-1 h-[45px] w-[150px] py-5 bg-[#FFC680] rounded-[60px] cursor-pointer hover:border-4 hover:border-secondary xs-desktop:h-[40px] xs-desktop:w-[150px]">
                  <p className="text-lg font-semibold pl-5">Submit</p>
                  <div className="w-[22px] h-[36px]">
                    <Image src={dots} alt="dots" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal.Container>
    </>
  );
}

export default Page;
