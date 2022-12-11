import Image from "next/image";
import Link from 'next/link';


export default function caption(props) {
    const { text, color, size } = props;
    
    return <div
        // className="text-slate-700 text-4xl"

        data-testid="stockPhotos" 
        /** stockPhotos is for test purpose */
        >
        {text} {color} {size}
    </div>
}