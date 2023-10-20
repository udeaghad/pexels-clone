import Image from "next/image";
import React from "react";

const ContributorHeading = () => {
  return (
    <div className="px-4">
      <div>
        <h1 className="text-3xl font-semibold text-gray-800 relative z-0">
          <span className="whitespace-nowrap">Where your</span>{" "}
          <span className="whitespace-nowrap">photography</span>{" "}
          <span className="whitespace-nowrap">is seen,</span>{" "}
          <span className="whitespace-nowrap">used, and</span>{" "}
          <span className="whitespace-nowrap relative">
            <span className="relative z-10">loved by the world</span>
            <Image
              src="/images/underline2.png"
              width={500}
              height={10}
              alt="underline"
              className="absolute -bottom-2 right-0 -z-5 w-full"
            />
          </span>
        </h1>

        <p className="mt-5 text-2xl font-bold text-gray-800">
          Share your photos and videos in one of the largest free libraries of
          visual content on the Internet.
        </p>
      </div>
    </div>
  );
};

export default ContributorHeading;
