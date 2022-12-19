import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Search from '../../../Components/Search/Search'
import { IoSearchOutline } from 'react-icons/io5';



export default function searchComponentbar() {
    // const handleFocus = () => {
    //     clickPoint.current.style.display = "none";
    // };

    // const handleBlur = () => {
    //     clickPoint.current.style.display = "block";
    // };

    return(
        <div>
            <Search
            type="text"
            placeholder="Search for free photos"
            inputStyling="text-slate-600 border-none "
            icon={<IoSearchOutline/>}
           
            
            // onFocus={handleFocus()}
            // onBlur={handleBlur()}
            />
        </div>
    )

}