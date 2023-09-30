import Head from 'next/head';
import Trending from '../../components/Trending/Trending';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useStore } from '../../store';
import { useEffect, useState } from 'react';
import Videos from '../../components/Videos/Video';


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
  

  return (
    <div>
      <Head>
        <title>Pexels Clone</title>
        <meta name="description" content="View your videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
        <div className='border-b m-5 border-slate-100' />

          <Trending text="Free Stock Videos"/>    

          <Videos Videos={videos} setInView={setInView}/>
        
      </main>
      
    </div>
  );
}