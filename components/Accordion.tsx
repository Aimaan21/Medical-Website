import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import type { AccordionProps } from "@material-tailwind/react";
// import type { AccordionHeaderProps } from "@material-tailwind/react";
// import type { AccordionBodyProps } from "@material-tailwind/react";
 
export default function Example() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value:any) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion className="p-2 md:p-0 md:pr-[3vw] lg:pr-[10vw]"  open={open === 1}>
        <AccordionHeader className="flex w-full justify-between rounded  text-left  text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75 p-6  font-medium" onClick={() => handleOpen(1)}>
        What does telemedicine mean?
          {/* What is Material Tailwind? */}
        </AccordionHeader>
        {/* <AccordionBody AccordionBodyProps={"font-normal text-base p-26 xl:p-8 xl:text-xl"}> */}
        <AccordionBody className="font-normal text-base xl:text-lg p-6">
        
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="p-2 md:p-0 md:pr-[3vw] lg:pr-[10vw]"  open={open === 2}>
        <AccordionHeader className="flex w-full justify-between rounded  text-left  text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75 p-6  font-medium" onClick={() => handleOpen(2)}>
          What does telemedicine mean?
          {/* What is Material Tailwind? */}
        </AccordionHeader>
        {/* <AccordionBody AccordionBodyProps={"font-normal text-base p-26 xl:p-8 xl:text-xl"}> */}
        <AccordionBody className="font-normal text-base xl:text-lg p-6">
        
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="p-2 md:p-0 md:pr-[3vw] lg:pr-[10vw]"  open={open === 3}>
        <AccordionHeader className="flex w-full justify-between rounded  text-left  text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75 p-6  font-medium" onClick={() => handleOpen(3)}>
          What does telemedicine mean?
          {/* What is Material Tailwind? */}
        </AccordionHeader>
        {/* <AccordionBody AccordionBodyProps={"font-normal text-base p-26 xl:p-8 xl:text-xl"}> */}
        <AccordionBody className="font-normal text-base xl:text-lg p-6">
        
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion className="p-2 md:p-0 md:pr-[3vw] lg:pr-[10vw]"  open={open === 4}>
        <AccordionHeader className="flex w-full justify-between rounded  text-left   text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75 p-6  font-medium" onClick={() => handleOpen(4)}>
          What does telemedicine mean?
          {/* What is Material Tailwind? */}
        </AccordionHeader>
        {/* <AccordionBody AccordionBodyProps={"font-normal text-base p-26 xl:p-8 xl:text-xl"}> */}
        <AccordionBody className="font-normal text-base xl:text-lg p-6">
        
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
     
    </Fragment>
  );
}