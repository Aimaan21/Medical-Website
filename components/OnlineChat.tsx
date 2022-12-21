import React from "react";
import AppButton from "./AppButton";
import Radio from "./Radio";


export function OnlineChat() {
  return (
    <div id="online-chat-section" className="temp-padding-inline flex flex-row items-center w-full pt-28">
        {/* <div className="max-w-[50%]"> */}
        <div className="px-24 text-center my-auto relative">
          <div className="bg-secondary-300 rounded-full w-[600px] h-[600px] "></div>
          <img src="online-doctor.png" className="absolute top-[-7.5%] left-[21%] h-[650px]" alt="" />
        
       
        </div>
        <div className="flex flex-col justify-between w-[50%]">
        <h1 className='max-w-[29ch] font-medium text-primary-100'>Start an online chat consultation with a doctor</h1>
        <p className="max-w-[800px] font-normal text-lg text-slate-600 dark:text-gray-400 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam reprehenderit dolores. Dignissimos magni quae, explicabo blanditiis totam repellendus molestiae, autem nihil laborum dolore tempore inventore quod iste voluptatem suscipit.</p>
        <div className="flex flex-wrap  ">
        <Radio iconName="icon-phone.svg" label="Query"></Radio>
        <Radio iconName="icon-phone.svg" label="Chat"></Radio>
        <Radio iconName="icon-phone.svg" label="Phone"></Radio>
        <Radio iconName="icon-phone.svg" label="Video"></Radio>
        </div>
        <AppButton btnText="Start Chat Consultaiton" btnTextColor="text-primary-300" className="my-12"/>
        
        </div>
    </div>
  )
}

export default OnlineChat;
