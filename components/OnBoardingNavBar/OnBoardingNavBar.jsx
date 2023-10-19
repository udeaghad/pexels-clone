import Image from 'next/image'
import React from 'react';
import { useRouter } from 'next/router'

const OnBoardingNavBar = () => {
  const router = useRouter()
  return (
    <div className='relative flex justify-between items -center py-3 px-5 border-b'>
      <div className="z-50">
        <div
          className="z-50 flex justify-center items-center gap-3 cursor-pointer"
          onClick={() =>
            router.push(
              "/",
              undefined,
              { shallow: true },
              { scroll: false }
            )
          }
        >
          <Image
            src="/images/logo.png"
            alt="hero"
            width={40}
            height={40}
            className="rounded-md hover:brightness-90 transition duration-200 ease-in-out"
          />
          <span className="font-semibold text-xl">
            Pexels
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center px-5 py-2 font-semibold text-white bg-[#059377] hover:bg-[#05a081] rounded-md w-fit cursor-pointer'>
        <span>Login</span>
      </div>

    </div>
  )
}

export default OnBoardingNavBar