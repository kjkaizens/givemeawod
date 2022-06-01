import '../styles/globals.css'
import Navbar from '../components/Navbar'
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"></link>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </>
}

export default MyApp
