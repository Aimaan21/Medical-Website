import Head from "next/head";
import AppButton from "./AppButton";
import Footer from "./Footer";
import   Nav  from './Nav';
// import 'tw-elements'



export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Doctor Consultation</title>
        <meta name="keyword" content="Medical Website Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>


     
      
        <main>
        <Nav/>
        
          {children}
        <Footer/>
        </main>
        {/* <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script> */}
        {/* <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js" async/> */}
     
    </>
  );
};

export default Layout;
