import Head from 'next/head';
import Trending from '../../components/Trending/Trending';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../../store';
import { useEffect, useState } from 'react';
import Videos from '../../components/Videos/Video';
import VideoModal from '../../components/VideoModal/VideoModal';


export default function Home() {
  const addVideos = useStore(state => state.addVideos)

  const videos = useStore(state => state.videos)

  const [url, setUrl] = useState('')

  const [ inView, setInView ] = useState(true)

  const {data: getVideos} = useQuery({
    queryKey: ['videos'],
    queryFn: async () => {
      const result = await axios.get("https://api.pexels.com/videos/popular?per_page=10", {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY
        }
      })

      return result.data
    }
  })

  useEffect(() => {    
    if(getVideos) {
      addVideos(getVideos.videos)
      setUrl(getVideos.next_page)
    }
  }, [getVideos])

  const fetchMoreData = async(URL) => {
    const getMoreVideos = await axios.get(URL, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY
      }
    }).then(res => res.data)

    if(getMoreVideos) {     
      addVideos(getMoreVideos.videos)
      setUrl(getMoreVideos.next_page)
      setInView(false)
    }
  }

  useEffect(() => {
    if (inView && url) {
      fetchMoreData(url)
    }
  }, [inView, url])

  const [videoDetails, setVideoDetails ] = useState(null)

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (video) => {   
    setVideoDetails(video)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  

  return (
    <div>
      <Head>
        <title>Free 4K Stock Videos</title>
        <meta name="description" content="Free 4K Stock Videos" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main> 
        <div className='border-b m-5 border-slate-100' />

          <Trending text="Trending free stock videos"/>    

          <Videos videos={videos} setInView={setInView} handleOpenModal={handleOpenModal}/>

          <VideoModal open={openModal} handleCloseModal={handleCloseModal} video={videoDetails} videos={videos}/>
        
      </main>
      
    </div>
  );
}