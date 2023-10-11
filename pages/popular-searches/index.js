import Head from 'next/head';
import Navbar from '../../components/NavBar/NavBar';
import IntersectionNavBar from '../../components/IntersectionNavBar/IntersectionNavBar';
import { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import PopularSearchesGrid from '../../components/PopularSearchesGrid/PopularSearchesGrid';
import Footer from '../../components/Footer/Footer';

const popularSearches = [
  {id: 1, wallPaper: "https://images.pexels.com/photos/6590699/pexels-photo-6590699.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 2, wallPaper: "https://images.pexels.com/photos/3250815/pexels-photo-3250815.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=2"},
  {id: 3, wallPaper: "https://images.pexels.com/photos/1013516/pexels-photo-1013516.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 4, wallPaper: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 5, wallPaper: "https://images.pexels.com/photos/4240496/pexels-photo-4240496.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=2"},
  {id: 6, wallPaper: "https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 7, wallPaper: "https://images.pexels.com/photos/1837687/pexels-photo-1837687.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 8, wallPaper: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 9, wallPaper: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 10, wallPaper: "https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 11, wallPaper: "https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 12, wallPaper: "https://images.pexels.com/photos/1668928/pexels-photo-1668928.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 13, wallPaper: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 14, wallPaper: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 15, wallPaper: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 16, wallPaper: "https://images.pexels.com/photos/1064766/pexels-photo-1064766.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 17, wallPaper: "https://images.pexels.com/photos/2291789/pexels-photo-2291789.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 18, wallPaper: "https://images.pexels.com/photos/9492806/pexels-photo-9492806.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 19, wallPaper: "https://images.pexels.com/photos/10852670/pexels-photo-10852670.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
  {id: 20, wallPaper: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?w=230&h=230&fit=crop&crop=focalpoint&dpr=1"},
]



export default function Home({collections}) {
  const [ open, setOpen ] = useState(false);

  
  const newCollections = collections?.queries[0]?.state.data.collections.map((collection, index) => {
    return {
      ...collection,
      image: popularSearches[index].wallPaper
    }
  })
  
  useEffect(() => {
    console.log(newCollections)
  }, [])
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

      <div className={`relative ${open ? "z-5" : "z-10"}`}>
        <IntersectionNavBar setOpen={setOpen} open={open}/>
      </div>

      <div className="relative">
        <Modal open={open} />
      </div>

      <div className={`${open ? "hidden" : "block"} relative -z-5`}>
        <Navbar />
      </div>

      <div>
        <PopularSearchesGrid collections={newCollections}/>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['collections'],
    queryFn: async() => {
      const result = await axios.get("https://api.pexels.com/v1/collections/featured?per_page=20", {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY
        }
      })
      return result.data
    }
  })

  return {
    props: {
      collections: dehydrate(queryClient),
    },
  }
}

