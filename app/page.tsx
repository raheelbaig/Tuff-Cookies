import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('../assets/CookietronwrldLP.png')]">
      <div className="min-h-screen flex items-center justify-between flex-col pt-5 pb-40 ">
        <Image src={logo} alt="logo" width={230} height={100} />

        <div className="flex gap-x-4 ">
          <button className="w-[300px] h-[100px] bg-[#C28840] rounded-xl text-white font-bold text-[28px] border-2 border-white ">
            <Link href="/home">Explore</Link>
          </button>
          <button className="w-[300px] h-[100px] bg-[#C28840] rounded-xl text-white font-bold text-[28px] border-2 border-white ">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}
