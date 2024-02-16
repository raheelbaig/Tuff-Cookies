import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('../assets/CookietronwrldLP.png')]">
      <div className="min-h-screen flex items-center justify-between flex-col pt-5 pb-40 ">
        <Image src={logo} alt="logo" width={230} height={100} className='tablet:w-[120px] aspect-[70/30] object-contain' />

        <div className="flex gap-x-4 ">
          <Link href="/home">
            <button className="w-[300px] h-[100px] bg-[#C28840] rounded-xl text-white font-bold text-[28px] border-2 border-white sm-desktop:text-[25px] sm-desktop:w-[260px] sm-desktop:h-[90px] tablet:text-[22px] tablet:w-[220px] tablet:h-[80px] lg-mob:text-[20px] lg-mob:w-[180px] lg-mob:h-[70px] md-mob:text-[18px] md-mob:w-[140px] md-mob:h-[60px]">
              Explore
            </button>
          </Link>
          <Link href="/comingsoon">
          <button className="w-[300px] h-[100px] bg-[#C28840] rounded-xl text-white font-bold text-[28px] border-2 border-white sm-desktop:text-[25px] sm-desktop:w-[260px] sm-desktop:h-[90px] tablet:text-[22px] tablet:w-[220px] tablet:h-[80px] lg-mob:[20px] lg-mob:w-[180px] lg-mob:h-[70px] md-mob:text-[18px] md-mob:w-[140px] md-mob:h-[60px]">
            Shop
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
