import Image from "next/image";

const PopularSearchesGrid = ({collections}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 px-3">
        <h1 className="text-[33px] font-semibold text-gray-700">Popular Searches</h1>
        <p className="text-[18px] text-center font-medium text-gray-600">The most popular search terms on Pexels</p>
      </div>

      <div className="px-5 py-5">
        {collections.map((collection) => (
          <div key={collection.id} className="relative pb-5">
            <Image 
              src={collection.image} 
              width={500} 
              height={400} 
              alt={collection.title} 
              className="relative rounded-2xl w-full object-cover hover:brightness-75" 
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <span className="text-[33px] font-semibold text-white">{collection.title}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default PopularSearchesGrid;