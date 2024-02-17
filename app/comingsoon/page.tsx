import InfiniteRotationCookie from "@/components/Infinite-Cookie-Rotation";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-secondary">
      <div className="flex items-center justify-center w-[60%] h-[100vh] my-8 px-16 py-10 bg-Transparent  rounded-xl  shadow-gray-900 xs-desktop:px-8 xs-desktop:py-6 xs-desktop:w-[80%] lg-mob:w-[90%] lg-mob:px-4 lg-mob:py-3">
        <div>
          <h1 className="mb-20 bg-white opacity-85 font-semibold text-center text-[2rem] ml-1 text-primary animate-pulse shadow-lg rounded-lg p-10 tablet:text-2xl tablet:mb-10 tablet:mt-4">
            Coming Soon...
          </h1>
        </div>
        <InfiniteRotationCookie />
      </div>
    </div>
  );
}

export default page;
