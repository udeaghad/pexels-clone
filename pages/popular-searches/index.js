import Head from 'next/head';
import Trending from '../../components/Trending/Trending';
import Navbar from '../../components/NavBar/NavBar';
import IntersectionNavBar from '../../components/IntersectionNavBar/IntersectionNavBar';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar';

export default function Home() {
  const [ open, setOpen ] = useState(false);

  return (
    <div>
      <Head>
        <title>Popular Searches</title>
        <meta name="description" content="Popular Searches" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className={`relative ${open ? "block" : "hidden"}`}>
        <MobileNavBar open={open} setOpen={setOpen} />
      </div>

      <div className='relative z-10'>
        <IntersectionNavBar setOpen={setOpen} open={open}/>

      </div>


      <div className="relative">
        <Modal open={open} />
      </div>

      <div className={`${open ? "hidden" : "block"} relative z-5`}>
        <Navbar />
      </div>

      <h1>Popular Searches</h1>
    </div>
  )
}

