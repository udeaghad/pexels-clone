import Head from "next/head";
import Trending from "../../components/Trending/Trending";
import axios from "axios";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useStore } from "../../store";
import { useEffect, useState } from "react";
import Videos from "../../components/Videos/Video";
import VideoModal from "../../components/VideoModal/VideoModal";
import VideoHeroSection from "../../components/HeroSection/VideoHeroSection";

export default function Home({ getVideos }) {
  const { videos, addVideos, nextVideoPage, setNextVideoPage } = useStore(
    (state) => state
  );
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (videos.length === 0) {
      addVideos(getVideos.queries[0]?.state.data.videos);
      setNextVideoPage(getVideos.queries[0]?.state.data.next_page);
    }
  }, [getVideos]);

  const fetchMoreData = async (URL) => {
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
  };

  useEffect(() => {
    if (inView && nextVideoPage) {
      fetchMoreData(nextVideoPage);
    }
  }, [inView]);

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

      <main>
        <VideoHeroSection />

        <div className="border-b m-5 border-slate-100" />

        <Trending text="Trending free stock videos" />

        <Videos
          videos={videos}
          setInView={setInView}
          handleOpenModal={handleOpenModal}
        />

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
