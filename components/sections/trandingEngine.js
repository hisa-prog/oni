import React from "react";

const TrandingEngine = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute hidden mm:table md:w-9/12 b-10 4xl:w-6/12 4xl:-top-96 3xl:w-6/12 3xl:-top-96 xxl:w-8/12 xxl:-top-96 lg:-top-72 lg:-left-0 -top-80 md:-top-48 xl:-top-96 mm:-top-36 mm:w-full bottom-12 z-0">
          <img src="/cloud.webp" className="" alt="" />
        </div>
        <div
          id="Features"
          className="mx-auto grid gap-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 max-w-mobile md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xxl:max-w-8xl relative pt-48 z-10 px-4"
        >
          <div className="absolute w-full -bottom-40 z-0 mm:hidden">
            <img src="/mobileCloud.webp" className="" alt="" />
          </div>
          <div className="md:col-span-6 col-span-4 z-10">
            <div className="">
              <h2 className="text-5xl lg:text-7xl font-hakio">
                Advanced Trading Engine
              </h2>
            </div>
            <p className="mt-8 text-lg lg:text-xl font-rosario">
              OniDEX layers a trading engine atop an aggregated order book. This
              makes it possible to make advanced trades against the entire
              liquidity on a particular blockchain.
            </p>
            <p className="mt-5 text-lg lg:text-xl font-rosario">
              The go-to market options will include limit, trailing, stop loss,
              and ice-berg orders, with room for additions per community
              governance.
            </p>
          </div>
          <div className="col-span-4 md:col-span-8 lg:col-start-7 lg:col-span-6 lg:absolute -left-4 md:left-4 -bottom-96 lg:top-20 md:top-60">
            <img className="w-full z-10" src="/tower.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default TrandingEngine;
