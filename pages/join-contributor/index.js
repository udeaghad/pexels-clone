import Head from 'next/head'
import OnBoardingNavBar from '../../components/OnBoardingNavBar/OnBoardingNavBar'
import ContributorPhotos from '../../components/ContributorPhotos/ContributorPhotos'
import ContributorHeading from '../../components/ContributorHeading/ContributorHeading'
import ContributorList from '../../components/ContributoList/ContributorList'
import SocialMediaLogin from '../../components/SocialMediaLogin/SocialMediaLogin'
import ContributorSigninDivider from '../../components/ContributorSigninDivider/ContributorSigninDivider'
import SignInForm from '../../components/SignInForm/SignInForm';
import FooterSection from '../../components/FooterSection/FooterSection'

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

      <main className="relative lg:mx-2">

        <OnBoardingNavBar />

        <div className='flex flex-col justify-start lg:flex-row lg:flex-row-reverse w-full mt-28 lg:items-start lg:gap-5'>
          <div className='lg:w-[50%]'>
            <ContributorPhotos />

          </div>

          <div className='lg:w-[50%]'>
            <ContributorHeading />

            <ContributorList />

            <SocialMediaLogin />

            <ContributorSigninDivider />

            <SignInForm />


          </div>

        </div>

        <FooterSection />


      </main>
    </div>
  )
}

export default Home