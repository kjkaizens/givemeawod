import '../styles/globals.css'
import Navbar from '../components/Navbar'


function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </>
}

export default MyApp
