import Image from "next/image";
import React from "react";
import AppButton from "./AppButton";
import Radio from "./Radio";

export function OnlineChat() {
  return (

    <div
      id="online-chat-section"
      className="w-full pt-16 md:pt-20 lg:flex lg:flex-row-reverse lg:pt-28 2xl:pt-32"
    >
      {/* visible for medium screen*/}
      <div className="hidden md:flex md:flex-col md:items-center lg:hidden">
        {/* <h1 className="text-center text-3xl font-medium text-secondary-500 md:my-8 md:max-w-[20ch] md:text-5xl xl:my-12">
          Start an online chat consultation with a doctor
        </h1> */}
        <h2 className="text-center tracking-wide font-medium text-secondary-500 md:my-8 md:max-w-[20ch] xl:my-12">
          Start an online chat consultation with a doctor
        </h2>
        <p className="text-md mt-0 text-center font-normal text-primary-700/60 md:max-w-[90%] md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ipsam reprehenderit dolores. Dignissimos magni quae, explicabo
          blanditiis totam repellendus molestiae, autem nihil laborum dolore
          tempore inventore quod iste voluptatem suscipit.
        </p>
      </div>
      <div className="hidden md:flex lg:hidden">
        <div className=" relative my-auto md:w-1/2">
          <div className="doctor-img-background mx-auto rounded-full md:h-[35vw] md:w-[35vw] lg:h-[30vw] lg:w-[30vw]"></div>
          <Image
            width={300}
            height={100}
            src="/online-doctor.png"
            className="absolute mx-auto md:left-[24%] md:top-[2.5%] md:h-auto  md:w-[25.2vw]"
            alt=""
          />
        </div>
        <div className="relative my-auto mt-8 space-y-6 pl-4 md:w-1/2">
          <Radio  iconName="/icon-phone.svg" label="Query"></Radio>
          <Radio  iconName="/icon-phone.svg" label="Chat"></Radio>
          <Radio  iconName="/icon-phone.svg" label="Phone"></Radio>
          <Radio  iconName="/icon-phone.svg" label="Video"></Radio>

          <AppButton
            btnText="Start Chat Consultaiton"
            // btnTextColor="text-btn-200"
            className="mt-18 text-btn-200  bg-primary-500"
          />
        </div>
      </div>


      {/*visible for large screen..... */}
      <div className="hidden flex-row-reverse lg:flex ">
        <div className="lg:w-1/2">
          <h2 className="font-medium tracking-wide text-secondary-500 lg:max-w-[80%] xl:max-w-[90%] 2xl:max-w-[60%]  lg:w-full xl:my-12">
            Start an online chat consultation with a doctor
          </h2>
          <p className="text-md font-norma mt-0 text-primary-700/60 md:max-w-[90%] md:text-xl lg:max-w-[80%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ipsam reprehenderit dolores. Dignissimos magni quae, explicabo
            blanditiis totam repellendus molestiae, autem nihil laborum dolore
            tempore inventore quod iste voluptatem suscipit.
          </p>
          <div className="grid md:mt-8 md:space-y-4 lg:grid-cols-2 lg:pr-10">
            <Radio  iconName="/icon-phone.svg" label="Query"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Chat"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Phone"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Video"></Radio>
          </div>
          <AppButton
            btnText="Start Chat Consultaiton"
            // btnTextColor="text-btn-200"
            className="lg:my-12 text-btn-200  bg-primary-500 hover:bg-secondary-500"
          />
        </div>

        <div className="relative my-auto text-center lg:w-1/2">
          <div className="doctor-img-background mx-auto rounded-full md:h-[35vw] md:w-[35vw] lg:h-[30vw] lg:w-[30vw]"></div>
          <Image
          width={1000}
          height={100}
            src="/online-doctor.png"
            // className="absolute mx-auto md:left-[24%] md:top-[2.5%] md:h-[35vw] lg:top-[2.5%] lg:left-[27%] lg:w-[22vw] lg:h-[89vh] xl:w-[22vw] xl:h-[69vh] 2xl:h-[87vh]"
            className="absolute mx-auto lg:w-[21.5vw] lg:h-auto lg:top-[2.5%] lg:left-[28%] "
            alt=""
          />
        </div>
      </div>


      {/* visible for mobile */}
      <div className="md:hidden flex-row-reverse flex justify-center px-6">
        <div className="w-full flex flex-col items-center space-y-6">
          <h4 className=" tracking-wide	 font-medium  text-secondary-500 text-center">
            Start an online chat consultation with a doctor
          </h4>
          <p className="text-md font-norma mt-0 text-primary-700/60 text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ipsam reprehenderit dolores. Dignissimos magni quae, explicabo
            blanditiis totam repellendus molestiae, autem nihil laborum dolore
            tempore inventore quod iste voluptatem suscipit.
          </p>
          <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            <Radio  iconName="/icon-phone.svg" label="Query"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Query"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Query"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Query"></Radio>
            {/* <Radio  iconName="/icon-phone.svg" label="Chat"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Phone"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Video"></Radio> */}
          </div>
          <AppButton
            btnText="Start Chat Consultaiton"
            // btnTextColor="text-btn-200"
            className="lg:my-12 text-btn-200 bg-primary-500"
          />
        </div>


      </div>


      
    </div>
  );
}

export default OnlineChat;
