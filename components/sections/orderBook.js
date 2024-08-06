import React from "react";

const OrderBook = () => {
  return (
    <>
      <div
        
        className="h-full mx-auto grid gap-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 max-w-mobile md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xxl:max-w-8xl relative mt-16 px-4"
      >
        <div className="lg:col-span-12 md:col-span-8 col-span-4">
          <h2 className="text-center text-5xl md:text-7xl font-hakio">
            Aggregated Order Book
          </h2>
        </div>
        <div className="md:col-start-2 md:col-span-6 lg:col-start-2 lg:col-span-10 col-span-4 mt-8">
          <img className="rounded-lg" src="/slider.webp" alt="" />
        </div>
        <div className=" col-span-4 md:col-span-8 lg:col-start-3 lg:col-span-8 text-center text-xl font-rosario">
          <p className="hidden lg:flex">
            Decentralized exchanges are now outperforming centralized exchanges.
            However, liquidity is currently left to market movements, often out
            of sync with momentum on centralized exchanges.By creating an order
            book on aggregated AMM/DEX liquidity, OniDEX is an outlet for
            managed market making for an entire blockchain’s DEX liquidity.
          </p>
          <div className="col-span-4 md:col-span-8 lg:col-start-3 lg:hidden lg:col-span-8 text-center text-xl font-rosario">
            <p>
              Decentralized exchanges are now outperforming centralized
              exchanges. However, liquidity is currently left to market
              movements, often out of sync with momentum on centralized
              exchanges.
            </p>
            <p className="mt-6">
              By creating an order book on aggregated AMM/DEX liquidity, OniDEX
              is an outlet for managed market making for an entire blockchain’s
              DEX liquidity.
            </p>
          </div>
        </div>
        <div className="hidden col-span-4 md:col-span-8 lg:col-span-12 mt-8 justify-center">
          <buttom className="py-2 px-4 bg-red-500 text-white uppercase font-bold">
            Open a demo
          </buttom>
        </div>
      </div>
    </>
  );
};
export default OrderBook;
