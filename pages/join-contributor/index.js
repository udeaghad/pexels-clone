import Head from 'next/head'
import OnBoardingNavBar from '../../components/OnBoardingNavBar/OnBoardingNavBar'
import ContributorPhotos from '../../components/ContributorPhotos/ContributorPhotos'
import ContributorHeading from '../../components/ContributorHeading/ContributorHeading'
import ContributorList from '../../components/ContributoList/ContributorList'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Join Pexels & Discover Thousands of Free Photos</title>
        <meta
          name="description"
          content="Join Pexels & Discover Thousands of Free Photos"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <main className="relative">

        <OnBoardingNavBar />

        <ContributorPhotos />

        <ContributorHeading />

        <ContributorList />

      </main>
    </div>
  )
}

export default Home