import { useState } from "react";
import Head from "next/head"
import UploadHeading from "../../components/UploadHeading/UploadHeading"
import IntersectionNavBar from "../../components/IntersectionNavBar/IntersectionNavBar"
import Modal from "../../components/Modal/Modal";
import MobileNavBar from "../../components/MobileNavBar/MobileNavBar";
import ShareContent from "../../components/ShareContent/ShareContent";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Upload</title>
        <meta name="description" content="Upload" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className="relative">

        <div className={`relative ${open ? "block" : "hidden"}`}>
          <MobileNavBar open={open} setOpen={setOpen} />
        </div>

        <div className={`fixed top-0 left-0 right-0 ${open ? "z-5" : "z-10"}`}>
          <IntersectionNavBar setOpen={setOpen} open={open} />
        </div>

        <div className="relative">
          <Modal open={open} />
        </div>

        <div>
          <UploadHeading />
        </div>

        <div>
          <ShareContent />
        </div>

      </main>

    </div>
  )
}

export default Home