import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import bgImage from "@/assets/CookietronwrldLP.webp";
export default function Home() {
  return (
    // <div className="bg-cover bg-center bg-no-repeat bg-[url('../assets/CookietronwrldLP.webp')]">
    <div className="">
      <div className="min-h-screen flex  flex-col relative isolate">
        <Image
          src={bgImage}
          quality={90}
          alt="Tuff Cookies Background"
          fill
          className="object-cover -z-[1]"
          priority
        />
        <div className="container pt-5 tablet:px-3 px-10 ">
          <Image
            src={logo}
            alt="logo"
            width={230}
            height={100}
            className="tablet:w-[120px] aspect-[70/30] object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex gap-x-4 items-center justify-center flex-1">
            <Link href="/home">
              <button className="w-[300px] h-[100px] bg-gradient-to-r from-[#C28840] to-[#985400]  rounded-xl text-white font-bold text-[28px] tablet:border-2 border-[#452415] border-4 sm-desktop:text-[25px] sm-desktop:w-[260px] sm-desktop:h-[90px] tablet:text-[22px] tablet:w-[220px] tablet:h-[80px] lg-mob:text-[20px] lg-mob:w-[180px] lg-mob:h-[70px] md-mob:text-[18px] md-mob:w-[140px] md-mob:h-[60px]">
                Explore
              </button>
            </Link>
            <Link href="/comingsoon">
              <button className="w-[300px] h-[100px] bg-gradient-to-l from-[#C28840] to-[#985400] rounded-xl text-white font-bold text-[28px] tablet:border-2 border-[#452415] border-4 sm-desktop:text-[25px] sm-desktop:w-[260px] sm-desktop:h-[90px] tablet:text-[22px] tablet:w-[220px] tablet:h-[80px] lg-mob:[20px] lg-mob:w-[180px] lg-mob:h-[70px] md-mob:text-[18px] md-mob:w-[140px] md-mob:h-[60px]">
                Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
