import Image from "next/image";

const PopularSearchesGrid = ({collections}) => {

  const showText = (id) => {
    const text = document.getElementById(`text-${id}`)   
    text.classList.remove('hidden')
    text.classList.add('block')
  }

  const hideText = (id) => {
    const text = document.getElementById(`text-${id}`)
    text.classList.remove('block')
    text.classList.add('hidden')
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 px-3">
        <h1 className="text-[33px] font-semibold text-gray-700">Popular Searches</h1>
        <p className="text-[18px] text-center font-medium text-gray-600">The most popular search terms on Pexels</p>
      </div>

      <div className="px-5 py-5 sm:grid sm:grid-cols-3 gap-7 lg:grid-cols-4">
        {collections.map((collection) => (
          <div 
            key={collection.id} 
            className="relative pb-5 hover:brightness-75 sm:pb-0 cursor-pointer" 
            onMouseEnter={() => showText(collection.id)}
            onMouseLeave={() => hideText(collection.id)}
          >
            <Image 
              src={collection.image} 
              width={500} 
              height={500} 
              alt={collection.title} 
              className="relative rounded-2xl w-full h-56 lg:h-60 object-cover hover:brightness-75" 
            />

            <div className="absolute inset-0 flex justify-center items-center flex-col px-5">
              <span className="text-[33px] font-semibold text-white">{collection.title}</span>               
            </div>

            <div className="absolute bottom-0 top-[30%] right-0 left-0 flex justify-center items-center flex-col sm:top-[45%] lg:top-[30%]">
              <span id={`text-${collection.id}`} className="hidden text-white text-xl text-center">{collection.photos_count} photos . {collection.videos_count} videos</span>
            </div>
              
          </div>
        ))}

      </div>
    </div>
  );
}

export default PopularSearchesGrid;