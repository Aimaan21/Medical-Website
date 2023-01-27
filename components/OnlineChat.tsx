import Image from "next/image";
import React from "react";
import AppButton from "./AppButton";
import Radio from "./Radio";
import Icon from "./icon";

export function OnlineChat() {
  return (
    <div
      id="online-chat-section"
      className="w-full pt-16 md:pt-20 lg:flex lg:flex-row-reverse lg:pt-16 "
    >
      {/* visible for medium screen*/}
      <div className="hidden md:flex md:flex-col md:items-center lg:hidden">
      
        <h2 className="text-center font-medium tracking-wide text-secondary-500 md:my-8 md:max-w-[20ch]">
          Start an online chat consultation with a doctor
        </h2>
        <p className="text-md mt-0 text-center font-normal text-primary-700/60 md:max-w-[90%] md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          ipsam reprehenderit dolores. Dignissimos magni quae, explicabo
          blanditiis totam repellendus molestiae, autem nihil laborum dolore
          tempore inventore quod iste voluptatem suscipit.
        </p>
      </div>
      <div className="hidden md:flex lg:hidden pt-16">
        <div className=" relative my-auto md:w-1/2">
          
          {/*chat card  section*/}
          <div className="rounded-2xl  absolute flex flex-col md:space-y-1  xl:space-y-3 2xl:space-y-5 bg-white md:px-1 2xl:px-3 py-1 xl:py-5 md:-top-[18%] md:left-[63.5%]  2xl:ml-0 2xl:left-[65%] 2xl:-top-[10%]">
            <div className={`flex items-center text-left `}>
              <Icon
                wrapperClassName="md:mr-1"
                iconName="/doctor-image.png"
                className="md:h-[3vw] md:w-[3vw] xl:h-[2.2vw] xl:w-[2.2vw] 2xl:h-[2vw] 2xl:w-[2vw] rounded-full bg-pink-300 object-cover"              />
              <div className="px-1 text-left">
                <p className="md:max-w-[125px] xl:max-w-[160px] md:text-[1.25vw] xl:text-[.9vw] 2xl:text-[.8vw] md:tracking-wider 2xl:tracking-wide	 leading-4 text-primary-800/80">
                Hello! I am suffering from fever since 2 days
                </p>
              </div>
            </div>
            <hr className="w-full" />
            <div className={`flex items-center text-left `}>
              
              <div className="px-1 text-left">
                <p className="md:max-w-[125px] xl:max-w-[160px] md:text-[1.25vw] xl:text-[.9vw] 2xl:text-[.8vw] md:tracking-wider 2xl:tracking-wide	 leading-4 text-primary-800/80">
                Okay, no worries let me know how you get fever?
                </p>
              </div>
              <Icon
                wrapperClassName="md:mr-1"
                iconName="/doctor-image.png"
                className="md:h-[3vw] md:w-[3vw] xl:h-[2.2vw] xl:w-[2.2vw] 2xl:h-[2vw] 2xl:w-[2vw] rounded-full bg-pink-300 object-cover"              />
            </div>
            <hr className="w-full" />
            <div className={`flex items-center text-left `}>
              <Icon
                wrapperClassName="md:mr-1"
                iconName="/doctor-image.png"
                className="md:h-[3vw] md:w-[3vw] xl:h-[2.2vw] xl:w-[2.2vw] 2xl:h-[2vw] 2xl:w-[2vw] rounded-full bg-pink-300 object-cover"
              />
              <div className="px-1 text-left">
                <p className="md:max-w-[125px] xl:max-w-[160px] md:text-[1.25vw] xl:text-[.9vw] 2xl:text-[.8vw] lg:tracking-wider 2xl:tracking-wide	 leading-4 text-primary-800/80">
                I was out of my home. And suddenly rain started and I got wet.
                </p>
              </div>
            </div>
          </div>

          {/* card section ends */}
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
          <Radio iconName="/icon-phone.svg" label="Query"></Radio>
          <Radio iconName="/icon-phone.svg" label="Chat"></Radio>
          <Radio iconName="/icon-phone.svg" label="Phone"></Radio>
          <Radio iconName="/icon-phone.svg" label="Video"></Radio>

          <AppButton
            btnText="Start Chat Consultaiton"
            className="mt-18 bg-primary-500  text-btn-200"
          />
        </div>
      </div>

      {/*visible for large screen..... */}
      <div className="hidden flex-row-reverse lg:flex ">
        <div className="lg:w-1/2">
          <h2 className="font-medium tracking-wide text-secondary-500 lg:w-full lg:max-w-[80%] xl:my-12  xl:max-w-[90%] 2xl:max-w-[60%]">
            Start an online chat consultation with a doctor
          </h2>
          <p className="text-md font-norma mt-0 text-primary-700/60 md:max-w-[90%] md:text-xl lg:max-w-[80%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ipsam reprehenderit dolores. Dignissimos magni quae, explicabo
            blanditiis totam repellendus molestiae, autem nihil laborum dolore
            tempore inventore quod iste voluptatem suscipit.
          </p>
          <div className="grid md:mt-8 md:space-y-4 lg:grid-cols-2 lg:pr-10">
            <Radio iconName="/icon-phone.svg" label="Query"></Radio>
            <Radio iconName="/icon-phone.svg" label="Chat"></Radio>
            <Radio iconName="/icon-phone.svg" label="Phone"></Radio>
            <Radio iconName="/icon-phone.svg" label="Video"></Radio>
          </div>
          <AppButton
            btnText="Start Chat Consultaiton"
            // btnTextColor="text-btn-200"
            className="bg-primary-500 text-btn-200  hover:bg-secondary-500 lg:my-12"
          />
        </div>

        <div className="relative my-auto text-center lg:w-1/2">

          {/*chat card  section*/}
          <div className="rounded-2xl  absolute flex flex-col lg:space-y-2  xl:space-y-3 2xl:space-y-5 bg-white lg:px-1 2xl:px-3 py-4 xl:py-5 lg:-top-[18%] lg:left-[63.5%]  2xl:ml-0 2xl:left-[65%] 2xl:-top-[10%]">
            <div className={`flex items-center text-left `}>
              <Icon
                wrapperClassName="lg:mr-1"
                iconName="/doctor-image.png"
                className="lg:h-[2.2vw] lg:w-[2.2vw] xl:h-[2.2vw] xl:w-[2.2vw] 2xl:h-[2vw] 2xl:w-[2vw] rounded-full bg-pink-300 object-cover"              />
              <div className="px-1 text-left">
                <p className="lg:max-w-[125px] xl:max-w-[160px] lg:text-[1vw] xl:text-[.9vw] 2xl:text-[.8vw] lg:tracking-wider 2xl:tracking-wide	 leading-4 text-primary-800/80">
                Hello! I am suffering from fever since 2 days
                </p>
              </div>
            </div>
            <hr className="w-full" />
            <div className={`flex items-center text-left `}>
              
              <div className="px-1 text-left">
                <p className="lg:max-w-[125px] xl:max-w-[160px] lg:text-[1vw] xl:text-[.9vw] 2xl:text-[.8vw] lg:tracking-wider 2xl:tracking-wide	 leading-4 text-primary-800/80">
                Okay, no worries let me know how you get fever?
                </p>
              </div>
              <Icon
                wrapperClassName="lg:mr-1"
                iconName="/doctor-image.png"
                className="lg:h-[2.2vw] lg:w-[2.2vw] xl:h-[2.2vw] xl:w-[2.2vw] 2xl:h-[2vw] 2xl:w-[2vw] rounded-full bg-pink-300 object-cover"              />
            </div>
            <hr className="w-full" />
            <div className={`flex items-center text-left `}>
              <Icon
                wrapperClassName="lg:mr-1"
                iconName="/doctor-image.png"
                className="lg:h-[2.2vw] lg:w-[2.2vw] xl:h-[2.2vw] xl:w-[2.2vw] 2xl:h-[2vw] 2xl:w-[2vw] rounded-full bg-pink-300 object-cover"
              />
              <div className="px-1 text-left">
                <p className="lg:max-w-[125px] xl:max-w-[160px] lg:text-[1vw] xl:text-[.9vw] 2xl:text-[.8vw] lg:tracking-wider 2xl:tracking-wide	 leading-4 text-primary-800/80">
                I was out of my home. And suddenly rain started and I got wet.
                </p>
              </div>
            </div>
          </div>

          {/* card section ends */}

          <div className="doctor-img-background mx-auto rounded-full md:h-[35vw] md:w-[35vw] lg:h-[30vw] lg:w-[30vw]"></div>
          <Image
            width={1000}
            height={100}
            src="/online-doctor.png"
            // className="absolute mx-auto md:left-[24%] md:top-[2.5%] md:h-[35vw] lg:top-[2.5%] lg:left-[27%] lg:w-[22vw] lg:h-[89vh] xl:w-[22vw] xl:h-[69vh] 2xl:h-[87vh]"
            className="absolute mx-auto lg:top-[2.5%] lg:left-[28%] lg:h-auto lg:w-[21.5vw] "
            alt=""
          />
        </div>
      </div>

      {/* visible for mobile */}
      <div className="flex flex-row-reverse justify-center px-6 md:hidden">
        <div className="flex w-full flex-col items-center space-y-6">
          <h4 className=" text-center	 font-medium  tracking-wide text-secondary-500">
            Start an online chat consultation with a doctor
          </h4>
          <p className="text-md font-norma mt-0 text-center text-primary-700/60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ipsam reprehenderit dolores. Dignissimos magni quae, explicabo
            blanditiis totam repellendus molestiae, autem nihil laborum dolore
            tempore inventore quod iste voluptatem suscipit.
          </p>
          <div className="grid grid-cols-2 gap-x-2 gap-y-2">
            <Radio iconName="/icon-phone.svg" label="Query"></Radio>
            <Radio iconName="/icon-phone.svg" label="Query"></Radio>
            <Radio iconName="/icon-phone.svg" label="Query"></Radio>
            <Radio iconName="/icon-phone.svg" label="Query"></Radio>
            {/* <Radio  iconName="/icon-phone.svg" label="Chat"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Phone"></Radio>
            <Radio  iconName="/icon-phone.svg" label="Video"></Radio> */}
          </div>
          <AppButton
            btnText="Start Chat Consultaiton"
            // btnTextColor="text-btn-200"
            className="bg-primary-500 text-btn-200 lg:my-12 focus:bg-secondary-500"
          />
        </div>
      </div>
    </div>
  );
}

export default OnlineChat;
