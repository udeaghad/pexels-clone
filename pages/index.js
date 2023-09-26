import Head from 'next/head';
import HeroSection from '../components/HeroSection/HeroSection';

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
        
      </main>
      
    </div>
  );
}