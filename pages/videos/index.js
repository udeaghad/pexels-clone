import Head from "next/head";
import Trending from "../../components/Trending/Trending";
import axios from "axios";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useStore } from "../../store";
import { useCallback, useEffect, useState } from "react";
import Videos from "../../components/Videos/Video";
import VideoModal from "../../components/VideoModal/VideoModal";
import VideoHeroSection from "../../components/HeroSection/VideoHeroSection";
import MobileNavBar from "../../components/MobileNavBar/MobileNavBar";
import Modal from "../../components/Modal/Modal";

export default function Home({ getVideos }) {
  const { videos, addVideos, nextVideoPage, setNextVideoPage } = useStore(
    (state) => state
  );
  const [inView, setInView] = useState(false);

  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {
    if (videos.length === 0) {
      addVideos(getVideos.queries[0]?.state.data.videos);
      setNextVideoPage(getVideos.queries[0]?.state.data.next_page);
    }
  }, [getVideos, videos.length, addVideos, setNextVideoPage]);

  // const fetchMoreData = async (URL) => {
  //   const getMoreVideos = await axios
  //     .get(URL, {
  //       headers: {
  //         Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
  //       },
  //     })
  //     .then((res) => res.data);

  //   if (getMoreVideos) {
  //     addVideos(getMoreVideos.videos);
  //     setNextVideoPage(getMoreVideos.next_page);
  //     setInView(false);
  //   }
  // };

  //using callback

  const fetchMoreData = useCallback(
    async (URL) => {
      const getMoreVideos = await axios
        .get(URL, {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
          },
        })
        .then((res) => res.data);

      if (getMoreVideos) {
        addVideos(getMoreVideos.videos);
        setNextVideoPage(getMoreVideos.next_page);
        setInView(false);
      }
    },
    [addVideos, setNextVideoPage]
  );

  useEffect(() => {
    if (inView && nextVideoPage) {
      fetchMoreData(nextVideoPage);
    }
  }, [inView, nextVideoPage, fetchMoreData]);

  const [videoDetails, setVideoDetails] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (video) => {
    setVideoDetails(video);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Head>
        <title>Free 4K Stock Videos</title>
        <meta name="description" content="Free 4K Stock Videos" />
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

        <VideoHeroSection open={openHamburger} setOpen={setOpenHamburger} />

        <div className="relative">
          <Modal open={openHamburger} />
        </div>

        <div className="border-b m-5 border-slate-100" />

        <Trending text="Trending free stock videos" />

        <div className="relative">
          <Videos
            videos={videos}
            setInView={setInView}
            handleOpenModal={handleOpenModal}
          />
        </div>

        <VideoModal
          open={openModal}
          handleCloseModal={handleCloseModal}
          video={videoDetails}
          videos={videos}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const result = await axios.get(
        "https://api.pexels.com/videos/popular?per_page=10",
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
      getVideos: dehydrate(queryClient),
    },
  };
}
