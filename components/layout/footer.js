import React from "react";
import TelegramSvg from "../../public/telegramSvg";
import TwitterSvg from "../../public/twitterSvg";

const Footer = () => {
    return (
        <>
            <div id="Contact us" className='relative flex flex-col h-full justify-between items-center mt-32'>
                <div className='flex items-center flex-col z-10'>
                    <a
                        className='flex'>
                        <img className='' src='logo.png' alt='' />
                    </a>
                    <p className='mt-7 text-base font-poppins'>Sign up for Newsletter</p>
                    {/* <form action="mailto:info@onidex.com" method="post">
                        <div className='flex items-center mt-3 pr-5 lg:ml-0 ml-8'>
                            <input style={{ paddingTop: "9px", paddingBottom: "9px" }} className='outline-none w-11/12 border-black border-t border-l border-b rounded-l bg-transparent pl-3 pr-4 lg:pr-20  text-gray-400' type='email' placeholder='example@mail.com' />
                            <button type="submit" value="Send" className='bg-orangefooter hover:bg-red-400 active:bg-red-800 py-3 text-main-blue uppercase rounded-r-lg font-semibold px-4'>
                                <img className='' src='arrow.svg' alt='' />
                            </button>
                        </div>
                    </form> */}
                    <a href="mailto:info@onidex.com" className="cursor-pointer font-poppins mt-3 px-3 py-2 bg-red-700 tracking-widest text-white font-bold uppercase">
                        Contact Us
                        </a>
                    <div className='flex mt-8 space-x-4 invisible'>
                        <a className=''>
                            <TelegramSvg />
                        </a>
                        <a className=''>
                            <TwitterSvg />
                        </a>
                    </div>
                </div>
                <img src="/boatman.webp" className='sailing hidden inset-x-0 bottom-6 md:table box absolute z-10' alt="" />
                <img src="/footer.webp" className='abcolute hidden md:table bottom-0 -mt-80 w-full z-0' alt="" />
                <img src="/mobileFooter.webp" className='md:hidden w-full z-0' alt="" />
            </div>
        </>
    )
}
export default Footer