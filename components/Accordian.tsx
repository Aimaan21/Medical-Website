import React from "react";
import { Disclosure } from "@headlessui/react";
import Icon from "./icon";

export function Accordian({
  title = "What is your refund policy?",
  body = "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
}) {
  return (
    <div className="w-5/6 bg-white rounded">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-16 py-12 text-sm font-medium text-left text-primary-900 rounded hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
              <h4
                className={`mt-0 text-2xl font-semibold leading-7 transition  text-primary-50 dark:text-white mr-1`}
              >
                {title}
              </h4>
              <Icon
                iconColor="bg-primary-100"
                iconSize="35px"
                iconName="chevron-down.png"
                className={`${
                  open ? "transform rotate-180" : ""
                } text-primary-500 p-2 bg-primary-100 rounded-full`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-8 text-xl text-left  text-slate-600 font-normal">
              {body}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <hr />
    </div>
  );
}

export default Accordian;
