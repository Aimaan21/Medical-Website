import React from 'react'
import Card from './Card'



export function About() {
  return (
    <div id="about-section" className="temp-padding-inline flex flex-col items-center w-full">
        <h2 className='max-w-[665px] text-primary-50 text-center mt-24 mb-20'>Why you should trust us Get know about us</h2>
        <div className="flex flex-row justify-between">
           <Card 
           title='All Specialist' 
           body='You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine'
           titleTxtColor='text-primary-50'
           titleTxtSize='text-3xl'
           wrapperBgColor='bg-cardWrap-50'
           /> 
           <Card 
           title='Private & Secure' 
           body='You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine'
           titleTxtColor='text-primary-50'
           titleTxtSize='text-3xl'

           wrapperBgColor='bg-cardWrap-50'
           /> 
           <Card 
           title='Million Customers ' 
           body='You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine'
           titleTxtColor='text-primary-50'
           titleTxtSize='text-3xl'
           wrapperBgColor='bg-cardWrap-50'
           /> 
           <Card 
           title='Chatbot Support' 
           body='You can reach out to 3500+ doctors from 80+ specialist,who are experienced in telemedicine'
           titleTxtColor='text-primary-50'
           titleTxtSize='text-3xl'
           wrapperBgColor='bg-cardWrap-50'
           /> 
           
        </div>
    </div>
  )
}

export default About