import '../styles/globals.css'
import ReactQueryProvider from '../lib/ReactQueryProvider/ReactQueryProvider'

function MyApp({ Component, pageProps }) {
  return (
      <ReactQueryProvider>
        <Component {...pageProps} />
      </ReactQueryProvider>
    )
}

export default MyApp
