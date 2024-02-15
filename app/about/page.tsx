import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/About-Hero-Image.png";

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


      {/* 5 pillers */}

      <Footer />
    </div>
  );
}

export default Page;
