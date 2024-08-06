import React from "react";

const Integratable = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <img
          src="/branchMini.webp"
          className={`absolute hidden md:table md:w-3/5 4xl:w-4/12 4xl:-top-56 3xl:w-5/12 3xl:-top-56 2xl:-top-60 lg:-right-0 lg:-top-52 md:-right-0 md:-top-52`}
          alt=""
        />
        <div
          id="What we offer"
          className="h-full mx-auto grid gap-4 z-10 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 max-w-mobile md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xxl:max-w-8xl relative pt-20 mt-52 px-4"
        >
          <img
            src="/mobileBranchMini.webp"
            className={`absolute md:hidden md:w-3/5 -right- -top-52`}
            alt=""
          />
          <div className="col-span-4 md:col-span-5 lg:col-span-7">
            <div className="font-hakio">
              <h2 className="lg:text-7xl md:text-6xl text-4xl font-hakio">
                Integratable: The Omnipresent DEX
              </h2>
            </div>
            <div className="text-xl ">
              <p className="font-rosario mt-6">
                Liquidity can be aggregated, but traffic cannot.
              </p>
              <p className="font-rosario mt-6">
                Decentralized exchanges, aggregators, and virtually every other
                DeFi product are competing for traffic to their domain.
              </p>
              <p className="font-rosario mt-6">
                Rather than join the rat race, OniDEX plugs into existing
                high-traffic crypto domains, particularly major launchpads and
                media. OniDEX UI is built to be composable with any domain,
                making our contracts accessible from platforms that are already
                rich in traffic.
              </p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-3 lg:col-span-5 relative">
            <img className="ml-1" src="/scheme.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Integratable;
