"use client" 

import Head from 'next/head';
import Trending from '../components/Trending/Trending';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../store';
import { useEffect, useState } from 'react';
import Photos from '../components/Photos/Photos';
import PhotoModal from '../components/PhotoModal/PhotoModal';

export default function Home() {
  const addPhotos = useStore(state => state.addPhotos)

  const photos = useStore(state => state.photos)

  const [url, setUrl] = useState('')

  const [ inView, setInView ] = useState(true)

  const {data: getPhotos} = useQuery({
    queryKey: ['photos'],
    queryFn: async () => {
      const result = await axios.get('https://api.pexels.com/v1/curated?per_page=20&page=1', {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY
        }
      })
      return result.data
    }
  })

  useEffect(() => {
    if(getPhotos) {
      addPhotos(getPhotos.photos)
      setUrl(getPhotos.next_page)
    }
  }, [getPhotos])

  const fetchMoreData = async(URL) => {
    const getMorePhotos = await axios.get(URL, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY
      }
    }).then(res => res.data)

    if(getMorePhotos) {     
      addPhotos(getMorePhotos.photos)
      setUrl(getMorePhotos.next_page)
      setInView(false)
    }
  }

  useEffect(() => {
    if (inView && url) {
      fetchMoreData(url)
    }
  }, [inView, url])

  const [photoDetails, setPhotoDetails ] = useState(null)

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (photo) => {
    setPhotoDetails(photo)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  

  return (
    <div>
      <Head>
        <title>Free Stock Photos</title>
        <meta name="description" content="Free Stock Photos" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main> 
        <div className='border-b m-5 border-slate-100' />

          <Trending text="Free Stock Photos"/>    

          <Photos photos={photos} setInView={setInView} handleOpenModal={handleOpenModal}/>

          <div className="relative">
            <PhotoModal open={openModal} handleCloseModal={handleCloseModal} photo={photoDetails} photos={photos} />
          </div>
      </main>
      
    </div>
  );
}