import React from 'react'

const UploadHeading = () => {
  return (
    <div className='mt-28 sm:mx-2'>
      <div className='flex flex-col gap-5 lg:justify-center lg:items-center '>
        <h3 className='text-[33px] text-center font-semibold text-gray-800 lg:w-[70%] xl:w-[55%]'>
          Share your photos and videos, and let the world love them.
        </h3>

        <p className='text-[18px] text-center w-[80%] font-semibold text-gray-600 m-auto px-3 lg:w-[55%] xl:w-[45%]'>
          Share your first 10 photos or videos to introduce yourself to millions of Pexels users.
        </p>
      </div>
    </div>
  )
}

export default UploadHeading