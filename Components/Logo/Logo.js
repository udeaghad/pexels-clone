
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

/** 
 * A simple component to help in the display of image.
 * it helps us display the site logo and is wrapped with a link to navigate a user back to the home page.
 * @param object props
 * @return HTML
 */



export default function Logo(props) {
  const { image, alt, width, height, link, mobileImage } = props;

  return (

    <div >
      {link ?
        <Link href={link}  >
          <RenderLogo image={image} alt={alt} width={width} height={height} mobileImage={mobileImage} />
        </Link>
        : <div>
          <RenderLogo image={image} alt={alt} width={width} height={height} mobileImage={mobileImage} />
        </div>}


    </div>

  );
}


export function RenderLogo({ image, alt, width, height, mobileImage }) {
  return (
    <div>
      <Image className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden" src={image} alt={alt?.length == 0 ? "logo" : alt}
        width="50"
        height='50'
        role="displayLogo" //data-testid (Displaylogo) is for testing purpose
      />

<Image className="hidden sm:block " src={image} alt={alt?.length == 0 ? "logo" : alt}
        width="50"
        height='50'
        role="displayMobileLogo" //data-testid (Displaylogo) is for testing purpose
      />











      

      
    </div>
  )
}











