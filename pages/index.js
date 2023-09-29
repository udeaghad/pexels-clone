"use client" 

import Head from 'next/head';
import Trending from '../components/Trending/Trending';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../store';
import { useEffect } from 'react';
import Photos from '../components/Photos/Photos';

export default function Home() {
  const addPhotos = useStore(state => state.addPhotos)

  const photos = useStore(state => state.photos)

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
    console.log(getPhotos)
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
        <div className='border-b m-5 border-slate-100' />

        <Trending />
        
        {/* <div className='h-[50px] bg-white'/> */}

        <Photos photos={photos}/>
        
      </main>
      
    </div>
  );
}