import '../styles/globals.css'
import type { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"></link>
  <Component {...pageProps} />
  </>
}
export default MyApp
