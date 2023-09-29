import '../styles/globals.css'
import ReactQueryProvider from '../lib/ReactQueryProvider/ReactQueryProvider'
import HeroSection from '../components/HeroSection/HeroSection'

function MyApp({ Component, pageProps }) {
  return (
      <ReactQueryProvider>
        <HeroSection />
        <Component {...pageProps} />
      </ReactQueryProvider>
    )
}

export default MyApp
