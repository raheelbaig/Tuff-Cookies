import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/contact-hero-image.png";

// Logos
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";

function Page() {
  return (
    <div className="container gap-y-28">
      <Header />
      <div className="flex gap-x-2 items-start justify-center  my-[110px]">
        <div className="">
          <div className="w-2/3 flex flex-col">
            <p className="text-[#818181] text-xl mb-20">
              For any questions or concerns please feel free to contact us via
              phone or email, we had love to hear from you!
            </p>
            <p className="text-primary font-semibold text-xl mb-12">
              We appreciate your interest and look forward to hearing from you.
            </p>
            <p className="text-primary font-semibold text-xl mb-11">
              Email:{" "}
              <Link href="mailto:Heyteam@tuffcookiearts.com">
                <span className="text-[#818181] border-b-2 border-[#818181] py-0.5">
                  Heyteam@tuffcookiearts.com
                </span>
              </Link>
            </p>
            <div className="flex gap-x-4">
              <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl">
                <FaFacebook size={30} color="#4F2816" />
              </button>
              <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl">
                <FaInstagram size={30} color="#4F2816" />
              </button>
              <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl">
                <FaWhatsapp size={30} color="#4F2816" />
              </button>
              <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl">
                <FaXTwitter size={30} color="#4F2816" />
              </button>
              <button className="flex items-center justify-center w-[60px] h-[60px] bg-[#FFC680] rounded-2xl">
                <IoLogoYoutube size={30} color="#4F2816" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src={heroImage} alt="heroImage" width={450} height={420} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
