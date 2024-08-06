import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import SectionOne from "../components/sections/sectionOne"
import Integratable from "../components/sections/integratable"
import OrderBook from "../components/sections/orderBook"
import TrandingEngine from "../components/sections/trandingEngine"
import TokenEconomy from "../components/sections/tokenEconomy"
import smoothscroll from "smoothscroll-polyfill"
import Head from 'next/head'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const loadAllImages = async () => {
    const imageList = ['/sam1.gif', '/sam2.gif', '/samurai1.gif', '/samurai2.gif', '/bridge.webp', '/branchLeft.webp', '/branchRight.webp', '/boatman.webp', '/cloud.webp', '/slider.webp', '/footer.webp', '/mobileOwl.webp', '/owl.webp',]
    const imagePromises = await imageList.map((src) => {
      return new Promise((res, rej) => {
        const image = new Image()
        image.src = src
        image.onload = () => { res(true) }
        // image.onerror = () => rej()
      })
    })
    await Promise.all(imagePromises)
    setLoaded(true)
  }
  useEffect(() => {
    smoothscroll.polyfill();
    loadAllImages()
  }, [])


  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Onidex</title>
        <meta property="title" content="Onidex" key="title" />
        <meta name="description" content="The first trading engine on an aggregator" />
        <meta name="keywords" content="Onidex" />
        <meta property="og:image" content="/metaImage.jpg"></meta>
        <meta property='og:image:width' content='943' />
        <meta property='og:image:height' content='520' />
      </Head>
      <div className='overflow-hidden'>
        {loaded ? <Layout>
          <SectionOne />
          <Integratable />
          <OrderBook />
          <TrandingEngine />
          <TokenEconomy />
        </Layout> :
          <div className='w-full h-screen bg-gray-300'></div>}
      </div>
    </>
  )
}
