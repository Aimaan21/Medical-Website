import { useState, useEffect } from "react";
import AppButton from "./AppButton";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className=" mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 lg:flex-row lg:items-center lg:gap-6 md:gap-4">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 font-medium lg:text-base text-secondary-500"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 font-medium lg:text-base text-secondary-500"
      >
        <a href="#about-section" className="flex items-center">
          Service
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 font-medium lg:text-base text-secondary-500"
      >
        <a href="#faq-section" className="flex items-center">
          Question & Answer
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 font-medium lg:text-base text-secondary-500"
      >
        <a href="#online-chat-section" className="flex items-center">
          Consultation 
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 font-medium lg:text-base text-secondary-500"
      >
        <a href="#article-section" className="flex items-center">
          Article 
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 lg:hidden font-medium lg:text-base text-secondary-500"
      >
        <a href="tel:01648309985" className="flex items-center">
          Call Now 
        </a>
      </Typography>
    </ul>
  );
 
  return (
    // <Navbar className="mx-auto py-2 md:py-4 nav-background-shade">
    <Navbar className="px-[4vw]  md:px-[2vw] lg:px-[3vw] xl:px-[4.5vw] 2xl:px-[5vw] py-2 lg:py-6 nav-background-shade">
      <div className="container mx-auto flex items-center justify-between text-secondary-500 ">
        <div>
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer  md:px-4 py-1 md:p-1.5 md-px-0 font-bold"
        >
          <h5 className="font-bold">Doctor Web Portal</h5>
        </Typography>
        <Typography
          as="a"
          href="tel:01648309985"
          variant="small"
          // className="mr-4 cursor-pointer py-1.5 font-medium flex flex-col"
          className="mr-4 ml-2 cursor-pointer hidden xl:hidden lg:flex flex-col py-1.5 font-medium lg:text-base text-secondary-500"
        >
          <span className="">Call now</span>
          <span>(+880) 1648309985</span>
        </Typography>
        </div>
        {/* <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer  md:px-4 py-1 md:p-1.5 md-px-0 font-bold"
        >
          <h5 className="font-bold">Doctor Web Portal</h5>
        </Typography> */}
        <div className="hidden lg:block">{navList}</div>
        <div className="flex">
        <Typography
          as="a"
          href="tel:01648309985"
          variant="small"
          // className="mr-4 cursor-pointer py-1.5 font-medium flex flex-col"
          className="mr-4 cursor-pointer hidden xl:flex flex-col py-1.5 font-medium lg:text-base text-secondary-500"
        >
          <span className="">Call now</span>
          <span>(+880) 1648309985</span>
        </Typography>
        
        <AppButton btnText="Log In" className="bg-white hidden lg:inline-block font-medium lg:text-base text-primary-500"></AppButton>
        </div>
       
        
        <IconButton
          variant="text"
          className="ml-auto  md:px-4 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav className="" open={openNav}>
        <div className="mt-3">
        {navList}
        <AppButton btnText="Log In" className=" lg:hidden ml-1 inline-block font-medium lg:text-base text-primary-500 bg-white"></AppButton>
        </div>
       
       
      
      </MobileNav>
    </Navbar>
  );
}