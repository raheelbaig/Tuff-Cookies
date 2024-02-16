import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import danImage from "@/assets/dan-picture.png";
import susannah from "@/assets/susannah-picture.png";

function Page() {
  return (
    <div className="container">
      <Header />
      <div className=" px-10 tablet:px-4 flex items-center justify-between my-[110px] tablet:my-[65px] tablet:flex-col-reverse tablet:mb-5">
        <div className="w-[45%] tablet:w-[85%] ">
          <p className="font-bold text-3xl mb-5 mt-2 tablet:text-2xl md-mob:text-center">Dan</p>
          <p className="italic text-xl text-secondary mb-10 tablet:text-base tablet:mb-6">
            Founder, CEO, Creative Director, Educator & Designer
          </p>
          <p className="text-xl text-[#818181] tablet:text-lg">
            Dan, also known as ‘SUIGEN, (da Gruppie)’ is an arts award winning
            illustrator, designer, cartoonist, muralist and the founder of Tuff
            cookie arts .Ltd. With over two decades worth of experience in
            visual art and some years within the youth sector, Dan likes to work
            practically with young people, mentoring their creative perception &
            skills in order to aid their development & wellbeing. Feeling that
            this is “essential to our long term future & community progression.”
          </p>
        </div>
        <div>
          <Image src={danImage} alt="dan Image" width={317} height={446} className="tablet:w-[225px] tablet:mb-5 tablet:aspect-[71/100] object-contain"/>
        </div>
      </div>
      <div className="px-10 tablet:px-4  flex items-center justify-between my-[110px] tablet:my-[65px] tablet:flex-col-reverse tablet:mb-20">
        <div className="w-[45%] tablet:w-[85%]">
          <p className="font-bold text-3xl mb-5 mt-2 tablet:text-2xl md-mob:text-center">Susannah</p>
          <p className="italic text-xl text-secondary mb-10 tablet:text-base tablet:mb-6">
            Projects & Operations Manager, Facilitator, Creative Mento{" "}
          </p>
          <p className="text-xl text-[#818181] tablet:text-lg">
            Susannah has a strong background in leading youth work projects with
            a particular focus on student-led creative expression. Susannah’s
            work focuses on meeting young people where they are; supporting them
            to learn and develop in ways that are meaningful to them and
            connected with their world.
          </p>
        </div>
        <div>
          <Image src={susannah} alt="dan Image" width={317} height={446} className="tablet:w-[225px] tablet:mb-5 tablet:aspect-[71/100] object-contain"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
