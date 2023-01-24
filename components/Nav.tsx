import { useState, useEffect } from "react";
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
    <ul className=" mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center lg:gap-6 md:gap-4">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 font-medium text-secondary-500"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 font-medium text-secondary-500"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 font-medium text-secondary-500"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-1 lg:p-1 font-medium text-secondary-500"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
 
  return (
    // <Navbar className="mx-auto py-2 md:py-4 nav-background-shade">
    <Navbar className="px-[4vw]  md:px-[2vw] lg:px-[3vw] xl:px-[4.5vw] 2xl:px-[5vw] py-2 md:py-4 nav-background-shade">
      <div className="container mx-auto flex items-center justify-between text-secondary-500">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer  md:px-4 py-1 md:p-1.5 md-px-0 font-medium"
        >
          <span>Material Tailwind</span>
        </Typography>
        <div className="hidden md:block">{navList}</div>
        {/* <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-medium flex flex-col"
        >
          <span>Call now</span>
          <a>01648309985</a>
        </Typography>
         */}
        <Button variant="gradient" size="sm" className="hidden md:inline-block text-primary-500">
          <span>Log In</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto  md:px-4 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
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
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span className=" text-primary-500 font-semibold">Log In</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}