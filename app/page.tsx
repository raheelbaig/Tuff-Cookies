import Image from "next/image";
import backgroundImage from "@/assets/CookietronwrldLP.png";

export default function Home() {
  return (
    <div className="">
      <div className="object-cover">
        <Image src={backgroundImage} alt="background image" />
      </div>
    </div>
  );
}
