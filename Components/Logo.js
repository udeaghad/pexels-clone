
import Image from "next/image";
import Link from 'next/link';


export default function Logo(props) {
  const { image, alt, width, height, link } = props;

  return (
    <div>
      <Link href={link ? link : "/"}>
        <Image src={image} alt={alt?.length == 0 ? "logo" : alt}
          width={!width ? 300 : width}
          height={!height ? 300 : height}
          data-testid="displayLogo"
        />
      </Link>
    </div>
  );
}