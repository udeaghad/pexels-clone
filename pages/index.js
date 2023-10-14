"use client";

import Head from "next/head";
import Trending from "../components/Trending/Trending";
import axios from "axios";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useStore } from "../store";
import { useEffect, useState } from "react";
import Photos from "../components/Photos/Photos";
import PhotoModal from "../components/PhotoModal/PhotoModal";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Home({ getPhotos }) {
  const { photos, addPhotos, setNextPhotoPage, nextPhotoPage } = useStore(
    (state) => state
  );

  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (photos.length === 0) {
      addPhotos(getPhotos.queries[0]?.state.data.photos);
      setNextPhotoPage(getPhotos.queries[0]?.state.data.next_page);
    }
  }, [getPhotos]);

  const fetchMoreData = async (URL) => {
    const getMorePhotos = await axios
      .get(URL, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
        },
      })
      .then((res) => res.data);

    if (getMorePhotos) {
      addPhotos(getMorePhotos.photos);
      setNextPhotoPage(getMorePhotos.next_page);
      setInView(false);
    }
  };

  useEffect(() => {
    if (inView && nextPhotoPage) {
      fetchMoreData(nextPhotoPage);
    }
  }, [inView]);

  const [photoDetails, setPhotoDetails] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (photo) => {
    setPhotoDetails(photo);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Head>
        <title>Free Stock Photos</title>
        <meta name="description" content="Free Stock Photos" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className="font-sans">
        <HeroSection />

        <div className="border-b mt-8 border-slate-100 lg:hidden" />

        <Trending text="Free Stock Photos" />

        <Photos
          photos={photos}
          setInView={setInView}
          handleOpenModal={handleOpenModal}
        />

        <div className="relative">
          <PhotoModal
            open={openModal}
            handleCloseModal={handleCloseModal}
            photo={photoDetails}
            photos={photos}
          />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["photos"],
    queryFn: async () => {
      const result = await axios.get(
        "https://api.pexels.com/v1/curated?per_page=20&page=1",
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
          },
        }
      );
      return result.data;
    },
  });

  return {
    props: {
      getPhotos: dehydrate(queryClient),
    },
  };
}
