import React, { useState, useEffect } from 'react'
// import Moon from '../../public/moon'
import Arrow from '../../public/arrow'
import TelegramSvg from "../../public/telegramSvg"
import TwitterSvg from "../../public/twitterSvg"
import HeaderLinks from './heaederLinks'

const Header = () => {
    const [isShow, setIsShow] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    const [active, setActive] = useState(false)
    const menuLinks = [
        { button: "About", link: "Main" },
        { button: "What we offer", link: "Offer" },
        { button: "Features", link: "Features" },
        { button: "Tokenomics", link: "Tokenomics" },
        { button: "Contact us", link: "Contacts" },
    ];

    useEffect(() => {
        function onScroll() {
            var currentPosition = window.pageYOffset
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
            // console.log(window.pageYOffset)
        }
        onScroll()
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            <div className={`${scrollTop > 75 ? "bg-gray-700 bg-opacity-50 bg-blend-luminosity" : "bg-transparent"} z-50 fixed top-0 left-0 right-0 flex justify-between items-center pt-4 px-4 pb-2`}>
                <div className='flex w-screen justify-between items-center'>
                    <a
                        href="#Main"
                        className='flex'>
                        <img className='' src='logo.svg' alt='' />
                    </a>
                    <div className='hidden lg:flex space-x-10 lg:space-x-5 font-bold px-8 uppercase'>
                        <a href="#About" className={`${scrollTop > 75 ? "text-gray-300" : "text-black"} hover:text-red-400 active:text-red-800`}>About</a>
                        <a href="#What we offer" className={`${scrollTop > 75 ? "text-gray-300" : "text-black"} hover:text-red-400 active:text-red-800`}>what we offer</a>
                        <a href="#Features" className={`${scrollTop > 75 ? "text-gray-300" : "text-black"} hover:text-red-400 active:text-red-800`}>Features</a>
                        <a href="#Tokenomics" className={`${scrollTop > 75 ? "text-gray-300" : "text-black"} hover:text-red-400 active:text-red-800`}>Tokenomics</a>
                        <a href="#Contact us" className={`${scrollTop > 75 ? "text-gray-300" : "text-black"} hover:text-red-400 active:text-red-800`}>Contact us</a>
                    </div>
                    <div className='hidden lg:flex invisible'>
                        <button className='py-2 px-4 bg-orangefooter hover:bg-red-400 active:bg-red-800 font-bold uppercase text-white'>join a list</button>
                    </div>
                </div>
                <div className='flex items-center col-start-10 col-span-3 justify-end lg:hidden'>
                    <div
                        onClick={() => { setIsShow(isShow => !isShow) }}
                    >
                        <img className='' src='burgerMenu.svg' alt='' />
                    </div>
                </div>
                <div className={`${isShow ? 'block' : 'hidden'} w-full absolute z-50 top-0 right-0 bg-gray-700 bg-opacity-50 bg-blend-luminosity menu-blur`}>
                    <div className="mobile-menu shadow-2xl flex flex-col bg-white float-right">
                        <div
                            onClick={() => { setIsShow(isShow => !isShow) }}
                            className='flex justify-end p-12'>
                            <div className='relative flex'>
                                <div className='border transform -rotate-45 border-blue-500 w-4'></div>
                                <div className='absolute transform rotate-45 border border-blue-500 w-4'></div>
                            </div>
                        </div>
                        <div className='ml-8 h-full'>
                            <div className='flex flex-col h-full justify-between'>
                                <div className='flex flex-col space-y-4'>

                                    {menuLinks.map((item, index) => (
                                        <HeaderLinks
                                            key={index}
                                            active={active}
                                            setActive={setActive}
                                            setIsShow={setIsShow}
                                            link={item.link}
                                        >
                                            {item.button}
                                        </HeaderLinks>
                                    ))}

                                </div>
                                <div className='flex flex-col pb-10'>
                                    <div className='flex mt-4 space-x-8 invisible'>
                                        <a>
                                            <TelegramSvg />
                                        </a>
                                        <a>
                                            <TwitterSvg />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button className='py-2 px-4 bg-red-600 font-bold uppercase invisible text-white'>join a list</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header