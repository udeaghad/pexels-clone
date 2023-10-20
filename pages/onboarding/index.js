import React, { useState } from "react";
import OnBoardingNavBar from "../../components/OnBoardingNavBar/OnBoardingNavBar";
import OnBoardingOptions from "../../components/OnBoardingOptions/OnBoardingOptions";
import Head from "next/head";
import OnBoardingOptionsDesktop from "../../components/OnBoardingOptions/OnBoardingOptionsDesktop";

export default function Home () {
  const [options, setOptions] = useState([
    {
      title: "Download",
      description: "I\'m here to download free photos and videos.",
      selected: true,
      id: 1,
      link: "#",
      image:
        "https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712",
    },
    {
      title: "Contribute",
      description: "I\'m here to share my photos and videos with the world.",
      selected: false,
      id: 2,
      link: "/join-contributor",
      image:
        "https://images.pexels.com/photos/3584930/pexels-photo-3584930.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=360&w=712",
    },
  ]);

  const handleSelectOption = (id) => {
    const newOptions = options.map((option) => {
      if (option.id === id) {
        return {
          ...option,
          selected: true,
        };
      } else {
        return {
          ...option,
          selected: false,
        };
      }
    });
    setOptions(newOptions);
  };

  return (
    <div>
      <Head>
        <title>What do you mainly want to do on pexels?</title>
        <meta
          name="description"
          content="What do you mainly want to do on pexels?"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      
      <main className="pb-10 relative">

        <OnBoardingNavBar />

        <div className="md:flex md:flex justify-center items-center flex-col">
          <div className="md:w-[75%] lg:w-[50%] xl:w-[45%]">
            <div className="mt-20 lg:mt-28 flex justify-center items-center w-full p-3">
              <h1 className="text-[40px] lg:text-5xl text-center font-semibold text-gray-800 lg:leading-[4rem]">
                What do you mainly want to do?
              </h1>
            </div>

            <div className="lg:hidden">
              <OnBoardingOptions
                options={options}
                handleSelectOption={handleSelectOption}
              />
            </div>
          </div>

          <div className="hidden lg:block">
            <OnBoardingOptionsDesktop
              options={options}
            />
          </div>
        </div>

        <div className="m-8 lg:flex justify-center items-center">
          <p className="font-medium text-gray-500 text-center lg:w-[70%] xl:w-[50%]">
            We'll use this info to personalize your experience. You'll always
            be able to both download and upload photos and videos, no matter
            which option you choose.
          </p>
        </div>
      </main>
    </div>
  );
};

// export default Home;
