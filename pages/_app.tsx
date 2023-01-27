import '../styles/globals.scss'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import Script from 'next/script'



export default function App({ Component, pageProps }: AppProps) {
  return(
    <Layout>

     <Component {...pageProps} />
     {/* <script src="../path/to/flowbite/dist/flowbite.js"></script> */}
     
    </Layout>
    
  ) 
  
  
}
