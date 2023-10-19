import React from 'react'
import OnBoardingNavBar from '../../components/OnBoardingNavBar/OnBoardingNavBar'
import OnBoardingOptions from '../../components/OnBoardingOptions/OnBoardingOptions'

const Home = () => {
  return (
    <div className='pb-10 relative'>
      <OnBoardingNavBar />

      <div className='mt-20 flex justify-center items-center w-full px-10 py-3'>
        <h1 className='text-[40px] text-center font-semibold text-gray-800'>
          What do you mainly want to do?
        </h1>
      </div>

      <OnBoardingOptions />

      <div className='m-8'>
        <p className='font-medium text-gray-500 text-center'>
          We 'll use this info to personalize your experience. You’ll always be able to both download and upload photos and videos, no matter which option you choose.
        </p>
      </div>
    </div>
  )
}

export default Home