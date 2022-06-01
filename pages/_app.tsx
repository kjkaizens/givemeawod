import '../styles/globals.css'
import Navbar from '../components/Navbar'
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </>
}

export default MyApp
