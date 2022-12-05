
import Image from "next/image";
import Link from 'next/link';

/** 
 * A simple component to help in the display of image.
 * it helps us display the site logo and is wrapped with a link to navigate a user back to the home page.
 * @param object props
 * @return HTML
 */


export default function Logo(props) {
  const { image, alt, width, height, link } = props;

  return (
    <div>
      <Link href={link ? link : "/"}>

        <Image src={image} alt={alt?.length == 0 ? "logo" : alt}
          width={!width ? 300 : width}
          height={!height ? 300 : height}
          data-testid="displayLogo" //data-testid (Displaylogo) is for testing purpose
        />
        
      </Link>
    </div>
  );
}