import Image from "next/image";
import { useRouter } from "next/router";

const OnBoardingOptionsDesktop = ({ options, handleSelectOption }) => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-[85%] grid grid-cols-2">
        {options.map((option, index) => (
          <div
            key={option.id}
            className=" border-2 border-dotted rounded-xl p-2 inline-block m-3 flex flex-col justify-between"
          >
            <div>
              <div>
                <Image
                  src={option.image}
                  alt="hero"
                  width={500}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              <div className="mt-5 text-center text-[18px] text-gray-800 font-medium">
                <span>{option.description}</span>
              </div>
            </div>

            <div
              className="bg-[#05a081] hover:bg-[#059377] flex justify-center items-center py-2 sm:py-3 rounded-md mt-7 sm:mt-8 text-white cursor-pointer font-semibold"
              onClick={() =>
                router.push(
                  option.link,
                  undefined,
                  { shallow: true },
                  { scroll: false }
                )
              }
            >
              <span>I want to {option.title.toLowerCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnBoardingOptionsDesktop;
