"use client" 

import Head from 'next/head';
import HeroSection from '../components/HeroSection/HeroSection';
import Trending from '../components/Trending/Trending';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../store';
import { useEffect } from 'react';

export default function Home() {
  const addPhotos = useStore(state => state.addPhotos)

  const { data: getPhotos, isLoading, isError} = useQuery({
    queryKey: ['photos'],
    queryFn: async() => {
      const res = await axios.get('https://api.pexels.com/v1/curated?per_page=20&page=1', {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY
        }
      })
      
      return res.data
    }    
  })
  
  useEffect(() => {
    
    if(getPhotos) {
      addPhotos(getPhotos.photos)
    }
  }, [getPhotos])

  return (
    <div>
      <Head>
        <title>Pexels Clone</title>
        <meta name="description" content="Cloning of Pexels website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
        
        {/* <HeroSection /> */}

        
        <div className='border-b m-5 border-slate-100' />

        <Trending />
        
        <div className='h-[1200px] bg-white'/>
        
      </main>
      
    </div>
  );
}