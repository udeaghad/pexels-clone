import Head from "next/head"
import UploadHeading from "../../components/UploadHeading/UploadHeading"

const Home = () => {

  return (
    <div>
      <Head>
        <title>Upload</title>
        <meta name="description" content="Upload" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <UploadHeading />
    </div>
  )
}

export default Home