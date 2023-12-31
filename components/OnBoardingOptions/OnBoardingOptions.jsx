import { FaRegDotCircle } from "react-icons/fa";
import { useRouter } from "next/router";

const OnBoardingOptions = ({ options, handleSelectOption }) => {
  const router = useRouter();

  return (
    <div className="mx-8">
      <div className="flex flex-col justify-center gap-2">
        {options.map((option) => (
          <div
            key={option.id}
            className="bg-[#f7f7f7;] rounded-xl p-4 flex justify-start items-center gap-4 cursor-pointer"
            onClick={() => handleSelectOption(option.id)}
          >
            <div>
              {option.selected ? (
                <div className="bg-white w-9 h-9 rounded-full flex justify-center items-center">
                  <FaRegDotCircle className="text-white text-4xl text-[#059377]" />
                </div>
              ) : (
                <>
                  <div className="bg-white w-9 h-9 rounded-full" />
                </>
              )}
            </div>
            <div className="flex flex-col gap-1 justify-center text-gray-800">
              <h3 className="text-xl font-semibold">{option.title}</h3>
              <p>{option.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="bg-[#05a081] hover:bg-[#059377] flex justify-center items-center py-2 sm:py-3 rounded-md mt-7 sm:mt-8 text-white cursor-pointer font-semibold"
        onClick={() =>
          router.push(
            options.find((option) => option.selected).link,
            undefined,
            { shallow: true },
            { scroll: false }
          )
        }
      >
        <span>Choose</span>
      </div>
    </div>
  );
};

export default OnBoardingOptions;
