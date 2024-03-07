import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import pillars from "@/assets/pillars.svg";
import ProjectSlider from "@/components/Slider/Slider";
import Circle from "@/assets/5pillarsCircle.svg";
import AboutText from "@/assets/about-text.svg"

function Page() {
  return (
    <div className="">
      <Header />
      <div className="flex items-end justify-center w-full tablet:h-[calc(100vh-63px)] h-[calc(100vh-220px)] bg-cover bg-center bg-no-repeat bg-[url('../assets/About-Hero-Image.jpg')]">
        <Image src={AboutText} className="tablet:w-1/3 lg-mob:w-2/5 min-w-48 pb-20" alt="About Text" />
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
      <div className=" flex tablet:text-center tablet:flex-col items-center justify-center mb-44 tablet:mb-5">
        <div className="w-2/3 tablet:w-full container pl-16 tablet:pl-0">
          <div className="w-2/3 tablet:w-full">
            <p className="font-bold text-[24px] mb-14 tablet:mb-8">
              Our Model is built around
            </p>
            <div className=" ">
              <h1 className="text-[#AAAAAA] text-[5.8vw] tablet:text-[10vw] font-bold leading-none">The</h1>

              <div className="flex items-baseline gap-x-3 tablet:justify-center">
                <h1 className="text-[#4F2816] text-[5.8vw] tablet:text-[10vw] font-bold leading-none">5 </h1>
                <div className="flex items-baseline">
                  <h1 className="text-[#4F2816] text-[5.8vw] tablet:text-[10vw] font-bold leading-none">
                    P
                  </h1>
                  <Image
                    src={pillars}
                    alt="pillars"
                    className="aspect-[127/65] w-[8.203vw] tablet:w-[13vw]"
                    width={127}
                    height={65}
                  />
                  <h1 className="text-[#4F2816] text-[5.8vw] tablet:text-[10vw] font-bold ">
                    ARS
                  </h1>
                </div>
              </div>

              <h1 className="text-[#AAAAAA] text-[5.5vw] tablet:text-[10vw] font-bold mb-16 tablet:mb-10 leading-none">
                of Resilience
              </h1>
            </div>
            <p className="text-[#4B4B4B] text-lg tablet:mb-10 tablet:px-5">
              We believe that with personal support and a relatable creative
              education all young people have the potential to thrive.
            </p>
          </div>
        </div>

        <div className="tablet:mb-20 tablet:pl-5 tablet:self-end tablet:mt-5">
          <Image src={Circle} alt="Circle" width={588} height={457} className="aspect-[192/149] w-[500px] tablet:w-96" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
