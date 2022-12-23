import React from 'react'
import Card from './Card'



export function About() {
  return (
    <div id="about-section" className="px-4 flex flex-col items-center w-full temp-padding-inline">
        <h1 className='max-w-[665px] text-3xl md:text-5xl font-medium text-primary-100 text-center mt-12 mb-10 lg:mt-24 lg:mb-20'>Why you should trust us? Get to know about us.</h1>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8 xl:grid-cols-4 xl:gap-10">
           <Card 
           title='All Specialist' 
           body='You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine'
           titleTxtColor='text-primary-100'
           titleTxtSize='text-2xl lg:text-3xl'
           wrapperMaxWidth='max-w-[29ch]'
          
           wrapperBgColor='bg-cardWrap-50'
           imgSrc="favicon.ico"
           titleClass='lg:mb-4 '
           /> 
           <Card 
           title='Private & Secure' 
           body='You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine'
           titleTxtColor='text-primary-100'
           titleTxtSize='lg:text-3xl'
           wrapperMaxWidth='max-w-[29ch]'
           wrapperBgColor='bg-cardWrap-50'
           imgSrc="favicon.ico"
           titleClass=' lg:mb-4'
           /> 
           <Card 
           title='Million Customers ' 
           body='You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine'
           titleTxtColor='text-primary-100'
           titleTxtSize='lg:text-3xl'
           wrapperMaxWidth='max-w-[29ch]'
           wrapperBgColor='bg-cardWrap-50'
           imgSrc="favicon.ico"
           titleClass='lg:mb-4'
           /> 
           <Card 
           title='Chatbot Support' 
           body='You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine'
           titleTxtColor='text-primary-100'
           titleTxtSize='lg:text-3xl'
           wrapperMaxWidth='max-w-[29ch]'
           wrapperBgColor='bg-cardWrap-50'
           imgSrc="favicon.ico"
           titleClass='lg:mb-4'
           /> 
           
        </div>
    </div>
  )
}

export default About