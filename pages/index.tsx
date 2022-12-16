import { Alert } from 'flowbite-react'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import AppButton from '../components/AppButton'
import HeroSection from '../components/HeroSection'
import OnlineChat from '../components/OnlineChat'
import Spacialitst from '../components/Spacialitst'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <HeroSection />
   <About/>
   <OnlineChat/>
   <Spacialitst/>
   </>
  )
}
