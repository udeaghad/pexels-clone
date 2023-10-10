import Image from "next/image";

const PopularSearchesGrid = ({collections}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 px-3">
        <h1 className="text-[33px] font-semibold text-gray-700">Popular Searches</h1>
        <p className="text-[18px] text-center font-medium text-gray-600">The most popular search terms on Pexels</p>
      </div>

      <div>
        {collections.map((collection) => (
          <div key={collection.id} className="px-5 pt-5 relative">
            <Image 
              src={collection.image} 
              width={500} 
              height={400} 
              alt={collection.title} 
              className="rounded-2xl w-full object-cover hover:brightness-75" />
          </div>
        ))}

      </div>
    </div>
  );
}

export default PopularSearchesGrid;