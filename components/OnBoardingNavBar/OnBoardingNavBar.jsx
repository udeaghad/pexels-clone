import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const OnBoardingNavBar = () => {
  const router = useRouter();
  return (
    <div className="fixed flex justify-between items-center py-4 px-5 border-b top-0 left-0 right-0 bg-white sm:px-8 lg:px-24 xl:px-8 z-50">
      <div className="z-50">
        <div
          className="z-50 flex justify-center items-center gap-3 cursor-pointer"
          onClick={() =>
            router.push("/", undefined, { shallow: true }, { scroll: false })
          }
        >
          <Image
            src="/images/logo.png"
            alt="hero"
            width={40}
            height={40}
            className="rounded-md hover:brightness-90 transition duration-200 ease-in-out"
          />
          <span className="font-semibold text-base">Pexels</span>
        </div>
      </div>
      <div className="flex justify-center items-center px-5 py-2 font-semibold text-white bg-[#05a081] hover:bg-[#059377] rounded-md w-fit cursor-pointer sm:py-3">
        <span>Login</span>
      </div>
    </div>
  );
};

export default OnBoardingNavBar;
