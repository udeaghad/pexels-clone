import React from 'react'
import OnBoardingNavBar from '../../components/OnBoardingNavBar/OnBoardingNavBar'

const Home = () => {
  return (
    <div>
      <OnBoardingNavBar />

      <div className='flex justify-center items-center w-full px-10 py-3'>
        <h1 className='text-[40px] text-center font-semibold text-gray-800'>
          What do you mainly want to do?
        </h1>
      </div>
    </div>
  )
}

export default Home