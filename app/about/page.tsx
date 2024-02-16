import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/About-Hero-Image.png";
import pillars from "@/assets/pillars.png";
import ProjectSlider from "@/components/Slider/Slider";
import Circle from "@/assets/5pillarsCircle.png";

function Page() {
  return (
    <div className="">
      <Header />
      <div className="flex items-end justify-center w-full h-[calc(100vh-110px)] bg-cover bg-center bg-no-repeat bg-[url('../assets/About-Hero-Image.png')]">
        <h1 className="text-7xl text-secondary font-bold pb-20">ABOUT</h1>
      </div>
      <div className="container px-10 mt-20 xs-desktop:mt-10 tablet:mt-7 lg-mob:mt-5 tablet:px-6">
        <p className="text-3xl font-bold mb-5">
          Life can be tough, but “A Tuff Cookie never crumbles”
        </p>
        <p className="text-lg text-[#4B4B4B] mb-8">
          Tuff Cookie is a youth arts education company. We focus on aiding
          mental, social and emotional wellbeing in young people from
          economically challenging or disadvantaged environments. Through
          creativity we support young people to explore their identities and
          build positive relationships in order to develop resilience,
          confidence, and a sense of purpose.
        </p>
        <p className="text-lg text-[#4B4B4B]">
          We deliver tailor made projects in collaboration with schools,
          charities and organisations, to offer empowering creative experiences
          to the young people they work with. Our projects are designed to give
          young people education, support and opportunities that are often
          missing from an underprivileged upbringing and from mainstream
          education. 
        </p>
      </div>

      {/* Gallery */}
      <ProjectSlider />

      {/* 5 pillers */}
      <div className=" flex tablet:text-center tablet:flex-col items-center justify-center my-44 tablet:my-0">
        <div className="w-2/3 tablet:w-full container pl-16 tablet:pl-8">
          <div className="w-2/3 tablet:w-full">
            <p className="font-bold text-[24px] mb-16 tablet:mb-8">
              Our Model is built around
            </p>
            <div className=" ">
              <h1 className="text-[#AAAAAA] text-[5.8vw] font-bold ">The</h1>

              <div className="flex items-baseline gap-x-3 tablet:justify-center">
                <h1 className="text-[#4F2816] text-[5.8vw] font-bold ">5 </h1>
                <div className="flex items-baseline">
                  <h1 className="text-[#4F2816] text-[5.8vw] font-bold ">
                    P
                  </h1>
                  <Image
                    src={pillars}
                    alt="pillars"
                    className="aspect-[127/65] w-[8.203vw]"
                    width={127}
                    height={65}
                  />
                  <h1 className="text-[#4F2816] text-[5.8vw] font-bold ">
                    ARS
                  </h1>
                </div>
              </div>

              <h1 className="text-[#AAAAAA] text-[5.5vw] font-bold mb-16 tablet:mb-10">
                of Resilience
              </h1>
            </div>
            <p className="text-[#4B4B4B] text-lg tablet:mb-10">
              We believe that with personal support and a relatable creative
              education all young people have the potential to thrive.
            </p>
          </div>
        </div>

        <div className="tablet:mb-20">
          <Image src={Circle} alt="Circle" width={410} height={410} className=" tablet:h-[300px]" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
