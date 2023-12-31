import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';


const SocialMediaLogin = () => {
  return (
    <div className='flex justify-center items-center mx-3 mt-10 lg:mt-5'>
      <div className='flex justify-center items-center w-full gap-4'>
        <div className='flex justify-center items-center gap-3 border rounded-md py-1 sm:p-2 w-full px-1 hover:bg-[#dadce0] hover:border-gray-800'>
          <FcGoogle size={25}/>
          <span className='text-lg font-semibold text-gray-600 whitespace-nowrap sm:text-xl'>Join with Google</span>
        </div>

        <div className='w-fit p-1.5 border rounded-md sm:p-2.5'>
          <FaApple size={25} color='#7f7f7f'/>
        </div>

        <div className='w-fit p-1.5 border rounded-md sm:p-2.5'>
          <FaFacebook size={25} color='#4267b2'/>
        </div>
      </div>

    </div>
  )
}

export default SocialMediaLogin