import Head from 'next/head';
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/NavBar/NavBar';
import MobileNavBar from '../components/MobileNavBar/MobileNavBar';
import Trending from '../components/Trending/Trending';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pexels Clone</title>
        <meta name="description" content="Cloning of Pexels website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
        
        <HeroSection />

        {/* <Navbar /> */}

        {/* <MobileNavBar open={true} showHamburger={true} showCloseBtn={false}/> */}

        <div className='border-b m-5 border-slate-100' />

        <Trending />
        
        <div className='h-[1200px] bg-white'/>
        
      </main>
      
    </div>
  );
}