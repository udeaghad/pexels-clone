"use client";

import Head from "next/head";
import Trending from "../components/Trending/Trending";
import axios from "axios";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useStore } from "../store";
import { useCallback, useEffect, useState } from "react";
import Photos from "../components/Photos/Photos";
import PhotoModal from "../components/PhotoModal/PhotoModal";
import HeroSection from "../components/HeroSection/HeroSection";
import MobileNavBar from "../components/MobileNavBar/MobileNavBar";
import Modal from "../components/Modal/Modal";

export default function Home({ getPhotos }) {
  const { photos, addPhotos, setNextPhotoPage, nextPhotoPage } = useStore(
    (state) => state
  );

  const [inView, setInView] = useState(false);

  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {
    if (photos.length === 0) {
      addPhotos(getPhotos.queries[0]?.state.data.photos);
      setNextPhotoPage(getPhotos.queries[0]?.state.data.next_page);
    }
  }, [getPhotos, photos.length, addPhotos, setNextPhotoPage]);

  // const fetchMoreData = async (URL) => {
  //   const getMorePhotos = await axios
  //     .get(URL, {
  //       headers: {
  //         Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
  //       },
  //     })
  //     .then((res) => res.data);

  //   if (getMorePhotos) {
  //     addPhotos(getMorePhotos.photos);
  //     setNextPhotoPage(getMorePhotos.next_page);
  //     setInView(false);
  //   }
  // };

  //using callback

  const fetchMoreData = useCallback(
    async (URL) => {
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
    },
    [addPhotos, setNextPhotoPage]
  );

  useEffect(() => {
    if (inView && nextPhotoPage) {
      fetchMoreData(nextPhotoPage);
    }
  }, [inView, nextPhotoPage, fetchMoreData]);

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

      <main className="font-sans relative">
        <div
          className={`left-0 right-0 top-0 z-10 ${
            openHamburger ? "fixed" : "absolute"
          }`}
        >
          <MobileNavBar open={openHamburger} setOpen={setOpenHamburger} />
        </div>

        <HeroSection open={openHamburger} setOpen={setOpenHamburger} />

        <div className="relative">
          <Modal open={openHamburger} />
        </div>

        <div className="border-b mt-8 border-slate-100 lg:hidden" />

        <Trending text="Free Stock Photos" />

        <div className="relative">
          <Photos
            photos={photos}
            setInView={setInView}
            handleOpenModal={handleOpenModal}
          />
        </div>

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
