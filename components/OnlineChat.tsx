import React from "react";
import AppButton from "./AppButton";
import Radio from "./Radio";


export function OnlineChat() {
  return (
    <div id="online-chat-section" className="temp-padding-inline flex flex-row items-center w-full">
        {/* <div className="max-w-[50%]"> */}
        <div className="w-[50%]">

        </div>
        <div className="flex flex-col justify-between w-[50%]">
        <h2 className='max-w-[800px] text-primary-50 mt-32 mb-20'>Start an online chat consultaion with a doctor</h2>
        <p className="max-w-[800px] font-normal text-xl text-slate-600 dark:text-gray-400 mb-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam reprehenderit dolores. Dignissimos magni quae, explicabo blanditiis totam repellendus molestiae, autem nihil laborum dolore tempore inventore quod iste voluptatem suscipit.</p>
        <div className="flex flex-wrap  ">
        <Radio iconName="icon-phone.svg" label="Query"></Radio>
        <Radio iconName="icon-phone.svg" label="Chat"></Radio>
        <Radio iconName="icon-phone.svg" label="Phone"></Radio>
        <Radio iconName="icon-phone.svg" label="Video"></Radio>
        </div>
        <AppButton btnText="Start Chat Consultaiton" btnTextColor="text-primary-300"/>
        
        </div>
    </div>
  )
}

export default OnlineChat;
