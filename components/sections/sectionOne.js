import React, { useEffect, useState, useRef } from "react";
import Image from 'next/image'
import RedKiteSvg from "../../public/redKiteSvg";
import DaoMakerSvg from "../../public/daoMakerSvg";
import InfinityPadSvg from "../../public/infiniryPadSvg";
import GamefiSvg from "../../public/gamefiSvg";
import GameStarterSvg from "../../public/gameStarterSvg";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

const SectionOne = () => {

  return (
    <ParallaxProvider>
      <div className="">
        <div className="relative">
          <div className="w-full relative">
            <Parallax className="bg-origin-border absolute hidden top-0 lg:table w-full z-0">
              <img src="/owl.webp" className='w-full' alt="" />
            </Parallax>
            <Parallax className="absolute -top-1 lg:hidden w-full z-0" y={[-1, 1]}>
              <img src="/mobileOwl.webp" className='w-full' alt="" />
            </Parallax>
            <Parallax
              className="absolute z-10 xxl:left-40 xl:left-24 lg:-left-10 lg:-top-8 md:-left-12 mob:top-10 md:top-6 -left-20 top-1 overflow-hidden"
              y={[30, -20]}
              x={[-20, 20]}
            >
              <div className='p-10 w-7/12 lg:w-11/12'>
                <Image
                  className=""
                  src="/sam1.webp"
                  alt=""
                  width={320}
                  height={400}
                />
              </div>
            </Parallax>
            <Parallax
              className="absolute md:top-52 lg:top-62 xl:top-40 z-0 invisible md:visible w-full md:w-11/12 lg:w-full 5xl:left-1/4"
              y={[-50, 50]}
              x={[30, -60]}
            >
              <div className='lg:w-9/12 xl:w-full'>
                <Image
                  className=""
                  src="/branchLeft.webp"
                  alt=""
                  width={1000}
                  height={600}
                />
              </div>
            </Parallax>

            <Parallax
              className="absolute md:top-52 z-10 flex justify-end xxl:right-44 xxl:top-48 3xl:top-64 3xl:mt-4 xl:top-36 xl:right-20 2xl:top-56 2xl:right-32 lg:right-10 md:-right-12 lg:mt-12 lg:top-32 w-full top-52 -right-32 overflow-hidden 4xl:right-14 4xl:mt-10 mm:top-44 mt-4 5xl:top-80 5xl:-right-8 1xl:top-40 1xl:right-3"
              y={[20, -20]}
              x={[20, -30]}
            >
              <div className='p-10 mt-20 w-9/12 lg:w-full'>
                <Image
                  className=""
                  src="/sam2.webp"
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </Parallax>
            <Parallax
              className="absolute md:top-72 md:-right-52 flex justify-end lg:-right-52 lg:top-80 z-0 invisible md:visible w-full xxl:right-10 xxl:top-64 5xl:right-32"
              y={[25, 125]}
              x={[-25, 60]}
            >
              <div className='w-9/12 xxl:w-full'>
                <Image
                  className=""
                  src="/branchRight.webp"
                  alt=""
                  width={800}
                  height={400}
                />
              </div>
            </Parallax>

            <Parallax className="absolute md:invisible -top-10"
              y={[-30, 30]}
              x={[50, -50]}
            >
              <img src='/mobiltBranchLeft.webp' alt='' />
            </Parallax>
            <Parallax className="absolute md:invisible top-96 -right-10"
              y={[-20, 50]}
              x={[-15, 50]}
            >
              <img className='' src='/mobiltBranchRight.webp' alt='' />
            </Parallax>
          </div>
          <div id="Main" className="h-full mx-auto grid gap-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 max-w-mobile md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xxl:max-w-8xl relative z-0 px-4 pb-6"
          >
            <div className="col-span-4 md:col-span-8 lg:col-start-4 lg:col-span-6 text-center mt-32 lg:mt-20 lg:pb-6">
              <h1 className=" text-5xl ml:text-6xl sm:text-8xl mt-16 sm:mt-12 font-hakio uppercase z-10">
                Liquidity Simplified
              </h1>
              <p className="md:text-xl lg:text-2xl font-medium">
                The first trading engine on an aggregator
              </p>
            </div>
            <div className="hidden lg:table col-start-4 justify-self-center col-span-6 pb-72">
              <h3 className="mt-1 font-medium text-center uppercase text-base mb-1">
                Flagship Integrators | Adoption from Day 1
              </h3>
              <div className="flex justify-center items-center space-x-6">
                <RedKiteSvg />
                <DaoMakerSvg />
                <InfinityPadSvg />
              </div>
              <div className="flex justify-center items-center space-x-6 mt-3">
                <GamefiSvg />
                <GameStarterSvg />
              </div>
            </div>
            <div className="col-span-4 md:col-span-8 mt-96 lg:hidden mb-20">
              <div className="flex justify-center items-center space-x-6">
                <GamefiSvg />
                <GameStarterSvg />
              </div>
              <div className="flex justify-center items-center space-x-6 mt-3">
                <RedKiteSvg />
                <DaoMakerSvg />
                <InfinityPadSvg />
              </div>
              <h3 className="mt-11 font-medium text-center uppercase">
                Flagship Integrators | Adoption from Day 1{" "}
              </h3>
            </div>
            <div id="About" className='col-span-4 pt-8 lg:pt-20'>
              <div className="col-span-4">
                <div className="">
                  <h2 className="text-4xl font-hakio">Integratable</h2>
                </div>
                <p className="font-rosario text-xl pt-2">
                  OniDEX liquidity is accessible via launchpad domains, media
                  platforms, and potentially any web domain
                </p>
              </div>
            </div>
            <div className="col-span-4 pt-8 lg:pt-20">
              <div className="">
                <h2 className="text-4xl font-hakio">Aggregated Order Book</h2>
              </div>
              <p className="font-rosario text-xl pt-2">
                OniDEX makes an entire blockchain`s liquidity accessible as both
                an order book and swap, giving traders a better market view and
                user experience
              </p>
            </div>
            <div className="col-span-4 pt-8 lg:pt-20">
              <div className="">
                <h2 className="text-4xl font-hakio">Trading Engine</h2>
              </div>
              <p className="font-rosario text-xl pt-2">
                OniDEX matches a native trading engine with an aggregated order
                book to create advanced trades, deeper liquidity, and lower
                slippage
              </p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};
export default SectionOne;
