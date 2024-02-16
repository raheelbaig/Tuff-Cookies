import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/About-Hero-Image.png";
import pillars from "@/assets/pillars.png";
import ProjectSlider from "@/components/Slider/Slider";

function Page() {
  return (
    <div className="">
      <Header />
      <div className="w-full h-[490px] mb-20">
        <Image src={heroImage} alt="hero image" />
      </div>
      <div className="container">
        <p className="text-3xl font-bold">
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
      <div className="">
        <div className="w-2/3 container">
          <p className="font-bold text-[24px] mb-16">
            Our Model is built around
          </p>
          <div className=" ">
            <h1 className="text-[#AAAAAA] text-7xl font-bold ">The</h1>

            <div className="flex items-baseline">
              <h1 className="text-[#4F2816] text-7xl font-bold ">5 P</h1>
              <Image src={pillars} alt="pillars" width={127} height={65} />
              <h1 className="text-[#4F2816] text-7xl font-bold ">ARS</h1>
            </div>

            <h1 className="text-[#AAAAAA] text-7xl font-bold mb-16">
              of Resilience
            </h1>
          </div>
          <p className="text-[#4B4B4B] text-lg ">
            We believe that with personal support and a relatable creative
            education all young people have the potential to thrive.
          </p>
        </div>

        <div></div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
