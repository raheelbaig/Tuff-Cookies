import Image from "next/image";
import React from "react";
import heroImage from "@/assets/homepage_hero.png";
import heroImage1 from "@/assets/contact-hero-image.png";
import logo from "@/assets/Logo.png";
import HomeButton from "@/components/HomeButton";
import cookie from "@/assets/CookieImage.png";
import grass from "@/assets/grass.png"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

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
      <div className="h-2 bg-black w-full mt-10 "></div>
      <div className="whitespace-nowrap animate-marquee font-bold text-5xl mt-[18px]">
        STREET ARTIST NATURE FRESHNESS CREATIVITY{" "}
      </div>
      <div className="h-2 bg-black w-full mt-6 "></div>

      <div className="flex gap-x-2 items-start justify-center  my-[110px] tablet:flex-col-reverse tablet:items-center tablet:justify-center tablet:my-[65px]">
        <div className=" tablet:px-4 px-10">
          <div className="w-2/3 flex flex-col tablet:w-full">
            <p className="text-[#818181] text-xl mb-20 tablet:text-lg">
              For any questions or concerns please feel free to contact us via
              phone or email, we had love to hear from you!
            </p>
            <p className="text-primary font-semibold text-xl mb-12 tablet:text-lg lg-mob:text-center">
              We appreciate your interest and look forward to hearing from you.
            </p>
            <p className="text-primary font-semibold text-xl mb-11 tablet:text-lg tablet:text-center">
              Email:{" "}
              <Link href="mailto:Heyteam@tuffcookiearts.com">
                <span className="text-[#818181] border-b-2 border-[#818181] py-0.5">
                  Heyteam@tuffcookiearts.com
                </span>
              </Link>
            </p>
            <div className="flex gap-x-4 tablet:items-center tablet:justify-center tablet:gap-x-3">
              <button className="flex items-center justify-center w-[60px] h-[60px] tablet:w-[50px] tablet:h-[50px] bg-[#FFC680] rounded-2xl">
                <FaFacebook size={30} color="#4F2816" className="tablet:w-[25px] tablet:h-[25px]" />
              </button>
              <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl tablet:w-[50px] tablet:h-[50px]">
                <FaInstagram size={30} color="#4F2816" className="tablet:w-[25px] tablet:h-[25px]"/>
              </button>
              <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl tablet:w-[50px] tablet:h-[50px]">
                <FaWhatsapp size={30} color="#4F2816" className="tablet:w-[25px] tablet:h-[25px]"/>
              </button>
              <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl tablet:w-[50px] tablet:h-[50px]">
                <FaXTwitter size={30} color="#4F2816" className="tablet:w-[25px] tablet:h-[25px]"/>
              </button>
              <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl tablet:w-[50px] tablet:h-[50px]">
                <IoLogoYoutube size={30} color="#4F2816" className="tablet:w-[25px] tablet:h-[25px]"/>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src={heroImage1} alt="heroImage" width={450} height={420} className="tablet:w-[250px] aspect-[275/269] object-contain tablet:mb-5"/>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-[100px] mt-32">
        <Image src={grass} alt="footer" />
      </div>
    </>
  );
}

export default Page;
