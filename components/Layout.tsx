import Head from "next/head";
import AppButton from "./AppButton";
import  { Navbar } from './Navbar'

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Docta Consultation</title>
        <meta name="keyword" content="Medical Website Landing Page" />
      </Head>


     
      
        <main>
        <Navbar />
        
          {children}
        </main>
        <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></script>
     
    </>
  );
};

export default Layout;
