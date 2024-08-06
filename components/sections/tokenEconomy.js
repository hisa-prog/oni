import React from "react";
import Image from 'next/image'
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

const TokenEconomy = () => {
  return (
    <ParallaxProvider>
      <div className="relative w-full">
        <div className="h-full mx-auto grid gap-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 max-w-mobile md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xxl:max-w-8xl relative lg:top-32 xl:top-56 1xl:top-64 z-0 mt-20 md:mt-20 lg:mt-1 px-4">
          <div id="Tokenomics" className="col-span-4 xl:pt-20 md:col-span-8 lg:col-start-3 lg:col-span-8">
            <h2 className="text-center text-6xl xl:text-7xl font-hakio">
              Token Economy and <br className='hidden xxl:block' /> Fee Structure
            </h2>
            <p className="hidden md:block text-center text-md xl:text-xl mt-2 font-normal font-rosario">
              OniDEX does not charge on swaps. The fee structure is hinged on the
              major value adds of the trading engine. These fees are reduced for
              token holders.
            </p>
          </div>
        </div>
        <div className='relative'>
          <Parallax
            className="absolute w-3/12 lg:w-2/12 samurai1"
            y={[-4, -11]}
            x={[-70, 5]}
          >
            <div className=''>
              <Image
                className=""
                src="/samurai1.webp"
                alt=""
                width={150}
                height={200}
              />
            </div>
          </Parallax>
          <Parallax
            className="absolute right-1/4 w-3/12 lg:w-2/12 samurai2"
            y={[-4, -11]}
            x={[70, -5]}
          >
            <div className=''>
              <Image
                className=""
                src="/samurai2.webp"
                alt=""
                width={150}
                height={200}
              />
            </div>
          </Parallax>
          <img style={{ width: "100%" }} className='relative' src='/bridge.webp' alt='' />
          <p className="block md:hidden text-center text-xl my-4 xl:mt-2 font-normal font-rosario px-4">
            OniDEX does not charge on swaps. The fee structure is hinged on the
            major value adds of the trading engine. These fees are reduced for
            token holders.
          </p>
        </div>
        <div className="flex flex-col md:flex-row text-center max-w-mobile md:max-w-3xl xl:max-w-4xl mx-auto px-4">
          <div className='mb-4 xl:md-0'>
            <h3 className="text-4xl font-hakio">Discounts</h3>
            <p className="xl:text-xl text-lg mt-2 font-rosario">
              ONI unlocks a discount on the fees charged on limit, trailing,
              stop loss, and iceberg orders.
            </p>
          </div>
          <div className=''>
            <h3 className="text-4xl font-hakio">Governance and Staking</h3>
            <p className="xl:text-xl text-lg mt-2 font-rosario">
              ONI stakers participate in governance and in return earn staking
              rewards, generated from platform fees.
            </p>
          </div>
        </div>
      </div>
    </ParallaxProvider >
  );
};

export default TokenEconomy;
